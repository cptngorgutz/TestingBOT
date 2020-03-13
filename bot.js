const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

//USERS JOINING & LEAVING
client.on('guildMemberAdd', function(member)
{
	let memberRole = member.guild.roles.find(role => role.name === 'recruit');
	member.addRole(memberRole);
 	member.guild.channels.get('551566689620197376').send(`Welcome to The Beyonders! ${member}. \nOne of the captains will be with you shortly. \nWe hope you enjoy your stay here. \nPlease post a profile picture in the <#630780029013458954> channel. Thankyou.`);
	//NEW USERS JOIN
	member.guild.channels.get('428968153800900608').send({embed: {
	color: 0x00ff00, 
	title: "**MEMBER JOINED! ** ",
	description: member + " has joined **The Beyonders ** discord server!",
	author: "Member Joined",
	thumbnail: { url: member.user.displayAvatarURL },
	fields: [{
    name: member.user.username + "#" + member.user.discriminator,   
    value: "ID# " + member.id + "",
	}
	],
	timestamp: new Date(),
	footer: {
	}
	}})
});	 
client.on('guildMemberRemove', function(member)
{
	member.guild.channels.get('428968153800900608').send({embed: {
	color: 0xff0000,
	title: "**MEMBER LEFT! ** ",
	description: member + " has left **The Beyonders ** discord server!",
	author: "Member Left",
	thumbnail: { url: member.user.displayAvatarURL },
	fields: [{
    name: member.user.username + "#" + member.user.discriminator,   
    value: "ID# " + member.id + "",
	}
	],
	timestamp: new Date(),
	footer: {
	}
	}}); });	

//MISC COMMANDS        Character tiers, events etc.
client.on("message", async message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === 'blitz') {
if(message.channel.id === '428968670908383242'){
	const channelToCheck = client.channels.get('599409850031669267')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
}
}
if(command === 'blitz2') {
if(message.channel.id === '428968670908383242'){
    const channelToCheck = client.channels.get('663350094309097472')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
}
}
if(command === 'uniques') {
    const channelToCheck = client.channels.get('662765504041058320')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
    }).catch(err => {
    console.error(err)
    })
}
if(command === 'notifications') { //SELF ASSIGNED ROLES
message.channel.bulkDelete(1)
const notify = message.guild.roles.find(r => r.name === "notifications");
if(message.member.roles.has(notify.id)) {
message.channel.send("" + message.author + " Left Notifications");
message.member.removeRole(notify).catch(console.error);
} else {
message.member.addRole(notify).catch(console.error);
message.channel.send("" + message.author + " Joined Notifications");
}
}
if(command === 'away') {
const awaynoteschannel = client.channels.get('600465818014449674')
const messages1 = await message.channel.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const TB1 = message.guild.roles.find(role => role.name === 'TB1');
const TB2 = message.guild.roles.find(role => role.name === 'TB2');
const TB3 = message.guild.roles.find(role => role.name === 'TB3');
message.channel.bulkDelete(1)
if (message.member.roles.find(role => role.name === 'TB1')) {
embed.setColor('#0099ff')
embed.setDescription("**The Beyonders \n**"  + message.author + " " + Text)
embed.setTimestamp()
awaynoteschannel.send(embed);
message.channel.send("Away-note Received.");
}
if (message.member.roles.find(role => role.name === 'TB2')) {
embed.setColor('#0099ff')
embed.setDescription("**The Beyonders II \n**" + message.author + " " + Text)
embed.setTimestamp()
awaynoteschannel.send(embed);
message.channel.send("Away-note Received.");
}
if (message.member.roles.find(role => role.name === 'TB3')) {
embed.setColor('#0099ff')
embed.setDescription("**The Beyonders III \n**" + message.author + " " + Text)
embed.setTimestamp()
awaynoteschannel.send(embed);
message.channel.send("Away-note Received.");
}

}
if(command === 'admincommands') {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Admin Commands List** \n \n**RAIDS:** \n**!u6/u7/a4/b4/g4** \n(Only works in raid chat) \nPings @ everyone \n[chosenraid] launched \n \n**!raid** \n**ultimus 6/7 or** \n**alpha/beta/gamma 4**\n(Only works in claim channels) \nSends new claims for [chosenraid] \n\n**!refresh** \n**alpha/beta/gamma 4** \n(Only works in event/greek channels) \nSlowly deletes old claims and sends out new raid claims for [chosenraid] (takes approx 8 minutes)")
	.setThumbnail('https://i.imgur.com/9eCZztr.png') 
	message.channel.send(exampleEmbed);
}
if(command === 'commandsusual') {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Commands List** \n \n**Add away note                     ** ```!away``` *[reason for being away]* \n*(Removes away message for privacy and informs captains of your circumstances)* \n \n**Uniques                        ** ```!uniques``` *(Infographic showing uniques list)* \n \n**Blitz Predictions                ** ```!blitz``` *(Shows current blitz predictions, !blitz2 for orb assault blitz)* \n \n**Legendary Events                        ** ```!event``` *[legendary name e.g shuri]* \n \n**Character Infographic                         ** ```![charactername]``` ")
	message.channel.send(exampleEmbed);
}


