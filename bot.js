const Discord = require('discord.js');
const client = new Discord.Client();
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
if (msg.content === '!aimassault kit' || msg.content === '!aimassaulter kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Basic)** \n \n**Submachine Gun • Level 7** \n \nAttack primary target for 160% damage + apply Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/M2II5ei.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Special)** \n \n**Hyperdose • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for 250% damage. \nIf this character has a negative effect, Bonus attack the primary \ntarget for 125% per negative effect on the target. \nGain speed up for 4 turns.")
	.setThumbnail('https://i.imgur.com/nNIMVDs.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Passive)** \n \n**Juicer • Level 5** \n \nOn Turn, change Speed Bar by +20% for self + \nadjacent A.I.M. allies. \nGain +15% Damage and +10% Max Health.")
	.setThumbnail('https://i.imgur.com/6b9TZXU.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimassault T4' || msg.content === '!aimassaulter T4') { //AIMASSAULT T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!aimassault speed' || msg.content === '!aimassaulter speed') { //AIMASSAULT SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nAim Assaulter's speed is: 118")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aimassault unlock' || msg.content === '!aimassaulter unlock' || msg.content === '!aimassault farm' || msg.content === '!aimassaulter farm') { //AIM ASSAULY UNLOCK
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nAim Assaulter is farmable in: \n**Heroes Campaign \nNode 5-3**")
	msg.channel.send(speedEmbed); 
}
//AIM INFECTOR
if (msg.content === '!aiminfect kit' || msg.content === '!aiminfector kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Basic)** \n \n**Puncture • Level 7** \n \nAttack primary target for 270% damage. \n Transfer all negative effects on this character to the primary target + apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Special)** \n \n**Biohazard • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nChange Speed Bar by +75%. \nHeal self for 10000 Health + 20% of Max Health. \nGain 2 Counter. Apply 2 Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Passive)** \n \n**Metabolism • Level 5** \n \nOn Turn, gain 2 random negative effects for 2 turns. \nGain +10% Speed.\nGain +15% Max Health. \n \n**On Turn:** \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aiminfect T4' || msg.content === '!aiminfector T4') { //AIMINFECTOR T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!aiminfect speed' || msg.content === '!aiminfector speed') { //AIMINFECTOR SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \nAim Infector's speed is: 104")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aiminfect unlock' || msg.content === '!aiminfector unlock' || msg.content === '!aiminfect farm' || msg.content === '!aiminfector farm') { //AIM ASSAULY UNLOCK
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \nAim Infector is farmable in: \n**Orbs: \nPremium, Basic and Raid Orb.**")
	msg.channel.send(speedEmbed); 
}
//AIM MONSTROSITY//
if (msg.content === '!aimmon kit' || msg.content === '!aimmonstrosity kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Basic)** \n \n**Bash • Level 7** \n \nAttack primary target for 280% damage + apply Defense Down.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Special)** \n \n**Sudden Evolution • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Offense Up + \napply Offense Up to adjacent A.I.M. allies for 3 turns. \nAttack primary target for 300% damage. \nThis attack cannot miss.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Passive)** \n \n**Growth Spurt • Level 5** \n \nOn Spawn, gain Defense Down. \nOn Turn, Heal for 20% of Max Health.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimmon T4' || msg.content === '!aimmonstrosity T4') { //AIMMONSTROSITY T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!aimmon speed' || msg.content === '!aimmonstrosity speed') { //AIMMONSTROSITY SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \nAim Monstrosity's speed is: 77")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aimmon unlock' || msg.content === '!aimmonstrosity unlock' || msg.content === '!aimmon farm' || msg.content === '!aimmonstrosity farm') { //AIMMONSTROSITY UNLOCK
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \nAim Monstrosity is farmable in: \n**Orbs: \nPremium & Basic. \n \nBlitz: \nBlitz orb & blitz store**")
	msg.channel.send(speedEmbed); 
}
//AIM RESEARCHER
if (msg.content === '!aimrea kit' || msg.content === '!aimresearcher kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Basic)** \n \n**Wounding Shot • Level 7** \n \nAttack primary target for 280% damage + \napply Offense Down for 1 turn.")
	.setThumbnail('https://i.imgur.com/qThfwy9.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Special)** \n \n**Surgery Drone • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nHeal lowest Health ally and adjacent allies for 7000 Health + \n15% of this character's Max Health + \nflip Bleed on lowest Health ally and adjacent allies.")
	.setThumbnail('https://i.imgur.com/Y2X5nS8.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Passive)** \n \n**Antidote • Level 5** \n \nOn Turn, choose 1 random ally to apply 1 random positive effect from this list: \nOffense Up, Defense Up, Speed Up, Regeneration, Deathproof, Deflect. \nIf ally is A.I.M., then apply 2 random positive effects from the list. \nWhen a negative effect is applied to an A.I.M. ally, fill this character's Speed Bar by +20%.")
	.setThumbnail('https://i.imgur.com/x7MKhcD.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimrea T4' || msg.content === '!aimresearcher T4') { //AIMRESEARCHER T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!aimrea speed' || msg.content === '!aimresearcher speed') { //AIMRESEARCHER SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \nAim Researcher's speed is: 81")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aimrea unlock' || msg.content === '!aimresearcher unlock' || msg.content === '!aimrea farm' || msg.content === '!aimresearcher farm') { //AIMRESEARCHER UNLOCK
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \nAim Researcher is farmable in: \n**Orbs: \nPremium & Basic. \n \nBlitz: \nBlitz orb & blitz store**")
	msg.channel.send(speedEmbed); 
}
//AIM SECURITY
if (msg.content === '!aimsec kit' || msg.content === '!aimsecurity kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Basic)** \n \n**Takedown • Level 7** \n \nAttack primary target for 270% damage. \nIf Ability Blocked, attack primary target for 470% damage instead. \nApply Slow.")
	.setThumbnail('https://i.imgur.com/S00SWQw.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Special)** \n \n**Charge Capacitor • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt for 1 turn + Slow for 2 turns. \nHeal self and adjacent A.I.M. allies for 10000 Health + \n10% of Max Health. \nClear Speed Up on self.")
	.setThumbnail('https://i.imgur.com/Ted3CoX.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Passive)** \n \n**Immunization • Level 5** \n \nOn attacked, if Scientist Supreme is an ally, when above 75% Health, transfer 1 negative effect from self and each A.I.M. ally to the attacking enemy. \nGain +10% Max Health and +15% Resistance.")
	.setThumbnail('https://i.imgur.com/Fx7CjEy.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!aimsec T4' || msg.content === '!aimsecurity T4') { //AIMSECURITY T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!aimsec speed' || msg.content === '!aimsecurity speed') { //AIMSECURITY SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \nAim Security's speed is: 76")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!aimsec unlock' || msg.content === '!aimsecurity unlock' || msg.content === '!aimsec farm' || msg.content === '!aimsecurity farm') { //AIMSECURITY UNLOCK
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \nAim Security is farmable in: \n**Orbs: \nPremium & Basic. \n \nMissions: \nVillains United: Chapter 5-3**")
	msg.channel.send(speedEmbed); 
}
//AMERICA CHAVEZ
if (msg.content === '!america kit' || msg.content === '!americachavez kit' || msg.content === '!chavez kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Basic)** \n \n**Starstruck • Level 7** \n \nAttack primary target for 290% damage + apply Defense Down.")
	.setThumbnail('https://i.imgur.com/XVvMMSA.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Special)** \n \n**Shooting Star • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for 300% damage + \n75% damage per HERO BRAWLER ally.")
	.setThumbnail('https://i.imgur.com/0V2pdTr.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Ultimate)** \n \n**America's Starling • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nClear 3 positive effects. Attack primary target for 430% damage.")
	.setThumbnail('https://i.imgur.com/hdqNsvC.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Passive)** \n \n**Starling Highway • Level 5** \n \nGain +20% Max Health. \nHERO BRAWLER allies gain +20% Max Health.")
	.setThumbnail('https://i.imgur.com/dpbmvcX.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!america T4' || msg.content === '!americachavez T4' || msg.content === '!chavez T4') { //AMERICACHAVEZ T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!america speed' || msg.content === '!americachavez speed' || msg.content === '!chavez speed') { //AMERICACHAVEZ SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \nAmerica Chavez's speed is: 115")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!america unlock' || msg.content === '!americachavez unlock' || msg.content === '!america farm' || msg.content === '!americachavez farm' || msg.content === '!chavez unlock' || msg.content === '!chavez farm') { //AMERICACHAVEZ UNLOCK
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \nAmerica Chavez is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//ANT MAN
if (msg.content === '!ant kit' || msg.content === '!antman kit' || msg.content === '!man kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Basic)** \n \n**Scrappy Fighter • Level 7** \n \nAttack primary target for 270% damage + \ncopy a positive effect from the target to Self + \nclear the copied effect. \nIf Wasp is an ally, she also gains the copied effect.")
	.setThumbnail('https://i.imgur.com/0gqCigL.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Special)** \n \n**Gum Up the Works • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for 220% damage + \nalways apply Ability Block for 2 turns. \nThis attack cannot be dodged or blocked.")
	.setThumbnail('https://i.imgur.com/kHl8bsh.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Ultimate)** \n \n**Stomp • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack all for 140% damage + Apply Slow to all targets. \nIf Wasp is an ally, deal an additional +30% damage to all targets")
	.setThumbnail('https://i.imgur.com/MTgIIvw.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Passive)** \n \n**Escape Plan • Level 5** \n \nOn Spawn, apply Evade to Wasp if she is an ally. \n \nOn Turn, 15% chance to gain Evade + 15% chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/5yQ6YZx.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!ant T4' || msg.content === '!antman T4' || msg.content === '!man T4') { //ANTMAN T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!ant speed' || msg.content === '!antman speed' || msg.content === '!man speed') { //ANTMAN SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \nAnt Man's speed is: 100")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!ant unlock' || msg.content === '!antman unlock' || msg.content === '!ant farm' || msg.content === '!antman farm' || msg.content === '!man unlock' || msg.content === '!man farm') { //ANTMAN UNLOCK
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \nAnt Man is farmable in:**")
	msg.channel.send(speedEmbed); 
}

//BEAST????

//BLACK BOLT
if (msg.content === '!blackbolt kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Basic)** \n \n**Royal Strike • Level 7** \n \nIf the primary target has slow, flip 2 negative effects on self. \nAttack primary target for 400% damaage + clear 2 positive effects")
	.setThumbnail('https://i.imgur.com/qdQRIfE.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Special)** \n \n**Staggering Voice • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack Primary target for 600% damage. \nThis attack is unavoidable.")
	.setThumbnail('https://i.imgur.com/5wsashb.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Ultimate)** \n \n**Sonic Scream • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for 500% damage.")
	.setThumbnail('https://i.imgur.com/IiJQ57n.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Passive)** \n \n**King Of Attilan • Level 5** \nCharacters killed by Black Bolt cannot be revived. \n \nWhen an enemy drops below 25% Health: \nAttack that enemy for **200%** damage. \nIf the enemy is VILLAIN TECH: \nAttack that enemy for **400%** damage instead. \n \n**On enemy summon:** \nApply Disrupted + clear 3 positive effects on\nthe summoner. \n \n**Stats** \nGain +40% Resistance. \nINHUMAN allies gain +40% Resistance. \nGain +50% Max Health. \nINHUMAN allies gain +50% Max Health.")
	.setThumbnail('https://i.imgur.com/JthP6vO.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!blackbolt T4') { //BLACKBOLT T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!blackbolt speed') { //BLACKBOLT SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \nBlack Bolt's speed is: 100")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!unlock blackbolt') { //UNLOCK 
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("__**Blackbolt Unlock**__ \n<:staron:662797309205151744><:staron:662797309205151744><:staron:662797309205151744><:staron:662797309205151744><:staron:662797309205151744><:staroff:662797308835921935><:staroff:662797308835921935> \n<:heimdall:661370019325935666> **Heimdall** \n<:hela:661370019317284880> **Hela** \n<:loki:661370019145449473> **Loki** \n<:sif:661370019300638737> **Sif** \n<:thor:661370019279667248> **Thor**")
	msg.channel.send(exampleEmbed);
}
//BLACK PANTHER
if (msg.content === '!bp kit' || msg.content === '!blackpanther kit' || msg.content === '!panther kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Basic)** \n \n**Claw Slash • Level 7** \n \nAttack primary target for 210% damage + 30% Piercing. \nApply Slow.")
	.setThumbnail('https://i.imgur.com/CBg3Fze.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Special)** \n \n**Hunter's Spirit • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for 230% damage + 30% Piercing. \nGain Offense Up for 2 turns. On Crit, gain Counter")
	.setThumbnail('https://i.imgur.com/mkWgTWh.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Ultimate)** \n \n**Panther Rush • Level 7** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for 280% damage. \nChain to 1-3 adjacent targets for 200% damage. \nCounterattack breaks this Chain. \nWhile in Charged, attack all enemies for 250% damage, \nthen lose all Charged. \nThis attack gains +20% Damage per Charged. All attacks have +30% Piercing and \n+20% Extra Crit Chance.")
	.setThumbnail('https://i.imgur.com/WNirdk2.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Passive)** \n \n**Defender of Wakanda • Level 5** \n \nOn dropping below 50% of Max Health, gain +1 Charged, \nup to a maximum of 5. On Kill, fill Speed Bar by 100%.")
	.setThumbnail('https://i.imgur.com/VP20XOH.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!bp T4' || msg.content === '!blackpanther T4' || msg.content === '!panther T4') { //BLACKPANTHER T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!bp speed' || msg.content === '!blackpanther speed' || msg.content === '!panther speed') { //BLACKPANTHER SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \nBlack Panther's speed is: 125 \nHis effective turn 1 speed is 187.5 with Shuri. \nWith Black Widow using her turn 1 special, his effective speed is still 125.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!bp unlock' || msg.content === '!blackpanther unlock' || msg.content === '!black farm' || msg.content === '!blackpanther farm' || msg.content === '!panther unlock' || msg.content === '!panther farm') { //BLACKPANTHER UNLOCK
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \nBlack Panther is farmable in:**")
	msg.channel.send(speedEmbed); 
}
//BLACK WIDOW
if (msg.content === '!bw kit' || msg.content === '!blackwidow kit' || msg.content === '!widow kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Basic)** \n \n**Sabotage • Level 6** \n \nAttack primary target for 190% damage. \nDuring Stealth, copy and clear all positive effects on primary target.")
	.setThumbnail('https://i.imgur.com/Adce8ne.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Special)** \n \n**Camouflage Tech • Level 6** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Stealth for 2 turns + clear all negative effects from Self. \nApply Speed Up to Self/S.H.I.E.L.D./AVENGER allies for 2 turns. \n60% chance to apply Speed Up to all allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/l51dzex.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Ultimate)** \n \n**Widow's Bite • Level 6** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for 230% damage + apply Stun. \n60% chance to Chain up to 3 adjacent targets for 170% damage + apply 2 Bleed for 2 turns. Counterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/A2R5zPl.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Passive)** \n \n**Saboteur • Level 4** \n \nGain +10% Speed. This is applied after any character has taken an action. When in Stealth, gain Offense Up.")
	.setThumbnail('https://i.imgur.com/ExIr73Q.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!bw T4' || msg.content === '!widow T4' || msg.content === '!widow T4') { //BLACKWIDOW T4S
	msg.channel.bulkDelete(1)
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
if (msg.content === '!bw speed' || msg.content === '!widow speed' || msg.content === '!widow speed') { //BLACKWIDOW SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \nBlack Widow's base speed is 135, \nbut she gains +5%, +10%, or +15% speed bar \ndepending on her passive level after any character's first turn. \nThat makes her speed after turn one 141.75, 148.5, or 155.25 depending on her passive level.")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!bw unlock' || msg.content === '!widow unlock' || msg.content === '!widow farm' || msg.content === '!blackwidow farm' || msg.content === '!widow unlock' || msg.content === '!widow farm') { //BLACKWIDOW UNLOCK
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \nBlack Widow is farmable in:**")
	msg.channel.send(speedEmbed); 
}

});

//WAR COUNTERS
client.on('message', async message => {
if(message.content === '!counter aim+info' || message.content === '!counter AIM+info') {
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

if(message.content === '!counter aim' || message.content === '!counter Aim') {
const counteraim = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/vjkFbPM/AIM-Counters.png') 
message.channel.send(counteraim);
}

if(message.content === '!counter asgard+info' || message.content === '!counter asgardians+info') {
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

if(message.content === '!counter asgard' || message.content === '!counter asgardians') {
const counterasgard = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/6WghFCz/Asgardians-Counters.png') 
message.channel.send(counterasgard);
}

if(message.content === '!counter brawlers+info' || message.content === '!counter brawlers+info') {
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

if(message.content === '!counter brawlers' || message.content === '!counter Brawlers') {
const counterbrawlers = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/0jsbMQ4/Brawlers-Counters.png') 
message.channel.send(counterbrawlers);
}

if(message.content === '!counter shield+info' || message.content === '!counter Shield+info') {
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

if(message.content === '!counter shield' || message.content === '!counter Shield') {
const countershield = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/ByJTvwh/Coulson-Counters.png') 
message.channel.send(countershield);
}

if(message.content === '!counter s6+info' || message.content === '!counter s6+info') {
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

if(message.content === '!counter s6' || message.content === '!counter S6') {
const counters6 = new Discord.RichEmbed()
.setColor('#0099ff')
.setImage('https://i.ibb.co/YZGN5JP/S6-Counters.png') 
message.channel.send(counters6);
}

});








client.login(process.env.TOKEN);
