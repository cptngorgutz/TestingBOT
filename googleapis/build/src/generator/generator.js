"use strict";
// Copyright 2014-2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const google_auth_library_1 = require("google-auth-library");
const minimist = require("minimist");
const mkdirp = require("mkdirp");
const nunjucks = require("nunjucks");
const Q = require("p-queue");
const path = require("path");
const url = require("url");
const util = require("util");
const argv = minimist(process.argv.slice(2));
const cliArgs = argv._;
const writeFile = util.promisify(fs.writeFile);
const readDir = util.promisify(fs.readdir);
const FRAGMENT_URL = 'https://storage.googleapis.com/apisnippets-staging/public/';
const srcPath = path.join(__dirname, '../../../src');
const TEMPLATES_DIR = path.join(srcPath, 'generator/templates');
const API_TEMPLATE = path.join(TEMPLATES_DIR, 'api-endpoint.njk');
const INDEX_TEMPLATE = path.join(TEMPLATES_DIR, 'index.njk');
const RESERVED_PARAMS = ['resource', 'media', 'auth'];
function getObjectType(item) {
    if (item.additionalProperties) {
        const valueType = getType(item.additionalProperties);
        return `{ [key: string]: ${valueType}; }`;
    }
    else if (item.properties) {
        const fields = item.properties;
        const objectType = Object.keys(fields)
            .map(field => `${cleanPropertyName(field)}?: ${getType(fields[field])};`)
            .join(' ');
        return `{ ${objectType} }`;
    }
    else {
        return 'any';
    }
}
function isSimpleType(type) {
    if (type.indexOf('{') > -1) {
        return false;
    }
    return true;
}
function cleanPropertyName(prop) {
    const match = prop.match(/[-@.]/g);
    return match ? `'${prop}'` : prop;
}
function getType(item) {
    if (item.$ref) {
        return `Schema$${item.$ref}`;
    }
    switch (item.type) {
        case 'integer':
            return 'number';
        case 'object':
            return getObjectType(item);
        case 'array':
            const innerType = getType(item.items);
            if (isSimpleType(innerType)) {
                return `${innerType}[]`;
            }
            else {
                return `Array<${innerType}>`;
            }
        default:
            return item.type;
    }
}
class Generator {
    /**
     * Generator for generating API endpoints
     * @param options Options for generation
     */
    constructor(options = {}) {
        this.transporter = new google_auth_library_1.DefaultTransporter();
        this.requestQueue = new Q({ concurrency: 50 });
        this.state = new Map();
        this.options = options;
        this.env = new nunjucks.Environment(new nunjucks.FileSystemLoader(TEMPLATES_DIR), { trimBlocks: true });
        this.env.addFilter('buildurl', buildurl);
        this.env.addFilter('oneLine', this.oneLine);
        this.env.addFilter('getType', getType);
        this.env.addFilter('cleanPropertyName', cleanPropertyName);
        this.env.addFilter('cleanComments', this.cleanComments);
        this.env.addFilter('getPathParams', this.getPathParams);
        this.env.addFilter('getSafeParamName', this.getSafeParamName);
        this.env.addFilter('hasResourceParam', this.hasResourceParam);
        this.env.addFilter('cleanPaths', (str) => {
            return str ? str.replace(/\/\*\//gi, '/x/')
                .replace(/\/\*`/gi, '/x')
                .replace(/\*\//gi, 'x/')
                .replace(/\\n/gi, 'x/') :
                '';
        });
    }
    /**
     * A multi-line string is turned into one line.
     * @param str String to process
     * @return Single line string processed
     */
    oneLine(str) {
        return str ? str.replace(/\n/g, ' ') : '';
    }
    /**
     * Clean a string of comment tags.
     * @param str String to process
     * @return Single line string processed
     */
    cleanComments(str) {
        // Convert /* into /x and */ into x/
        return str ? str.replace(/\*\//g, 'x/').replace(/\/\*/g, '/x') : '';
    }
    getPathParams(params) {
        const pathParams = new Array();
        if (typeof params !== 'object') {
            params = {};
        }
        Object.keys(params).forEach(key => {
            if (params[key].location === 'path') {
                pathParams.push(key);
            }
        });
        return pathParams;
    }
    getSafeParamName(param) {
        if (RESERVED_PARAMS.indexOf(param) !== -1) {
            return param + '_';
        }
        return param;
    }
    hasResourceParam(method) {
        return method.parameters && method.parameters['resource'];
    }
    /**
     * Add a requests to the rate limited queue.
     * @param opts Options to pass to the default transporter
     */
    request(opts) {
        return this.requestQueue.add(() => {
            return this.transporter.request(opts);
        });
    }
    /**
     * Log output of generator. Works just like console.log.
     */
    log(...args) {
        if (this.options && this.options.debug) {
            console.log(...args);
        }
    }
    /**
     * Write to the state log, which is used for debugging.
     * @param id DiscoveryRestUrl of the endpoint to log
     * @param message
     */
    logResult(id, message) {
        if (!this.state.has(id)) {
            this.state.set(id, new Array());
        }
        this.state.get(id).push(message);
    }
    /**
     * Generate all APIs and write to files.
     */
    generateAllAPIs(discoveryUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = this.options.includePrivate ? {} : { 'X-User-Ip': '0.0.0.0' };
            const res = yield this.request({ url: discoveryUrl, headers });
            const apis = res.data.items;
            const queue = new Q({ concurrency: 10 });
            console.log(`Generating ${apis.length} APIs...`);
            queue.addAll(apis.map(api => {
                return () => __awaiter(this, void 0, void 0, function* () {
                    this.log('Generating API for %s...', api.id);
                    this.logResult(api.discoveryRestUrl, 'Attempting first generateAPI call...');
                    try {
                        const results = yield this.generateAPI(api.discoveryRestUrl);
                        this.logResult(api.discoveryRestUrl, `GenerateAPI call success!`);
                    }
                    catch (e) {
                        this.logResult(api.discoveryRestUrl, `GenerateAPI call failed with error: ${e}, moving on.`);
                        console.error(`Failed to generate API: ${api.id}`);
                        console.log(api.id + '\n-----------\n' +
                            util.inspect(this.state.get(api.discoveryRestUrl), { maxArrayLength: null }) +
                            '\n');
                    }
                });
            }));
            try {
                yield queue.onIdle();
                yield this.generateIndex(apis);
            }
            catch (e) {
                console.log(util.inspect(this.state, { maxArrayLength: null }));
            }
        });
    }
    generateIndex(metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            const apis = {};
            const apisPath = path.join(srcPath, 'apis');
            const indexPath = path.join(apisPath, 'index.ts');
            const rootIndexPath = path.join(apisPath, '../', 'index.ts');
            // Dynamically discover available APIs
            const files = yield readDir(apisPath);
            for (const file of files) {
                const filePath = path.join(apisPath, file);
                if (!(yield util.promisify(fs.stat)(filePath)).isDirectory()) {
                    continue;
                }
                apis[file] = {};
                const files = yield readDir(path.join(apisPath, file));
                for (const version of files) {
                    const parts = path.parse(version);
                    if (!version.endsWith('.d.ts') && parts.ext === '.ts') {
                        apis[file][version] = parts.name;
                        const desc = metadata.filter(x => x.name === file)[0].description;
                        // generate the index.ts
                        const apiIdxPath = path.join(apisPath, file, 'index.ts');
                        const result = this.env.render('api-index.njk', { name: file, api: apis[file] });
                        yield writeFile(apiIdxPath, result);
                        // generate the package.json
                        const pkgPath = path.join(apisPath, file, 'package.json');
                        const pkgResult = this.env.render('package.json.njk', { name: file, desc });
                        yield writeFile(pkgPath, pkgResult);
                        // generate the README.md
                        const rdPath = path.join(apisPath, file, 'README.md');
                        const rdResult = this.env.render('README.md.njk', { name: file, desc });
                        yield writeFile(rdPath, rdResult);
                        // generate the tsconfig.json
                        const tsPath = path.join(apisPath, file, 'tsconfig.json');
                        const tsResult = this.env.render('tsconfig.json.njk');
                        yield writeFile(tsPath, tsResult);
                    }
                }
            }
            const result = this.env.render('index.njk', { apis });
            yield writeFile(indexPath, result, { encoding: 'utf8' });
            const res2 = this.env.render('root-index.njk', { apis });
            yield writeFile(rootIndexPath, res2, { encoding: 'utf8' });
        });
    }
    /**
     * Given a discovery doc, parse it and recursively iterate over the various
     * embedded links.
     */
    getFragmentsForSchema(apiDiscoveryUrl, schema, apiPath, tasks) {
        if (schema.methods) {
            for (const methodName in schema.methods) {
                if (schema.methods.hasOwnProperty(methodName)) {
                    const methodSchema = schema.methods[methodName];
                    methodSchema.sampleUrl = apiPath + '.' + methodName + '.frag.json';
                    tasks.push(() => __awaiter(this, void 0, void 0, function* () {
                        this.logResult(apiDiscoveryUrl, `Making fragment request...`);
                        this.logResult(apiDiscoveryUrl, methodSchema.sampleUrl);
                        try {
                            const res = yield this.request({ url: methodSchema.sampleUrl });
                            this.logResult(apiDiscoveryUrl, `Fragment request complete.`);
                            if (res.data && res.data.codeFragment &&
                                res.data.codeFragment['Node.js']) {
                                let fragment = res.data.codeFragment['Node.js'].fragment;
                                fragment = fragment.replace(/\/\*/gi, '/<');
                                fragment = fragment.replace(/\*\//gi, '>/');
                                fragment = fragment.replace(/`\*/gi, '`<');
                                fragment = fragment.replace(/\*`/gi, '>`');
                                const lines = fragment.split('\n');
                                lines.forEach((line, i) => {
                                    lines[i] = '*' + (line ? ' ' + lines[i] : '');
                                });
                                fragment = lines.join('\n');
                                methodSchema.fragment = fragment;
                            }
                        }
                        catch (err) {
                            this.logResult(apiDiscoveryUrl, `Fragment request err: ${err}`);
                            if (!err.message || err.message.indexOf('AccessDenied') === -1) {
                                throw err;
                            }
                            this.logResult(apiDiscoveryUrl, 'Ignoring error.');
                        }
                    }));
                }
            }
        }
        if (schema.resources) {
            for (const resourceName in schema.resources) {
                if (schema.resources.hasOwnProperty(resourceName)) {
                    this.getFragmentsForSchema(apiDiscoveryUrl, schema.resources[resourceName], apiPath + '.' + resourceName, tasks);
                }
            }
        }
    }
    /**
     * Generate API file given discovery URL
     * @param apiDiscoveryUri URL or filename of discovery doc for API
     */
    generateAPI(apiDiscoveryUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const parts = url.parse(apiDiscoveryUrl);
            if (apiDiscoveryUrl && !parts.protocol) {
                this.log('Reading from file ' + apiDiscoveryUrl);
                const file = yield util.promisify(fs.readFile)(apiDiscoveryUrl, { encoding: 'utf-8' });
                yield this.generate(apiDiscoveryUrl, JSON.parse(file));
            }
            else {
                this.logResult(apiDiscoveryUrl, `Starting discovery doc request...`);
                this.logResult(apiDiscoveryUrl, apiDiscoveryUrl);
                const res = yield this.request({ url: apiDiscoveryUrl });
                yield this.generate(apiDiscoveryUrl, res.data);
            }
        });
    }
    generate(apiDiscoveryUrl, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logResult(apiDiscoveryUrl, `Discovery doc request complete.`);
            const tasks = new Array();
            this.getFragmentsForSchema(apiDiscoveryUrl, schema, `${FRAGMENT_URL}${schema.name}/${schema.version}/0/${schema.name}`, tasks);
            // e.g. apis/drive/v2.js
            const exportFilename = path.join(srcPath, 'apis', schema.name, schema.version + '.ts');
            this.logResult(apiDiscoveryUrl, `Generating templates...`);
            this.logResult(apiDiscoveryUrl, `Step 1...`);
            yield Promise.all(tasks.map(t => t()));
            this.logResult(apiDiscoveryUrl, `Step 2...`);
            const contents = this.env.render(API_TEMPLATE, { api: schema });
            yield util.promisify(mkdirp)(path.dirname(exportFilename));
            this.logResult(apiDiscoveryUrl, `Step 3...`);
            yield writeFile(exportFilename, contents, { encoding: 'utf8' });
            this.logResult(apiDiscoveryUrl, `Template generation complete.`);
            return exportFilename;
        });
    }
}
exports.Generator = Generator;
/**
 * Build a string used to create a URL from the discovery doc provided URL.
 * replace double slashes with single slash (except in https://)
 * @private
 * @param  input URL to build from
 * @return Resulting built URL
 */
function buildurl(input) {
    return input ? `'${input}'`.replace(/([^:]\/)\/+/g, '$1') : '';
}
//# sourceMappingURL=generator.js.map