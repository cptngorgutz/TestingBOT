//------------------------------------------------------->>>> ***************** TESTING BOT
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

if(command === 'bob') {
if (args[0] === "stats"){
	let bob = client.users.get("212232190358978560");
	sheets.spreadsheets.values.get({
    spreadsheetId: '1mI3JdojX53nstJ85kz80ruXczKNq9-BKo9UQQE9HKQE',
    range: "bob!A1:B6",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ''))
	.setThumbnail(bob.avatarURL)
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
if (args[1] === "gadd"){
	sheets.spreadsheets.values.get({
    spreadsheetId: '1mI3JdojX53nstJ85kz80ruXczKNq9-BKo9UQQE9HKQE',
    range: "bob!C1:D3",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ''))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
if (args[1] === "rain"){
	sheets.spreadsheets.values.get({
    spreadsheetId: '1mI3JdojX53nstJ85kz80ruXczKNq9-BKo9UQQE9HKQE',
    range: "bob!E1:F3",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n').replace(/,/g, ''))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });


}
}




});

client.on("message", message => {
if (!message.content.startsWith(config.prefix) || message.author.bot) return;
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === 'hide') {
if(args[0] === "alpha"){
function closeDownChannel(message) {
	let channel = message.channel;
    let roles = message.guild.roles; // collection
    const TB2Role = message.guild.roles.cache.find(r => r.name === 'TB2');

    // overwrites 'SEND_MESSAGES' role, only on this specific channel
	channel.overwritePermissions([
	{
     id: TB2Role.id,
     deny: ['VIEW_CHANNEL'],
	},
	], 'Lockdown');

}
closeDownChannel();

}


}



});


client.login(process.env.TOKEN);
