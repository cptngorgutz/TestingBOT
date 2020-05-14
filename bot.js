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

if(command === 'command'){
	
let pages = [`<:cmd:709397091461496833> __**Commands Menu**__ \n \nPage 1 - Commands Menu\nPage 2 - General Commands\nPage 3 - General commands 2\nPage 4 - War Commands\nPage 5 - War commands 2\nPage 6 - PVP`,`<:cmd:709397091461496833> __**General Commands**__ \n \n<:__:709403821901611019>commands \n**Provides a commands list** \n\n<:__:709403821901611019>away [reason] \n**Send a message to the captains saying you'll be away** \n\n<:__:709403821901611019>uniques \n**Sends an infographic of unique gear required for characters** \n\n<:__:709403821901611019>blitz \n**Send an infographic of current blitz predictions**\n(ex. !blitz / !blitz2) \n\n<:__:709403821901611019>event [charactername] \n**Send an infographic of required toons for the event**\n(ex. !ultron)`, '<:cmd:709397091461496833> __**General Commands 2**__ \n\n<:__:709403821901611019>bug [reason] \n**Send a bug report to admin-logs for something to get fixed on the bot** \n\n<:__:709403821901611019>request [reason] \n**Send a request to admin-logs for something to be added to the bot** \n\n<:__:709403821901611019>notifications \n**Join the role to be notified of important announcements** \n\n<:__:709403821901611019>charactername \n**Character graphics are a work-in-progress and will be added to the #bot-changelog channel when they are available to use**', `<:cmd:709397091461496833> __**War Counters**__ \n \n<:__:709403821901611019>counter [teamname]  \n\n**Sends an image of the recommended teams countering your requested team**\n(ex. !counter aim -> Counter graphic + stats) \n\n<:__:709403821901611019>counter [teamname]+ \n**Sends a counter graphic + stats + guide(if available)\n(ex. !counter aim+** \n\n<:__:709403821901611019>counter [teamname] stats \n**Sends ONLY the war stats of the chosen team**`, '<:cmd:709397091461496833> __**War - Adding Stats**__ \n\n<:__:709403821901611019>add [offenseteamname] [number] [defenseteamname] [number] \n**Adds successful war match to the database. Offense -> Defense** \n(Number rounded to nearest thousand, ex. !add aim 200 wakanda 285) \n\n<:__:709403821901611019>add teamlist \n**Shows currently available teams to add to the database** \n\n<:__:709403821901611019>% [offense] [defense]\n**Calculates the % between two numbers off -> def** \n(ex. [!% 200 285] = 42.5% punch up)', '<:cmd:709397091461496833> __**PVP Commands**__ \n \n'];
let page = 1; 

 const embed = new Discord.RichEmbed() // Define a new embed
    .setColor('#0099ff') // Set the color
    .setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`)
    .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {
	msg.react('1️⃣').then( r => {
    msg.react('2️⃣').then(() => message.react('👎')).then(() => message.react('👎'))msg.react('3️⃣').then(() => message.react('👎'))msg.react('4️⃣').then(() => message.react('👎'))msg.react('5️⃣').then(() => message.react('👎')).then(() => message.react('👎'))msg.react('6️⃣');
	

        // Filters
		const oneFilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
		const twoFilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
		const threeFilter = (reaction, user) => reaction.emoji.name === '3️⃣' && user.id === message.author.id;
		const fourFilter = (reaction, user) => reaction.emoji.name === '4️⃣' && user.id === message.author.id;
		const fiveFilter = (reaction, user) => reaction.emoji.name === '5️⃣' && user.id === message.author.id;
		const sixFilter = (reaction, user) => reaction.emoji.name === '6️⃣' && user.id === message.author.id;

        const one = msg.createReactionCollector(oneFilter, {time: 300000});
		const two = msg.createReactionCollector(twoFilter, {time: 300000});
		const three = msg.createReactionCollector(threeFilter, {time: 300000});
		const four = msg.createReactionCollector(fourFilter, {time: 300000});
		const five = msg.createReactionCollector(fiveFilter, {time: 300000});
		const six = msg.createReactionCollector(sixFilter, {time: 300000});

        one.on('collect', r => {
            if (page === 1) {
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 2) {
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 3) {
            page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 4) {
            page--;
			page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 5) {
            page--;
			page--;
			page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 6) {
            page--;
			page--;
			page--;
			page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
        })

		two.on('collect', r => {
			if (page === 1) {
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 2) {
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 3) {
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 4) {
            page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 5) {
            page--;
			page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 6) {
            page--;
			page--;
			page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
		})
		
		three.on('collect', r => {
		if (page === 1) {
			page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 2) {
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 3) {
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 4) {
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 5) {
            page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 6) {
            page--;
			page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
		})
		
		four.on('collect', r => {
		if (page === 1) {
			page++;
			page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 2) {
			page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 3) {
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 4) {
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 5) {
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 6) {
            page--;
			page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
		})
		
		five.on('collect', r => {
		if (page === 1) {
			page++;
			page++;
			page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 2) {
			page++;
			page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 3) {
			page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 4) {
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 5) {
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 6) {
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
		})		
		
		six.on('collect', r => {
            if (page === 1) {
            page++;
			page++;
			page++;
			page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			 if (page === 2) {
            page++;
			page++;
			page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			 if (page === 3) {
            page++;
			page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 4) {
            page++;
			page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 5) {
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the previous/next pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
			}
			if (page === 6) {
			r.remove(r.users.filter(u => !u.bot).first());
			}
        })
		
    })
})

}

if(command === 'warcommands'){
	
let pages = [`<:cmd:709397091461496833> __**War Counters**__ \n \n<:__:709403821901611019>counter [teamname]  \n\n**Sends an image of the recommended teams countering your requested team**\n(ex. !counter aim -> Counter graphic + stats) \n\n<:__:709403821901611019>counter [teamname]+ \n**Sends a counter graphic + stats + guide(if available)\n(ex. !counter aim+** \n\n<:__:709403821901611019>counter [teamname] stats \n**Sends ONLY the war stats of the chosen team**`, '<:cmd:709397091461496833> __**War - Adding Stats**__ \n\n<:__:709403821901611019>add [offenseteamname] [number] [defenseteamname] [number] \n**Adds successful war match to the database. Offense -> Defense** \n(Number rounded to nearest thousand, ex. !add aim 200 wakanda 285) \n\n<:__:709403821901611019>add teamlist \n**Shows currently available teams to add to the database** \n\n<:__:709403821901611019>% [offense] [defense]\n**Calculates the % between two numbers off -> def** \n(ex. [!% 200 285] = 42.5% punch up)'];
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
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the start/previous/next/end pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
        })

        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length} - Use reaction below to navigate to the start/previous/next/end pages`);
            msg.edit(embed)
			r.remove(r.users.filter(u => !u.bot).first());
        })
		
		forwards.on('end', r => {
		msg.clearReactions().catch(error => console.error('Failed to clear reactions: ', error));
		})
		
    })
})


}



});





client.login(process.env.TOKEN);
