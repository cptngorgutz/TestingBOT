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

if (msg.content === '!kit') {
	let url = "https://cdn.discordapp.com/attachments/657543925141078048/667433017647562803/images_12.png"
	const Embed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setThumbnail(url)
	msg.channel.send(Embed);  
}


});


//*********WAR COUNTERS + SUBMIT WAR COUNTERS***********
//example: !counter aim/+info || !submit warcounter aim)     
client.on("message", async message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let aimcounter = args[0];
let aimcounterinfo = args[0];
let asgardianscounter = args[0];
let asgardianscounterinfo = args[0];
let brawlerscounter = args[0];
let brawlerscounterinfo = args[0];
let shieldcounter = args[0];
let shieldcounterinfo = args[0];
let s6counter = args[0];
let s6counterinfo = args[0];
//Submit war counters below
let warcounter = args[0]; 
let aim = args[1];
let asgardians = args[1];
let brawlers = args[1];
let shield = args[1];
let s6 = args[1];

 //bot spam channel
if(command === 'counter') {
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') {
if (aimcounter === "aim"){	
const aimcounterimage = client.channels.get('666332891730673668')
aimcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counteraim = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counteraim.url)
message.channel.send(attachment);
})
}
if (aimcounterinfo === "aim+info"){		
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
}
if (asgardianscounter === "asgardians"){	
const asgardcounterimage = client.channels.get('666340204872990730')
asgardcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterasgard = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterasgard.url)
message.channel.send(attachment);
})
}
if (asgardianscounterinfo === "asgardians+info"){	
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
}
if (brawlerscounter === "brawlers"){	
const brawlerscounterimage = client.channels.get('666340239903686659')
brawlerscounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterbrawlers = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterbrawlers.url)
message.channel.send(attachment);
})
}
if (brawlerscounterinfo === "brawlers+info"){	
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
}
if (shieldcounter === "shield"){	
const shieldcounterimage = client.channels.get('666340284962963524')
shieldcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const countershield = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(countershield.url)
message.channel.send(attachment);
})
}
if (shieldcounterinfo === "shield+info"){	
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
}
if (s6counter === "s6"){	
const s6counterimage = client.channels.get('666340284962963524')
s6counterimage.fetchMessages({ limit: 1 }).then(messages => {
const counters6 = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counters6.url)
message.channel.send(attachment);
})
}
if (s6counterinfo === "s6+info"){	
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
}
} else {
message.channel.send("Sorry, this doesn't work here. Head to <#666305824813219870> and try again.").catch(console.error);	
}
}

