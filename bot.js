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
const emojiNext = '➡'; // unicode emoji are identified by the emoji itself
const emojiPrevious = '⬅';
const reactionArrow = [emojiPrevious, emojiNext];
const time = 60000; // time limit: 1 min

const first = () => new Discord.RichEmbed()
      .setAuthor('TOTO', "https://i.imgur.com/ezC66kZ.png")
      .setColor('#AAA')
      .setTitle('First')
      .setDescription('First');

const second = () => new Discord.RichEmbed()
      .setAuthor('TOTO', "https://i.imgur.com/ezC66kZ.png")
      .setColor('#548')
      .setTitle('Second')
      .setDescription('Second');

const third = () => new Discord.RichEmbed()
      .setAuthor('TOTO', "https://i.imgur.com/ezC66kZ.png")
      .setColor('#35D')
      .setTitle('Third')
      .setDescription('Third');

const list = [first, second, third];

function getList(i) {
return list[i]().setTimestamp().setFooter(`Page ${i+1}`); // i+1 because we start at 0
}

function filter(reaction, user){
  return (!user.bot) && (reactionArrow.includes(reaction.emoji.name)); // check if the emoji is inside the list of emojis, and if the user is not a bot
}

function onCollect(emoji, message, i, getList) {
  if ((emoji.name === emojiPrevious) && (i > 0)) {
    message.edit(getList(--i));
  } else if ((emoji.name === emojiNext) && (i < list.length-1)) {
    message.edit(getList(++i));
  }
  return i;
}

if (emojiPrevious === emojiPrevious) {
    const embed = getList(i-1);
    if (embed !== undefined) {
      message.edit(embed);
      i--;
    }
  } else if (emojiNext === emojiNext) {
    const embed = getList(i+1);
    if (embed !== undefined) {
      message.edit(embed);
      i++;
    }
  }
  return i;
  
  
  function createCollectorMessage(message, getList) {
  let i = 0;
  const collector = message.createReactionCollector(filter, { time });
  collector.on('collect', r => {
    i = onCollect(r.emoji, message, i, getList);
  });
  collector.on('end', collected => message.clearReactions());
}

function sendList(channel, getList){
  channel.send(getList(0))
    .then(msg => msg.react(emojiPrevious))
    .then(msgReaction => msgReaction.message.react(emojiNext))
    .then(msgReaction => createCollectorMessage(msgReaction.message, getList));
}


}
});


client.login(process.env.TOKEN);
