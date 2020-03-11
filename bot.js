const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

//client.on('ready', () => {
//    console.log(`Logged in as ${client.user.tag}!`);
//});

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


//BLITZ PREDICTIONS & UNIQUES (FINISHED)
client.on("message", message => {
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
});


//*****************************************************************************************************//
//**********************************SELF ASSIGNED ROLES***********************************************//
client.on('message', (message) => {
if(message.content.startsWith('?notifications')){
message.channel.bulkDelete(1)
const notify = message.guild.roles.find(r => r.name === "notifications");
if(message.member.roles.has(notify.id)) {
message.channel.send("" + message.author + " Left Notifications");
message.member.removeRole(notify).catch(console.error);
} else {
message.member.addRole(notify).catch(console.error);
message.channel.send("" + message.author + " Joined Notifications");
}
}});

	
//*********************************THIS IS FOR LEADERS**********************//
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

//WAR COMMANDS
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220' || message.channel.id === '606119830516400162') { //WAR CHANNEL & test room 
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
//*****************************************************************************************************//

//USERS LEAVING
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

//*******************TB1/2/3 EVENT + U6/7 REFRESHES****************************
//*****************************************************************************
	client.on('message', (message) => { 
	if(message.author.bot) return;
	//                        GADD               BOB                   RAIN                  SIREN              VAYGRANT               BUSTA               CLEAVELANDS              AZYREL                  LYLE                DAMIAN                WES SNIPES             RADA353
	const admin = [ '174307382296313857', '212232190358978560', '416730768388390912', '297448131698753538', '159953251691790336', '354421064815607808', '344950903910170655', '330052499442499585', '312361420547162123', '593958506885808129', '434740962389131274', '475479797313699841', ]
	if(admin.includes(message.author.id)){

//***************************TB1 EVENT REFRESH ROOMS 1-2*******************//
//***********************************TB1 ALPHA 4 HERE****************************
//***************************************************************************
	if (message.channel.id === '656230420265828363') {
	if (message.content === '!refresh alpha 4' || message.content === '!Refresh alpha 4' || message.content === '!Refresh Alpha 4' || message.content === '!refresh Alpha 4'){
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
}}
// TB1 EVENT ROOM #2
if (message.channel.id === '656230665221701682') {
	if (message.content === '!refresh alpha 4' || message.content === '!Refresh alpha 4' || message.content === '!Refresh Alpha 4' || message.content === '!refresh Alpha 4'){
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
}}
//***********************************TB1 BETA 4 HERE****************************
//*****************************************************************************
	if (message.channel.id === '656230420265828363') {
	if (message.content === '!refresh beta 4' || message.content === '!Refresh beta 4' || message.content === '!Refresh Beta 4' || message.content === '!refresh Beta 4'){
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
	}}
// TB1 EVENT ROOM #2
if (message.channel.id === '656230665221701682') {
	if (message.content === '!refresh beta 4' || message.content === '!Refresh beta 4' || message.content === '!Refresh Beta 4' || message.content === '!refresh Beta 4'){
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
}}
 //***********************************TB1 GAMMA 4 HERE****************************
//*****************************************************************************
	if (message.channel.id === '656230420265828363') {
	if (message.content === '!refresh gamma 4' || message.content === '!Refresh gamma 4' || message.content === '!Refresh Gamma 4' || message.content === '!refresh Gamma 4'){
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
}}
//TB1 EVENT ROOM #2
	if (message.channel.id === '656230665221701682') {
	if (message.content === '!refresh gamma 4' || message.content === '!Refresh gamma 4' || message.content === '!Refresh Gamma 4' || message.content === '!refresh Gamma 4'){
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
}}
//***********************************TB1 ULIMTUS 7 ****************************
//*****************************************************************************
	if (message.channel.id === '634155222490415104') {		
	if (message.content === '!refresh ultimus 7' || message.content === '!Refresh ultimus 7' || message.content === '!Refresh Ultimus 7' || message.content === '!refresh Ultimus 7'){
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
}}


//##############################################################################################################################################################################

//***************************TB2 EVENT REFRESH ROOMS 1-2*******************//
//***********************************ALPHA 4 HERE****************************
//***************************************************************************
	if (message.channel.id === '656207417033359371') {
	if (message.content === '!refresh alpha 4' || message.content === '!Refresh alpha 4' || message.content === '!Refresh Alpha 4' || message.content === '!refresh Alpha 4'){
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
}}
// TB2 EVENT ROOM #2
if (message.channel.id === '656216714723459116') {
	if (message.content === '!refresh alpha 4' || message.content === '!Refresh alpha 4' || message.content === '!Refresh Alpha 4' || message.content === '!refresh Alpha 4'){
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
}}
//***********************************BETA 4 HERE****************************
//*****************************************************************************
	if (message.channel.id === '656207417033359371') {
	if (message.content === '!refresh beta 4' || message.content === '!Refresh beta 4' || message.content === '!Refresh Beta 4' || message.content === '!refresh Beta 4'){
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
}}
// TB2 EVENT ROOM #2
if (message.channel.id === '656216714723459116') {
	if (message.content === '!refresh beta 4' || message.content === '!Refresh beta 4' || message.content === '!Refresh Beta 4' || message.content === '!refresh Beta 4'){
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
}}

//***********************************GAMMA 4 HERE****************************
//*****************************************************************************
	if (message.channel.id === '656207417033359371') {
	if (message.content === '!refresh gamma 4' || message.content === '!Refresh gamma 4' || message.content === '!Refresh Gamma 4' || message.content === '!refresh Gamma 4'){
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
}}
//TB2 EVENT ROOM #2
	if (message.channel.id === '656216714723459116') {
	if (message.content === '!refresh gamma 4' || message.content === '!Refresh gamma 4' || message.content === '!Refresh Gamma 4' || message.content === '!refresh Gamma 4'){
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
}}
//***********************************TB2 ULIMTUS 6 ****************************
//*****************************************************************************
//TB2 UL6 ROOM
	if (message.channel.id === '656244057244303361'){
	if (message.content === '!refresh ultimus 6' || message.content === '!Refresh ultimus 6' || message.content === '!Refresh Ultimus 6' || message.content === '!refresh Ultimus 6'){
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
}}
//***********************************TB2 ULIMTUS 7 ****************************
//*****************************************************************************
	if (message.channel.id === '634155347736526848') {
	if (message.content === '!refresh ultimus 7' || message.content === '!Refresh ultimus 7' || message.content === '!Refresh Ultimus 7' || message.content === '!refresh Ultimus 7'){
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
}}


//##############################################################################################################################################################################

//***************************TB3 EVENT REFRESH ROOMS 1-2*******************//
//***********************************TB3 ALPHA 4 HERE****************************
//***************************************************************************
	if (message.channel.id === '656232194137784333') {
	if (message.content === '!refresh alpha 4' || message.content === '!Refresh alpha 4' || message.content === '!Refresh Alpha 4' || message.content === '!refresh Alpha 4'){
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
}}
// TB3 EVENT ROOM #2
if (message.channel.id === '656232345371672577') {
	if (message.content === '!refresh alpha 4' || message.content === '!Refresh alpha 4' || message.content === '!Refresh Alpha 4' || message.content === '!refresh Alpha 4'){
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
}}
//***********************************TB3 BETA 4 HERE****************************
//*****************************************************************************
	if (message.channel.id === '656232194137784333') {
	if (message.content === '!refresh beta 4' || message.content === '!Refresh beta 4' || message.content === '!Refresh Beta 4' || message.content === '!refresh Beta 4'){
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
}}
// TB3 EVENT ROOM #2
if (message.channel.id === '656232345371672577') {
	if (message.content === '!refresh beta 4' || message.content === '!Refresh beta 4' || message.content === '!Refresh Beta 4' || message.content === '!refresh Beta 4'){
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
}}
//***********************************TB3 GAMMA 4 HERE****************************
//*****************************************************************************
	if (message.channel.id === '656232194137784333') {
	if (message.content === '!refresh gamma 4' || message.content === '!Refresh gamma 4' || message.content === '!Refresh Gamma 4' || message.content === '!refresh Gamma 4'){
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
}}
//TB3 EVENT ROOM #2
	if (message.channel.id === '656232345371672577') {
	if (message.content === '!refresh gamma 4' || message.content === '!Refresh gamma 4' || message.content === '!Refresh Gamma 4' || message.content === '!refresh Gamma 4'){
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
}}
//***********************************TB3 ULIMTUS 6 ****************************
//*****************************************************************************
//TB3 UL6 ROOM
	if (message.channel.id === '643229492650704973'){
	if (message.content === '!refresh ultimus 6' || message.content === '!Refresh ultimus 6' || message.content === '!Refresh Ultimus 6' || message.content === '!refresh Ultimus 6'){
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
}}
//***********************************TB3 ULIMTUS 7 ****************************
//*****************************************************************************
	if (message.channel.id === '646322699869880340') {
	if (message.content === '!refresh ultimus 7' || message.content === '!Refresh ultimus 7' || message.content === '!Refresh Ultimus 7' || message.content === '!refresh Ultimus 7') {
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
}}
}

});