//LEGENDARY EVENTS
if(command === 'event' || command === 'legendary') {
if(args[0] === "blackbolt" || args[0] === "bb" || args[0] === "blackagar" && args[1] === "boltagon" || args[0] === "black" && args[1] === "bolt"){
	const channelToCheck = client.channels.get('688002560640155712')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "fury" || args[0] === "nick" && args[1] === "fury"){
//message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/furyevent.png')] });
	const channelToCheck = client.channels.get('688002478649901056')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "ironman" || args[0] === "iron" && args[1] === "man"){
//message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/ironmanevent.png')] });
	const channelToCheck = client.channels.get('688002514792349797')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "magneto"){
//message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/magnetoevent.png')] });
	const channelToCheck = client.channels.get('688002528792674352')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "shuri"){
//message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/shurievent.png')] });
	const channelToCheck = client.channels.get('688002969987317780')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "starlord" || args[0] === "star" && args[1] === "lord"){
//message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/starlordevent.png')] });  	
	const channelToCheck = client.channels.get('688002652612853799')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    })
} else if(args[0] === "phoenix"){
//message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/phoenixevent.png')] });
	const channelToCheck = client.channels.get('688002661244600331')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    }) 
} else if(args[0] === "iw" || args[0] === "i" && args[1] === "w" || args[0] === "invisible" && args[1] === "woman" || args[0] === "invisiblewoman" || args[0] === "sue" && args[1] === "storm"){
//message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/invisibleevent.png')] }); 
	const channelToCheck = client.channels.get('688002544865378304')
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.first().attachments.first()
	const Attachment = require('discord.js').Attachment;
	const attachment = new Attachment(lastMessage.url)
	message.channel.send(attachment);
	//message.channel.send(lastMessage.url)
    }).catch(err => {
    console.error(err)
    }) 
} else {
const eventEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Legendary Events:** \n**!event charactername** or **!legendary charactername** \n \n**Availible characters:** \nFury\nIron Man,\nMagneto,\nShuri,\nStarlord,\nPhoenix,\nInvisible Woman")
.setThumbnail('https://i.imgur.com/9eCZztr.png') 
message.channel.send(eventEmbed);
}
}

//CHARACTER TIERS
if(command === 'ultron') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\User\discord-greeter-bot', './Character Tiers/Ultron.png')] });
}
if(command === 'juggernaut') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Juggernaut.png')] });
}
if(command === 'phoenix') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Phoenix.png')] });
}
if(command === 'magneto') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Magneto.png')] });
}
if(command === 'pyro') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Pyro.png')] });
}
if(command === 'starlord') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Starlord.png')] });
}
if(command === 'minnerva') {
message.channel.bulkDelete(1)
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/MinnErva.png')] });
}


//MEMES
if(command === 'vaystfu') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setImage('https://i.imgur.com/tVcDb5u.gif') 
	message.channel.send(exampleEmbed);
}
if(command === 'sad') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**You made Cap cry with your bad luck**')
	.attachFiles(['./Misc/sadgif.gif'])
	.setImage('attachment://sadgif.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'happy') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**Cap appreciates your luck**')
	.attachFiles(['./Misc/happygif.gif'])
	.setImage('attachment://happygif.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'nevermisses') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**You forgot one thing, he never misses**')
	.attachFiles(['./Misc/nevermissgif.gif'])
	.setImage('attachment://nevermissgif.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'spideydance') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**When the camera keeps on rolling...**')
	.attachFiles(['./Misc/spideygif.gif'])
	.setImage('attachment://spideygif.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'dafuq') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq.gif'])
	.setImage('attachment://dafuq.gif')
	message.channel.send(exampleEmbed);
}
if(command === 'dafuq1') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq1.jpg'])
	.setImage('attachment://dafuq1.jpg')
	message.channel.send(exampleEmbed);
}
if(command === 'dafuq2') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq2.jpg'])
	.setImage('attachment://dafuq2.jpg')
	message.channel.send(exampleEmbed);
}
if(command === 'dafuq3') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq3.jpg'])
	.setImage('attachment://dafuq3.jpg')
	message.channel.send(exampleEmbed);
}

	


});

