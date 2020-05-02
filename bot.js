const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

//war counter / add counter stats
client.on("message", async message => {
if (!message.content.startsWith(config.prefix) || message.author.bot) return;
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const { google } = require("googleapis");
const auth = require("./credentials-load");
const sheets = google.sheets({ version: "v4", auth });
//WAR COMMANDS
if (message.channel.id === '560885890369585164' || message.channel.id === '602762910728716288' || message.channel.id === '643140863794348072' || message.channel.id === '606119830516400162') { //WAR CHANNELS & BOT-TESTING
let l = args[0];
let r = args[0];
let f = args[0];
let ffa = args[0]; 
if(command === 'fd1') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Full Clear")  
}
}
if(command === 'fd2') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Full Clear")  
}
}
if(command === 'fd3') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Full Clear")  
}
}
if(command === 'han') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Full Clear")  
}
}
if(command === 'eng') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Full Clear")  
}
}
if(command === 'bar') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Full Clear")  
}
}
if(command === 'rea') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Full Clear")  
}
}
if(command === 'arm') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Full Clear")  
}
}
if(command === 'bri') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Full Clear")  
}
}
if(command === 'car') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Full Clear")  
}
}
if(command === 'sec') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Full Clear")  
}
}
if(command === 'med') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Full Clear")  
}
}
if(command === 'ffa') {
message.channel.bulkDelete(1)
message.channel.send("@everyone Free For All")  
}
}//IF USER IS IN WAR CHANNELS

