const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

//war counter / add counter stats
client.on("message", async message => {
if (!message.content.startsWith(config.prefix)) return;
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

if(command === 'counter') { //   bot-spamTB                                 bot-spamTESTserver                              TB1-WAR-CHAT                                   TB2-WAR-CHAT                                    TB3-WAR-CHAT                                 General-TESTSERVER                       EMOJITESTSERVER-testing room
if(args[0] == "aim"){
function functionaimstats() {
	sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "TESTING!B1:B",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	message.channel.send("!trial " + args[1] + " " + rows.join('\n').replace(/,/g, ' '))
    } else {
      console.log('No data found.');
    }
  });
}
setTimeout(functionaimstats, 3000);

}
}


if (command === '%'){
							//   bot-spamTB                                 bot-spamTESTserver                              TB1-WAR-CHAT                                   TB2-WAR-CHAT                                    TB3-WAR-CHAT                                 General-TESTSERVER                       EMOJITESTSERVER-testing room
if (message.channel.id === '673261006918516741' || message.channel.id === '666305824813219870' || message.channel.id === '560885677475102740' || message.channel.id === '562757850477101063' || message.channel.id === '643140704624967694' || message.channel.id === '661221254958940220' || message.channel.id === '699707863148265512') {
// Assign values to x and y
let x = args[1];
let y = args[0];

// Divide x by y to get the product
//let z = x / y;
let z = (x+1) / y;

message.channel.send(z);
} else {
message.channel.send("Sorry, this doesn't work here. Head to <#673261006918516741> or your war chat channel and try again.").catch(console.error);
}
}
});
client.on("message", async message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command ==='trial') {
let y = args[1];
let x = args[0];
let z = y/(1+x);
//let z = (y - x) / x*100; 

	const channelToCheckText = client.channels.get('699707863148265512')
	channelToCheckText.fetchMessages({ limit: 1 }).then(messages => {
	const LastText = messages.first();
	message.channel.send("= " + z)
	
	//message.channel.send(args[0] + " " + args[1] + " = " + z.toFixed(1))
	}).catch(err => {
    console.error(err)
    })
}
});


client.login(process.env.TOKEN);