client.on('message', async msg =>  {
if (msg.content === '!raid ultimus 6' || msg.content === '!raid Ultimus 6')	{
	if (msg.channel.id === '656244057244303361' || msg.channel.id === '643229492650704973') {
//                           TB2 ULT 6 ROOM                             TB3 ULT 6 ROOM                       
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Ultimus6.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
	}}

	if (msg.content === '!raid ultimus 7' || msg.content === '!raid Ultimus 7')	{
	if (msg.channel.id === '634155222490415104' || msg.channel.id === '634155347736526848' || msg.channel.id === '646322699869880340') {
//                           TB1 ULT 7 ROOM                             TB2 ULT 7 ROOM                              TB3 ULT 7 ROOM
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Ultimus7.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
}
	}

	if (msg.content === '!raid alpha 4' || msg.content === '!raid Alpha 4')	{
	if (msg.channel.id === '656230420265828363' || msg.channel.id === '656230665221701682' || msg.channel.id === '656207417033359371' || msg.channel.id === '656216714723459116' || msg.channel.id === '656232194137784333' || msg.channel.id === '656232345371672577' || msg.channel.id === '643229344793231370') {
//                           TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2                           TB3 ALPHA ROOM 
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Alpha4.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
}
}

if (msg.content === '!raid beta 4' || msg.content === '!raid Beta 4')	{
	if (msg.channel.id === '656230420265828363' || msg.channel.id === '656230665221701682' || msg.channel.id === '656207417033359371' || msg.channel.id === '656216714723459116' || msg.channel.id === '656232194137784333' || msg.channel.id === '656232345371672577' || msg.channel.id === '651159388685336587') {
//                           TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2 TB3 room 
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Beta4.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
}}

	if (msg.content === '!raid gamma 4' || msg.content === '!raid Gamma 4')	{
	if (msg.channel.id === '656230420265828363' || msg.channel.id === '656230665221701682' || msg.channel.id === '656207417033359371' || msg.channel.id === '656216714723459116' || msg.channel.id === '656232194137784333' || msg.channel.id === '656232345371672577' || msg.channel.id === '655246084418830346') {
//                           TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2                            TB3 GAMMA ROOM :/
	msg.channel.bulkDelete(100)
    msg.channel.send('```To claim a lane: \n Put an 👌 emoji on the lane of choice.```');
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/Gamma4.png')] });
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 1 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 2 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  	
	msg.channel.send("``` ╔═══════════════╗ \n ║ Strike Team 3 ║  \n ╚═══════════════╝ ```")
    msg.channel.send("Lane 1 - Blue")
	msg.channel.send("Lane 2 - Yellow") 
	msg.channel.send("Lane 3 - Red")  
	msg.channel.send("Lane 4 - Green")  
	msg.channel.send("Lane 5 - Purple")  
	msg.channel.send("Lane 6 - White")  
	msg.channel.send("Lane 7 - Teal")
	msg.channel.send("Lane 8 - Orange")	  		
}}

//MEMES----------------------------------------------------------------------------------------------------------

if (msg.content === '!vaystfu') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setImage('https://i.imgur.com/tVcDb5u.gif') 
	msg.channel.send(exampleEmbed);
}




if (msg.content === '!sad') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**You made Cap cry with your bad luck**')
	.attachFiles(['./Misc/sadgif.gif'])
	.setImage('attachment://sadgif.gif')
	msg.channel.send(exampleEmbed);
}

