
var ocrSpaceApi = require("ocr-space-api")

var options =  { 
    apikey: '642efb483488957',
    language: 'por',
    imageFormat: 'image/png',
    isOverlayRequired: true
  };

const imageFilePath = __dirname + "\\lovetext.jpg";

ocrSpaceApi.parseImageFromLocalFile(imageFilePath, options)
  .then(function (parsedResult) {
    console.log('---------- parsedText: \n', 
      parsedResult.parsedText,
      '\n -------- ocrParsedResult: \n', 
      parsedResult.ocrParsedResult);
  }).catch(function (err, body) {
    console.log('ERROR:', err, body);
  });