//RAID & WAR
client.on('message', (message) => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const TB1captains = message.guild.roles.find(role => role.name === 'TB1 Captain');
const TB2captains = message.guild.roles.find(role => role.name === 'TB2 Captain');
const TB3captains = message.guild.roles.find(role => role.name === 'TB3 Captain');

//RAID LAUNCHES                   //RAID CHANNELS&TESTING 
if (message.channel.id === '429231250600099850' || message.channel.id === '462365472248299521' || message.channel.id === '643140903300497408' || message.channel.id === '606119830516400162') { 
if(command === 'u6') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Ultimus 6 Launched")
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(command === 'u7') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Ultimus 7 Launched")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(command === 'a4') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Alpha 4 Launched")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(command === 'b4') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Beta 4 Launched")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(command === 'g4') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Gamma 4 Launched")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}

//LAUNCHING ACTUAL RAIDS      //testing room   || message.channel.id === '617707484626288672'
if(command === 'raid') {
if(args[0] === "ultimus" && args[1] === "6"){
if (message.channel.id === '656244057244303361' || message.channel.id === '643229492650704973' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                           TB2 ULT 6 ROOM                             TB3 ULT 6 ROOM                       
	message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Ultimus6.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("Cannot be used here")
}
}
if(args[0] === "ultimus" && args[1] === "7"){
if (message.channel.id === '634155222490415104' || message.channel.id === '634155347736526848' || message.channel.id === '646322699869880340' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                           TB1 ULT 7 ROOM                             TB2 ULT 7 ROOM                              TB3 ULT 7 ROOM
	message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Ultimus7.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("Cannot be used here")
}
}
if(args[0] === "alpha" && args[1] === "4"){
if (message.channel.id === '656230420265828363' || message.channel.id === '656230665221701682' || message.channel.id === '656207417033359371' || message.channel.id === '656216714723459116' || message.channel.id === '656232194137784333' || message.channel.id === '656232345371672577' || message.channel.id === '643229344793231370' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                       TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2                           TB3 ALPHA ROOM 
	message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Alpha4.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("cannot do this here")
}
}
if(args[0] === "beta" && args[1] === "4"){
if (message.channel.id === '656230420265828363' || message.channel.id === '656230665221701682' || message.channel.id === '656207417033359371' || message.channel.id === '656216714723459116' || message.channel.id === '656232194137784333' || message.channel.id === '656232345371672577' || message.channel.id === '651159388685336587' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                       TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2 TB3 room 
message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Beta4.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("cannot do this here")
}
}
if(args[0] === "gamma" && args[1] === "4"){
if (message.channel.id === '656230420265828363' || message.channel.id === '656230665221701682' || message.channel.id === '656207417033359371' || message.channel.id === '656216714723459116' || message.channel.id === '656232194137784333' || message.channel.id === '656232345371672577' || message.channel.id === '655246084418830346' || message.channel.id === '617707484626288672') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
//                           TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2                            TB3 GAMMA ROOM :/
message.channel.bulkDelete(100)
    message.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Gamma4.png')] });
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  	
	message.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    message.channel.send("Lane 1 - Blue")
	message.channel.send("Lane 2 - Yellow") 
	message.channel.send("Lane 3 - Red")  
	message.channel.send("Lane 4 - Green")  
	message.channel.send("Lane 5 - Purple")  
	message.channel.send("Lane 6 - White")  
	message.channel.send("Lane 7 - Teal")
	message.channel.send("Lane 8 - Orange")	  		
} else {
message.channel.send("You dont have permission to use this command.")
}
} else {
	message.channel.send("cannot do this here")
}
}
}

