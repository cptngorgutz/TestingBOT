const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
client.setMaxListeners(40);
const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  // "ready" isn't really ready. We need to wait a spell.
  wait(1000);
  
client.guilds.forEach(g => {
g.fetchInvites().then(guildInvites => {
invites[g.id] = guildInvites;
});
});
});
//USERS JOINING
client.on('guildMemberAdd', function(member) {
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
	  // To compare, we need to load the current invite list.
  member.guild.fetchInvites().then(guildInvites => {
    // This is the *existing* invites for the guild.
    const ei = invites[member.guild.id];
    // Update the cached invites for the guild.
    invites[member.guild.id] = guildInvites;
    // Look through the invites, find the one for which the uses went up.
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    // This is just to simplify the message being sent below (inviter doesn't have a tag property)
    const inviter = client.users.get(invite.inviter.id);
    // Get the log channel (change to your liking)
    const logChannel = member.guild.channels.find(c => c.name === 'actual-logs');
    // A real basic message with the information we need. 
//    logChannel.send(`${member.user.tag} joined using  code ${invite.code} from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`);
let memberRole = member.guild.roles.find(r => r.name === "recruit");
let TB1object = member.guild.roles.find(r => r.name === "TB1 Captain");
let TB2object = member.guild.roles.find(r => r.name === "TB2 Captain");
let TB3object = member.guild.roles.find(r => r.name === "TB3 Captain");
if (invite.code === "3YYSWYP") { //TB1 INVITE CODE
member.addRole(memberRole);
logChannel.send(`${TB1object} ` + member + " is looking to join TB1");
}
if (invite.code === "bC4dBS3") { //TB2 INVITE CODE
logChannel.send(`${TB2object} ` + member + " is looking to join TB2");
member.addRole(memberRole);
}
if (invite.code === "qAmtPAZ") { //TB3 INVITE CODE
logChannel.send(`${TB3object} ` + member + " is looking to join TB3");
member.addRole(memberRole);
}
});
	
});	 