if (msg.content === '!happy') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**Cap appreciates your luck**')
	.attachFiles(['./Misc/happygif.gif'])
	.setImage('attachment://happygif.gif')
	msg.channel.send(exampleEmbed);
}

if (msg.content === '!nevermisses') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**You forgot one thing, he never misses**')
	.attachFiles(['./Misc/nevermissgif.gif'])
	.setImage('attachment://nevermissgif.gif')
	msg.channel.send(exampleEmbed);
}

if (msg.content === '!spideydance') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**When the camera keeps on rolling...**')
	.attachFiles(['./Misc/spideygif.gif'])
	.setImage('attachment://spideygif.gif')
	msg.channel.send(exampleEmbed);
}

if (msg.content === '!dafuq') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq.gif'])
	.setImage('attachment://dafuq.gif')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!dafuq1') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq1.jpg'])
	.setImage('attachment://dafuq1.jpg')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!dafuq2') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq2.jpg'])
	.setImage('attachment://dafuq2.jpg')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!dafuq3') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
//	.setDescription('?????????????????????')
	.attachFiles(['./Misc/dafuq3.jpg'])
	.setImage('attachment://dafuq3.jpg')
	msg.channel.send(exampleEmbed);
}

//--------------------------------------------------------------------------------------------------------------
});