//RAID REFRESH GREEK/ULTIMUS 6 & 7
if(command === 'refresh') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {	
if(args[0] === "alpha" && args[1] === "4"){
if (message.channel.id === '656230420265828363') { //TB1 EVENTROOM1
	message.channel.bulkDelete(1)
// TB1 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656230665221701682') { //TB1 EVENTROOM2
	// TB1 EVENT ROOM #2
	message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
	
}
if (message.channel.id === '656207417033359371') { //TB2 EVENTROOM1
	message.channel.bulkDelete(1)
// TB2 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656216714723459116') { //TB2 EVENTROOM2
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232194137784333') { //TB3 EVENTROOM1
	message.channel.bulkDelete(1)
// TB3 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232345371672577') { //TB3 EVENTROOM2
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-alpha")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid alpha 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
if(args[0] === "beta" && args[1] === "4"){
if (message.channel.id === '656230420265828363') { //TB1 EVENTROOM1
//***********************************TB1 BETA 4 HERE****************************
//*****************************************************************************
	message.channel.bulkDelete(1)
//TB1 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656230665221701682') { //TB1 EVENTROOM2
	message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656207417033359371') { //TB2 EVENTROOM1
	message.channel.bulkDelete(1)
//TB2 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656216714723459116') { //TB2 EVENTROOM2
	message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232194137784333') { //TB3 EVENTROOM1
message.channel.bulkDelete(1)
//TB3 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232345371672577') { //TB3 EVENTROOM2
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-beta")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid beta 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
if(args[0] === "gamma" && args[1] === "4"){
if (message.channel.id === '656230420265828363') { //TB1 EVENTROOM1
	message.channel.bulkDelete(1)
// TB1 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch();
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4')).catch();;
	};
	if (message.attachments.size > 0) message.delete(5000).catch();;
	  })});
}
if (message.channel.id === '656230665221701682') { //TB1 EVENTROOM2
	message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656207417033359371') {
	message.channel.bulkDelete(1)
// TB2 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656216714723459116') {
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}	
if (message.channel.id === '656232194137784333') {
message.channel.bulkDelete(1)
// TB3 EVENT ROOM #1
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '656232345371672577') {
message.channel.bulkDelete(1)
	message.channel.setName('awaiting-rename').then(() => message.guild.channels.find(c => c.name === 'awaiting-rename').setName("raid-claim-gamma")).catch(console.error);
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid gamma 4'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
if(args[0] === "ultimus" && args[1] === "6"){
if (message.channel.id === '656244057244303361'){
message.channel.bulkDelete(1)
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 6')).catch(err => console.log(err));;
	};
	if (message.attachments.size > 0) message.delete(5000).catch(err => console.log(err));;
	  })});
}
if (message.channel.id === '643229492650704973'){
message.channel.bulkDelete(1)
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 6'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
if(args[0] === "ultimus" && args[1] === "7"){
if (message.channel.id === '634155222490415104') { //TB1 U7ROOM
message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 7'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '634155347736526848') {
message.channel.bulkDelete(1)
//TB1 U7 ROOM
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 7'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '646322699869880340') {
message.channel.bulkDelete(1)
//TB3 U7 ROOM
	message.channel.fetchMessages({limit: 45}).then(collected => { //collected is a Collection
	collected.forEach(message => {
	if (message.content.includes('╔'))  {
	message.delete(480000).catch();
	};
	if (message.content.includes('Lane 1 '))  {
	message.delete(420000).catch();
	};
	if (message.content.includes('Lane 2 '))  {
	message.delete(360000).catch();
	};
	if (message.content.includes('Lane 3 '))  {
	message.delete(320000).catch();
	};
	if (message.content.includes('Lane 4 '))  {
	message.delete(240000).catch();
	};
	if (message.content.includes('Lane 5 '))  {
	message.delete(180000).catch();
	};
	if (message.content.includes('Lane 6 '))  {
	message.delete(120000).catch();
	};
	if (message.content.includes('Lane 7 '))  {
	message.delete(60000).catch();
	};
	if (message.content.includes('Lane 8 '))  {
	message.delete(30000).catch();
	};
	if (message.content.includes('To claim a lane:'))  {												   
	message.delete(510000).then(() => message.channel.send('!raid ultimus 7'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}
} else {
message.channel.send("You do not have permission to use this command.")
}
}

//WAR COMMANDS 
if (message.channel.id === '560885890369585164' || message.channel.id === '602762910728716288' || message.channel.id === '643140863794348072' || message.channel.id === '606119830516400162') { //WAR STRATEGY CHANNELS & test room 
let l = args[0];
let r = args[0];
let f = args[0];
let ffa = args[0]; 
if(command === 'fd1') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'fd2') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'fd3') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'han') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'eng') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'bar') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'rea') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {  
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'arm') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'bri') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {  
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'car') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'sec') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'med') {
if(l === "l"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Left Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(r === "r"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Right Side")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
if(f === "f"){
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Full Clear")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}
if(command === 'ffa') {
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {   
message.channel.bulkDelete(1)
message.channel.send("@everyone Free For All")  
} else {
message.channel.send("You dont have permission to use this command.")
}
}
}//IF USER IS IN WAR CHANNELS

});



client.login(process.env.TOKEN);