if(command === 'submit') {
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') {
if (args[0] === "warcounter"){	
}
if (args[1] === "aim"){	
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
if (args[1] === "asgardians"){	
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
if (args[1] === "brawlers"){	
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
if (args[1] === "shield"){	
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
if (args[1] === "s6"){	
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
} else {
message.channel.send("Sorry, this doesn't work here. Head to <#666305824813219870> and try again.").catch(console.error);	
}
} 
});


//*********CHARACTERS + TEAMS***********
//example: !ironman speed || !asgardians)
client.on("message", message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let kit = args[0]; 
let basic = args[0];
let special = args[0];
let ultimate = args[0];
let passive = args[0];
let speed = args[0];
let unlock = args[0];
let trait = args[0];

//EVERY CHARACTER
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') { //bot spam channel
if(command === 'aimassaulter' || command === 'aimassault' || command === 'aimass' || command === 'assault' || command === 'assaulter') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Basic)** \n \n**Submachine Gun • T4 Upgrade** \n \nAttack primary target for **140% -> 160%** damage + \napply Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/M2II5ei.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Special)** \n \n**Hyperdose • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nIf this character has a negative effect, Bonus attack the primary \ntarget for **100% -> 125%** per negative effect on the target. \nGain Speed Up for 4 turns.")
	.setThumbnail('https://i.imgur.com/nNIMVDs.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Passive)** \n \n**Juicer • T4 Upgrade** \n \nOn Turn, change Speed Bar by **+10% -> +20%** for self \nand adjacent A.I.M. allies. \nGain **+10% -> +15%** Damage and +10% Max Health.")
	.setThumbnail('https://i.imgur.com/6b9TZXU.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Basic)** \n \n**Submachine Gun • T4 Upgrade** \n \nAttack primary target for **140% -> 160%** damage + \napply Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/M2II5ei.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Special)** \n \n**Hyperdose • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nIf this character has a negative effect, Bonus attack the primary \ntarget for **100% -> 125%** per negative effect on the target. \nGain Speed Up for 4 turns.")
	.setThumbnail('https://i.imgur.com/nNIMVDs.png') 
	message.channel.send(exampleEmbed2);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Passive)** \n \n**Juicer • T4 Upgrade** \n \nOn Turn, change Speed Bar by **+10% -> +20%** for self \nand adjacent A.I.M. allies. \nGain **+10% -> +15%** Damage and +10% Max Health.")
	.setThumbnail('https://i.imgur.com/6b9TZXU.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nAim Assaulter's speed is: 118")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nAim Assaulter is farmable in: \n**Heroes Campaign \nNode 5-3**")
	message.channel.send(speedEmbed); 
}

if(trait === "trait" || unlock === "traits") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nA.I.M., Blaster, Global, Minion, Tech, Villain.")  
	message.channel.send(speedEmbed); 
}
}
if(command === 'aiminfector' || command === 'aiminfect' || command === 'infector') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Basic)** \n \n**Puncture • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Special)** \n \n**Biohazard • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Passive)** \n \n**Metabolism • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Basic)** \n \n**Puncture • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Special)** \n \n**Biohazard • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	message.channel.send(exampleEmbed2);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Passive)** \n \n**Metabolism • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \nA.I.M. Infector's base speed is **104**, but he gains: \n+5% to +%10 Speed after any character's first turn. \nWith level 4 passive, that makes his speed after turn one **114.4**. \nWith level 4 passive, **Scientist Supreme**, and 3 other AIM characters: \nHis effective turn 1 speed is **108.16**. \nWith an adjacent **A.I.M. Assaulter** with level 4 passive and no **Scientist Supreme**, **A.I.M. Infector's** effective turn 1 speed is usually **115.11**. /nWith **Assaulter** and his level 5 passive or level 4 passive along with \n**Scientist Supreme**, his effective turn 1 speed is **118**.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \nAim Infector is farmable in: \n**Orbs: \nPremium, Basic and Raid Orb.**")
	message.channel.send(speedEmbed); 
}

} 
if(command === 'aimmonstrosity' || command === 'aimmon' || command === 'aimmonstro' || command === 'monstrosity') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Basic)** \n \n**Bash • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Special)** \n \n**Sudden Evolution • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Passive)** \n \n**Growth Spurt • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Basic)** \n \n**Bash • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Special)** \n \n**Sudden Evolution • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	message.channel.send(exampleEmbed2);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Passive)** \n \n**Growth Spurt • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \nA.I.M. Monstrosity's base speed is 77, but his effective turn 1 speed with an adjacent A.I.M. Assaulter is 85.33 with their level 4 passive, \nor 95.18 with their level 5 passive.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \nAim Monstrosity is farmable in: \n**Orbs: \nPremium & Basic. \n \nBlitz: \nBlitz orb & blitz store**")
	message.channel.send(speedEmbed); 
}

} 
if(command === 'aimresearcher' || command === 'aimresearch' || command === 'aimre' || command === 'researcher') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Basic)** \n \n**Wounding Shot • T4 Upgrade** \n \nAttack primary target for **250% -> 280%** damage. \n**90% -> 100%** chance to apply Offense Down for 1 turn..")
	.setThumbnail('https://i.imgur.com/qThfwy9.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Special)** \n \n**Surgery Drone • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nHeal lowest Health ally and their adjacent allies for \n**6000 -> 7000** Health + 15% of this character's Max Health + \n**75% -> 100%** chance to flip Bleed on lowest Health ally and their adjacent allies.")
	.setThumbnail('https://i.imgur.com/Y2X5nS8.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Passive)** \n \n**Antidote • T4 Upgrade** \n \n**On Turn** \n**75% -> 100%** chance to choose 1 random ally to apply 1 random positive effect from this list: Offense Up, Defense Up, Speed Up, Regeneration, Deathproof, Deflect. \nIf ally is A.I.M., then apply 2 random positive effects from the list. \n \nWhen a negative effect is applied to an A.I.M. ally, fill this character's Speed Bar by **+10% -> +20%**.")
	.setThumbnail('https://i.imgur.com/x7MKhcD.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Basic)** \n \n**Wounding Shot • T4 Upgrade** \n \nAttack primary target for **250% -> 280%** damage. \n**90% -> 100%** chance to apply Offense Down for 1 turn..")
	.setThumbnail('https://i.imgur.com/qThfwy9.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Special)** \n \n**Surgery Drone • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nHeal lowest Health ally and their adjacent allies for \n**6000 -> 7000** Health + 15% of this character's Max Health + \n**75% -> 100%** chance to flip Bleed on lowest Health ally and their adjacent allies.")
	.setThumbnail('https://i.imgur.com/Y2X5nS8.png') 
	message.channel.send(exampleEmbed2);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Passive)** \n \n**Antidote • T4 Upgrade** \n \n**On Turn** \n**75% -> 100%** chance to choose 1 random ally to apply 1 random positive effect from this list: Offense Up, Defense Up, Speed Up, Regeneration, Deathproof, Deflect. \nIf ally is A.I.M., then apply 2 random positive effects from the list. \n \nWhen a negative effect is applied to an A.I.M. ally, fill this character's Speed Bar by **+10% -> +20%**.")
	.setThumbnail('https://i.imgur.com/x7MKhcD.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \nA.I.M. Researcher's base speed is 81, but she can gain 10% to 20% speed bar multiple times from her and A.I.M. Assaulter's passive. \nHer possible effective turn 1 speed can be as follows: \n+10% Speed Bar: **89.33**, +20%: **101**, +30%: **114.33**, 40%: **131**, 50%: **152.43**.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \nAim Researcher is farmable in: \n**Orbs: \nPremium & Basic. \n \nBlitz: \nBlitz orb & blitz store**")
	message.channel.send(speedEmbed); 
}

} 
if(command === 'aimsecurity' || command === 'aimsec') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Basic)** \n \n**Takedown • T4 Upgrade** \n \nAttack primary target for **230% -> 270%** damage. \nIf Ability Blocked, attack primary target for \n**430% -> 470%** damage instead. \nApply Slow.")
	.setThumbnail('https://i.imgur.com/S00SWQw.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Special)** \n \n**Charge Capacitor • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt for 1 turn + Slow for 2 turns. Heal self and adjacent A.I.M. allies for **7000 -> 10000** Health + 10% of Max Health. Clear Speed Up on self.")
	.setThumbnail('https://i.imgur.com/Ted3CoX.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Passive)** \n \n**Immunization • T4 Upgrade** \n \nAfter attacked, if Scientist Supreme is an ally, if still above 75% Health, transfer 1 negative effect from self and each A.I.M. ally to the attacking enemy. \nGain +10% Max Health and **+10% -> +15%** Resistance.")
	.setThumbnail('https://i.imgur.com/Fx7CjEy.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Basic)** \n \n**Takedown • T4 Upgrade** \n \nAttack primary target for **230% -> 270%** damage. \nIf Ability Blocked, attack primary target for \n**430% -> 470%** damage instead. \nApply Slow.")
	.setThumbnail('https://i.imgur.com/S00SWQw.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Special)** \n \n**Charge Capacitor • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt for 1 turn + Slow for 2 turns. Heal self and adjacent A.I.M. allies for **7000 -> 10000** Health + 10% of Max Health. Clear Speed Up on self.")
	.setThumbnail('https://i.imgur.com/Ted3CoX.png') 
	message.channel.send(exampleEmbed2);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Passive)** \n \n**Immunization • T4 Upgrade** \n \nAfter attacked, if Scientist Supreme is an ally, if still above 75% Health, transfer 1 negative effect from self and each A.I.M. ally to the attacking enemy. \nGain +10% Max Health and **+10% -> +15%** Resistance.")
	.setThumbnail('https://i.imgur.com/Fx7CjEy.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \nA.I.M. Security's base speed is 76, but her effective turn 1 speed with an adjacent A.I.M. Assaulter is 84.33 with their level 4 passive, \nor 94.18 with their level 5 passive.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \nAim Security is farmable in: \n**Orbs: \nPremium & Basic. \n \nMissions: \nVillains United: Chapter 5-3**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'americachavez' || command === 'americach' || command === 'americachav' || command === 'chavez' || command === 'missamerica') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Basic)** \n \n**Starstruck • T4 Upgrade** \n \nAttack primary target for **240% -> 290%** damage + \napply Defense Down.")
	.setThumbnail('https://i.imgur.com/XVvMMSA.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Special)** \n \n**Shooting Star • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **250% -> 300%** damage + \n**50% -> 75%** damage per HERO BRAWLER ally.")
	.setThumbnail('https://i.imgur.com/0V2pdTr.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Ultimate)** \n \n**America's Starling • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nClear 3 positive effects. \nAttack primary target for **350% -> 430%** damage.")
	.setThumbnail('https://i.imgur.com/hdqNsvC.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Passive)** \n \n**Starling Highway • T4 Upgrade** \n \nGain **+10% -> +20%** Max Health. \nHERO BRAWLER allies gain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/dpbmvcX.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Basic)** \n \n**Starstruck • T4 Upgrade** \n \nAttack primary target for **240% -> 290%** damage + \napply Defense Down.")
	.setThumbnail('https://i.imgur.com/XVvMMSA.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Special)** \n \n**Shooting Star • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **250% -> 300%** damage + \n**50% -> 75%** damage per HERO BRAWLER ally.")
	.setThumbnail('https://i.imgur.com/0V2pdTr.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Ultimate)** \n \n**America's Starling • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nClear 3 positive effects. \nAttack primary target for **350% -> 430%** damage.")
	.setThumbnail('https://i.imgur.com/hdqNsvC.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Passive)** \n \n**Starling Highway • T4 Upgrade** \n \nGain **+10% -> +20%** Max Health. \nHERO BRAWLER allies gain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/dpbmvcX.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \nAmerica Chavez's speed is: 115")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \nAmerica Chavez is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'antman' || command === 'ant' || command === 'scott' || command === 'lang') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Basic)** \n \n**Scrappy Fighter • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage + \ncopy a positive effect from the target to Self + \nclear the copied effect. \nIf Wasp is an ally, she also gains the copied effect.")
	.setThumbnail('https://i.imgur.com/0gqCigL.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Special)** \n \n**Gum Up the Works • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 220%** damage + \napply Ability Block for 2 turns. \nThis attack cannot be dodged or blocked.")
	.setThumbnail('https://i.imgur.com/kHl8bsh.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Ultimate)** \n \n**Stomp • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack all for **130% -> 140%** damage + Apply Slow to all targets. \nIf Wasp is an ally, deal an additional +30% damage to all targets.")
	.setThumbnail('https://i.imgur.com/MTgIIvw.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Passive)** \n \n**Escape Plan • T4 Upgrade** \n \nOn Spawn, apply Evade to Wasp if she is an ally. \nOn Turn, 15% chance to gain Evade + \n**10% -> 15%** chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/5yQ6YZx.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Basic)** \n \n**Scrappy Fighter • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage + \ncopy a positive effect from the target to Self + \nclear the copied effect. \nIf Wasp is an ally, she also gains the copied effect.")
	.setThumbnail('https://i.imgur.com/0gqCigL.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Special)** \n \n**Gum Up the Works • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 220%** damage + \napply Ability Block for 2 turns. \nThis attack cannot be dodged or blocked.")
	.setThumbnail('https://i.imgur.com/kHl8bsh.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Ultimate)** \n \n**Stomp • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack all for **130% -> 140%** damage + Apply Slow to all targets. \nIf Wasp is an ally, deal an additional +30% damage to all targets.")
	.setThumbnail('https://i.imgur.com/MTgIIvw.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Passive)** \n \n**Escape Plan • T4 Upgrade** \n \nOn Spawn, apply Evade to Wasp if she is an ally. \nOn Turn, 15% chance to gain Evade + \n**10% -> 15%** chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/5yQ6YZx.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \n**Ant-Man**'s base speed is 100, but with **Black Widow** \nusing her turn 1 special, his effective turn 1 speed is 110.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \nAnt Man is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'beast' || command === 'dr' || command === 'henry' || command === 'philip' || command === 'hank' || command === 'mccoy') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Basic)** \n \n**Beast • T4 Upgrade** \n \nBeast is a beast")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Special)** \n \n**Beast • T4 Upgrade** \n<:abilityon:663751832690229278> \nBeast is a beast.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Ultimate)** \n \n**Beast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184> \nBeast is a beast.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Passive)** \n \n**Beast • T4 Upgrade** \n \nBeast is a beast.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Basic)** \n \n**Beast • T4 Upgrade** \n \nBeast is a beast")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Special)** \n \n**Beast • T4 Upgrade** \n<:abilityon:663751832690229278> \nBeast is a beast.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Ultimate)** \n \n**Beast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184> \nBeast is a beast.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076>	**Beast (Passive)** \n \n**Beast • T4 Upgrade** \n \nBeast is a beast.")
	.setThumbnail('https://i.imgur.com/Q0V3pXn.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076> **Beast** \nBeast's speed is: oo. Hes such a beast, he has infinity speed.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:beast:663749980434989076> **Beast** \nBeast is not unlockable yet, jokes on you!**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'blackbolt' || command === 'bolt' || command === 'blackbo' || command === 'blackbol' || command === 'kingofattilan' || command === 'blackagar' || command === 'boltagon') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Basic)** \n \n**Royal Strike • T4 Upgrade** \n \nIf the primary target has slow, flip **1 -> 2** negative effects on self. \nAttack primary target for **350% -> 400%** damage + \nclear **1 -> 2** positive effects.")
	.setThumbnail('https://i.imgur.com/qdQRIfE.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Special)** \n \n**Staggering Voice • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack Primary target for **500% -> 600%** damage. \nThis attack is unavoidable.")
	.setThumbnail('https://i.imgur.com/5wsashb.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Ultimate)** \n \n**Sonic Scream • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **380% -> 500%** damage.")
	.setThumbnail('https://i.imgur.com/IiJQ57n.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Passive)** \n \n**King Of Attilan • T4 Upgrade** \n \nCharacters killed by Black Bolt cannot be revived. \nWhen an enemy drops below 25% Health, attack that enemy for\n**150% -> 200%** damage. If that enemy is VILLAIN TECH, attack that enemy \nfor **300% -> 400%** damage instead. \nOn enemy summon, apply Disrupted + clear 3 positive effects on\nthe summoner. \nGain +40% Resistance. INHUMAN allies gain +40% Resistance. \nGain **+30% -> +50%** Max Health. INHUMAN allies gain **+30% -> +50%** Max Health.")
	.setThumbnail('https://i.imgur.com/JthP6vO.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Basic)** \n \n**Royal Strike • T4 Upgrade** \n \nIf the primary target has slow, flip **1 -> 2** negative effects on self. \nAttack primary target for **350% -> 400%** damage + \nclear **1 -> 2** positive effects.")
	.setThumbnail('https://i.imgur.com/qdQRIfE.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Special)** \n \n**Staggering Voice • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack Primary target for **500% -> 600%** damage. \nThis attack is unavoidable.")
	.setThumbnail('https://i.imgur.com/5wsashb.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Ultimate)** \n \n**Sonic Scream • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **380% -> 500%** damage.")
	.setThumbnail('https://i.imgur.com/IiJQ57n.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Passive)** \n \n**King Of Attilan • T4 Upgrade** \n \nCharacters killed by Black Bolt cannot be revived. \nWhen an enemy drops below 25% Health, attack that enemy for\n**150% -> 200%** damage. If that enemy is VILLAIN TECH, attack that enemy \nfor **300% -> 400%** damage instead. \nOn enemy summon, apply Disrupted + clear 3 positive effects on\nthe summoner. \nGain +40% Resistance. INHUMAN allies gain +40% Resistance. \nGain **+30% -> +50%** Max Health. INHUMAN allies gain **+30% -> +50%** Max Health.")
	.setThumbnail('https://i.imgur.com/JthP6vO.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \nBlack Bolt's speed is: 100")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \nBlack bolt is a legendary event.**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'blackpanther' || command === 'panther' || command === 'blackpan' || command === 'tchalla' || command === 'kingofwakanda') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Basic)** \n \n**Claw Slash • T4 Upgrade** \n \nAttack primary target for **180% -> 210%** damage + \n30% Piercing. **90% -> 100%** chance to apply Slow.")
	.setThumbnail('https://i.imgur.com/CBg3Fze.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Special)** \n \n**Hunter's Spirit • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **190% -> 230%** damage + \n30% Piercing. Gain Offense Up for 2 turns. \nOn Crit, gain Counter.")
	.setThumbnail('https://i.imgur.com/mkWgTWh.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Ultimate)** \n \n**Panther Rush • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **250% -> 280%** damage. \nChain to 1-3 adjacent targets for **170% -> 200%** damage. \nCounterattack breaks this Chain. \nWhile in Charged, attack all enemies for **220% -> 250%** damage, \nthen lose all Charged. This attack gains +20% Damage per Charged. \nAll attacks have +30% Piercing and **+15% -> +20%** \nExtra Crit Chance.")
	.setThumbnail('https://i.imgur.com/WNirdk2.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Passive)** \n \n**Defender of Wakanda • T4 Upgrade** \n \nOn dropping below 50% of Max Health, gain +1 Charged, \nup to a maximum of 5. \nOn Kill, fill Speed Bar by **80% -> 100%**. \nOn Defense Up, gain Deflect.")
	.setThumbnail('https://i.imgur.com/VP20XOH.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Basic)** \n \n**Claw Slash • T4 Upgrade** \n \nAttack primary target for **180% -> 210%** damage + \n30% Piercing. **90% -> 100%** chance to apply Slow.")
	.setThumbnail('https://i.imgur.com/CBg3Fze.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Special)** \n \n**Hunter's Spirit • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **190% -> 230%** damage + \n30% Piercing. Gain Offense Up for 2 turns. \nOn Crit, gain Counter.")
	.setThumbnail('https://i.imgur.com/mkWgTWh.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Ultimate)** \n \n**Panther Rush • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **250% -> 280%** damage. \nChain to 1-3 adjacent targets for **170% -> 200%** damage. \nCounterattack breaks this Chain. \nWhile in Charged, attack all enemies for **220% -> 250%** damage, \nthen lose all Charged. This attack gains +20% Damage per Charged. \nAll attacks have +30% Piercing and **+15% -> +20%** \nExtra Crit Chance.")
	.setThumbnail('https://i.imgur.com/WNirdk2.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Passive)** \n \n**Defender of Wakanda • T4 Upgrade** \n \nOn dropping below 50% of Max Health, gain +1 Charged, \nup to a maximum of 5. \nOn Kill, fill Speed Bar by **80% -> 100%**. \nOn Defense Up, gain Deflect.")
	.setThumbnail('https://i.imgur.com/VP20XOH.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \nBlack Panther's speed is: 125 \nHis effective turn 1 speed is 187.5 with Shuri. \nWith Black Widow using her turn 1 special, his effective speed is still 125.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \nBlack Panther is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'blackwidow' || command === 'blackw' || command === 'blackwid' || command === 'bw' || command === 'widow' || command === 'natasha' || command === 'romanova') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Basic)** \n \n**Sabotage • T4 Upgrade** \n \nAttack primary target for **190% -> 250%** damage. \nDuring Stealth, copy & clear all positive effects on primary target.")
	.setThumbnail('https://i.imgur.com/Adce8ne.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Special)** \n \n**Camouflage Tech • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Stealth for 2 turns + clear all negative effects from Self. \nClear 1 negative effect from AVENGER allies. \nApply Speed Up to Self/S.H.I.E.L.D./AVENGER allies for 2 turns. \n60% chance to apply Speed Up to all allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/l51dzex.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Ultimate)** \n \n**Widow's Bite • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **230% -> 290%** damage + apply Stun. \n60% chance to Chain up to 3 adjacent targets for \n**170% -> 220%** damage + apply 2 Bleed for 2 turns. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/A2R5zPl.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Passive)** \n \n**Saboteur • T4 Upgrade** \n \nGain **+10% -> +15%** Speed. \nThis is applied after any character has taken a turn. \nWhen in Stealth, gain Offense Up.")
	.setThumbnail('https://i.imgur.com/ExIr73Q.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Basic)** \n \n**Sabotage • T4 Upgrade** \n \nAttack primary target for **190% -> 250%** damage. \nDuring Stealth, copy & clear all positive effects on primary target.")
	.setThumbnail('https://i.imgur.com/Adce8ne.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Special)** \n \n**Camouflage Tech • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Stealth for 2 turns + clear all negative effects from Self. \nClear 1 negative effect from AVENGER allies. \nApply Speed Up to Self/S.H.I.E.L.D./AVENGER allies for 2 turns. \n60% chance to apply Speed Up to all allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/l51dzex.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Ultimate)** \n \n**Widow's Bite • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **230% -> 290%** damage + apply Stun. \n60% chance to Chain up to 3 adjacent targets for \n**170% -> 220%** damage + apply 2 Bleed for 2 turns. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/A2R5zPl.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Passive)** \n \n**Saboteur • T4 Upgrade** \n \nGain **+10% -> +15%** Speed. \nThis is applied after any character has taken a turn. \nWhen in Stealth, gain Offense Up.")
	.setThumbnail('https://i.imgur.com/ExIr73Q.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \nBlack Widow's base speed is 135, \nbut she gains +5%, +10%, or +15% speed bar \ndepending on her passive level after any character's first turn. \nThat makes her speed after turn one 141.75, 148.5, or 155.25 depending on her passive level.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \nBlack Widow is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'bullseye' || command === 'bull' || command === 'bulls') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Basic)** \n \n**Throwing Knife • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage. \nThis attack cannot miss **though it can be dodged**. \nGain **+15% -> +20%** Crit chance for this attack.")
	.setThumbnail('https://i.imgur.com/WSaVkNn.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Special)** \n \n**Card Trick • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 230%** damage and **+20% -> +25%** Crit chance. 80% chance to gain a Bonus attack for 190% damage and +40% Crit chance.")
	.setThumbnail('https://i.imgur.com/qydaGnn.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Ultimate)** \n \n**Kill Shot • T4 Upgrade** \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **500% -> 550%** damage. Gain +30% Crit chance and +20% Crit damage for this attack.")
	.setThumbnail('https://i.imgur.com/Q2cxNpU.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Passive)** \n \n**Never Miss • T4 Upgrade** \n \nGain +10% Accuracy. All allies gain **+5% -> +10%** Accuracy. \nMERCENARY allies gain +10% Crit damage.")
	.setThumbnail('https://i.imgur.com/3P6OIZC.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Basic)** \n \n**Throwing Knife • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage. \nThis attack cannot miss **though it can be dodged**. \nGain **+15% -> +20%** Crit chance for this attack.")
	.setThumbnail('https://i.imgur.com/WSaVkNn.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Special)** \n \n**Card Trick • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 230%** damage and **+20% -> +25%** Crit chance. 80% chance to gain a Bonus attack for 190% damage and +40% Crit chance.")
	.setThumbnail('https://i.imgur.com/qydaGnn.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Ultimate)** \n \n**Kill Shot • T4 Upgrade** \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **500% -> 550%** damage. Gain +30% Crit chance and +20% Crit damage for this attack.")
	.setThumbnail('https://i.imgur.com/Q2cxNpU.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Passive)** \n \n**Never Miss • T4 Upgrade** \n \nGain +10% Accuracy. All allies gain **+5% -> +10%** Accuracy. \nMERCENARY allies gain +10% Crit damage.")
	.setThumbnail('https://i.imgur.com/3P6OIZC.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828> **Bullseye** \nBullseye's speed is: 110.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828> **Bullseye** \nBullseye is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'cable' || command === 'cab') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Basic)** \n \n**Plasma Rifle • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage + \ngain Charged.")
	.setThumbnail('https://i.imgur.com/B953HdD.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Special)** \n \n**Overload • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 220%** damage + \nchange Speed Bar by -50%. Attack adjacent targets for: \n**150% -> 170%** damage + change Speed Bar by -10%. \n \nIf Charged, in addition, attack targets 2 spaces from primary for **150% -> 170%** damage and change Speed Bar by -10%, then lose Charged.")
	.setThumbnail('https://i.imgur.com/uc6jIiV.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Ultimate)** \n \n**Psychic Surge • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **470% -> 530%** Unavoidable damage. \nIf Deadpool is an ally, gain assist from Deadpool. \nOn Kill, fill Cable and Deadpool's Speed Bars by 70%.")
	.setThumbnail('https://i.imgur.com/MfPeGOZ.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Passive)** \n \n**Time Sense • T4 Upgrade** \n \nOn Spawn, Self and all allies gain 5% Speed Bar. \nOn Turn, **20% -> 30%** chance to apply Counter to a random \nMUTANT ally, and 20% chance to apply Counter to another random ally.")
	.setThumbnail('https://i.imgur.com/JBgSQPz.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Basic)** \n \n**Plasma Rifle • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage + \ngain Charged.")
	.setThumbnail('https://i.imgur.com/B953HdD.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Special)** \n \n**Overload • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 220%** damage + \nchange Speed Bar by -50%. Attack adjacent targets for: \n**150% -> 170%** damage + change Speed Bar by -10%. \n \nIf Charged, in addition, attack targets 2 spaces from primary for **150% -> 170%** damage and change Speed Bar by -10%, then lose Charged.")
	.setThumbnail('https://i.imgur.com/uc6jIiV.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Ultimate)** \n \n**Psychic Surge • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **470% -> 530%** Unavoidable damage. \nIf Deadpool is an ally, gain assist from Deadpool. \nOn Kill, fill Cable and Deadpool's Speed Bars by 70%.")
	.setThumbnail('https://i.imgur.com/MfPeGOZ.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Passive)** \n \n**Time Sense • T4 Upgrade** \n \nOn Spawn, Self and all allies gain 5% Speed Bar. \nOn Turn, **20% -> 30%** chance to apply Counter to a random \nMUTANT ally, and 20% chance to apply Counter to another random ally.")
	.setThumbnail('https://i.imgur.com/JBgSQPz.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154> **Cable** \nCable's base speed is 91, but his effective turn 1 speed is 95.54.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154> **Cable** \nCable is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'captainamerica' || command === 'cptnamerica' || command === 'capamerica' || command === 'steve' || command === 'rogers') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Basic)** \n \n**Shield Bash • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage. \n30% chance to Chain to up to 2 adjacent targets for 170% damage. \n**50% -> 100%** chance to gain Defense Up for 1 turn. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/FPGV5SJ.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Special)** \n \n**Inspire • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt and Defense Up on self. \nApply Defense Up to all allies. \nGrant 1 Ability Energy to 1-2 AVENGER allies. \nGrant 1 Ability Energy to **1-2 -> 1-3** random allies.")
	.setThumbnail('https://i.imgur.com/rWpO013.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Ultimate)** \n \n**Shield Throw • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **280% -> 300%** damage, \nclearing 2 positive effects. \nChain to 1-2 additional targets for **210% -> 230%** damage, \nclearing 2 positive effects. Dodge breaks this Chain.")
	.setThumbnail('https://i.imgur.com/TsGHh0g.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Passive)** \n \n**!Assemble • T4 Upgrade** \n \n+25% Block chance. **+5% -> +10%** Block Amount. \n+10% Max Health. +5% Block chance per AVENGER ally.")
	.setThumbnail('https://i.imgur.com/JiJhO67.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Basic)** \n \n**Shield Bash • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage. \n30% chance to Chain to up to 2 adjacent targets for 170% damage. \n**50% -> 100%** chance to gain Defense Up for 1 turn. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/FPGV5SJ.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Special)** \n \n**Inspire • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt and Defense Up on self. \nApply Defense Up to all allies. \nGrant 1 Ability Energy to 1-2 AVENGER allies. \nGrant 1 Ability Energy to **1-2 -> 1-3** random allies.")
	.setThumbnail('https://i.imgur.com/rWpO013.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Ultimate)** \n \n**Shield Throw • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **280% -> 300%** damage, \nclearing 2 positive effects. \nChain to 1-2 additional targets for **210% -> 230%** damage, \nclearing 2 positive effects. Dodge breaks this Chain.")
	.setThumbnail('https://i.imgur.com/TsGHh0g.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Passive)** \n \n**!Assemble • T4 Upgrade** \n \n+25% Block chance. **+5% -> +10%** Block Amount. \n+10% Max Health. +5% Block chance per AVENGER ally.")
	.setThumbnail('https://i.imgur.com/JiJhO67.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701> **Captain America** \nCaptain America's base speed is 114, but with Black Widow using her turn 1 special, his effective turn 1 speed is 120.33.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701> **Captain America** \nCaptain America is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'captainmarvel' || command === 'cptnmarvel' || command === 'capmarvel' || command === 'carol' || command === 'danvers') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Basic)** \n \n**Princess Sparkle Fist • T4 Upgrade** \n \nAttack primary target for **280% -> 320%** damage. \n50% chance to Chain to 1 adjacent target for **180% -> 220%** damage. \nIf not in Binary, gain +1 Charged, up to a maximum of 5 If in Binary, lose 1 Charged. On losing all Charged, end Binary. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/gAN4p41.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Special)** \n \n**Warbird • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **360% -> 450%** damage + \nclear all positive effects. \nIf not in Binary, gain +1 Charged, up to a maximum of 5. \nIf in Binary, lose 1 Charged. On losing all Charged, end Binary.")
	.setThumbnail('https://i.imgur.com/M1CQNl8.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Ultimate)** \n \n**Binary • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nGain Binary. Clear all negative effects from self. \nAttack primary target for **540% -> 640%** damage. \nThis attack cannot be dodged and cannot crit.")
	.setThumbnail('https://i.imgur.com/DFTzcpK.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Passive)** \n \n**Higher. Further. Faster. • T4 Upgrade** \n \nWhile in Binary gain: 25% Damage, 25% Armor, 100% Focus, and 100% Resistance. While in Binary, on End of Turn, attack all enemies for **120% -> 150%** damage. \nOn Spawn: \n Clear all Charged. If any Charged were cleared, gain Regeneration. \nGain Charged, If at least one ally is MILITARY, gain an additional Charge. \nMILITARY allies gain +15% Max Health. \nMILITARY allies gain +10% Damage. \nIf not in Binary, when this character gains Ability Energy, \ngain +1 Charged, up to a maximum of 5. \nOn Turn, heal self for **10% -> 20%** of Max Health.")
	.setThumbnail('https://i.imgur.com/Tnz6HZT.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Basic)** \n \n**Princess Sparkle Fist • T4 Upgrade** \n \nAttack primary target for **280% -> 320%** damage. \n50% chance to Chain to 1 adjacent target for **180% -> 220%** damage. \nIf not in Binary, gain +1 Charged, up to a maximum of 5 If in Binary, lose 1 Charged. On losing all Charged, end Binary. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/gAN4p41.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Special)** \n \n**Warbird • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **360% -> 450%** damage + \nclear all positive effects. \nIf not in Binary, gain +1 Charged, up to a maximum of 5. \nIf in Binary, lose 1 Charged. On losing all Charged, end Binary.")
	.setThumbnail('https://i.imgur.com/M1CQNl8.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Ultimate)** \n \n**Binary • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nGain Binary. Clear all negative effects from self. \nAttack primary target for **540% -> 640%** damage. \nThis attack cannot be dodged and cannot crit.")
	.setThumbnail('https://i.imgur.com/DFTzcpK.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Passive)** \n \n**Higher. Further. Faster. • T4 Upgrade** \n \nWhile in Binary gain: 25% Damage, 25% Armor, 100% Focus, and 100% Resistance. While in Binary, on End of Turn, attack all enemies for **120% -> 150%** damage. \nOn Spawn: \n Clear all Charged. If any Charged were cleared, gain Regeneration. \nGain Charged, If at least one ally is MILITARY, gain an additional Charge. \nMILITARY allies gain +15% Max Health. \nMILITARY allies gain +10% Damage. \nIf not in Binary, when this character gains Ability Energy, \ngain +1 Charged, up to a maximum of 5. \nOn Turn, heal self for **10% -> 20%** of Max Health.")
	.setThumbnail('https://i.imgur.com/Tnz6HZT.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340> **Captain Marvel** \nCaptain Marvel's speed is: 127")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340> **Captain Marvel** \nCaptain Marvel is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'carnage' || command === 'car' || command === 'carn') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Basic)** \n \n**Cleave • T4 Upgrade** \n \nAttack primary target for **230% -> 280%** damage. \nIf the primary target has a negative effect, \nChain to 1-2 adjacent targets for 90% damage + \nspread 2 negative effects from the primary target to secondary targets. \nThis will not spread Stun. Counterattack breaks this Chain.")
	.setThumbnail('hhttps://i.imgur.com/4ZYwBP6.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Special)** \n \n**Slaughter • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **350% -> 420%** damage + \n100% additional damage per negative effect. \nRemove all negative effects from the primary target. \nAttack all adjacent targets for **180% -> 250%** damage.")
	.setThumbnail('https://i.imgur.com/1qWwq9c.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Ultimate)** \n \n**Absolute Carnage • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **420% -> 500%** Piercing + \napply 2 Bleed for 2 turns. If the primary target is above 50% Health, \napply an additional Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/xdp5RKK.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Passive)** \n \n**Frenzied Fury • T4 Upgrade** \n \nWhen an enemy drops below 25% Health, change Speed Bar of self and all SYMBIOTE allies by **+20% -> +30%** + heal them for 10% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/n2opSAu.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Basic)** \n \n**Cleave • T4 Upgrade** \n \nAttack primary target for **230% -> 280%** damage. \nIf the primary target has a negative effect, \nChain to 1-2 adjacent targets for 90% damage + \nspread 2 negative effects from the primary target to secondary targets. \nThis will not spread Stun. Counterattack breaks this Chain.")
	.setThumbnail('hhttps://i.imgur.com/4ZYwBP6.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Special)** \n \n**Slaughter • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **350% -> 420%** damage + \n100% additional damage per negative effect. \nRemove all negative effects from the primary target. \nAttack all adjacent targets for **180% -> 250%** damage.")
	.setThumbnail('https://i.imgur.com/1qWwq9c.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Ultimate)** \n \n**Absolute Carnage • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **420% -> 500%** Piercing + \napply 2 Bleed for 2 turns. If the primary target is above 50% Health, \napply an additional Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/xdp5RKK.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Passive)** \n \n**Frenzied Fury • T4 Upgrade** \n \nWhen an enemy drops below 25% Health, change Speed Bar of self and all SYMBIOTE allies by **+20% -> +30%** + heal them for 10% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/n2opSAu.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570> **Carnage** \nCarnage's speed is: 126.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570> **Carnage** \nCarnage is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'colossus' || command === 'colo' || command === 'col' || command === 'coloss') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Basic)** \n \n**Ringdinger • T4 Upgrade** \n \nAttack primary target for **290% -> 340%** damage + \napply Offense Down for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/6jkNvF4.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Special)** \n \n**Altruism • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt. Gain **1 -> 2** Counter. \nApply 2 Deflect to Self and X-MEN Allies. \nApply Deflect to all other allies. \nIf Phoenix is an ally, gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/jYII4lt.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Ultimate)** \n \n**Enduring Protection • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nIncrease duration of positive effects on self by **+2 -> +3**, \nup to a maximum of 5. Gain 2 Deathproof. \nGain +2 Charged, up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/MBeRT0x.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Passive)** \n \n**Steel Form • T4 Upgrade** \n \nOn Spawn, if Charged, generate 1 Ability Energy for self. \nThen clear Charged. \nOn Spawn, if Phoenix is an ally: \nGain Defense Up for **1 -> 2** turns. \nApply Defense Up to all X-MEN allies. \nWhen a negative effect is applied to an X-MEN ally, gain +1 Charged, up to a maximum of 5. \nWhile Charged, when attacked, attack that enemy for \n**75% -> 100%** damage +10% damage per Charged. \nWhen an X-MEN ally drops below 50% Max Health, \ngain +1 Taunt, up to a maximum of 2. \nWhile in Defense Up, gain +1000% Resistance. \nGain +15% Max Health. X-MEN allies gain +15% Max Health.")
	.setThumbnail('https://i.imgur.com/CgRxvbF.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Basic)** \n \n**Ringdinger • T4 Upgrade** \n \nAttack primary target for **290% -> 340%** damage + \napply Offense Down for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/6jkNvF4.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Special)** \n \n**Altruism • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt. Gain **1 -> 2** Counter. \nApply 2 Deflect to Self and X-MEN Allies. \nApply Deflect to all other allies. \nIf Phoenix is an ally, gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/jYII4lt.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Ultimate)** \n \n**Enduring Protection • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nIncrease duration of positive effects on self by **+2 -> +3**, \nup to a maximum of 5. Gain 2 Deathproof. \nGain +2 Charged, up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/MBeRT0x.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Passive)** \n \n**Steel Form • T4 Upgrade** \n \nOn Spawn, if Charged, generate 1 Ability Energy for self. \nThen clear Charged. \nOn Spawn, if Phoenix is an ally: \nGain Defense Up for **1 -> 2** turns. \nApply Defense Up to all X-MEN allies. \nWhen a negative effect is applied to an X-MEN ally, gain +1 Charged, up to a maximum of 5. \nWhile Charged, when attacked, attack that enemy for \n**75% -> 100%** damage +10% damage per Charged. \nWhen an X-MEN ally drops below 50% Max Health, \ngain +1 Taunt, up to a maximum of 2. \nWhile in Defense Up, gain +1000% Resistance. \nGain +15% Max Health. X-MEN allies gain +15% Max Health.")
	.setThumbnail('https://i.imgur.com/CgRxvbF.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528> **Colossus** \nColossus's speed is: 88.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528> **Colossus** \nColossus is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'coulson' || command === 'agent' || command === 'coul' || command === 'couls' || command === 'colson') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Basic)** \n \n**Night-Night Gun • T4 Upgrade** \n \nAttack primary target for **210% -> 230%** damage + \nChain to 2-4 adjacent targets for **160% -> 180%** damage. \nCounterattack breaks this Chain. \nChange Speed Bar of primary and secondary targets by -20%.")
	.setThumbnail('https://i.imgur.com/gB1LwCS.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Special)** \n \n**EMP Punch • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **190% -> 200%** damage. \nAttack all other enemies for **140% -> 150%** damage. \nOn WAR DEFENSE: \nTransfer 4 positive effects from primary target to all \nnon-MINION S.H.I.E.L.D. allies. \nFlip all positive effects on primary target. \nRemove **3 -> all** positive effects from all enemies. \nApply Slow to all TECH enemies.")
	.setThumbnail('https://i.imgur.com/Uhjr6sg.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Ultimate)** \n \n**Teamwork  • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nApply Offense Up to all S.H.I.E.L.D. allies. \nOn WAR DEFENSE, clear **3 -> all** positive effects from \nthe enemy with the most Damage. \nApply Defense Down and Taunt to the \nenemy with the most Damage. \nCall **1 -> 2** allies with the most Damage to attack \nthe enemy with the most Damage. \nAttack all enemies for **250% -> 280%** damage.")
	.setThumbnail('https://i.imgur.com/iVLUvo8.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Passive)** \n \n**The Agent • T4 Upgrade** \n \nIf Coulson drops below 50% Health, change Speed Bar by \n**50% -> 60%** for S.H.I.E.L.D. Medic. \nOn WAR DEFENSE: \nGain **+20% -> +40%** Max Health. \nS.H.I.E.L.D. allies gain **+20% -> +40%** Max Health. \nOn Spawn, apply Immunity to **4 -> all** S.H.I.E.L.D. allies. \nGain +120% Resistance. \nS.H.I.E.L.D. allies gain +120% Resistance.")
	.setThumbnail('https://i.imgur.com/pKDbt3g.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Basic)** \n \n**Night-Night Gun • T4 Upgrade** \n \nAttack primary target for **210% -> 230%** damage + \nChain to 2-4 adjacent targets for **160% -> 180%** damage. \nCounterattack breaks this Chain. \nChange Speed Bar of primary and secondary targets by -20%.")
	.setThumbnail('https://i.imgur.com/gB1LwCS.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Special)** \n \n**EMP Punch • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **190% -> 200%** damage. \nAttack all other enemies for **140% -> 150%** damage. \nOn WAR DEFENSE: \nTransfer 4 positive effects from primary target to all \nnon-MINION S.H.I.E.L.D. allies. \nFlip all positive effects on primary target. \nRemove **3 -> all** positive effects from all enemies. \nApply Slow to all TECH enemies.")
	.setThumbnail('https://i.imgur.com/Uhjr6sg.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Ultimate)** \n \n**Teamwork  • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nApply Offense Up to all S.H.I.E.L.D. allies. \nOn WAR DEFENSE, clear **3 -> all** positive effects from \nthe enemy with the most Damage. \nApply Defense Down and Taunt to the \nenemy with the most Damage. \nCall **1 -> 2** allies with the most Damage to attack \nthe enemy with the most Damage. \nAttack all enemies for **250% -> 280%** damage.")
	.setThumbnail('https://i.imgur.com/iVLUvo8.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Passive)** \n \n**The Agent • T4 Upgrade** \n \nIf Coulson drops below 50% Health, change Speed Bar by \n**50% -> 60%** for S.H.I.E.L.D. Medic. \nOn WAR DEFENSE: \nGain **+20% -> +40%** Max Health. \nS.H.I.E.L.D. allies gain **+20% -> +40%** Max Health. \nOn Spawn, apply Immunity to **4 -> all** S.H.I.E.L.D. allies. \nGain +120% Resistance. \nS.H.I.E.L.D. allies gain +120% Resistance.")
	.setThumbnail('https://i.imgur.com/pKDbt3g.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912> **Coulson** \nAgent Coulson's base speed is 115, but: \nHis effective turn 1 speed is 172.5 with Nick Fury on War Defense. \nWith Black Widow using her turn 1 special, his effective turn 1 speed is 121.39.")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912> **Coulson** \nCoulson is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'crossbones' || command === 'cb' || command === 'xb' || command === 'cross' || command === 'xbones') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Basic)** \n \n**Piston Punch • T4 Upgrade** \n \nAttack primary target for **175% -> 200%** damage. \n75% chance of a Bonus attack for **125% -> 150%** damage and apply Offense Down.")
	.setThumbnail('https://i.imgur.com/Z4eF8IS.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Special)** \n \n**Wrath • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt + **2 -> 2-3** Counter. \nHeal self for 15% of Max Health.")
	.setThumbnail('https://i.imgur.com/2lsqAdz.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Ultimate)** \n \n**Detonate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nGain 2 Deathproof, then explode for **440% -> 480%** damage \n to self and all enemies. \nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('https://i.imgur.com/fYlrlDB.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Passive)** \n \n**Vengeance • T4 Upgrade** \n \n**+15% -> +20%** Max Health. HYDRA allies gain +5% Armor.")
	.setThumbnail('https://i.imgur.com/vtQvQxC.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Basic)** \n \n**Piston Punch • T4 Upgrade** \n \nAttack primary target for **175% -> 200%** damage. \n75% chance of a Bonus attack for **125% -> 150%** damage and apply Offense Down.")
	.setThumbnail('https://i.imgur.com/Z4eF8IS.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Special)** \n \n**Wrath • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt + **2 -> 2-3** Counter. \nHeal self for 15% of Max Health.")
	.setThumbnail('https://i.imgur.com/2lsqAdz.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Ultimate)** \n \n**Detonate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nGain 2 Deathproof, then explode for **440% -> 480%** damage \n to self and all enemies. \nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('https://i.imgur.com/fYlrlDB.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Passive)** \n \n**Vengeance • T4 Upgrade** \n \n**+15% -> +20%** Max Health. HYDRA allies gain +5% Armor.")
	.setThumbnail('https://i.imgur.com/vtQvQxC.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937> **Crossbones** \nCrossbones's speed is: 99")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937> **Crossbones** \nCrossbones is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'cyclops' || command === 'cy' || command === 'clops' || command === 'cyc') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Basic)** \n \n**Optic Blast • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage + \n50% chance to apply Defense Down. \nIf Psylocke is an ally, always apply Defense Down.")
	.setThumbnail('https://i.imgur.com/S663f9U.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Special)** \n \n**To Me! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nApply Taunt to the 2 most injured non-summoned \nnon-primary target enemies. \nCall an ally Wolverine to attack the most injured \nof those previous enemies. \n**75% -> 100%** chance to call an ally to attack the second most injured of those previous enemies. \nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/lfQC1y7.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Ultimate)** \n \n**Optic Devastation • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **200% -> 250%** damage + \napply Slow for **1 -> 2** turns. \nDamage is increased by 25% per Charged. \nThen lose all Charged.")
	.setThumbnail('https://i.imgur.com/Phpta6j.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Passive)** \n \n**Team Synergy • T4 Upgrade** \n \nOn Turn and on X-Men ally turn, gain **+1 -> +2** Charged,\n up to a maximum of **10 -> 20**. \nWhen an enemy attacks an ally Phoenix or Dark Phoenix, \n50% chance to attack that enemy for 200% damage. \nIf this character does not attack, \ncall an assist from an ally Wolverine to attack that enemy. \nWolverine gains +80% Damage for the assist. \nOn ally Phoenix death, gain Offense Up + \nchange an ally Wolverine Speed Bar by +100%.")
	.setThumbnail('https://i.imgur.com/qwD4QRu.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Basic)** \n \n**Optic Blast • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage + \n50% chance to apply Defense Down. \nIf Psylocke is an ally, always apply Defense Down.")
	.setThumbnail('https://i.imgur.com/S663f9U.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Special)** \n \n**To Me! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nApply Taunt to the 2 most injured non-summoned \nnon-primary target enemies. \nCall an ally Wolverine to attack the most injured \nof those previous enemies. \n**75% -> 100%** chance to call an ally to attack the second most injured of those previous enemies. \nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/lfQC1y7.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Ultimate)** \n \n**Optic Devastation • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **200% -> 250%** damage + \napply Slow for **1 -> 2** turns. \nDamage is increased by 25% per Charged. \nThen lose all Charged.")
	.setThumbnail('https://i.imgur.com/Phpta6j.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Passive)** \n \n**Team Synergy • T4 Upgrade** \n \nOn Turn and on X-Men ally turn, gain **+1 -> +2** Charged,\n up to a maximum of **10 -> 20**. \nWhen an enemy attacks an ally Phoenix or Dark Phoenix, \n50% chance to attack that enemy for 200% damage. \nIf this character does not attack, \ncall an assist from an ally Wolverine to attack that enemy. \nWolverine gains +80% Damage for the assist. \nOn ally Phoenix death, gain Offense Up + \nchange an ally Wolverine Speed Bar by +100%.")
	.setThumbnail('https://i.imgur.com/qwD4QRu.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230> **Cyclops** \n:Cyclops: Cyclops's speed is: 108")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230> **Cyclops** \nCyclops is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'daredevil' || command === 'dd' || command === 'dare' || command === 'devil') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Basic)** \n \n**Strike Without Fear • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage. \n**40% -> 50%** chance to Bonus attack for 200% damage. \nIf target is VILLAIN, always Bonus attack.")
	.setThumbnail('https://i.imgur.com/lI26m6t.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Special)** \n \n**Throw Baton • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **180% -> 200%** damage + \nChain to **1-2 -> 2** targets within 2 spaces of \nprevious target for **130% -> 150%** damage. \nDodge breaks this Chain. \nApply 2 Counter to self and all DEFENDER allies.")
	.setThumbnail('https://i.imgur.com/N1gdtlW.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Ultimate)** \n \n**Brawl • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **370% -> 400%** damage + \nChain to **3-4 -> 4-6** adjacent targets for 240% damage. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/hV0vTQY.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Passive)** \n \n**Enhance Senses • T4 Upgrade** \n \nSelf and DEFENDER allies gain **+5% -> +10%** Speed. \nGain +5% Dodge chance. \nGain +5% Dodge chance per DEFENDER ally. \nGain +10% Damage.")
	.setThumbnail('https://i.imgur.com/UgnuwNE.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Basic)** \n \n**Strike Without Fear • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage. \n**40% -> 50%** chance to Bonus attack for 200% damage. \nIf target is VILLAIN, always Bonus attack.")
	.setThumbnail('https://i.imgur.com/lI26m6t.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Special)** \n \n**Throw Baton • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **180% -> 200%** damage + \nChain to **1-2 -> 2** targets within 2 spaces of \nprevious target for **130% -> 150%** damage. \nDodge breaks this Chain. \nApply 2 Counter to self and all DEFENDER allies.")
	.setThumbnail('https://i.imgur.com/N1gdtlW.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Ultimate)** \n \n**Brawl • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **370% -> 400%** damage + \nChain to **3-4 -> 4-6** adjacent targets for 240% damage. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/hV0vTQY.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Passive)** \n \n**Enhance Senses • T4 Upgrade** \n \nSelf and DEFENDER allies gain **+5% -> +10%** Speed. \nGain +5% Dodge chance. \nGain +5% Dodge chance per DEFENDER ally. \nGain +10% Damage.")
	.setThumbnail('https://i.imgur.com/UgnuwNE.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156> **Dardevil** \nDaredevil's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156> **Dardevil** \nDaredevil is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


//TEAMS
if (message.content === '!Asgardians') {
	message.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**ASGARDIANS** \n<:heimdall:661370019325935666> **Heimdall** \nHeimdall's speed is: 100 \n \n<:hela:661370019317284880> **Hela** \nHela's base speed is: 110, but her effective turn 1 speed is \n121.11 with Loki. \n \n<:loki:661370019145449473> **Loki** \nLoki's base speed is: 115, but his effective turn 1 speed is \n133.75 \n \n<:sif:661370019300638737> **Sif** \nSif's speed is: 108 \n \n<:thor:661370019279667248> **Thor** \nThor's base speed is: 90, but with Black Widow using her \nturn 1 special, his effective turn 1 speed is 102.27. \n \n<:greg:661392103900839936> **Undead Asgardian** \nUndead Asgardian's base speed is: 105, but his effective \nturn 1 speed is 130.")
	message.channel.send(exampleEmbed);
}
}
});


//*********TESTING TRAITS***********
client.on("message", message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

//EVERY CHARACTER
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') { //bot spam channel
if(command === 'trait') {
if(args[0] === "aim"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:aimresearcher:663749975200759829> Aim Researcher \n<:aimsecurity:663749977071157283> Aim Security \n<:graviton:663749985417953300> Graviton \n<:scientistsupreme:663751613256826910> Scientist Supreme")
	message.channel.send(exampleEmbed);
} else if(args[0] === "aim" && args[1] === "bio" || args[0] === "bio" && args[1] === "aim"){
	const exampleEmbed1 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Bio** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:graviton:663749985417953300> Graviton")
	message.channel.send(exampleEmbed1);
	return;
} else if(args[0] === "aim" && args[1] === "blaster"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Blaster** \n \n<:aimassault:663749974869147648> Aim Assaulter")
	message.channel.send(exampleEmbed);
	return;
} else if(args[0] === "aim" && args[1] === "brawler"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Brawler** \n \n<:aimmonstrosity:663749978639827004> Aim Monstrosity")
	message.channel.send(exampleEmbed);
	return;
}  else if(args[0] === "aim" && args[1] === "controller"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Controller** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:graviton:663749985417953300> Graviton")
	message.channel.send(exampleEmbed);
	return;
}  else if(args[0] === "aim" && args[1] === "global"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Global** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:aimresearcher:663749975200759829> Aim Researcher \n<:aimsecurity:663749977071157283> Aim Security \n<:graviton:663749985417953300> Graviton \n<:scientistsupreme:663751613256826910> Scientist Supreme")
	message.channel.send(exampleEmbed);
	return;
}  else if(args[0] === "aim" && args[1] === "minion"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Minion** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:aimresearcher:663749975200759829> Aim Researcher \n<:aimsecurity:663749977071157283> Aim Security")
	message.channel.send(exampleEmbed);
	return;
}  else if(args[0] === "aim" && args[1] === "protector"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Protector** \n \n<:aimsecurity:663749977071157283> Aim Security")
	message.channel.send(exampleEmbed);
	return;
}  else if(args[0] === "aim" && args[1] === "skill"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Skill** \n \n<:aimresearcher:663749975200759829> Aim Researcher")
	message.channel.send(exampleEmbed);
	return;
}  else if(args[0] === "aim" && args[1] === "support"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Support** \n \n<:aimresearcher:663749975200759829> Aim Researcher \n<:scientistsupreme:663751613256826910> Scientist Supreme")
	message.channel.send(exampleEmbed);
	return;
}  else if(args[0] === "aim" && args[1] === "tech"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Tech** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aimsecurity:663749977071157283> Aim Security \n<:scientistsupreme:663751613256826910> Scientist Supreme")
	message.channel.send(exampleEmbed);
	return;
}  else if(args[0] === "aim" && args[1] === "villain"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Aim, Villain** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:aimresearcher:663749975200759829> Aim Researcher \n<:aimsecurity:663749977071157283> Aim Security \n<:graviton:663749985417953300> Graviton \n<:scientistsupreme:663751613256826910> Scientist Supreme")
	message.channel.send(exampleEmbed);
	return;
}

}//command
}//channel ID
});



//*********TESTING TRAITS 2***********
client.on("message", message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

//EVERY CHARACTER
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') { //bot spam channel
if(command === 'testing') {
if(args[0] === "alpha"){
	const Embed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("Alpha")
	message.channel.send(Embed);
} else if(args[0] === "alpha" && args[1] === "bravo" || args[0] === "bravo" && args[1] === "alpha"){
	const Embed1 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("Alpha + Bravo")
	message.channel.send(Embed1);
}
}
}
});

client.login(process.env.TOKEN);