//EVENTS
client.on("message", message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let fury = args[0]; 
let ironman = args[0]; 
let magneto = args[0]; 
let shuri = args[0];  
let starlord = args[0]; 
let phoenix = args[0]; 
let iw = args[0];

//EVERY CHARACTER
if(command === 'event') {
if(fury === "fury"){
message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/furyevent.png')] });
}
if(ironman === "ironman"){
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/ironmanevent.png')] });
}
if(magneto === "magneto"){
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/magnetoevent.png')] });	
}
if(shuri === "shuri"){
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/shurievent.png')] });
}
if(starlord === "starlord"){
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/starlordevent.png')] });  	
}
if(phoenix === "phoenix"){
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/phoenixevent.png')] }); 
}
if(iw === "iw" || iw === "invisiblewoman" || iw === "invisiblewoman" || iw === "suestorm"){
	message.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/invisibleevent.png')] }); 
}
}
});

//event requirements
client.on('message', async msg =>  {
	if (msg.content === '!events') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/eventrequirements.png')] });
	msg.channel.bulkDelete(1)
}
//UNIQUE GEAR
//	if (msg.content === '!uniques') {
//	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/uniques.png')] });
//	msg.channel.bulkDelete(1)
//	}
	
//------------------------------------------------//
//Character Tiers
//------------------------------------------------//
	if (msg.content === '!ultron' || msg.content === '!Ultron') {
	msg.channel.bulkDelete(1)
	msg.channel.send({ files:[('.C:\Users\User\discord-greeter-bot', './Character Tiers/Ultron.png')] });
	}
	
	if (msg.content === '!ultron2') {
	msg.channel.bulkDelete(1)
	msg.channel.send({ files:[('.C:\Users\User\discord-greeter-bot', './Character Tiers/Ultron.png')] });
	}
	
	if (msg.content === '!juggernaut' || msg.content === '!Juggernaut') {
	msg.channel.bulkDelete(1)
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Juggernaut.png')] });
	}
	
	if (msg.content === '!phoenix' || msg.content === '!Phoenix') {
	msg.channel.bulkDelete(1)
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Phoenix.png')] });
	}

	if (msg.content === '!magneto' || msg.content === '!Magneto') {
	msg.channel.bulkDelete(1)
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Magneto.png')] });
	}
	
	if (msg.content === '!pyro' || msg.content === '!Pyro') {
	msg.channel.bulkDelete(1)
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Pyro.png')] });
	}
	
	if (msg.content === '!starlord' || msg.content === '!Starlord') {
	msg.channel.bulkDelete(1)
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/Starlord.png')] });
	}
	
	if (msg.content === '!minnerva' || msg.content === '!Minnerva') {
	msg.channel.bulkDelete(1)
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Character Tiers/MinnErva.png')] });
	}
	
/////////////
	
//COMMANDS LIST
client.on('message', message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
if(command === 'admincommands') {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Admin Commands List** \n \n**RAIDS:** \n**!u6/u7/a4/b4/g4** \n(Only works in raid chat) \nPings @ everyone \n[chosenraid] launched \n \n**!raid** \n**ultimus 6/7 or** \n**alpha/beta/gamma 4**\n(Only works in claim channels) \nSends new claims for [chosenraid] \n\n**!refresh** \n**alpha/beta/gamma 4** \n(Only works in event/greek channels) \nSlowly deletes old claims and sends out new raid claims for [chosenraid] (takes approx 8 minutes)")
	.setThumbnail('https://i.imgur.com/9eCZztr.png') 
	message.channel.send(exampleEmbed);
}
});



	
	
	
///////////////////////////////////////////////////delete lines////////////////////////////////////////////////////   
//*****************************************************************************************************************
//                        GADD                     BOB                    RAIN                VAYGRANT               BUSTA                SIREN                CLEAVELANDS           GMONKEY                  AZRYEL               LYLE
	const admins = [ '174307382296313857', '212232190358978560', '416730768388390912', '159953251691790336', '354421064815607808', '297448131698753538', '344950903910170655', '205608603074297866', '330052499442499585', '312361420547162123', ]
	if(admins.includes(msg.author.id)){
	if (msg.content === '!delete 5') {
    msg.channel.bulkDelete(5)
	} else{
		//do nothing
	}}