//USERS LEAVING
client.on('guildMemberRemove', function(member)
{
	member.guild.channels.get('617707484626288672').send({embed: {
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

//**MEMES**
client.on('message', msg => {
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
});

//**DELETE TEXT**         
client.on('message', msg => {
//                        GADD                     BOB                    RAIN                VAYGRANT               BUSTA                SIREN                CLEAVELANDS           GMONKEY                  AZRYEL               LYLE
	const admins = [ '174307382296313857', '212232190358978560', '416730768388390912', '159953251691790336', '354421064815607808', '297448131698753538', '344950903910170655', '205608603074297866', '330052499442499585', '312361420547162123', ]
	if(admins.includes(msg.author.id)){
	if (msg.content === '!delete 5') {
    msg.channel.bulkDelete(5)
	} else{
		//do nothing
	}}
	});

//***************************************************************************************CHARACTER TEAMS

//ASGARDIANS
client.on('message', msg => {
if (msg.content === '!Asgardians') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**ASGARDIANS** \n<:heimdall:661370019325935666> **Heimdall** \nHeimdall's speed is: 100 \n \n<:hela:661370019317284880> **Hela** \nHela's base speed is: 110, but her effective turn 1 speed is \n121.11 with Loki. \n \n<:loki:661370019145449473> **Loki** \nLoki's base speed is: 115, but his effective turn 1 speed is \n133.75 \n \n<:sif:661370019300638737> **Sif** \nSif's speed is: 108 \n \n<:thor:661370019279667248> **Thor** \nThor's base speed is: 90, but with Black Widow using her \nturn 1 special, his effective turn 1 speed is 102.27. \n \n<:greg:661392103900839936> **Undead Asgardian** \nUndead Asgardian's base speed is: 105, but his effective \nturn 1 speed is 130.")
	msg.channel.send(exampleEmbed);
}});


//********************************************************************************************************
//***************************************************************************************SINGLE CHARACTERS
client.on('message', msg => {	
//ULTRON
if (msg.content === '!Ultron Basic 7') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('Ultron', 'https://i.imgur.com/GMx4onc.png', 'https://msf.gg/characters/Ultron')
	.setDescription('**Disintegration Beam • Level 7**')
	.attachFiles(['./Misc/UltronBasic.png'])
	.setThumbnail('attachment://UltronBasic.png')
	.addField('Attack primary target for 340% damage + steal 2 positive effects + clear Taunt. \nLevel Required: 65', '⠀')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Ultron Basic 6') {
	// inside a command, event listener, etc.
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('Ultron', 'https://i.imgur.com/GMx4onc.png', 'https://msf.gg/characters/Ultron')
	.setDescription('**Disintegration Beam • Level 6**')
	.attachFiles(['./Misc/UltronBasic.png'])
	.setThumbnail('attachment://UltronBasic.png')
	.addField('Attack primary target for 270% damage + steal 2 positive effects + clear Taunt. \nLevel Required: 55', '⠀')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Ultron Basic 5') {
	// inside a command, event listener, etc.
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('Ultron', 'https://i.imgur.com/GMx4onc.png', 'https://msf.gg/characters/Ultron')
	.setDescription('**Disintegration Beam • Level 5**')
	.setThumbnail('https://i.imgur.com/MvOD9QI.png')
	.addField('Attack primary target for 230% damage + steal 2 positive effects + clear Taunt. \nLevel Required: 45', '⠀')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Ultron Basic 4') {
	// inside a command, event listener, etc.
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('Ultron', 'https://i.imgur.com/GMx4onc.png', 'https://msf.gg/characters/Ultron')
	.setDescription('**Disintegration Beam • Level 4**')
	.attachFiles(['./Misc/UltronBasic.png'])
	.setThumbnail('attachment://UltronBasic.png')
	.addField('Attack primary target for 230% damage + 75% chance to copy 2 positive effects. \nLevel Required: 35', '⠀')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Ultron Basic 3') {
	// inside a command, event listener, etc.
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('Ultron', 'https://i.imgur.com/GMx4onc.png', 'https://msf.gg/characters/Ultron')
	.setDescription('**Disintegration Beam • Level 3**')
	.attachFiles(['./Misc/UltronBasic.png'])
	.setThumbnail('attachment://UltronBasic.png')
	.addField('Attack primary target for 180% damage + 75% chance to copy 2 positive effects. \nLevel Required: 25', '⠀')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Ultron Basic 2') {
	// inside a command, event listener, etc.
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('Ultron', 'https://i.imgur.com/GMx4onc.png', 'https://msf.gg/characters/Ultron')
	.setDescription('**Disintegration Beam • Level 2**')
	.attachFiles(['./Misc/UltronBasic.png'])
	.setThumbnail('attachment://UltronBasic.png')
	.addField('Attack primary target for 140% damage + 50% chance to copy 2 positive effects. \nLevel Required: 15', '⠀')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Ultron Basic 1') {
	// inside a command, event listener, etc.
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('Ultron', 'https://i.imgur.com/GMx4onc.png', 'https://msf.gg/characters/Ultron')
	.setDescription('**Disintegration Beam • Level 1**')
	.attachFiles(['./Misc/UltronBasic.png'])
	.setThumbnail('attachment://UltronBasic.png')
	.addField('Attack primary target for 100% damage + 50% chance to copy 2 positive effects. \nLevel Required: 1', '⠀')
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Ultron Basic Code') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setAuthor('Ultron', 'https://i.imgur.com/GMx4onc.png', 'https://msf.gg/characters/Ultron')
	.setDescription('**Ultron Basic**')
	.attachFiles(['./Misc/UltronBasic.png'])
	.setThumbnail('attachment://UltronBasic.png')
	.addField('Basic Ability:', 'Target = Crosshair Selection. \nOwn Ability Damage +100% for next (Action).\n(Action) Attack each Target. (Then remove dead units from Target pool.) \nSKIP: \n(Action) 1 time(s) for each Target: Remove Taunt. \nRecipient = Self. \n(Action) 2 time(s) for each Target: Choose a new one of its Buffs (except Taunt): 50% chance to copy it to Recipient. For each successful copy, 0% chance to remove the original. \nProcess on-attack assists. \nProcess Counterattacks.')
	.addBlankField()
	.addField('Assist:', 'Target = Crosshair Selection. Own Ability Damage +61% for next (Action). Own Piercing +5% for next (Action). (Action) Attack each Target. (Then remove dead units from Target pool.) SKIP:  (Action) 1 time(s) for each Target: Remove Taunt. ', true)
	.addBlankField()
	.addField('Counter:', 'Target = Attacker. Own Ability Damage +61% for next (Action). Own Piercing +5% for next (Action). (Action) Attack each Target. (Then remove dead units from Target pool.) SKIP: (Action) 1 time(s) for each Target: Remove Taunt.', true)
	msg.channel.send(exampleEmbed);
}

//YO-YO
if (msg.content === '!yo-yo kit') {
}	
if (msg.content === '!yo-yo T4') { //YOYO T4S	
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Basic)** \n \n**Rapid Strikes • T4 Upgrade** \n \nAttack primary target for: \n**200% -> 230%** damage + clear counter. \n**70% -> 100%** chance for an assist from a random INHUMAN ally. \nThis attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/6qzPGoI.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Special)** \n \n**Flurry • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack Primary target for **150% -> 170%** damage + \nBonus attack 2 times for **150% -> 170%** damage. \nRepeat this attack on **2 -> 3** additional random targets. \nThis attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/XSiALFR.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Ultimate)** \n \n**Run the Gauntlet • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **220% -> 270%** damage. \nGrant 1 ability energy to all INHUMAN allies.")
	.setThumbnail('https://i.imgur.com/FW7RfYR.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Passive)** \n \n**Swift Protector • T4 Upgrade** \n \nOn enemy turn, if this character has no other PROTECTOR allies, \napply Offence Down to that enemy. This cannot be dodged. \nOn ally non-MINION S.H.I.E.L.D or INHUMAN turn, 50% chance \nto apply Evade to that ally. \n \n**On Spawn:** \nApply Defence Up to self and all non-MINION S.H.I.E.L.D or INHUMAN allies. \nWhena  non-MINION S.H.I.E.L.D or INHUMAN ally drops below \n50% Health, apply Defence up to that ally. \n \n**Stats:** \nGain **20% -> 25%** Dodge chance. \n**Gain 10% Focus per non-MINION S.H.I.E.L.D & INHUMAN ally.**")
	.setThumbnail('https://i.imgur.com/hCaEsPN.png') 
	msg.channel.send(exampleEmbed4);
}

//---------------------------------------
//AIM ASSAULTER
if (msg.content === '!aimassault kit' || msg.content === '!aimassaulter kit') { //AIMASSAULT T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Basic)** \n \n**Submachine Gun • T4 Upgrade** \n \nAttack primary target for **140% -> 160%** damage + \napply Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/M2II5ei.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Special)** \n \n**Hyperdose • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nIf this character has a negative effect, Bonus attack the primary \ntarget for **100% -> 125%** per negative effect on the target. \nGain Speed Up for 4 turns.")
	.setThumbnail('https://i.imgur.com/nNIMVDs.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Passive)** \n \n**Juicer • T4 Upgrade** \n \nOn Turn, change Speed Bar by **+10% -> +20%** for self \nand adjacent A.I.M. allies. \nGain **+10% -> +15%** Damage and +10% Max Health.")
	.setThumbnail('https://i.imgur.com/6b9TZXU.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimassault basic' || msg.content === '!aimassaulter basic') { //AIMASSAULT BASIC
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Basic)** \n \n**Submachine Gun • T4 Upgrade** \n \nAttack primary target for **140% -> 160%** damage + \napply Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/M2II5ei.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!aimassault special' || msg.content === '!aimassaulter special') { //AIMASSAULT SPECIAL
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Special)** \n \n**Hyperdose • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nIf this character has a negative effect, Bonus attack the primary \ntarget for **100% -> 125%** per negative effect on the target. \nGain Speed Up for 4 turns.")
	.setThumbnail('https://i.imgur.com/nNIMVDs.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!aimassault ultimate' || msg.content === '!aimassaulter ultimate') { //AIMASSAULT ULTIMATE
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Passive)** \n \n**Juicer • T4 Upgrade** \n \nOn Turn, change Speed Bar by **+10% -> +20%** for self \nand adjacent A.I.M. allies. \nGain **+10% -> +15%** Damage and +10% Max Health.")
	.setThumbnail('https://i.imgur.com/6b9TZXU.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimassault speed' || msg.content === '!aimassaulter speed') { //AIMASSAULT SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nAim Assaulter's speed is: 118")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aimassault unlock' || msg.content === '!aimassaulter unlock' || msg.content === '!aimassault farm' || msg.content === '!aimassaulter farm') { //AIM ASSAULY UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nAim Assaulter is farmable in: \n**Heroes Campaign \nNode 5-3**")
	msg.channel.send(speedEmbed); 
}
//AIM INFECTOR
if (msg.content === '!aiminfect kit' || msg.content === '!aiminfector kit') { //AIMINFECTOR T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Basic)** \n \n**Puncture • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Special)** \n \n**Biohazard • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Passive)** \n \n**Metabolism • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aiminfect basic' || msg.content === '!aiminfector basic') { //AIMINFECTOR T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Basic)** \n \n**Puncture • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!aiminfect special' || msg.content === '!aiminfector special') { //AIMINFECTOR T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Special)** \n \n**Biohazard • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!aiminfect ultimate' || msg.content === '!aiminfector ultimate') { //AIMINFECTOR T4S
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Passive)** \n \n**Metabolism • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aiminfect speed' || msg.content === '!aiminfector speed') { //AIMINFECTOR SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \nA.I.M. Infector's base speed is **104**, but he gains: \n+5% to +%10 Speed after any character's first turn. \nWith level 4 passive, that makes his speed after turn one **114.4**. \nWith level 4 passive, **Scientist Supreme**, and 3 other AIM characters: \nHis effective turn 1 speed is **108.16**. \nWith an adjacent **A.I.M. Assaulter** with level 4 passive and no **Scientist Supreme**, **A.I.M. Infector's** effective turn 1 speed is usually **115.11**. /nWith **Assaulter** and his level 5 passive or level 4 passive along with \n**Scientist Supreme**, his effective turn 1 speed is **118**.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aiminfect unlock' || msg.content === '!aiminfector unlock' || msg.content === '!aiminfect farm' || msg.content === '!aiminfector farm') { //AIM ASSAULY UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \nAim Infector is farmable in: \n**Orbs: \nPremium, Basic and Raid Orb.**")
	msg.channel.send(speedEmbed); 
}
//AIM MONSTROSITY
if (msg.content === '!aimmon kit' || msg.content === '!aimmonstrosity kit') { //AIMMONSTROSITY T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Basic)** \n \n**Bash • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Special)** \n \n**Sudden Evolution • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Passive)** \n \n**Growth Spurt • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimmon basic' || msg.content === '!aimmonstrosity basic') { //AIMMONSTROSITY T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Basic)** \n \n**Bash • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!aimmon special' || msg.content === '!aimmonstrosity special') { //AIMMONSTROSITY T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Special)** \n \n**Sudden Evolution • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!aimmon ultimate' || msg.content === '!aimmonstrosity ultimate') { //AIMMONSTROSITY T4S
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Passive)** \n \n**Growth Spurt • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimmon speed' || msg.content === '!aimmonstrosity speed') { //AIMMONSTROSITY SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \nA.I.M. Monstrosity's base speed is 77, but his effective turn 1 speed with an adjacent A.I.M. Assaulter is 85.33 with their level 4 passive, \nor 95.18 with their level 5 passive.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aimmon unlock' || msg.content === '!aimmonstrosity unlock' || msg.content === '!aimmon farm' || msg.content === '!aimmonstrosity farm') { //AIMMONSTROSITY UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \nAim Monstrosity is farmable in: \n**Orbs: \nPremium & Basic. \n \nBlitz: \nBlitz orb & blitz store**")
	msg.channel.send(speedEmbed); 
}
//AIM RESEARCHER
if (msg.content === '!aimrea kit' || msg.content === '!!aimresearcher kit') { //AIMRESEARCHER T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Basic)** \n \n**Wounding Shot • T4 Upgrade** \n \nAttack primary target for **250% -> 280%** damage. \n**90% -> 100%** chance to apply Offense Down for 1 turn..")
	.setThumbnail('https://i.imgur.com/qThfwy9.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Special)** \n \n**Surgery Drone • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nHeal lowest Health ally and their adjacent allies for \n**6000 -> 7000** Health + 15% of this character's Max Health + \n**75% -> 100%** chance to flip Bleed on lowest Health ally and their adjacent allies.")
	.setThumbnail('https://i.imgur.com/Y2X5nS8.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Passive)** \n \n**Antidote • T4 Upgrade** \n \n**On Turn** \n**75% -> 100%** chance to choose 1 random ally to apply 1 random positive effect from this list: Offense Up, Defense Up, Speed Up, Regeneration, Deathproof, Deflect. \nIf ally is A.I.M., then apply 2 random positive effects from the list. \n \nWhen a negative effect is applied to an A.I.M. ally, fill this character's Speed Bar by **+10% -> +20%**.")
	.setThumbnail('https://i.imgur.com/x7MKhcD.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimrea basic' || msg.content === '!!aimresearcher basic') { //AIMRESEARCHER T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Basic)** \n \n**Wounding Shot • T4 Upgrade** \n \nAttack primary target for **250% -> 280%** damage. \n**90% -> 100%** chance to apply Offense Down for 1 turn..")
	.setThumbnail('https://i.imgur.com/qThfwy9.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!aimrea special' || msg.content === '!!aimresearcher special') { //AIMRESEARCHER T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Special)** \n \n**Surgery Drone • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nHeal lowest Health ally and their adjacent allies for \n**6000 -> 7000** Health + 15% of this character's Max Health + \n**75% -> 100%** chance to flip Bleed on lowest Health ally and their adjacent allies.")
	.setThumbnail('https://i.imgur.com/Y2X5nS8.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!aimrea ultimate' || msg.content === '!!aimresearcher ultimate') { //AIMRESEARCHER T4S
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Passive)** \n \n**Antidote • T4 Upgrade** \n \n**On Turn** \n**75% -> 100%** chance to choose 1 random ally to apply 1 random positive effect from this list: Offense Up, Defense Up, Speed Up, Regeneration, Deathproof, Deflect. \nIf ally is A.I.M., then apply 2 random positive effects from the list. \n \nWhen a negative effect is applied to an A.I.M. ally, fill this character's Speed Bar by **+10% -> +20%**.")
	.setThumbnail('https://i.imgur.com/x7MKhcD.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimrea speed' || msg.content === '!aimresearcher speed') { //AIMRESEARCHER SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \nA.I.M. Researcher's base speed is 81, but she can gain 10% to 20% speed bar multiple times from her and A.I.M. Assaulter's passive. \nHer possible effective turn 1 speed can be as follows: \n+10% Speed Bar: **89.33**, +20%: **101**, +30%: **114.33**, 40%: **131**, 50%: **152.43**.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aimrea unlock' || msg.content === '!!aimresearcher unlock' || msg.content === '!aimrea farm' || msg.content === '!!aimresearcher farm') { //AIMRESEARCHER UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \nAim Researcher is farmable in: \n**Orbs: \nPremium & Basic. \n \nBlitz: \nBlitz orb & blitz store**")
	msg.channel.send(speedEmbed); 
}
//AIM SECURITY
if (msg.content === '!aimsec kit' || msg.content === '!!aimsecurity kit') { //AIMSECURITY T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Basic)** \n \n**Takedown • T4 Upgrade** \n \nAttack primary target for **230% -> 270%** damage. \nIf Ability Blocked, attack primary target for \n**430% -> 470%** damage instead. \nApply Slow.")
	.setThumbnail('https://i.imgur.com/S00SWQw.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Special)** \n \n**Charge Capacitor • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt for 1 turn + Slow for 2 turns. Heal self and adjacent A.I.M. allies for **7000 -> 10000** Health + 10% of Max Health. Clear Speed Up on self.")
	.setThumbnail('https://i.imgur.com/Ted3CoX.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Passive)** \n \n**Immunization • T4 Upgrade** \n \nAfter attacked, if Scientist Supreme is an ally, if still above 75% Health, transfer 1 negative effect from self and each A.I.M. ally to the attacking enemy. \nGain +10% Max Health and **+10% -> +15%** Resistance.")
	.setThumbnail('https://i.imgur.com/Fx7CjEy.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimsec basic' || msg.content === '!!aimsecurity basic') { //AIMSECURITY T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Basic)** \n \n**Takedown • T4 Upgrade** \n \nAttack primary target for **230% -> 270%** damage. \nIf Ability Blocked, attack primary target for \n**430% -> 470%** damage instead. \nApply Slow.")
	.setThumbnail('https://i.imgur.com/S00SWQw.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!aimsec special' || msg.content === '!!aimsecurity special') { //AIMSECURITY T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Special)** \n \n**Charge Capacitor • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt for 1 turn + Slow for 2 turns. Heal self and adjacent A.I.M. allies for **7000 -> 10000** Health + 10% of Max Health. Clear Speed Up on self.")
	.setThumbnail('https://i.imgur.com/Ted3CoX.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!aimsec ultimate' || msg.content === '!!aimsecurity ultimate') { //AIMSECURITY T4S
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Passive)** \n \n**Immunization • T4 Upgrade** \n \nAfter attacked, if Scientist Supreme is an ally, if still above 75% Health, transfer 1 negative effect from self and each A.I.M. ally to the attacking enemy. \nGain +10% Max Health and **+10% -> +15%** Resistance.")
	.setThumbnail('https://i.imgur.com/Fx7CjEy.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimsec speed' || msg.content === '!aimsecurity speed') { //AIMSECURITY SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \nA.I.M. Security's base speed is 76, but her effective turn 1 speed with an adjacent A.I.M. Assaulter is 84.33 with their level 4 passive, \nor 94.18 with their level 5 passive.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aimsec unlock' || msg.content === '!!aimsecurity unlock' || msg.content === '!aimsec farm' || msg.content === '!!aimsecurity farm') { //AIMSECURITY UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \nAim Security is farmable in: \n**Orbs: \nPremium & Basic. \n \nMissions: \nVillains United: Chapter 5-3**")
	msg.channel.send(speedEmbed); 
}
//AMERICA CHAVEZ
if (msg.content === '!america kit' || msg.content === '!americachavez kit' || msg.content === '!chavez kit') { //AMERICACHAVEZ T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Basic)** \n \n**Starstruck • T4 Upgrade** \n \nAttack primary target for **240% -> 290%** damage + \napply Defense Down.")
	.setThumbnail('https://i.imgur.com/XVvMMSA.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Special)** \n \n**Shooting Star • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **250% -> 300%** damage + \n**50% -> 75%** damage per HERO BRAWLER ally.")
	.setThumbnail('https://i.imgur.com/0V2pdTr.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Ultimate)** \n \n**America's Starling • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nClear 3 positive effects. \nAttack primary target for **350% -> 430%** damage.")
	.setThumbnail('https://i.imgur.com/hdqNsvC.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Passive)** \n \n**Starling Highway • T4 Upgrade** \n \nGain **+10% -> +20%** Max Health. \nHERO BRAWLER allies gain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/dpbmvcX.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!america basic' || msg.content === '!americachavez basic' || msg.content === '!chavez basic') { //AMERICACHAVEZ T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Basic)** \n \n**Starstruck • T4 Upgrade** \n \nAttack primary target for **240% -> 290%** damage + \napply Defense Down.")
	.setThumbnail('https://i.imgur.com/XVvMMSA.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!america special' || msg.content === '!americachavez special' || msg.content === '!chavez special') { //AMERICACHAVEZ T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Special)** \n \n**Shooting Star • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **250% -> 300%** damage + \n**50% -> 75%** damage per HERO BRAWLER ally.")
	.setThumbnail('https://i.imgur.com/0V2pdTr.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!america ultimate' || msg.content === '!americachavez ultimate' || msg.content === '!chavez ultimate') { //AMERICACHAVEZ T4S
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Ultimate)** \n \n**America's Starling • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nClear 3 positive effects. \nAttack primary target for **350% -> 430%** damage.")
	.setThumbnail('https://i.imgur.com/hdqNsvC.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!america passive' || msg.content === '!americachavez passive' || msg.content === '!chavez passive') { //AMERICACHAVEZ T4S
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Passive)** \n \n**Starling Highway • T4 Upgrade** \n \nGain **+10% -> +20%** Max Health. \nHERO BRAWLER allies gain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/dpbmvcX.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!america speed' || msg.content === '!americachavez speed' || msg.content === '!chavez speed') { //AMERICACHAVEZ SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \nAmerica Chavez's speed is: 115")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!america unlock' || msg.content === '!americachavez unlock' || msg.content === '!america farm' || msg.content === '!americachavez farm' || msg.content === '!chavez unlock' || msg.content === '!chavez farm') { //AMERICACHAVEZ UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \nAmerica Chavez is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//ANT MAN
if (msg.content === '!ant kit' || msg.content === '!antman kit' || msg.content === '!man kit') { //ANTMAN T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Basic)** \n \n**Scrappy Fighter • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage + \ncopy a positive effect from the target to Self + \nclear the copied effect. \nIf Wasp is an ally, she also gains the copied effect.")
	.setThumbnail('https://i.imgur.com/0gqCigL.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Special)** \n \n**Gum Up the Works • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 220%** damage + \napply Ability Block for 2 turns. \nThis attack cannot be dodged or blocked.")
	.setThumbnail('https://i.imgur.com/kHl8bsh.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Ultimate)** \n \n**Stomp • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack all for **130% -> 140%** damage + Apply Slow to all targets. \nIf Wasp is an ally, deal an additional +30% damage to all targets.")
	.setThumbnail('https://i.imgur.com/MTgIIvw.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Passive)** \n \n**Escape Plan • T4 Upgrade** \n \nOn Spawn, apply Evade to Wasp if she is an ally. \nOn Turn, 15% chance to gain Evade + \n**10% -> 15%** chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/5yQ6YZx.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!ant basic' || msg.content === '!antman basic' || msg.content === '!man basic') { //ANTMAN T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Basic)** \n \n**Scrappy Fighter • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage + \ncopy a positive effect from the target to Self + \nclear the copied effect. \nIf Wasp is an ally, she also gains the copied effect.")
	.setThumbnail('https://i.imgur.com/0gqCigL.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!ant special' || msg.content === '!antman special' || msg.content === '!man special') { //ANTMAN T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Special)** \n \n**Gum Up the Works • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 220%** damage + \napply Ability Block for 2 turns. \nThis attack cannot be dodged or blocked.")
	.setThumbnail('https://i.imgur.com/kHl8bsh.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!ant ultimate' || msg.content === '!antman ultimate' || msg.content === '!man ultimate') { //ANTMAN T4S
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Ultimate)** \n \n**Stomp • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack all for **130% -> 140%** damage + Apply Slow to all targets. \nIf Wasp is an ally, deal an additional +30% damage to all targets.")
	.setThumbnail('https://i.imgur.com/MTgIIvw.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!ant passive' || msg.content === '!antman passive' || msg.content === '!man passive') { //ANTMAN T4S
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Passive)** \n \n**Escape Plan • T4 Upgrade** \n \nOn Spawn, apply Evade to Wasp if she is an ally. \nOn Turn, 15% chance to gain Evade + \n**10% -> 15%** chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/5yQ6YZx.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!ant speed' || msg.content === '!antman speed' || msg.content === '!man speed') { //ANTMAN SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \n**Ant-Man**'s base speed is 100, but with **Black Widow** \nusing her turn 1 special, his effective turn 1 speed is 110.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!ant unlock' || msg.content === '!antman unlock' || msg.content === '!ant farm' || msg.content === '!antman farm' || msg.content === '!man unlock' || msg.content === '!man farm') { //ANTMAN UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \nAnt Man is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//BEAST
if (msg.content === '!beast kit') { //BEAST T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Basic)** \n \n**Beast Strike • T4 Upgrade** \n \nBeast is a beast")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Special)** \n \n**Beast Voice • T4 Upgrade** \n<:abilityon:663751832690229278> \nBeast is a beast.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Ultimate)** \n \n**Beast Scream • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184> \nBeast is a beast.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Passive)** \n \n**Beast Of Attilan • T4 Upgrade** \n \nBeast is a beast.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!beast basic') { //BEAST T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Basic)** \n \n**Royal Strike • T4 Upgrade** \n \nIf the primary target has slow, flip **1 -> 2** negative effects on self. \nAttack primary target for **350% -> 400%** damage + \nclear **1 -> 2** positive effects.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!beast special') { //BEAST T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Special)** \n \n**Staggering Voice • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack Primary target for **500% -> 600%** damage. \nThis attack is unavoidable.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!beast ultimate') { //BEAST T4S
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Ultimate)** \n \n**Sonic Scream • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **380% -> 500%** damage.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!beast passive') { //BEAST T4S
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Passive)** \n \n**King Of Attilan • T4 Upgrade** \n \nCharacters killed by Beast cannot be revived. \nWhen an enemy drops below 25% Health, attack that enemy for\n**150% -> 200%** damage. If that enemy is VILLAIN TECH, attack that enemy \nfor **300% -> 400%** damage instead. \nOn enemy summon, apply Disrupted + clear 3 positive effects on\nthe summoner. \nGain +40% Resistance. INHUMAN allies gain +40% Resistance. \nGain **+30% -> +50%** Max Health. INHUMAN allies gain **+30% -> +50%** Max Health.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!beast speed') { //BEAST SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076> **Beast** \nBeast's speed is: 100")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!unlock beast') { //UNLOCK 
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076> **Beast** \nBeast is not unlockable yet, jokes on you!**")
	msg.channel.send(speedEmbed); 
}
//BLACK BOLT
if (msg.content === '!blackbolt T4') { //BLACKBOLT T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Basic)** \n \n**Royal Strike • T4 Upgrade** \n \nIf the primary target has slow, flip **1 -> 2** negative effects on self. \nAttack primary target for **350% -> 400%** damage + \nclear **1 -> 2** positive effects.")
	.setThumbnail('https://i.imgur.com/qdQRIfE.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Special)** \n \n**Staggering Voice • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack Primary target for **500% -> 600%** damage. \nThis attack is unavoidable.")
	.setThumbnail('https://i.imgur.com/5wsashb.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Ultimate)** \n \n**Sonic Scream • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **380% -> 500%** damage.")
	.setThumbnail('https://i.imgur.com/IiJQ57n.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Passive)** \n \n**King Of Attilan • T4 Upgrade** \n \nCharacters killed by Black Bolt cannot be revived. \nWhen an enemy drops below 25% Health, attack that enemy for\n**150% -> 200%** damage. If that enemy is VILLAIN TECH, attack that enemy \nfor **300% -> 400%** damage instead. \nOn enemy summon, apply Disrupted + clear 3 positive effects on\nthe summoner. \nGain +40% Resistance. INHUMAN allies gain +40% Resistance. \nGain **+30% -> +50%** Max Health. INHUMAN allies gain **+30% -> +50%** Max Health.")
	.setThumbnail('https://i.imgur.com/JthP6vO.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!blackbolt basic') { //BLACKBOLT T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Basic)** \n \n**Royal Strike • T4 Upgrade** \n \nIf the primary target has slow, flip **1 -> 2** negative effects on self. \nAttack primary target for **350% -> 400%** damage + \nclear **1 -> 2** positive effects.")
	.setThumbnail('https://i.imgur.com/qdQRIfE.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!blackbolt special') { //BLACKBOLT T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Special)** \n \n**Staggering Voice • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack Primary target for **500% -> 600%** damage. \nThis attack is unavoidable.")
	.setThumbnail('https://i.imgur.com/5wsashb.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!blackbolt ultimate') { //BLACKBOLT T4S
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Ultimate)** \n \n**Sonic Scream • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **380% -> 500%** damage.")
	.setThumbnail('https://i.imgur.com/IiJQ57n.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!blackbolt passive') { //BLACKBOLT T4S
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Passive)** \n \n**King Of Attilan • T4 Upgrade** \n \nCharacters killed by Black Bolt cannot be revived. \nWhen an enemy drops below 25% Health, attack that enemy for\n**150% -> 200%** damage. If that enemy is VILLAIN TECH, attack that enemy \nfor **300% -> 400%** damage instead. \nOn enemy summon, apply Disrupted + clear 3 positive effects on\nthe summoner. \nGain +40% Resistance. INHUMAN allies gain +40% Resistance. \nGain **+30% -> +50%** Max Health. INHUMAN allies gain **+30% -> +50%** Max Health.")
	.setThumbnail('https://i.imgur.com/JthP6vO.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!blackbolt speed') { //BLACKBOLT SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \nBlack Bolt's speed is: 100")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!unlock blackbolt') { //UNLOCK 
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \nBlack bolt is a legendary event.**")
	msg.channel.send(speedEmbed); 
}
//BLACK PANTHER
if (msg.content === '!bp kit' || msg.content === '!blackpanther kit' || msg.content === '!panther kit') { //BLACKPANTHER T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Basic)** \n \n**Claw Slash • T4 Upgrade** \n \nAttack primary target for **180% -> 210%** damage + \n30% Piercing. **90% -> 100%** chance to apply Slow.")
	.setThumbnail('https://i.imgur.com/CBg3Fze.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Special)** \n \n**Hunter's Spirit • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **190% -> 230%** damage + \n30% Piercing. Gain Offense Up for 2 turns. \nOn Crit, gain Counter.")
	.setThumbnail('https://i.imgur.com/mkWgTWh.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Ultimate)** \n \n**Panther Rush • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **250% -> 280%** damage. \nChain to 1-3 adjacent targets for **170% -> 200%** damage. \nCounterattack breaks this Chain. \nWhile in Charged, attack all enemies for **220% -> 250%** damage, \nthen lose all Charged. This attack gains +20% Damage per Charged. \nAll attacks have +30% Piercing and **+15% -> +20%** \nExtra Crit Chance.")
	.setThumbnail('https://i.imgur.com/WNirdk2.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Passive)** \n \n**Defender of Wakanda • T4 Upgrade** \n \nOn dropping below 50% of Max Health, gain +1 Charged, \nup to a maximum of 5. \nOn Kill, fill Speed Bar by **80% -> 100%**. \nOn Defense Up, gain Deflect.")
	.setThumbnail('https://i.imgur.com/VP20XOH.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!bp basic' || msg.content === '!blackpanther basic' || msg.content === '!panther basic') { //BLACKPANTHER T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Basic)** \n \n**Claw Slash • T4 Upgrade** \n \nAttack primary target for **180% -> 210%** damage + \n30% Piercing. **90% -> 100%** chance to apply Slow.")
	.setThumbnail('https://i.imgur.com/CBg3Fze.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!bp special' || msg.content === '!blackpanther special' || msg.content === '!panther special') { //BLACKPANTHER T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Special)** \n \n**Hunter's Spirit • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **190% -> 230%** damage + \n30% Piercing. Gain Offense Up for 2 turns. \nOn Crit, gain Counter.")
	.setThumbnail('https://i.imgur.com/mkWgTWh.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!bp ultimate' || msg.content === '!blackpanther ultimate' || msg.content === '!panther ultimate') { //BLACKPANTHER T4S
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Ultimate)** \n \n**Panther Rush • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **250% -> 280%** damage. \nChain to 1-3 adjacent targets for **170% -> 200%** damage. \nCounterattack breaks this Chain. \nWhile in Charged, attack all enemies for **220% -> 250%** damage, \nthen lose all Charged. This attack gains +20% Damage per Charged. \nAll attacks have +30% Piercing and **+15% -> +20%** \nExtra Crit Chance.")
	.setThumbnail('https://i.imgur.com/WNirdk2.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!bp passive' || msg.content === '!blackpanther passive' || msg.content === '!panther passive') { //BLACKPANTHER T4S
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Passive)** \n \n**Defender of Wakanda • T4 Upgrade** \n \nOn dropping below 50% of Max Health, gain +1 Charged, \nup to a maximum of 5. \nOn Kill, fill Speed Bar by **80% -> 100%**. \nOn Defense Up, gain Deflect.")
	.setThumbnail('https://i.imgur.com/VP20XOH.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!bp speed' || msg.content === '!blackpanther speed' || msg.content === '!panther speed') { //BLACKPANTHER SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \nBlack Panther's speed is: 125 \nHis effective turn 1 speed is 187.5 with Shuri. \nWith Black Widow using her turn 1 special, his effective speed is still 125.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!bp unlock' || msg.content === '!blackpanther unlock' || msg.content === '!black farm' || msg.content === '!blackpanther farm' || msg.content === '!panther unlock' || msg.content === '!panther farm') { //BLACKPANTHER UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \nBlack Panther is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//BLACK WIDOW
if (msg.content === '!bw kit' || msg.content === '!widow kit' || msg.content === '!widow kit') { //BLACKWIDOW T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Basic)** \n \n**Sabotage • T4 Upgrade** \n \nAttack primary target for **190% -> 250%** damage. \nDuring Stealth, copy & clear all positive effects on primary target.")
	.setThumbnail('https://i.imgur.com/Adce8ne.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Special)** \n \n**Camouflage Tech • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Stealth for 2 turns + clear all negative effects from Self. \nClear 1 negative effect from AVENGER allies. \nApply Speed Up to Self/S.H.I.E.L.D./AVENGER allies for 2 turns. \n60% chance to apply Speed Up to all allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/l51dzex.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Ultimate)** \n \n**Widow's Bite • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **230% -> 290%** damage + apply Stun. \n60% chance to Chain up to 3 adjacent targets for \n**170% -> 220%** damage + apply 2 Bleed for 2 turns. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/A2R5zPl.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Passive)** \n \n**Saboteur • T4 Upgrade** \n \nGain **+10% -> +15%** Speed. \nThis is applied after any character has taken a turn. \nWhen in Stealth, gain Offense Up.")
	.setThumbnail('https://i.imgur.com/ExIr73Q.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!bw basic' || msg.content === '!widow basic' || msg.content === '!widow basic') { //BLACKWIDOW T4S
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Basic)** \n \n**Sabotage • T4 Upgrade** \n \nAttack primary target for **190% -> 250%** damage. \nDuring Stealth, copy & clear all positive effects on primary target.")
	.setThumbnail('https://i.imgur.com/Adce8ne.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!bw special' || msg.content === '!widow special' || msg.content === '!widow special') { //BLACKWIDOW T4S
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Special)** \n \n**Camouflage Tech • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Stealth for 2 turns + clear all negative effects from Self. \nClear 1 negative effect from AVENGER allies. \nApply Speed Up to Self/S.H.I.E.L.D./AVENGER allies for 2 turns. \n60% chance to apply Speed Up to all allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/l51dzex.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!bw ultimate' || msg.content === '!widow ultimate' || msg.content === '!widow ultimate') { //BLACKWIDOW T4S
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Ultimate)** \n \n**Widow's Bite • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **230% -> 290%** damage + apply Stun. \n60% chance to Chain up to 3 adjacent targets for \n**170% -> 220%** damage + apply 2 Bleed for 2 turns. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/A2R5zPl.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!bw passive' || msg.content === '!widow passive' || msg.content === '!widow passive') { //BLACKWIDOW T4S
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Passive)** \n \n**Saboteur • T4 Upgrade** \n \nGain **+10% -> +15%** Speed. \nThis is applied after any character has taken a turn. \nWhen in Stealth, gain Offense Up.")
	.setThumbnail('https://i.imgur.com/ExIr73Q.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!bw speed' || msg.content === '!widow speed' || msg.content === '!widow speed') { //BLACKWIDOW SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \nBlack Widow's base speed is 135, \nbut she gains +5%, +10%, or +15% speed bar \ndepending on her passive level after any character's first turn. \nThat makes her speed after turn one 141.75, 148.5, or 155.25 depending on her passive level.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!bw unlock' || msg.content === '!widow unlock' || msg.content === '!widow farm' || msg.content === '!blackwidow farm' || msg.content === '!widow unlock' || msg.content === '!widow farm') { //BLACKWIDOW UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \nBlack Widow is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//BULLSEYE
if (msg.content === '!bullseye kit' || msg.content === '!bulls kit' || msg.content === '!bulls kit') { //BULLSEYE 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Basic)** \n \n**Throwing Knife • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage. \nThis attack cannot miss **though it can be dodged**. \nGain **+15% -> +20%** Crit chance for this attack.")
	.setThumbnail('https://i.imgur.com/WSaVkNn.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Special)** \n \n**Card Trick • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 230%** damage and **+20% -> +25%** Crit chance. 80% chance to gain a Bonus attack for 190% damage and +40% Crit chance.")
	.setThumbnail('https://i.imgur.com/qydaGnn.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Ultimate)** \n \n**Kill Shot • T4 Upgrade** \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **500% -> 550%** damage. Gain +30% Crit chance and +20% Crit damage for this attack.")
	.setThumbnail('https://i.imgur.com/Q2cxNpU.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Passive)** \n \n**Never Miss • T4 Upgrade** \n \nGain +10% Accuracy. All allies gain **+5% -> +10%** Accuracy. \nMERCENARY allies gain +10% Crit damage.")
	.setThumbnail('https://i.imgur.com/3P6OIZC.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!bullseye basic' || msg.content === '!bulls basic' || msg.content === '!bulls basic') { //BULLSEYE 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Basic)** \n \n**Throwing Knife • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage. \nThis attack cannot miss **though it can be dodged**. \nGain **+15% -> +20%** Crit chance for this attack.")
	.setThumbnail('https://i.imgur.com/WSaVkNn.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!bullseye special' || msg.content === '!bulls special' || msg.content === '!bulls special') { //BULLSEYE 
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Special)** \n \n**Card Trick • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 230%** damage and **+20% -> +25%** Crit chance. 80% chance to gain a Bonus attack for 190% damage and +40% Crit chance.")
	.setThumbnail('https://i.imgur.com/qydaGnn.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!bullseye ultimate' || msg.content === '!bulls ultimate' || msg.content === '!bulls ultimate') { //BULLSEYE 
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Ultimate)** \n \n**Kill Shot • T4 Upgrade** \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **500% -> 550%** damage. Gain +30% Crit chance and +20% Crit damage for this attack.")
	.setThumbnail('https://i.imgur.com/Q2cxNpU.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!bullseye passive' || msg.content === '!bulls passive' || msg.content === '!bulls passive') { //BULLSEYE 
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Passive)** \n \n**Never Miss • T4 Upgrade** \n \nGain +10% Accuracy. All allies gain **+5% -> +10%** Accuracy. \nMERCENARY allies gain +10% Crit damage.")
	.setThumbnail('https://i.imgur.com/3P6OIZC.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!bullseye speed' || msg.content === '!bulls speed' || msg.content === '!bulls speed') { //BULLSEYE SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828> **Bullseye** \nBullseye's speed is: 110.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!bullseye unlock' || msg.content === '!bulls unlock' || msg.content === '!bulls farm' || msg.content === '!bullseye farm' || msg.content === '!bulls unlock' || msg.content === '!bulls farm') { //BULLSEYE UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828> **Bullseye** \nBullseye is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//CABLE
if (msg.content === '!Cable kit' || msg.content === '!Cable kit' || msg.content === '!cab kit') { //Cable 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Basic)** \n \n**Plasma Rifle • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage + \ngain Charged.")
	.setThumbnail('https://i.imgur.com/B953HdD.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Special)** \n \n**Overload • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 220%** damage + \nchange Speed Bar by -50%. Attack adjacent targets for: \n**150% -> 170%** damage + change Speed Bar by -10%. \n \nIf Charged, in addition, attack targets 2 spaces from primary for **150% -> 170%** damage and change Speed Bar by -10%, then lose Charged.")
	.setThumbnail('https://i.imgur.com/uc6jIiV.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Ultimate)** \n \n**Psychic Surge • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **470% -> 530%** Unavoidable damage. \nIf Deadpool is an ally, gain assist from Deadpool. \nOn Kill, fill Cable and Deadpool's Speed Bars by 70%.")
	.setThumbnail('https://i.imgur.com/MfPeGOZ.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Passive)** \n \n**Time Sense • T4 Upgrade** \n \nOn Spawn, Self and all allies gain 5% Speed Bar. \nOn Turn, **20% -> 30%** chance to apply Counter to a random \nMUTANT ally, and 20% chance to apply Counter to another random ally.")
	.setThumbnail('https://i.imgur.com/JBgSQPz.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Cable basic' || msg.content === '!Cable basic' || msg.content === '!cab basic') { //Cable 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Basic)** \n \n**Plasma Rifle • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage + \ngain Charged.")
	.setThumbnail('https://i.imgur.com/B953HdD.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Cable special' || msg.content === '!Cable special' || msg.content === '!cab special') { //Cable 
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Special)** \n \n**Plasma Rifle • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage + \nchange Speed Bar by -50%. Attack adjacent targets for: \n**150% -> 170%** damage + change Speed Bar by -10%. \n \nIf Charged, in addition, attack targets 2 spaces from primary for **150% -> 170%** damage and change Speed Bar by -10%, then lose Charged.")
	.setThumbnail('https://i.imgur.com/uc6jIiV.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!Cable ultimate' || msg.content === '!Cable ultimate' || msg.content === '!cab ultimate') { //Cable 
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Ultimate)** \n \n**Psychic Surge • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **470% -> 530%** Unavoidable damage. \nIf Deadpool is an ally, gain assist from Deadpool. \nOn Kill, fill Cable and Deadpool's Speed Bars by 70%.")
	.setThumbnail('https://i.imgur.com/MfPeGOZ.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!Cable passive' || msg.content === '!Cable passive' || msg.content === '!cab passive') { //Cable 
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Passive)** \n \n**Time Sense • T4 Upgrade** \n \nOn Spawn, Self and all allies gain 5% Speed Bar. \nOn Turn, **20% -> 30%** chance to apply Counter to a random \nMUTANT ally, and 20% chance to apply Counter to another random ally.")
	.setThumbnail('https://i.imgur.com/JBgSQPz.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Cable speed' || msg.content === '!Cable speed' || msg.content === '!cab speed') { //Cable SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154> **Cable** \nCable's base speed is 91, but his effective turn 1 speed is 95.54.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!Cable unlock' || msg.content === '!Cable unlock' || msg.content === '!cab farm' || msg.content === '!Cab farm' || msg.content === '!cab unlock') { //Cable UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154> **Cable** \nCable is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//CAPTAIN AMERICA
if (msg.content === '!Captainamerica kit' || msg.content === '!captainamerica kit' || msg.content === '!captain kit') { //Captainamerica 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Basic)** \n \n**Shield Bash • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage. \n30% chance to Chain to up to 2 adjacent targets for 170% damage. \n**50% -> 100%** chance to gain Defense Up for 1 turn. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/FPGV5SJ.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Special)** \n \n**Inspire • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt and Defense Up on self. \nApply Defense Up to all allies. \nGrant 1 Ability Energy to 1-2 AVENGER allies. \nGrant 1 Ability Energy to **1-2 -> 1-3** random allies.")
	.setThumbnail('https://i.imgur.com/rWpO013.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Ultimate)** \n \n**Shield Throw • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **280% -> 300%** damage, \nclearing 2 positive effects. \nChain to 1-2 additional targets for **210% -> 230%** damage, \nclearing 2 positive effects. Dodge breaks this Chain.")
	.setThumbnail('https://i.imgur.com/TsGHh0g.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Passive)** \n \n**!Assemble • T4 Upgrade** \n \n+25% Block chance. **+5% -> +10%** Block Amount. \n+10% Max Health. +5% Block chance per AVENGER ally.")
	.setThumbnail('https://i.imgur.com/JiJhO67.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Captainamerica basic' || msg.content === '!captainamerica basic' || msg.content === '!captain basic') { //Captainamerica 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Basic)** \n \n**Shield Bash • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage. \n30% chance to Chain to up to 2 adjacent targets for 170% damage. \n**50% -> 100%** chance to gain Defense Up for 1 turn. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/FPGV5SJ.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Captainamerica special' || msg.content === '!captainamerica special' || msg.content === '!captain special') { //Captainamerica 
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Special)** \n \n**Shield Bash • T4 Upgrade** \n \nGain Taunt and Defense Up on self. \nApply Defense Up to all allies. \nGrant 1 Ability Energy to 1-2 AVENGER allies. \nGrant 1 Ability Energy to **1-2 -> 1-3** random allies.")
	.setThumbnail('https://i.imgur.com/rWpO013.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!Captainamerica ultimate' || msg.content === '!captainamerica ultimate' || msg.content === '!captain ultimate') { //Captainamerica 
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Ultimate)** \n \n**Shield Throw • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **280% -> 300%** damage, \nclearing 2 positive effects. \nChain to 1-2 additional targets for **210% -> 230%** damage, \nclearing 2 positive effects. Dodge breaks this Chain.")
	.setThumbnail('https://i.imgur.com/TsGHh0g.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!Captainamerica passive' || msg.content === '!captainamerica passive' || msg.content === '!captain passive') { //Captainamerica 
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Passive)** \n \n**!Assemble • T4 Upgrade** \n \n+25% Block chance. **+5% -> +10%** Block Amount. \n+10% Max Health. +5% Block chance per AVENGER ally.")
	.setThumbnail('https://i.imgur.com/JiJhO67.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Captainamerica speed' || msg.content === '!captainamerica speed' || msg.content === '!captain speed') { //Captainamerica SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701> **Captain America** \nCaptain America's base speed is 114, but with Black Widow using her turn 1 special, his effective turn 1 speed is 120.33.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!Captainamerica unlock' || msg.content === '!captainamerica unlock' || msg.content === '!captain farm' || msg.content === '!Captain farm') { //Captainamerica UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701> **Captain America** \nCaptain America is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//CAPTAIN MARVEL
if (msg.content === '!Captainmarvel kit' || msg.content === '!captainmarvel kit' || msg.content === '!capmarvel kit') { //Captainmarvel 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Basic)** \n \n**Princess Sparkle Fist • T4 Upgrade** \n \nAttack primary target for **280% -> 320%** damage. \n50% chance to Chain to 1 adjacent target for **180% -> 220%** damage. \nIf not in Binary, gain +1 Charged, up to a maximum of 5 If in Binary, lose 1 Charged. On losing all Charged, end Binary. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/gAN4p41.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Special)** \n \n**Warbird • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **360% -> 450%** damage + \nclear all positive effects. \nIf not in Binary, gain +1 Charged, up to a maximum of 5. \nIf in Binary, lose 1 Charged. On losing all Charged, end Binary.")
	.setThumbnail('https://i.imgur.com/M1CQNl8.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Ultimate)** \n \n**Binary • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nGain Binary. Clear all negative effects from self. \nAttack primary target for **540% -> 640%** damage. \nThis attack cannot be dodged and cannot crit.")
	.setThumbnail('https://i.imgur.com/DFTzcpK.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Passive)** \n \n**Higher. Further. Faster. • T4 Upgrade** \n \nWhile in Binary gain: 25% Damage, 25% Armor, 100% Focus, and 100% Resistance. While in Binary, on End of Turn, attack all enemies for **120% -> 150%** damage. \nOn Spawn: \n Clear all Charged. If any Charged were cleared, gain Regeneration. \nGain Charged, If at least one ally is MILITARY, gain an additional Charge. \nMILITARY allies gain +15% Max Health. \nMILITARY allies gain +10% Damage. \nIf not in Binary, when this character gains Ability Energy, \ngain +1 Charged, up to a maximum of 5. \nOn Turn, heal self for **10% -> 20%** of Max Health.")
	.setThumbnail('https://i.imgur.com/Tnz6HZT.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Captainmarvel basic' || msg.content === '!captainmarvel basic' || msg.content === '!capmarvel basic') { //Captainmarvel 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Basic)** \n \n**Princess Sparkle Fist • T4 Upgrade** \n \nAttack primary target for **280% -> 320%** damage. \n50% chance to Chain to 1 adjacent target for **180% -> 220%** damage. \nIf not in Binary, gain +1 Charged, up to a maximum of 5 If in Binary, lose 1 Charged. On losing all Charged, end Binary. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/gAN4p41.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Captainmarvel special' || msg.content === '!captainmarvel special' || msg.content === '!capmarvel special') { //Captainmarvel 
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Special)** \n \n**Princess Sparkle Fist • T4 Upgrade** \n \nAttack primary target for **360% -> 450%** damage + \nclear all positive effects. \nIf not in Binary, gain +1 Charged, up to a maximum of 5. \nIf in Binary, lose 1 Charged. On losing all Charged, end Binary.")
	.setThumbnail('https://i.imgur.com/M1CQNl8.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!Captainmarvel ultimate' || msg.content === '!captainmarvel ultimate' || msg.content === '!capmarvel ultimate') { //Captainmarvel 
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Ultimate)** \n \n**Binary • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nGain Binary. Clear all negative effects from self. \nAttack primary target for **540% -> 640%** damage. \nThis attack cannot be dodged and cannot crit.")
	.setThumbnail('https://i.imgur.com/DFTzcpK.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!Captainmarvel passive' || msg.content === '!captainmarvel passive' || msg.content === '!capmarvel passive') { //Captainmarvel 
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Passive)** \n \n**Higher. Further. Faster. • T4 Upgrade** \n \nWhile in Binary gain: 25% Damage, 25% Armor, 100% Focus, and 100% Resistance. While in Binary, on End of Turn, attack all enemies for **120% -> 150%** damage. \nOn Spawn: \n Clear all Charged. If any Charged were cleared, gain Regeneration. \nGain Charged, If at least one ally is MILITARY, gain an additional Charge. \nMILITARY allies gain +15% Max Health. \nMILITARY allies gain +10% Damage. \nIf not in Binary, when this character gains Ability Energy, \ngain +1 Charged, up to a maximum of 5. \nOn Turn, heal self for **10% -> 20%** of Max Health.")
	.setThumbnail('https://i.imgur.com/Tnz6HZT.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Captainmarvel speed' || msg.content === '!captainmarvel speed' || msg.content === '!capmarvel speed') { //Captainmarvel SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340> **Captain Marvel** \nCaptain Marvel's speed is: 127")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!Captainmarvel unlock' || msg.content === '!captainmarvel unlock' || msg.content === '!capmarvel farm' || msg.content === '!captainmarvel farm' || msg.content === '!captainmarvel unlock' || msg.content === '!captainmarvel farm') { //Captainmarvel UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340> **Captain Marvel** \nCaptain Marvel is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//CARNAGE
if (msg.content === '!Carnage kit' || msg.content === '!carnage kit' || msg.content === '!carn kit') { //Carnage 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Basic)** \n \n**Cleave • T4 Upgrade** \n \nAttack primary target for **230% -> 280%** damage. \nIf the primary target has a negative effect, \nChain to 1-2 adjacent targets for 90% damage + \nspread 2 negative effects from the primary target to secondary targets. \nThis will not spread Stun. Counterattack breaks this Chain.")
	.setThumbnail('hhttps://i.imgur.com/4ZYwBP6.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Special)** \n \n**Slaughter • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **350% -> 420%** damage + \n100% additional damage per negative effect. \nRemove all negative effects from the primary target. \nAttack all adjacent targets for **180% -> 250%** damage.")
	.setThumbnail('https://i.imgur.com/1qWwq9c.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Ultimate)** \n \n**Absolute Carnage • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **420% -> 500%** Piercing + \napply 2 Bleed for 2 turns. If the primary target is above 50% Health, \napply an additional Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/xdp5RKK.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Passive)** \n \n**Frenzied Fury • T4 Upgrade** \n \nWhen an enemy drops below 25% Health, change Speed Bar of self and all SYMBIOTE allies by **+20% -> +30%** + heal them for 10% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/n2opSAu.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Carnage basic' || msg.content === '!carnage basic' || msg.content === '!carn basic') { //Carnage 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Basic)** \n \n**Cleave • T4 Upgrade** \n \nAttack primary target for **230% -> 280%** damage. \nIf the primary target has a negative effect, \nChain to 1-2 adjacent targets for 90% damage + \nspread 2 negative effects from the primary target to secondary targets. \nThis will not spread Stun. Counterattack breaks this Chain.")
	.setThumbnail('hhttps://i.imgur.com/4ZYwBP6.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Carnage special' || msg.content === '!carnage special' || msg.content === '!carn special') { //Carnage 
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Special)** \n \n**Slaughter • T4 Upgrade** \n \nAttack primary target for **350% -> 420%** damage + \n100% additional damage per negative effect. \nRemove all negative effects from the primary target. \nAttack all adjacent targets for **180% -> 250%** damage.")
	.setThumbnail('https://i.imgur.com/1qWwq9c.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!Carnage ultimate' || msg.content === '!carnage ultimate' || msg.content === '!carn ultimate') { //Carnage 
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Ultimate)** \n \n**Absolute Carnage • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **420% -> 500%** Piercing + \napply 2 Bleed for 2 turns. If the primary target is above 50% Health, \napply an additional Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/xdp5RKK.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!Carnage passive' || msg.content === '!carnage passive' || msg.content === '!carn passive') { //Carnage 
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Passive)** \n \n**Frenzied Fury • T4 Upgrade** \n \nWhen an enemy drops below 25% Health, change Speed Bar of self and all SYMBIOTE allies by **+20% -> +30%** + heal them for 10% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/n2opSAu.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Carnage speed' || msg.content === '!carnage speed' || msg.content === '!carn speed') { //Carnage SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570> **Carnage** \nCarnage's speed is: 126.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!Carnage unlock' || msg.content === '!carnage unlock' || msg.content === '!carn farm' || msg.content === '!carn farm') { //Carnage UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570> **Carnage** \nCarnage is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//COLOSSUS
if (msg.content === '!Colossus kit' || msg.content === '!colossus kit' || msg.content === '!colo kit') { //Colossus 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Basic)** \n \n**Ringdinger • T4 Upgrade** \n \nAttack primary target for **290% -> 340%** damage + \napply Offense Down for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/6jkNvF4.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Special)** \n \n**Altruism • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt. Gain **1 -> 2** Counter. \nApply 2 Deflect to Self and X-MEN Allies. \nApply Deflect to all other allies. \nIf Phoenix is an ally, gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/jYII4lt.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Ultimate)** \n \n**Enduring Protection • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nIncrease duration of positive effects on self by **+2 -> +3**, \nup to a maximum of 5. Gain 2 Deathproof. \nGain +2 Charged, up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/MBeRT0x.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Passive)** \n \n**Steel Form • T4 Upgrade** \n \nOn Spawn, if Charged, generate 1 Ability Energy for self. \nThen clear Charged. \nOn Spawn, if Phoenix is an ally: \nGain Defense Up for **1 -> 2** turns. \nApply Defense Up to all X-MEN allies. \nWhen a negative effect is applied to an X-MEN ally, gain +1 Charged, up to a maximum of 5. \nWhile Charged, when attacked, attack that enemy for \n**75% -> 100%** damage +10% damage per Charged. \nWhen an X-MEN ally drops below 50% Max Health, \ngain +1 Taunt, up to a maximum of 2. \nWhile in Defense Up, gain +1000% Resistance. \nGain +15% Max Health. X-MEN allies gain +15% Max Health.")
	.setThumbnail('https://i.imgur.com/CgRxvbF.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Colossus basic' || msg.content === '!colossus basic' || msg.content === '!colo basic') { //Colossus 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Basic)** \n \n**Ringdinger • T4 Upgrade** \n \nAttack primary target for **290% -> 340%** damage + \napply Offense Down for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/6jkNvF4.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Colossus special' || msg.content === '!colossus special' || msg.content === '!colo special') { //Colossus 
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Special)** \n \n**Altruism • T4 Upgrade** \n \nGain Taunt. Gain **1 -> 2** Counter. \nApply 2 Deflect to Self and X-MEN Allies. \nApply Deflect to all other allies. \nIf Phoenix is an ally, gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/jYII4lt.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!Colossus ultimate' || msg.content === '!colossus ultimate' || msg.content === '!colo ultimate') { //Colossus 
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Ultimate)** \n \n**Enduring Protection • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nIncrease duration of positive effects on self by **+2 -> +3**, \nup to a maximum of 5. Gain 2 Deathproof. \nGain +2 Charged, up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/MBeRT0x.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!Colossus passive' || msg.content === '!colossus passive' || msg.content === '!colo passive') { //Colossus 
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Passive)** \n \n**Steel Form • T4 Upgrade** \n \nOn Spawn, if Charged, generate 1 Ability Energy for self. \nThen clear Charged. \nOn Spawn, if Phoenix is an ally: \nGain Defense Up for **1 -> 2** turns. \nApply Defense Up to all X-MEN allies. \nWhen a negative effect is applied to an X-MEN ally, gain +1 Charged, up to a maximum of 5. \nWhile Charged, when attacked, attack that enemy for \n**75% -> 100%** damage +10% damage per Charged. \nWhen an X-MEN ally drops below 50% Max Health, \ngain +1 Taunt, up to a maximum of 2. \nWhile in Defense Up, gain +1000% Resistance. \nGain +15% Max Health. X-MEN allies gain +15% Max Health.")
	.setThumbnail('https://i.imgur.com/CgRxvbF.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Colossus speed' || msg.content === '!colossus speed' || msg.content === '!colo speed') { //Colossus SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528> **Colossus** \nColossus's speed is: 88.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!Colossus unlock' || msg.content === '!colossus unlock' || msg.content === '!colo farm' || msg.content === '!colo farm') { //Colossus UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528> **Colossus** \nColossus is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//COULSON
if (msg.content === '!Coulson kit' || msg.content === '!coulson kit' || msg.content === '!coul kit') { //Coulson 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Basic)** \n \n**Night-Night Gun • T4 Upgrade** \n \nAttack primary target for **210% -> 230%** damage + \nChain to 2-4 adjacent targets for **160% -> 180%** damage. \nCounterattack breaks this Chain. \nChange Speed Bar of primary and secondary targets by -20%.")
	.setThumbnail('https://i.imgur.com/gB1LwCS.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Special)** \n \n**EMP Punch • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **190% -> 200%** damage. \nAttack all other enemies for **140% -> 150%** damage. \nOn WAR DEFENSE: \nTransfer 4 positive effects from primary target to all \nnon-MINION S.H.I.E.L.D. allies. \nFlip all positive effects on primary target. \nRemove **3 -> all** positive effects from all enemies. \nApply Slow to all TECH enemies.")
	.setThumbnail('https://i.imgur.com/Uhjr6sg.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Ultimate)** \n \n**Teamwork  • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nApply Offense Up to all S.H.I.E.L.D. allies. \nOn WAR DEFENSE, clear **3 -> all** positive effects from \nthe enemy with the most Damage. \nApply Defense Down and Taunt to the \nenemy with the most Damage. \nCall **1 -> 2** allies with the most Damage to attack \nthe enemy with the most Damage. \nAttack all enemies for **250% -> 280%** damage.")
	.setThumbnail('https://i.imgur.com/iVLUvo8.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Passive)** \n \n**The Agent • T4 Upgrade** \n \nIf Coulson drops below 50% Health, change Speed Bar by \n**50% -> 60%** for S.H.I.E.L.D. Medic. \nOn WAR DEFENSE: \nGain **+20% -> +40%** Max Health. \nS.H.I.E.L.D. allies gain **+20% -> +40%** Max Health. \nOn Spawn, apply Immunity to **4 -> all** S.H.I.E.L.D. allies. \nGain +120% Resistance. \nS.H.I.E.L.D. allies gain +120% Resistance.")
	.setThumbnail('https://i.imgur.com/pKDbt3g.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Coulson basic' || msg.content === '!coulson basic' || msg.content === '!coul basic') { //Coulson 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Basic)** \n \n**Night-Night Gun • T4 Upgrade** \n \nAttack primary target for **210% -> 230%** damage + \nChain to 2-4 adjacent targets for **160% -> 180%** damage. \nCounterattack breaks this Chain. \nChange Speed Bar of primary and secondary targets by -20%.")
	.setThumbnail('https://i.imgur.com/gB1LwCS.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Coulson special' || msg.content === '!coulson special' || msg.content === '!coul special') { //Coulson 
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Special)** \n \n**EMP Punch • T4 Upgrade** \n \nAttack primary target for **190% -> 200%** damage. \nAttack all other enemies for **140% -> 150%** damage. \nOn WAR DEFENSE: \nTransfer 4 positive effects from primary target to all \nnon-MINION S.H.I.E.L.D. allies. \nFlip all positive effects on primary target. \nRemove **3 -> all** positive effects from all enemies. \nApply Slow to all TECH enemies.")
	.setThumbnail('https://i.imgur.com/Uhjr6sg.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!Coulson ultimate' || msg.content === '!coulson ultimate' || msg.content === '!coul ultimate') { //Coulson 
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Ultimate)** \n \n**Teamwork  • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nApply Offense Up to all S.H.I.E.L.D. allies. \nOn WAR DEFENSE, clear **3 -> all** positive effects from \nthe enemy with the most Damage. \nApply Defense Down and Taunt to the \nenemy with the most Damage. \nCall **1 -> 2** allies with the most Damage to attack \nthe enemy with the most Damage. \nAttack all enemies for **250% -> 280%** damage.")
	.setThumbnail('https://i.imgur.com/iVLUvo8.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!Coulson passive' || msg.content === '!coulson passive' || msg.content === '!coul passive') { //Coulson 
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Passive)** \n \n**The Agent • T4 Upgrade** \n \nIf Coulson drops below 50% Health, change Speed Bar by \n**50% -> 60%** for S.H.I.E.L.D. Medic. \nOn WAR DEFENSE: \nGain **+20% -> +40%** Max Health. \nS.H.I.E.L.D. allies gain **+20% -> +40%** Max Health. \nOn Spawn, apply Immunity to **4 -> all** S.H.I.E.L.D. allies. \nGain +120% Resistance. \nS.H.I.E.L.D. allies gain +120% Resistance.")
	.setThumbnail('https://i.imgur.com/pKDbt3g.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Coulson speed' || msg.content === '!coulson speed' || msg.content === '!coul speed') { //Coulson SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912> **Coulson** \nAgent Coulson's base speed is 115, but: \nHis effective turn 1 speed is 172.5 with Nick Fury on War Defense. \nWith Black Widow using her turn 1 special, his effective turn 1 speed is 121.39.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!Coulson unlock' || msg.content === '!coulson unlock' || msg.content === '!coul farm' || msg.content === '!coul farm') { //Coulson UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912> **Coulson** \nCoulson is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//CROSSBONES
if (msg.content === '!Crossbones kit' || msg.content === '!crossbones kit' || msg.content === '!xb kit') { //Crossbones 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Basic)** \n \n**Piston Punch • T4 Upgrade** \n \nAttack primary target for **175% -> 200%** damage. \n75% chance of a Bonus attack for **125% -> 150%** damage and apply Offense Down.")
	.setThumbnail('https://i.imgur.com/Z4eF8IS.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Special)** \n \n**Wrath • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt + **2 -> 2-3** Counter. \nHeal self for 15% of Max Health.")
	.setThumbnail('https://i.imgur.com/2lsqAdz.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Ultimate)** \n \n**Detonate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nGain 2 Deathproof, then explode for **440% -> 480%** damage \n to self and all enemies. \nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('https://i.imgur.com/fYlrlDB.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Passive)** \n \n**Vengeance • T4 Upgrade** \n \n**+15% -> +20%** Max Health. HYDRA allies gain +5% Armor.")
	.setThumbnail('https://i.imgur.com/vtQvQxC.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Crossbones basic' || msg.content === '!crossbones basic' || msg.content === '!xb basic') { //Crossbones 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Basic)** \n \n**Piston Punch • T4 Upgrade** \n \nAttack primary target for **175% -> 200%** damage. \n75% chance of a Bonus attack for **125% -> 150%** damage and apply Offense Down.")
	.setThumbnail('https://i.imgur.com/Z4eF8IS.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Crossbones special' || msg.content === '!crossbones special' || msg.content === '!xb special') { //Crossbones 
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Special)** \n \n**Wrath • T4 Upgrade** \n \nGain Taunt + **2 -> 2-3** Counter. \nHeal self for 15% of Max Health.")
	.setThumbnail('https://i.imgur.com/2lsqAdz.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!Crossbones ultimate' || msg.content === '!crossbones ultimate' || msg.content === '!xb ultimate') { //Crossbones 
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Ultimate)** \n \n**Detonate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nGain 2 Deathproof, then explode for **440% -> 480%** damage \n to self and all enemies. \nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('https://i.imgur.com/fYlrlDB.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!Crossbones passive' || msg.content === '!crossbones passive' || msg.content === '!xb passive') { //Crossbones 
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Passive)** \n \n**Vengeance • T4 Upgrade** \n \n**+15% -> +20%** Max Health. HYDRA allies gain +5% Armor.")
	.setThumbnail('https://i.imgur.com/vtQvQxC.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Crossbones speed' || msg.content === '!crossbones speed' || msg.content === '!xb speed') { //Crossbones SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937> **Crossbones** \nCrossbones's speed is: 99")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!Crossbones unlock' || msg.content === '!crossbones unlock' || msg.content === '!xb farm' || msg.content === '!xb farm') { //Crossbones UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937> **Crossbones** \nCrossbones is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//CYCLOPS
if (msg.content === '!Cyclops kit' || msg.content === '!cyclops kit' || msg.content === '!cyclop kit') { //Cyclops 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Basic)** \n \n**Optic Blast • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage + \n50% chance to apply Defense Down. \nIf Psylocke is an ally, always apply Defense Down.")
	.setThumbnail('https://i.imgur.com/S663f9U.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Special)** \n \n**To Me! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nApply Taunt to the 2 most injured non-summoned \nnon-primary target enemies. \nCall an ally Wolverine to attack the most injured \nof those previous enemies. \n**75% -> 100%** chance to call an ally to attack the second most injured of those previous enemies. \nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/lfQC1y7.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Ultimate)** \n \n**Optic Devastation • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **200% -> 250%** damage + \napply Slow for **1 -> 2** turns. \nDamage is increased by 25% per Charged. \nThen lose all Charged.")
	.setThumbnail('https://i.imgur.com/Phpta6j.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Passive)** \n \n**Team Synergy • T4 Upgrade** \n \nOn Turn and on X-Men ally turn, gain **+1 -> +2** Charged,\n up to a maximum of **10 -> 20**. \nWhen an enemy attacks an ally Phoenix or Dark Phoenix, \n50% chance to attack that enemy for 200% damage. \nIf this character does not attack, \ncall an assist from an ally Wolverine to attack that enemy. \nWolverine gains +80% Damage for the assist. \nOn ally Phoenix death, gain Offense Up + \nchange an ally Wolverine Speed Bar by +100%.")
	.setThumbnail('https://i.imgur.com/qwD4QRu.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Cyclops basic' || msg.content === '!cyclops basic' || msg.content === '!cyclop basic') { //Cyclops 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Basic)** \n \n**Optic Blast • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage + \n50% chance to apply Defense Down. \nIf Psylocke is an ally, always apply Defense Down.")
	.setThumbnail('https://i.imgur.com/S663f9U.png') 
	msg.channel.send(exampleEmbed);
}
if (msg.content === '!Cyclops special' || msg.content === '!cyclops special' || msg.content === '!cyclop special') { //Cyclops 
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Special)** \n \n**To Me! • T4 Upgrade** \n \nApply Taunt to the 2 most injured non-summoned \nnon-primary target enemies. \nCall an ally Wolverine to attack the most injured \nof those previous enemies. \n**75% -> 100%** chance to call an ally to attack the second most injured of those previous enemies. \nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/lfQC1y7.png') 
	msg.channel.send(exampleEmbed2);
}
if (msg.content === '!Cyclops ultimate' || msg.content === '!cyclops ultimate' || msg.content === '!cyclop ultimate') { //Cyclops 
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Ultimate)** \n \n**Optic Devastation • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **200% -> 250%** damage + \napply Slow for **1 -> 2** turns. \nDamage is increased by 25% per Charged. \nThen lose all Charged.")
	.setThumbnail('https://i.imgur.com/Phpta6j.png') 
	msg.channel.send(exampleEmbed3);
}
if (msg.content === '!Cyclops passive' || msg.content === '!cyclops passive' || msg.content === '!cyclop passive') { //Cyclops 
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Passive)** \n \n**Team Synergy • T4 Upgrade** \n \nOn Turn and on X-Men ally turn, gain **+1 -> +2** Charged,\n up to a maximum of **10 -> 20**. \nWhen an enemy attacks an ally Phoenix or Dark Phoenix, \n50% chance to attack that enemy for 200% damage. \nIf this character does not attack, \ncall an assist from an ally Wolverine to attack that enemy. \nWolverine gains +80% Damage for the assist. \nOn ally Phoenix death, gain Offense Up + \nchange an ally Wolverine Speed Bar by +100%.")
	.setThumbnail('https://i.imgur.com/qwD4QRu.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!Cyclops speed' || msg.content === '!cyclops speed' || msg.content === '!cyclop speed') { //Cyclops SPEED
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230> **Cyclops** \n:Cyclops: Cyclops's speed is: 108")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!Cyclops unlock' || msg.content === '!cyclops unlock' || msg.content === '!cyclop farm' || msg.content === '!cyclop farm') { //Cyclops UNLOCK
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230> **Cyclops** \nCyclops is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//DAREDEVIL
if (msg.content === '!34' || msg.content === '!6464' || msg.content === '!64678') { //Daredevil 
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Basic)** \n \n**Strike Without Fear • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage. \n**40% -> 50%** chance to Bonus attack for 200% damage. \nIf target is VILLAIN, always Bonus attack.")
	.setThumbnail('https://i.imgur.com/lI26m6t.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Special)** \n \n**Throw Baton • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **180% -> 200%** damage + \nChain to **1-2 -> 2** targets within 2 spaces of \nprevious target for **130% -> 150%** damage. \nDodge breaks this Chain. \nApply 2 Counter to self and all DEFENDER allies.")
	.setThumbnail('https://i.imgur.com/N1gdtlW.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Ultimate)** \n \n**Brawl • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **370% -> 400%** damage + \nChain to **3-4 -> 4-6** adjacent targets for 240% damage. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/hV0vTQY.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Passive)** \n \n**Enhance Senses • T4 Upgrade** \n \nSelf and DEFENDER allies gain **+5% -> +10%** Speed. \nGain +5% Dodge chance. \nGain +5% Dodge chance per DEFENDER ally. \nGain +10% Damage.")
	.setThumbnail('https://i.imgur.com/UgnuwNE.png') 
	msg.channel.send(exampleEmbed4);
}





if (msg.content === '!kit') {
	let url = "https://cdn.discordapp.com/attachments/657543925141078048/667433017647562803/images_12.png"
	const Embed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setThumbnail(url)
	msg.channel.send(Embed);  
}


});

//WAR COUNTERS
client.on('message', async message => {
if(message.content === '!counter aim+info' || message.content === '!Counter Aim+Info' || message.content === '!Counter aim+info' || message.content === '!counter Aim+info' || message.content === '!counter aim+Info' || message.content === '!Counter Aim+info' || message.content === '!counter Aim+Info' || message.content === '!Counter aim+Info') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const channelToCheckImagesallin1 = client.channels.get('665762283883855873')
const channelToCheckText = client.channels.get('665671446026125312')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const counteraim = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/vjkFbPM/AIM-Counters.png') 
message.channel.send(counteraim);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);
} else{
message.channel.send("Sorry, this doesn't work here. Head to <#666305824813219870> and try again.")
}
}

if(message.content === '!counter aim' || message.content === '!Counter Aim' || message.content === '!Counter aim' || message.content === '!counter Aim') {
const aimcounterimage = client.channels.get('666332891730673668')
aimcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counteraim = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counteraim.url)
message.channel.send(attachment);
})
}

if(message.content === '!counter asgardians+info' || message.content === '!Counter Asgardians+Info' || message.content === '!Counter asgardians+info' || message.content === '!counter Asgardians+info' || message.content === '!counter asgardians+Info' || message.content === '!Counter Asgardians+info' || message.content === '!counter Asgardians+Info' || message.content === '!Counter asgardians+Info') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const channelToCheckImagesallin1 = client.channels.get('666271524793221121')
const channelToCheckText = client.channels.get('666271343536373761')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const counterasgard = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/6WghFCz/Asgardians-Counters.png') 
message.channel.send(counterasgard);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);
} else{
message.channel.send("Sorry, this doesn't work here. Head to <#666305824813219870> and try again.")
}
}

if(message.content === '!counter asgardians' || message.content === '!Counter Asgardians' || message.content === '!Counter asgardians' || message.content === '!counter Asgardians') {
const asgardcounterimage = client.channels.get('666340204872990730')
asgardcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterasgard = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterasgard.url)
message.channel.send(attachment);
})
}

if(message.content === '!counter brawlers+info' || message.content === '!Counter Brawlers+Info' || message.content === '!Counter brawlers+info' || message.content === '!counter Brawlers+info' || message.content === '!counter brawlers+Info' || message.content === '!Counter Brawlers+info' || message.content === '!counter Brawlers+Info' || message.content === '!Counter brawlers+Info') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const channelToCheckImagesallin1 = client.channels.get('666317849375277077')
const channelToCheckText = client.channels.get('666317820656615435')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const counterbrawlers = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/0jsbMQ4/Brawlers-Counters.png') 
message.channel.send(counterbrawlers);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);
} else{
message.channel.send("Sorry, this doesn't work here. Head to <#666305824813219870> and try again.")
}
}

if(message.content === '!counter brawlers' || message.content === '!Counter Brawlers' || message.content === '!Counter brawlers' || message.content === '!counter Brawlers') {
const brawlerscounterimage = client.channels.get('666340239903686659')
brawlerscounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterbrawlers = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterbrawlers.url)
message.channel.send(attachment);
})
}

if(message.content === '!counter shield+info' || message.content === '!Counter Shield+Info' || message.content === '!Counter shield+info' || message.content === '!counter Shield+info' || message.content === '!counter shield+Info' || message.content === '!Counter Shield+info' || message.content === '!counter Shield+Info' || message.content === '!Counter shield+Info') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const channelToCheckImagesallin1 = client.channels.get('666318805844230144')
const channelToCheckText = client.channels.get('666318788140072981')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const countershield = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/ByJTvwh/Coulson-Counters.png') 
message.channel.send(countershield);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);
} else{
message.channel.send("Sorry, this doesn't work here. Head to <#666305824813219870> and try again.")
}
}

if(message.content === '!counter shield' || message.content === '!Counter Shield' || message.content === '!Counter shield' || message.content === '!counter Shield' || message.content === '!counter coulson' || message.content === '!Counter Coulson' || message.content === '!Counter coulson' || message.content === '!counter Coulson') {
const shieldcounterimage = client.channels.get('666340284962963524')
shieldcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const countershield = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(countershield.url)
message.channel.send(attachment);
})
}

if(message.content === '!counter s6+info' || message.content === '!Counter S6+Info' || message.content === '!Counter s6+info' || message.content === '!counter S6+info' || message.content === '!counter s6+Info' || message.content === '!Counter S6+info' || message.content === '!counter S6+Info' || message.content === '!Counter s6+Info') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const channelToCheckImagesallin1 = client.channels.get('666319027538493450')
const channelToCheckText = client.channels.get('666319009465237524')
const messages1 = await channelToCheckText.fetchMessages({ limit: 1 });
const messages2 = await channelToCheckImagesallin1.fetchMessages({ limit: 1 });
const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const counters6 = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/YZGN5JP/S6-Counters.png') 
message.channel.send(counters6);

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
message.channel.send(embed);
} else{
message.channel.send("Sorry, this doesn't work here. Head to <#666305824813219870> and try again.")
}
}

if(message.content === '!counter s6' || message.content === '!Counter S6' || message.content === '!Counter s6' || message.content === '!counter S6') {
const s6counterimage = client.channels.get('666340284962963524')
s6counterimage.fetchMessages({ limit: 1 }).then(messages => {
const counters6 = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counters6.url)
message.channel.send(attachment);
})
}

});

//SUBMIT WAR COUNTERS
client.on('message', async message => {
if(message.content === '!submit warcounter aim' || message.content === '!Submit Warcounter Aim' || message.content === '!Submit warcounter aim' || message.content === '!submit Warcounter aim' || message.content === '!submit warcounter Aim' || message.content === '!Submit Warcounter aim' || message.content === '!submit Warcounter Aim' || message.content === '!Submit warcounter Aim') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const AimSubmission = client.channels.get('666370149766529054')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
AimSubmission.send(embed);
CheckText.send("War Counter Submission Received.");
}
}

if(message.content === '!submit warcounter asgardians' || message.content === '!Submit Warcounter Asgardians' || message.content === '!Submit warcounter asgardians' || message.content === '!submit Warcounter asgardians' || message.content === '!submit warcounter Asgardians' || message.content === '!Submit Warcounter asgardians' || message.content === '!submit Warcounter Asgardians' || message.content === '!Submit warcounter Asgardians') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const AsgardianSubmission = client.channels.get('666384999246725150')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
AsgardianSubmission.send(embed);
CheckText.send("War Counter Submission Received.");
}
}

if(message.content === '!submit warcounter brawlers' || message.content === '!Submit Warcounter Brawlers' || message.content === '!Submit warcounter brawlers' || message.content === '!submit Warcounter brawlers' || message.content === '!submit warcounter Brawlers' || message.content === '!Submit Warcounter brawlers' || message.content === '!submit Warcounter Brawlers' || message.content === '!Submit warcounter Brawlers') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const BrawlerSubmission = client.channels.get('666385224174927873')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
BrawlerSubmission.send(embed);
CheckText.send("War Counter Submission Received.");
}
}

if(message.content === '!submit warcounter shield' || message.content === '!Submit Warcounter Shield' || message.content === '!Submit warcounter shield' || message.content === '!submit Warcounter shield' || message.content === '!submit warcounter Shield' || message.content === '!Submit Warcounter shield' || message.content === '!submit Warcounter Shield' || message.content === '!Submit warcounter Shield') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const ShieldSubmission = client.channels.get('666385470514790440')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
ShieldSubmission.send(embed);
CheckText.send("War Counter Submission Received.");
}
}

if(message.content === '!submit warcounter s6' || message.content === '!Submit Warcounter S6' || message.content === '!Submit warcounter s6' || message.content === '!submit Warcounter s6' || message.content === '!submit warcounter S6' || message.content === '!Submit Warcounter s6' || message.content === '!submit Warcounter S6' || message.content === '!Submit warcounter S6') {
if (message.channel.id === '666305824813219870') { //bot spam channel
const CheckImage = client.channels.get('666305824813219870')
const CheckText = client.channels.get('666305824813219870')
const S6Submission = client.channels.get('666385715566739467')
const messages1 = await CheckText.fetchMessages({ limit: 2 });
const messages2 = await CheckImage.fetchMessages({ limit: 2 });

const embed = new Discord.RichEmbed()
const Text = messages1.first().content;
const Image = messages2.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(Image.url)

const TEXT = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription(Text.content)

const ATTACHMENT = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage(Image.url)

embed.setColor('#0099ff')
embed.setDescription(Text)
embed.setImage(Image.url)
S6Submission.send(embed);
CheckText.send("War Counter Submission Received.");
}
}

});


client.on("message", message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let kit = args[0]; 
let speed = args[1];
let unlock = args[2];

if (message.content.startsWith(config.prefix + "daredevil")) {
if (args[0] === "kit") {
const Embed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("kit")
message.channel.send(Embed);
}

if (args[1] === "speed"){
const Embed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("speed")
message.channel.send(Embed);
}

if (args[2] === "unlock"){
const Embed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("unlock")
message.channel.send(Embed);
}

}
});
//Can someone explain why !command charlie bravo alpha sends embed>BRAVO ONLY ?
//Because args[0] is alpha and you only send the embed if it's alpha

client.login(process.env.TOKEN);
