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

if(command === 'hide') {
if(args[0] === "alpha"){
	const guild = client.guilds.get('617707484626288670');
	function closeDownAlpha(message) {
    let channel = message.guild.channels.find(c => c.name === 'alpha-raid')
    let roles = message.guild.roles; // collection

    // find specific role - enter name of a role you create here
    let testRole = message.guild.roles.find(r => r.name === "TB2");
	
    // overwrites 'SEND_MESSAGES' role, only on this specific channel
    channel.overwritePermissions(
        testRole,
        { 'VIEW_CHANNEL': false },
        // optional 'reason' for permission overwrite
        'closing the channel'
    )
    // handle responses / errors
    .then(console.log)
    .catch(console.log);
	message.channel.send("Alpha channel now hidden")
}
closeDownAlpha();

}


}


});





client.login(process.env.TOKEN);