if(command === 'counter' || command === 'c') { //   bot-spamTB                                 bot-spamTESTserver                              TB1-WAR-CHAT                                   TB2-WAR-CHAT                                    TB3-WAR-CHAT                                 General-TESTSERVER                       EMOJITESTSERVER-testing room
if (message.channel.id === '673261006918516741' || message.channel.id === '666305824813219870' || message.channel.id === '560885677475102740' || message.channel.id === '562757850477101063' || message.channel.id === '643140704624967694' || message.channel.id === '661221254958940220' || message.channel.id === '699707863148265512') {
if(args[0] == "team" || args[0] == "list" || args[0] == "team" && args[1] == "list" || args[0] == "teamlist"){
	message.channel.send("**Available Teams:** \naim | asgardians | bkt | brawlers | captainmarvel | defenders | gotg | hydra | kreeronan | marauders | shield | s6 | supernatural | symbiote | ultron | wakanda | xmen")
} else if(args[0] == "aim" && args[1] === "stats"){
//stats
	sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!D1:F",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "aim"){
const aimcounterimage = client.channels.get('666332891730673668')
aimcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counteraim = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counteraim.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counteraim.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionaimstats() {
	sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!D1:F",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionaimstats, 3000);
} else if(args[0] == "aim+"){
const aimcounterimage2 = client.channels.get('666332891730673668')
const channelToCheckText = client.channels.get('665671446026125312')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await aimcounterimage2.fetchMessages({ limit: 1 });
const counteraim22 = messages2.first().attachments.first()
const embed = new Discord.RichEmbed()

const Text = messages1.first().content;
const Attachment = require('discord.js').Attachment;

function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counteraim22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
//stats
	sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!D1:F",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "asgardians" && args[1] === "stats"){
//stats
	sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!A1:C",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

} else if(args[0] == "asgardians"){
const asgardcounterimage = client.channels.get('666340204872990730')
asgardcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterasgard = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterasgard.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterasgard.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionasgardiansstats() {
  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!A1:C",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });	
}
setTimeout(functionasgardiansstats, 3000);
} else if(args[0] == "asgardians+"){
const asgardianscounterimage2 = client.channels.get('666340204872990730')
const channelToCheckText = client.channels.get('666271343536373761')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages3 = await asgardianscounterimage2.fetchMessages({ limit: 1 });
const counterasgardians22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counterasgardians22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!A1:C",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "bkt" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!P1:R",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "bkt"){
const bktcounterimage = client.channels.get('700322361966067812')
bktcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterbkt = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterbkt.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterbkt.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionbktstats() {
  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!P1:R",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });	
}
setTimeout(functionbktstats, 3000);
} else if(args[0] == "bkt+"){
const bktcounterimage2 = client.channels.get('700322361966067812')
const channelToCheckText = client.channels.get('700322417003986978')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages3 = await bktcounterimage2.fetchMessages({ limit: 1 });
const counterbkt22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counterbkt22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!P1:R",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "brawlers" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!S1:U",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "brawlers"){
const brawlerscounterimage = client.channels.get('666340239903686659')
brawlerscounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterbrawlers = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterbrawlers.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterbrawlers.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionbrawlerstats() {
  	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!S1:U",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionbrawlerstats, 3000);
} else if(args[0] == "brawlers+"){
const brawlerscounterimage2 = client.channels.get('666340239903686659')

const channelToCheckText = client.channels.get('666317820656615435')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await brawlerscounterimage2.fetchMessages({ limit: 1 });
const counterbrawlers22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counterbrawlers22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!S1:U",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "captainmarvel" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!V1:X",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "captainmarvel"){
const cptnmarvelcounterimage = client.channels.get('700487765518843938')
cptnmarvelcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const countercptnmarvel = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(countercptnmarvel.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(countercptnmarvel.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functioncptnmarvelstats() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!V1:X",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functioncptnmarvelstats, 3000);
} else if(args[0] == "captainmarvel+"){
const cptnmarvelcounterimage2 = client.channels.get('700487765518843938')

const channelToCheckText = client.channels.get('700487792999792700')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await cptnmarvelcounterimage2.fetchMessages({ limit: 1 });
const countercptnmarvel22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(countercptnmarvel22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!V1:X",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "defenders" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!Y1:AA",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "defenders"){
const defenderscounterimage = client.channels.get('700322862535278683')
defenderscounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterdefenders = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterdefenders.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterdefenders.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functiondefendersstats() {
  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!Y1:AA",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functiondefendersstats, 3000);
} else if(args[0] == "defenders+"){
const defenderscounterimage2 = client.channels.get('700322862535278683')

const channelToCheckText = client.channels.get('700322892541591633')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await defenderscounterimage2.fetchMessages({ limit: 1 });
const counterdefenders22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;

function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counterdefenders22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!Y1:AA",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "gotg" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AE1:AG",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "gotg"){
const gotgcounterimage = client.channels.get('700323244305022976')
gotgcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const countergotg = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(countergotg.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(countergotg.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functiongotgstats() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AE1:AG",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functiongotgstats, 3000);
} else if(args[0] == "gotg+"){
const gotgcounterimage2 = client.channels.get('700323244305022976')

const channelToCheckText = client.channels.get('700323286621487124')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await gotgcounterimage2.fetchMessages({ limit: 1 });
const countergotg22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(countergotg22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AE1:AG",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "hydra" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AH1:AJ",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "hydra"){
const hydracounterimage = client.channels.get('698203936061915206')
hydracounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterhydra = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterhydra.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterhydra.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionhydrastats() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AH1:AJ",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionhydrastats, 3000);
} else if(args[0] == "hydra+"){
const hydracounterimage2 = client.channels.get('698203936061915206')
const channelToCheckText = client.channels.get('698224225516781638')

const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await hydracounterimage2.fetchMessages({ limit: 1 });

const counterhydra22 = messages2.first().attachments.first()
const embed = new Discord.RichEmbed()

const Text = messages1.first().content;
const Attachment = require('discord.js').Attachment;

function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counterhydra22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AH1:AJ",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "kreeronan" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AN1:AP",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "kreeronan"){
const kreeronancounterimage = client.channels.get('700532345576620072')
kreeronancounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterkreeronan = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterkreeronan.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterkreeronan.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionkreeronanstats() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AN1:AP",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionkreeronanstats, 3000);
} else if(args[0] == "kreeronan+"){
const kreeronancounterimage2 = client.channels.get('700532345576620072')

const channelToCheckText = client.channels.get('700532370079481936')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await kreeronancounterimage2.fetchMessages({ limit: 1 });
const counterkreeronan22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counterkreeronan22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AN1:AP",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "marauders" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AT1:AV",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "marauders"){
const marauderscounterimage = client.channels.get('700532345576620072')
marauderscounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterkreeronan = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterkreeronan.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterkreeronan.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionmaraudersstats() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AN1:AP",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionmaraudersstats, 3000);
} else if(args[0] == "marauders+"){
const marauderscounterimage2 = client.channels.get('698224640199491654')

const channelToCheckText = client.channels.get('698224678900203520')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await marauderscounterimage2.fetchMessages({ limit: 1 });
const countermarauders22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(countermarauders22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!AT1:AV",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "shield" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BF1:BH",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "shield"){
const shieldcounterimage = client.channels.get('666340284962963524')
shieldcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const countershield = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(countershield.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(countershield.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})	
function functionshieldstats() {
	 	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BF1:BH",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionshieldstats, 3000);
} else if(args[0] == "shield+"){
const shieldcounterimage2 = client.channels.get('666340284962963524')

const channelToCheckText = client.channels.get('666318788140072981')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await shieldcounterimage2.fetchMessages({ limit: 1 });
const countershield22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(countershield22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BF1:BH",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}

function1();
function2();
setTimeout(function3, 4000);



} else if(args[0] == "s6" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BC1:BE",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "s6"){
const s6counterimage = client.channels.get('666340318102421504')
s6counterimage.fetchMessages({ limit: 1 }).then(messages => {
const counters6 = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counters6.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counters6.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functions6stats() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BC1:BE",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functions6stats, 3000);	
} else if(args[0] == "s6+"){
const s6counterimage2 = client.channels.get('666340318102421504')

const channelToCheckText = client.channels.get('666319009465237524')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await s6counterimage2.fetchMessages({ limit: 1 });
const counters622 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counters622.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BC1:BE",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}

function1();
function2();
setTimeout(function3, 4000);
	
} else if(args[0] == "supernatural" || args[0] === "supernaturals" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BI1:BK",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "supernatural" || args[0] == "supernaturals"){
const supernaturalcounterimage = client.channels.get('700533212358901760')
supernaturalcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const countersupernatural = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(countersupernatural.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(countersupernatural.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionsupernaturalstats() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BI1:BK",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionsupernaturalstats, 3000);	
} else if(args[0] == "supernatural+" || args[0] == "supernaturals+"){
const supernaturalcounterimage2 = client.channels.get('700533212358901760')

const channelToCheckText = client.channels.get('700533244046606336')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await supernaturalcounterimage2.fetchMessages({ limit: 1 });
const countersupernatural22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(countersupernatural22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BI1:BK",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "symbiote" || args[0] === "symbiotes" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BL1:BN",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "symbiote" || args[0] == "symbiotes"){
const symbiotecounterimage = client.channels.get('700535722498588682')
symbiotecounterimage.fetchMessages({ limit: 1 }).then(messages => {
const countersymbiote = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(countersymbiote.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(countersymbiote.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionsymbiotestats() {
  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BL1:BN",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionsymbiotestats, 3000);
} else if(args[0] == "symbiote+" || args[0] == "symbiotes+"){
const symbiotecounterimage2 = client.channels.get('700535722498588682')

const channelToCheckText = client.channels.get('700535765448392754')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await symbiotecounterimage2.fetchMessages({ limit: 1 });
const countersymbiote22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(countersymbiote22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BL1:BN",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "ultron" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BO1:BQ",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "ultron"){
const ultroncounterimage = client.channels.get('698225013723234396')
ultroncounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterultron = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterultron.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterultron.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})	
function functionultronstats() {
  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BO1:BQ",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionultronstats, 3000);
} else if(args[0] == "ultron+"){
const ultroncounterimage2 = client.channels.get('698225013723234396')
const channelToCheckText = client.channels.get('698225045499019284')

const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await ultroncounterimage2.fetchMessages({ limit: 1 });

const counterultron22 = messages2.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Attachment = require('discord.js').Attachment;

function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counterultron22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BO1:BQ",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "wakanda" && args[1] === "stats"){
//stats
	sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BR1:BT",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "wakanda"){
const wakandacounterimage = client.channels.get('700323525348818994')
wakandacounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterwakanda = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterwakanda.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterwakanda.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionwakandastats() {
	sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BR1:BT",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionwakandastats, 3000);
} else if(args[0] == "wakanda+"){
const wakandacounterimage2 = client.channels.get('700323525348818994')

const channelToCheckText = client.channels.get('700323563231641670')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await wakandacounterimage2.fetchMessages({ limit: 1 });
const counterwakanda22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;


function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counterwakanda22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BR1:BT",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else if(args[0] == "xmen" && args[1] === "stats"){
//stats
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BU1:BW",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
} else if(args[0] == "xmen"){
const xmencounterimage = client.channels.get('700535062361276476')
xmencounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterxmen = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterxmen.url)
const embed2 = new Discord.RichEmbed()
embed2.setColor('#0099ff')
embed2.setImage(counterxmen.url)
//message.channel.send(attachment);
message.channel.send(embed2);
})
function functionxmenstats() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BU1:BW",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionxmenstats, 3000);
} else if(args[0] == "xmen+"){
const xmencounterimage2 = client.channels.get('700535062361276476')

const channelToCheckText = client.channels.get('700535081290301490')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });

const messages3 = await xmencounterimage2.fetchMessages({ limit: 1 });
const counterxmen22 = messages3.first().attachments.first()
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const Attachment = require('discord.js').Attachment;

function function1() {
const embed1 = new Discord.RichEmbed()
embed1.setColor('#0099ff')
embed1.setImage(counterxmen22.url)
message.channel.send(embed1);
}
function function3() {
const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)
embed.setColor('#0099ff')
embed.setDescription(Text)
message.channel.send(embed);
}
function function2() {
	  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "ControlPanel!BU1:BW",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ' '))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });

}

function1();
function2();
setTimeout(function3, 4000);

} else {
message.channel.send("Please use a valid team phrase, such as: aim | asgardians | bkt | brawlers | captainmarvel | defenders | gotg | hydra | kreeronan | marauders | shield | s6 | supernatural | symbiote | ultron | wakanda").catch(console.error);	
}

} else {
message.channel.send("Sorry, this doesn't work here. Head to <#673261006918516741> or your war chat channel and try again.").catch(console.error);
}


}


});


client.login(process.env.TOKEN);
