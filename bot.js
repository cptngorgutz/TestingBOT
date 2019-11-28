const Discord = require('discord.js');
const client = new Discord.Client();
// const config = require('./config.json');

//client.on('ready', () => {
//    console.log(`Logged in as ${client.user.tag}!`);
//});

client.on('guildMemberAdd', function(member)
{
	let memberRole = member.guild.roles.find("name", "recruit");
	member.addRole(memberRole);
 	member.guild.channels.get('551566689620197376').send(`Welcome to The Beyonders! ${member}. \nOne of the captains will be with you shortly. \nWe hope you enjoy your stay here. \nPlease post a profile picture in the #profile-images channel. Thankyou.`);
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
	
//**********************TB1 ROLES***************************THIS IS FOR LEADERS**********************//
client.on('message', (message) => {
//                        GADD               BOB                   RAIN                VAYGRANT               BUSTA               CLEAVELANDS              AZYREL           LYLE
const admin = [ '174307382296313857', '212232190358978560', '416730768388390912', '159953251691790336', '354421064815607808', '344950903910170655', '330052499442499585', '222324', '252627', '282930', ]
if(admin.includes(message.author.id)){	
if(message.content.startsWith('!add TB1')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("428986352546349057");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB1 Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB1')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("428986352546349057");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB1 Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}  //******************************************
if(message.content.startsWith('!add recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("476045239719821324");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("RECRUIT Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("476045239719821324"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("RECRUIT Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //**********************************************************************************************************
if(message.content.startsWith('!add tb1recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668741770182677");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("tb1recruit Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove tb1recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668741770182677"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("tb1recruit Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} 
//************************************************************************************************************************************
if(message.content.startsWith('!add TB1team1')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("431511357540532244");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB1team1 Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB1team1')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("431511357540532244");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB1team1 Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //************************************************************************************************************************************
if(message.content.startsWith('!add TB1team2')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("431511377824448512");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB1team2 Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB1team2')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("431511377824448512");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB1team2 Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //************************************************************************************************************************************
if(message.content.startsWith('!add TB1team3')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("431511398057771029");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB1team3 Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB1team3')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("431511398057771029");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB1team3 Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} 
//launch raids
if(message.content.startsWith('!u6')) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Ultimus 6 Launched")  
}

if(message.content.startsWith('!u7')) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Ultimus 7 Launched")  
}

if(message.content.startsWith('!a4')) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Alpha 4 Launched")  
}

if(message.content.startsWith('!b4')) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Beta 4 Launched")  
}

if(message.content.startsWith('!g4')) {
message.channel.bulkDelete(1)
message.channel.send("@everyone Gamma 4 Launched")  
}

//WAR COMMANDS
if (message.content === '!fd1 l' || message.content === '!FD1 L' || message.content === '!fd1 L' || message.content === '!FD1 l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Left Side")  
}
if (message.content === '!fd1 r' || message.content === '!FD1 R' || message.content === '!fd1 R' || message.content === '!FD1 r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Right Side")  
}
if (message.content === '!fd1 f' || message.content === '!FD1 F' || message.content === '!fd1 F' || message.content === '!FD1 f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Full Clear")  
}
if (message.content === '!fd2 l' || message.content === '!FD2 L' || message.content === '!fd2 L' || message.content === '!FD2 l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Left Side")  
}
if (message.content === '!fd2 r' || message.content === '!FD2 R' || message.content === '!fd2 R' || message.content === '!FD2 r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Right Side")  
}
if (message.content === '!fd2 f' || message.content === '!FD2 F' || message.content === '!fd2 F' || message.content === '!FD2 f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Full Clear")  
}
if (message.content === '!fd3 l' || message.content === '!FD3 L' || message.content === '!fd3 L' || message.content === '!FD3 l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Left Side")  
}
if (message.content === '!fd3 r' || message.content === '!FD3 R' || message.content === '!fd3 R' || message.content === '!FD3 r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Right Side")  
}
if (message.content === '!fd3 f' || message.content === '!FD3 F' || message.content === '!fd3 F' || message.content === '!FD3 f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Full Clear")  
}

if (message.content === '!han l' || message.content === '!HAN L' || message.content === '!han L' || message.content === '!HAN l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Left Side")  
}
if (message.content === '!han r' || message.content === '!HAN R' || message.content === '!han R' || message.content === '!HAN r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Right Side")  
}
if (message.content === '!han f' || message.content === '!HAN F' || message.content === '!han F' || message.content === '!HAN f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Full Clear")  
}

if (message.content === '!eng l' || message.content === '!ENG L' || message.content === '!eng L' || message.content === '!ENG l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Left Side")  
}
if (message.content === '!eng r' || message.content === '!ENG R' || message.content === '!eng R' || message.content === '!ENG r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Right Side")  
}
if (message.content === '!eng f' || message.content === '!ENG F' || message.content === '!eng F' || message.content === '!ENG f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Full Clear")  
}

if (message.content === '!bar l' || message.content === '!BAR L' || message.content === '!bar L' || message.content === '!BAR l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Left Side")  
}
if (message.content === '!bar r' || message.content === '!BAR R' || message.content === '!bar R' || message.content === '!BAR r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Right Side")  
}
if (message.content === '!bar f' || message.content === '!BAR F' || message.content === '!bar F' || message.content === '!BAR f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Full Clear")  
}

if (message.content === '!rea l' || message.content === '!REA L' || message.content === '!rea L' || message.content === '!REA l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Left Side")  
}
if (message.content === '!rea r' || message.content === '!REA R' || message.content === '!rea R' || message.content === '!REA r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Right Side")  
}
if (message.content === '!rea f' || message.content === '!REA F' || message.content === '!rea F' || message.content === '!REA f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Full Clear")  
}


if (message.content === '!arm l' || message.content === '!ARM L' || message.content === '!arm L' || message.content === '!ARM l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Left Side")  
}
if (message.content === '!arm r' || message.content === '!ARM R' || message.content === '!arm R' || message.content === '!ARM r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Right Side")  
}
if (message.content === '!arm f' || message.content === '!ARM F' || message.content === '!arm F' || message.content === '!ARM f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Full Clear")  
}


if (message.content === '!bri l' || message.content === '!BRI L' || message.content === '!bri L' || message.content === '!BRI l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Left Side")  
}
if (message.content === '!bri r' || message.content === '!BRI R' || message.content === '!bri R' || message.content === '!BRI r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Right Side")  
}
if (message.content === '!bri f' || message.content === '!BRI F' || message.content === '!bri F' || message.content === '!BRI f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Full Clear")  
}

if (message.content === '!car l' || message.content === '!CAR L' || message.content === '!car L' || message.content === '!CAR l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Left Side")  
}
if (message.content === '!car r' || message.content === '!CAR R' || message.content === '!car R' || message.content === '!CAR r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Right Side")  
}
if (message.content === '!car f' || message.content === '!CAR F' || message.content === '!car F' || message.content === '!CAR f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Full Clear")  
}

if (message.content === '!sec l' || message.content === '!SEC L' || message.content === '!sec L' || message.content === '!SEC l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Left Side")  
}
if (message.content === '!sec r' || message.content === '!SEC R' || message.content === '!sec R' || message.content === '!SEC r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Right Side")  
}
if (message.content === '!sec f' || message.content === '!SEC F' || message.content === '!sec F' || message.content === '!SEC f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Full Clear")  
}


if (message.content === '!med l' || message.content === '!MED L' || message.content === '!med L' || message.content === '!MED l')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Left Side")  
}
if (message.content === '!med r' || message.content === '!MED R' || message.content === '!med R' || message.content === '!MED r')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Right Side")  
}
if (message.content === '!med f' || message.content === '!MED F' || message.content === '!med F' || message.content === '!MED f')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Full Clear")  
}

if (message.content === '!ffa' || message.content === '!FFA' || message.content === '!Ffa' || message.content === '!ffA')	{
message.channel.bulkDelete(1)
message.channel.send("@everyone - Free For All")  
}

else {
//do nothing
}
}
});
//*****************************************************************************************************//
//*******************************************TB2 ROLES*******************************************//
//*****************************************************************************************************//
client.on('message', (message) => {
//                    GADD                   BOB                   SIREN              CLEAVELANDS              RAIN                 VAYGRANT               BUSTA
const admin = [ '174307382296313857', '212232190358978560', '297448131698753538', '344950903910170655', '416730768388390912', '159953251691790336', '354421064815607808', ]
if(admin.includes(message.author.id)){
if(message.content.startsWith('!add recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("476045239719821324");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("RECRUIT Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("476045239719821324"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("RECRUIT Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //**************************************************************************//	
if(message.content.startsWith('!add tb2recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668979008405504");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("tb2recruit Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove tb2recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668979008405504"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("tb2recruit Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //**************************************************************************//	
if(message.content.startsWith('!add TB2')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("433654137486573569");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB2 Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB2')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("433654137486573569"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB2 Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //**************************************************************************//
if(message.content.startsWith('!add TB2team1')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("486675509166735371");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB2team1 Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB2team1')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("486675509166735371"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB2team1 Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}//********************************************************************************//
if(message.content.startsWith('!add TB2team2')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("486675593522446346");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB2team2 Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB2team2')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("486675593522446346");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB2team2 Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //******************************************************************************//
if(message.content.startsWith('!add TB2team3')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("486675606021341204");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB2team3 Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB2team3')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("486675606021341204");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB2team3 Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //****************************************************************************//
else {
//do nothing
}
}
});


//*****************************************************************************************************//
//*******************************************TB3 ROLES*******************************************//
//*****************************************************************************************************//
client.on('message', (message) => {
//                    GADD                   BOB                   SIREN              CLEAVELANDS              RAIN                 VAYGRANT               BUSTA
const admin = [ '174307382296313857', '212232190358978560', '297448131698753538', '344950903910170655', '416730768388390912', '159953251691790336', '354421064815607808', ]
if(admin.includes(message.author.id)){
if(message.content.startsWith('!add recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("476045239719821324");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("RECRUIT Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("476045239719821324"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("RECRUIT Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} 

if(message.content.startsWith('!add tb3recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668979008405504");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("tb2recruit Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove tb3recruit')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643128934187139072"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("tb3recruit Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //**************************************************************************//	
if(message.content.startsWith('!add TB3')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643129087283560448");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB3 Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB3')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643129087283560448"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB3 Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //**************************************************************************//	
if(message.content.startsWith('!add TB3team1')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643129349926682635");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB3team1 Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB3team1')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643129349926682635"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB3team1 Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}//********************************************************************************//
if(message.content.startsWith('!add TB3team2')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643129351549878295");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB3team2 Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB3team2')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643129351549878295");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB3team2 Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //******************************************************************************//
if(message.content.startsWith('!add TB3team3')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643129353873391657");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB3team3 Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(message.content.startsWith('!remove TB3team3')) {
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643129353873391657");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find("name", "leader-logs").sendMessage("TB3team3 Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} //****************************************************************************//
else {
//do nothing
}
}
});
//////////////////////////////////////////////TESTING//////////////////////////////////////
client.on('message', (message) => {
//                    GADD                   BOB                   SIREN              CLEAVELANDS              RAIN                 VAYGRANT               BUSTA
const admin = [ '174307382296313857', '212232190358978560', '297448131698753538', '344950903910170655', '416730768388390912', '159953251691790336', '354421064815607808', ]
if(admin.includes(message.author.id)){
let TB2team1 = message.guild.roles.find("name", "TB2team1");
let TB2team2 = message.guild.roles.find("name", "TB2team2");
let TB2team3 = message.guild.roles.find("name", "TB2team3");
let MENTIONED = message.mentions.members.first();
if(message.content.startsWith('!add TB2team33')) {
if(message.member.roles.has(TB2team1.id) || message.member.roles.has(TB2team2.id)) {
message.channel.send("This user has both team 1&2 roles, team 3 given");
let TB2TEAM3ROLE = message.guild.roles.get("486675606021341204");
MENTIONED.addRole(TB2TEAM3ROLE).catch(console.error);
}
}}
else{
//message.channel.send("This user does not have roles for teams 1&2.");
}}); 





//*****************************************************************************************************//
//**********************************SELF ASSIGNED ROLES***********************************************//
client.on('message', (message) => {
if(message.content.startsWith('!join spoilers')) {
let userToModify = message.member;
let roleToAdd = message.guild.roles.get("554379014433669131");
userToModify.addRole(roleToAdd).catch(console.error);
message.channel.bulkDelete(1)
}

if(message.content.startsWith('!leave spoilers')) {
let userToModify = message.member;
let roleToAdd = message.guild.roles.get("554379014433669131");
userToModify.removeRole(roleToAdd).catch(console.error);
message.channel.bulkDelete(1)
}








//everything above is useful
});


	

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

client.on('message', async msg =>  {
	if(msg.author.bot) return;
if (msg.content === '!raid ultimus 6' || msg.content === '!raid Ultimus 6')	{
	if (msg.channel.id === '600378414897168386' || msg.channel.id === '635982614053912627' || msg.channel.id === '643229492650704973') {
//                           TB1 ULT 6 ROOM                             TB2 ULT 6 ROOM                              TB3 ULT 6 ROOM 
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
	if (msg.channel.id === '646191164885827584' || msg.channel.id === '646191247534456853' || msg.channel.id === '643229344793231370') {
//                           TB1 EVENT ROOM                             TB2 EVENT ROOM                              TB3 EVENT ROOM
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
	if (msg.channel.id === '635982341701107761' || msg.channel.id === '635981718142058506' || msg.channel.id === '00000000000000000') {
//                           TB1 EVENT ROOM                             TB2 EVENT ROOM                              TB3 EVENT ROOM
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
	if (msg.channel.id === '610454201058983956' || msg.channel.id === '610454143907397642' || msg.channel.id === '643229344793231370') {
//                           TB1 EVENT ROOM                             TB2 EVENT ROOM                              TB3 EVENT ROOM 
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

//Champions raid
if (msg.content === '!raid champion 4' || msg.content === '!raid Champion 4')	{
	if (msg.channel.id === '641065837335281710' || msg.channel.id === '641065258861068306' || msg.channel.id === '000000000000000000') {
//                           TB1 EVENT ROOM                             TB2 EVENT ROOM                               TB3 EVENT ROOM
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

//Blitz Predictions 
	if (msg.content === '!blitz') {
	msg.channel.bulkDelete(1)
	msg.channel.send("``Current Blitz Predictions``")
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './Blitz/Blitz.png')] });
	}
	
//MEMES----------------------------------------------------------------------------------------------------------
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

//EVENTS
	if (msg.content === '!event fury') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/furyevent.png')] });
	msg.channel.bulkDelete(1)
}
	if (msg.content === '!event ironman') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/ironmanevent.png')] });
	msg.channel.bulkDelete(1)
}

	if (msg.content === '!event magneto') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/magnetoevent.png')] });	
	msg.channel.bulkDelete(1)
}

	if (msg.content === '!event shuri') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/shurievent.png')] });
	msg.channel.bulkDelete(1)
}

	if (msg.content === '!event starlord') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/starlordevent.png')] });  	
	msg.channel.bulkDelete(1)
}

	if (msg.content === '!event phoenix') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/phoenixevent.png')] }); 
	msg.channel.bulkDelete(1)
}
	if (msg.content === '!event iw' || msg.content === '!event invisiblewoman' || msg.content === '!event invisible woman' || msg.content === '!event suestorm' || msg.content === '!event sue storm') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/invisibleevent.png')] }); 
	msg.channel.bulkDelete(1)
}

//event requirements
	if (msg.content === '!events') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/eventrequirements.png')] });
	msg.channel.bulkDelete(1)
}
//UNIQUE GEAR
	if (msg.content === '!uniques') {
	msg.channel.send({ files:[('.C:\Users\Jamie\discord-greeter-bot', './images/uniques.png')] });
	msg.channel.bulkDelete(1)
	}
	
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
	
//Output commands
	if (msg.content === '!commands2') {
	// inside a command, event listener, etc.
	const testing = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('The Beyonder', 'https://i.imgur.com/KIfYXR4.jpg', 'https://msf.gg/characters/Ultron')
	.setDescription('**Commands List**')
	.setThumbnail('https://i.imgur.com/KIfYXR4.jpg') //./Character Tiers/Ultron.png 
	.addField('``![characterName]``', 'Info sheet on chosen character (ex. !ultron) \n ')
	.addField('``!event [characterName]``', 'Lowest required team for chosen legendary event (ex. !event starlord) \n ', true)
	.addField('``!events``', 'Requirements for all legendary events \n ', true)
	.addField('``!uniques``', ' List of unique gear needed for all characters \n ', true)
	msg.channel.send(testing);
}
	
	
	
	
	
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

client.login(process.env.TOKEN);
