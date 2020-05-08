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

if(command === 'pvp') {
if (args[0] === "gadd" && args[2] === "bob"){
const mySpreadSheetId = '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw';
const sheetName = "pvp";
sheets.spreadsheets.values.update(
      {
		spreadsheetId: mySpreadSheetId,
        range: `${sheetName}!H4${i + 1}`,
        valueInputOption: "USER_ENTERED",
        resource: {
          majorDimension: "ROWS",
          values: [[asgardiannumber]],
        }
      },
      (err, resp) => {
        if (err) {
          console.log("Data Error :", err);
          reject(err);
        }
      }
    );
  
const exampleEmbed = new Discord.RichEmbed()
	.setColor('#26ff00')
	.setDescription(`__**Result accepted:**__ \nWinner: **${args[0]}** **${args[1]}** \n Loser: **${args[2]}** **${args[3]}**`)
	message.channel.send(exampleEmbed);

}

}
});


client.login(process.env.TOKEN);