//                        GADD                     BOB                    RAIN                VAYGRANT               BUSTA                SIREN                CLEAVELANDS           GMONKEY                  AZRYEL               LYLE 
	const admins1 = [ '174307382296313857', '212232190358978560', '416730768388390912', '159953251691790336', '354421064815607808', '297448131698753538', '344950903910170655', '205608603074297866', '330052499442499585', '312361420547162123', ]
	if(admins1.includes(msg.author.id)){
	if (msg.content === '!delete 10') {
    msg.channel.bulkDelete(10)
	} else{
		//do nothing
	}}

//                        GADD                     BOB                    RAIN                VAYGRANT               BUSTA                SIREN                CLEAVELANDS           GMONKEY                  AZRYEL               LYLE 
	const admins2 = [ '174307382296313857', '212232190358978560', '416730768388390912', '159953251691790336', '354421064815607808', '297448131698753538', '344950903910170655', '205608603074297866', '330052499442499585', '312361420547162123', ]
	if(admins2.includes(msg.author.id)){
	if (msg.content === '!delete 20') {
    msg.channel.bulkDelete(20)
	} else{
		//do nothing
	}}

//                        GADD                     BOB                    RAIN                VAYGRANT               BUSTA                SIREN                CLEAVELANDS           GMONKEY                  AZRYEL               LYLE 
	const admins3 = [ '174307382296313857', '212232190358978560', '416730768388390912', '159953251691790336', '354421064815607808', '297448131698753538', '344950903910170655', '205608603074297866', '330052499442499585', '312361420547162123', ]
	if(admins3.includes(msg.author.id)){
	if (msg.content === '!delete 50') {
    msg.channel.bulkDelete(50)
	} else{
		//do nothing
	}}

//                        GADD                     BOB                    RAIN                VAYGRANT               BUSTA                SIREN                CLEAVELANDS           GMONKEY                  AZRYEL               LYLE 
	const admins4 = [ '174307382296313857', '212232190358978560', '416730768388390912', '159953251691790336', '354421064815607808', '297448131698753538', '344950903910170655', '205608603074297866', '330052499442499585', '312361420547162123', ]
	if(admins4.includes(msg.author.id)){
	if (msg.content === '!delete 100') {
    msg.channel.bulkDelete(100)
	} else{
		//do nothing
	}}

}
);



//AWAY NOTES
client.on("message", async message => {
if(message.content.startsWith('!away')) {
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
});

//COMMANDS
client.on('message', message => {	
if (message.content === '!utorjgn') {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Commands List** \n \n**Add away note                     ** ```!away``` *[reason for being away]* \n*(Removes away message for privacy and informs captains of your circumstances)* \n \n**Uniques                        ** ```!uniques``` *(Infographic showing uniques list)* \n \n**Blitz Predictions                ** ```!blitz``` *(Shows current blitz predictions, !blitz2 for orb assault blitz)* \n \n**Legendary Events                        ** ```!event``` *[legendary name e.g shuri]* \n \n**Character Infographic                         ** ```![charactername]``` ")
	message.channel.send(exampleEmbed);
}
});



client.login(process.env.TOKEN);
