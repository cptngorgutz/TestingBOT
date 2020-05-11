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

if(command === 'helpme'){
	
let pages = [`<:cmd:709397091461496833> __**General Commands**__ \n \n<:__:709403821901611019>commands \n**Provides a commands list** \n\n<:__:709403821901611019>away [reason] \n**Send a message to the captains saying you'll be away** \n\n<:__:709403821901611019>uniques \n**Sends an infographic of unique gear required for characters** \n\n<:__:709403821901611019>blitz \n**Send an infographic of current blitz predictions** \n\n<:__:709403821901611019>event [charactername] \n**Send an infographic of required toons for the event**`, '<:cmd:709397091461496833> __**General Commands 2**__ \n\n<:__:709403821901611019>bug [reason] \n**Send a bug report to admin-logs for something to get fixed on the bot** \n\n<:__:709403821901611019>request [reason] \n**Send a request to admin-logs for something to be added to the bot** \n\n<:__:709403821901611019>notifications \n**Join the role to be notified of important announcements** \n\n<:__:709403821901611019>charactername \n**Character graphics are a work-in-progress and will be added to the #bot-changelog channel when they are available to use**'];
let page = 1; 

    const embed = new Discord.RichEmbed() // Define a new embed
    .setColor('#0099ff') // Set the color
    .setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`)
    .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {

    msg.react('⬅').then( r => {
    msg.react('➡')

        // Filters
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, {time: 300000});
        const forwards = msg.createReactionCollector(forwardsFilter, {time: 300000});

        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
        })

        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
        })
		
		forwards.on('end', r => {
		msg.clearReactions().catch(error => console.error('Failed to clear reactions: ', error));
		})
		
    })
})


}

if(command === 'add' && args[0] === "teamlist"){
	let Embed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("Available Teamlist: \n AIM | AIMtron | Asgardians | Avengers | BH | BKT | Brawlers | CM | Coulson | Defenders | F4 | GotG | Hydra | Inhumans | KreeRonan | KreeUltimus | Marauders | Maraudertron | ogBH | PA | S6 | Shield | Supernaturals | Symbiotes | Ultitron | Ultron | Wakanda | Xmen");	
	message.channel.send(Embed);
}

if(command === 'test'){
if(isNaN(args[0]) || isNaN(args[2])) {
message.channel.send("Please use [teamname] [number] [teamname] [number]");
} else {
message.channel.send("You submitted correctly.");
}
}



});










client.login(process.env.TOKEN);
