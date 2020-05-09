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
const mySpreadSheetId = '1mI3JdojX53nstJ85kz80ruXczKNq9-BKo9UQQE9HKQE';
const sheetName = "pvp";
sheets.spreadsheets.values.get(
  {
	spreadsheetId: mySpreadSheetId,
    range: `${sheetName}!H4`
  },
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    const data = res.data.values;
    let i = 0;
    for (i = 0; i < data.length; i++) {
      if (!data[i][0]) break;
    }
	let asgardiannumber = args[1];
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
  }
);
const exampleEmbed = new Discord.RichEmbed()
	.setColor('#26ff00')
	.setDescription(`__**Result accepted:**__ \Winner: **${args[0]}** **${args[1]}** \n Loser: **${args[2]}** **${args[3]}**`)
	message.channel.send(exampleEmbed);

}

}

if(command === 'help'){

let pages = ['General Commands Page 1', 'General Command Page 2', 'General Commands Page 3']; 
let page = 1; 

let embed01 = new Discord.RichEmbed()
.setColor("#15f153")
.setDescription(pages[page-1])
.setFooter(`Page ${page} of ${pages.length}`)
.addField("field 1")
.addField("field 2")
.addField("!field 3")
.addField("field 4")

let embed02 = new Discord.RichEmbed()
.setColor("#15f153")
.setDescription(pages[page-1])
.setFooter(`Page ${page} of ${pages.length}`)
.addField("field 1")
.addField("field 2")
.addField("!field 3")
.addField("field 4")

let embed03 = new Discord.RichEmbed()
.setColor("#15f153")
.setDescription(pages[page-1])
.setFooter(`Page ${page} of ${pages.length}`)
.addField("field 1")
.addField("field 2")
.addField("!field 3")
.addField("field 4")
 
 
message.channel.send(embed01).then(message => {

message.react('⬅').then( r => {
message.react('➡')

// Filters
const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

const backwards = message.createReactionCollector(backwardsFilter, {timer: 1000});
const forwards = message.createReactionCollector(forwardsFilter, {timer: 1000});
 
backwards.on('collect', r => {
if (page === 4) {
page--;
embed03.setDescription(pages[page-1])
embed03.setFooter(`Page ${page} of ${pages.length}`)
message.edit(embed03)
}
})

forwards.on('collect', r => {
if (page === 2) return;
page++;
embed02.setDescription(pages[page-1]);
embed02.setFooter(`Page ${page} of ${pages.length}`);
message.edit(embed02)

r.remove(r.users.filter(u => u === message.author).first());
})


})
})



}
});










client.login(process.env.TOKEN);
