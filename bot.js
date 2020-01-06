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
//ULTRON
client.on('message', msg => {	
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
});

//BLACK BOLT
client.on('message', msg => {
if (msg.content === '!blackbolt kit') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:661586769342365713>	**Black Bolt (Basic)** \n \n**Royal Strike • Level 7** \n \nIf the primary target has slow, flip 2 negative effects on self. \nAttack primary target for 400% damaage + clear 2 positive effects")
	.setThumbnail('https://i.imgur.com/qdQRIfE.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:661586769342365713>	**Black Bolt (Special)** \n \n**Staggering Voice • Level 7** \n<:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819> \nAttack Primary target for 600% damage. \nThis attack is unavoidable.")
	.setThumbnail('https://i.imgur.com/5wsashb.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:661586769342365713>	**Black Bolt (Ultimate)** \n \n**Sonic Scream • Level 7** \n<:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityoff:661583564965412871><:abilityoff:661583564965412871><:abilityoff:661583564965412871> \nAttack all enemies for 500% damage.")
	.setThumbnail('https://i.imgur.com/IiJQ57n.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:661586769342365713>	**Black Bolt (Passive)** \n \n**King Of Attilan • Level 5** \nCharacters killed by Black Bolt cannot be revived. \n \nWhen an enemy drops below 25% Health: \nAttack that enemy for **200%** damage. \nIf the enemy is VILLAIN TECH: \nAttack that enemy for **400%** damage instead. \n \n**On enemy summon:** \nApply Disrupted + clear 3 positive effects on\nthe summoner. \n \n**Stats** \nGain +40% Resistance. \nINHUMAN allies gain +40% Resistance. \nGain +50% Max Health. \nINHUMAN allies gain +50% Max Health.")
	.setThumbnail('https://i.imgur.com/JthP6vO.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!blackbolt T4') { //BLACKBOLT T4S
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:661586769342365713>	**Black Bolt (Basic)** \n \n**Royal Strike • T4 Upgrade** \n \nIf the primary target has slow, flip **1 -> 2** negative effects on self. \nAttack primary target for **350% -> 400%** damage + \nclear **1 -> 2** positive effects.")
	.setThumbnail('https://i.imgur.com/qdQRIfE.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:661586769342365713>	**Black Bolt (Special)** \n \n**Staggering Voice • T4 Upgrade** \n<:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819> \nAttack Primary target for **500% -> 600%** damage. \nThis attack is unavoidable.")
	.setThumbnail('https://i.imgur.com/5wsashb.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:661586769342365713>	**Black Bolt (Ultimate)** \n \n**Sonic Scream • T4 Upgrade** \n<:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityoff:661583564965412871><:abilityoff:661583564965412871><:abilityoff:661583564965412871> \nAttack all enemies for **380% -> 500%** damage.")
	.setThumbnail('https://i.imgur.com/IiJQ57n.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:661586769342365713>	**Black Bolt (Passive)** \n \n**King Of Attilan • T4 Upgrade** \n \nCharacters killed by Black Bolt cannot be revived. \nWhen an enemy drops below 25% Health, attack that enemy for\n**150% -> 200%** damage. If that enemy is VILLAIN TECH, attack that enemy \nfor **300% -> 400%** damage instead. \nOn enemy summon, apply Disrupted + clear 3 positive effects on\nthe summoner. \nGain +40% Resistance. INHUMAN allies gain +40% Resistance. \nGain **+30% -> +50%** Max Health. INHUMAN allies gain **+30% -> +50%** Max Health.")
	.setThumbnail('https://i.imgur.com/JthP6vO.png') 
	msg.channel.send(exampleEmbed4);
}
if (msg.content === '!blackbolt speed') { //BLACKBOLT SPEED
	msg.channel.bulkDelete(1)
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:661586769342365713> **Black Bolt** \nBlack Bolt's speed is: 100")
	msg.channel.send(speedEmbed);
}
if (msg.content === '!unlock blackbolt') { //UNLOCK 
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("__**Blackbolt Unlock**__ \n<:staron:662797309205151744><:staron:662797309205151744><:staron:662797309205151744><:staron:662797309205151744><:staron:662797309205151744><:staroff:662797308835921935><:staroff:662797308835921935> \n<:heimdall:661370019325935666> **Heimdall** \n<:hela:661370019317284880> **Hela** \n<:loki:661370019145449473> **Loki** \n<:sif:661370019300638737> **Sif** \n<:thor:661370019279667248> **Thor**")
	msg.channel.send(exampleEmbed);
}
});

//YO-YO
client.on('message', msg => {
	
	
	
//YOYO T4S	
if (msg.content === '!yo-yo T4') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:662003531145805844>	**Yo-Yo (Basic)** \n \n**Rapid Strikes • T4 Upgrade** \n \nAttack primary target for: \n**200% -> 230%** damage + clear counter. \n**70% -> 100%** chance for an assist from a random INHUMAN ally. \nThis attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/6qzPGoI.png') 
	msg.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:662003531145805844>	**Yo-Yo (Special)** \n \n**Flurry • T4 Upgrade** \n<:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819> \nAttack Primary target for **150% -> 170%** damage + \nBonus attack 2 times for **150% -> 170%** damage. \nRepeat this attack on **2 -> 3** additional random targets. \nThis attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/XSiALFR.png') 
	msg.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:662003531145805844>	**Yo-Yo (Ultimate)** \n \n**Run the Gauntlet • T4 Upgrade** \n<:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityon:661581893325815819><:abilityoff:661583564965412871><:abilityoff:661583564965412871> \nAttack all enemies for **220% -> 270%** damage. \nGrant 1 ability energy to all INHUMAN allies.")
	.setThumbnail('https://i.imgur.com/FW7RfYR.png') 
	msg.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:662003531145805844>	**Yo-Yo (Passive)** \n \n**Swift Protector • T4 Upgrade** \n \nOn enemy turn, if this character has no other PROTECTOR allies, \napply Offence Down to that enemy. This cannot be dodged. \nOn ally non-MINION S.H.I.E.L.D or INHUMAN turn, 50% chance \nto apply Evade to that ally. \n \n**On Spawn:** \nApply Defence Up to self and all non-MINION S.H.I.E.L.D or INHUMAN allies. \nWhena  non-MINION S.H.I.E.L.D or INHUMAN ally drops below \n50% Health, apply Defence up to that ally. \n \n**Stats:** \nGain **20% -> 25%** Dodge chance. \n**Gain 10% Focus per non-MINION S.H.I.E.L.D & INHUMAN ally.**")
	.setThumbnail('https://i.imgur.com/hCaEsPN.png') 
	msg.channel.send(exampleEmbed4);
}});

client.on('message', message => {

  // Check if the message was sent in the channel with the specified id.
  if(message.channel.id === '617707484626288672'){
    if(message.content.startsWith('!test1')) {

      // Get the channel to fetch the message from.
      const channelToCheck = client.channels.get('661661368943902720')

      // Fetch the last message from the mentioned channel.
    channelToCheck.fetchMessages({ limit: 1 }).then(messages => {
    const lastMessage = messages.attachments.first()
	message.channel.send(lastMessage.attachments.url)
    }).catch(err => {
    console.error(err)
    })
    }
  }
});





























client.login(process.env.TOKEN);
