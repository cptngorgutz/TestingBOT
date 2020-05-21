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
const TB1captains = message.guild.roles.find(role => role.name === 'TB1 Captain');
const TB2captains = message.guild.roles.find(role => role.name === 'TB2 Captain');
const TB3captains = message.guild.roles.find(role => role.name === 'TB3 Captain');

if(command === 'hide') {
if(args[0] === "alpha"){

if (message.channel.id === '712643585408761938'){ //TEST1
if(message.member.roles.has(TB1captains.id)) {
const channel1 = message.guild.channels.find(c => c.name === 'alpha-raid');
channel1.overwritePermissions(message.guild.roles.find(r => r.name === 'TB1'), { // Disallow Everyone to see, join, invite, or speak
'VIEW_CHANNEL': false,
});
message.channel.send('Alpha hidden from TB1');
} else {
}
}

if (message.channel.id === '712816284835774534'){ //TEST2
if(message.member.roles.has(TB2captains.id)) {
const channel2 = message.guild.channels.find(c => c.name === 'alpha-raid');
channel2.overwritePermissions(message.guild.roles.find(r => r.name === 'TB2'), { // Disallow Everyone to see, join, invite, or speak
'VIEW_CHANNEL': false,
});
message.channel.send('Alpha hidden from TB2.');
} else {
}
}

if (message.channel.id === '712828921783255202'){ //TEST3
if(message.member.roles.has(TB3captains.id)) {
const channel3 = client.channels.get("712828921783255202");
//const channel3 = message.guild.channels.find(c => c.name === 'alpha-raid');
channel3.overwritePermissions(message.guild.roles.find(r => r.name === 'TB3'), { // Disallow Everyone to see
'VIEW_CHANNEL': false,
});
message.channel.send('Alpha hidden from TB3.');
} else {
}
}



}



}


if(command === 'show') {
if(args[0] === "alpha"){
const channel1 = message.guild.channels.find(c => c.name === 'alpha-raid');

channel1.overwritePermissions(message.guild.roles.find(r => r.name === 'TB2'), { // Disallow Everyone to see, join, invite, or speak
'VIEW_CHANNEL': true,
});
message.channel.send('Alpha shown to TB2.');

}
}


});


client.login(process.env.TOKEN);
