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
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**You made Cap cry with your bad luck**')
	.attachFiles(['./Misc/sadgif.gif'])
	.setImage('attachment://sadgif.gif')
	msg.channel.send(exampleEmbed).catch(err => console.log(err));
}

if (msg.content === '!happy') {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('**Cap appreciates your luck**')
	.attachFiles(['./Misc/happygif.gif'])
	.setImage('attachment://happygif.gif')
	msg.channel.send(exampleEmbed).catch(err => console.log(err));
}
});


//*********WAR COUNTERS + SUBMIT WAR COUNTERS*********** (FINISHED)
//example: !counter aim/+info || !submit counter aim)     
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
let counter = args[0]; 
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
} else if (aimcounterinfo === "aim+info"){		
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
} else if (asgardianscounter === "asgardians"){	
const asgardcounterimage = client.channels.get('666340204872990730')
asgardcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterasgard = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterasgard.url)
message.channel.send(attachment);
})
} else if (asgardianscounterinfo === "asgardians+info"){	
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
} else if (brawlerscounter === "brawlers"){	
const brawlerscounterimage = client.channels.get('666340239903686659')
brawlerscounterimage.fetchMessages({ limit: 1 }).then(messages => {
const counterbrawlers = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counterbrawlers.url)
message.channel.send(attachment);
})
} else if (brawlerscounterinfo === "brawlers+info"){	
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
} else if (shieldcounter === "shield"){	
const shieldcounterimage = client.channels.get('666340284962963524')
shieldcounterimage.fetchMessages({ limit: 1 }).then(messages => {
const countershield = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(countershield.url)
message.channel.send(attachment);
})
} else if (shieldcounterinfo === "shield+info"){	
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
} else if (s6counter === "s6"){	
const s6counterimage = client.channels.get('666340284962963524')
s6counterimage.fetchMessages({ limit: 1 }).then(messages => {
const counters6 = messages.first().attachments.first()
const Attachment = require('discord.js').Attachment;
const attachment = new Attachment(counters6.url)
message.channel.send(attachment);
})
} else if (s6counterinfo === "s6+info"){	
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
} else if (command === 'counter' && args[0] == null){	
message.channel.send("Please use a valid team phrase, such as aim,asgardians,brawlers,shield, or s6.").catch(console.error);	
}

if(command === 'submit') {
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') {
if (args[0] === "counter"){	
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


//*********CHARACTERS + TEAMS*********** (NOT FINISHED)
//example: !ironman speed || !asgardians)
client.on("message", async message => {
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
	.setThumbnail('https://i.imgur.com/h9BAFZ1.png') 
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
	.setDescription("<:daredevil:663749979994587156> **Daredevil** \nDaredevil's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156> **Daredevil** \nDaredevil is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'deadpool' || command === 'dp' || command === 'dead' || command === 'pool') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Basic)** \n \n**Dual Pistols • T4 Upgrade** \n \nAttack primary target for **190% -> 220%** damage + \n80% chance to Bonus attack for **140% -> 170%** damage. \nBonus attack always Crits if the target is a MINION.")
	.setThumbnail('https://i.imgur.com/EO9r38O.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Special)** \n \n**Bounty Hunter • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack the most injured target for **490% -> 550%** damage, \nignoring Taunt. On Kill, gain Regeneration.")
	.setThumbnail('https://i.imgur.com/FlCE0BS.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Ultimate)** \n \n**Hack 'n' Slash • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **230% -> 260%** damage + \nRebound Chain 3-4 additional targets for \n**160% -> 200%** damage. Apply Bleed to MINION targets. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/IjD2h1e.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Passive)** \n \n**Merc With A Mouth • T4 Upgrade** \n \nOn Turn, clear all negative effects from Self + \nHeal **10% -> 15%** of Max Health per negative effect removed. \n5% chance to Revive for 10% of Max Health.")
	.setThumbnail('https://i.imgur.com/1B8Xoik.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Basic)** \n \n**Dual Pistols • T4 Upgrade** \n \nAttack primary target for **190% -> 220%** damage + \n80% chance to Bonus attack for **140% -> 170%** damage. \nBonus attack always Crits if the target is a MINION.")
	.setThumbnail('https://i.imgur.com/EO9r38O.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Special)** \n \n**Bounty Hunter • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack the most injured target for **490% -> 550%** damage, \nignoring Taunt. On Kill, gain Regeneration.")
	.setThumbnail('https://i.imgur.com/FlCE0BS.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Ultimate)** \n \n**Hack 'n' Slash • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **230% -> 260%** damage + \nRebound Chain 3-4 additional targets for \n**160% -> 200%** damage. Apply Bleed to MINION targets. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/IjD2h1e.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Passive)** \n \n**Merc With A Mouth • T4 Upgrade** \n \nOn Turn, clear all negative effects from Self + \nHeal **10% -> 15%** of Max Health per negative effect removed. \n5% chance to Revive for 10% of Max Health.")
	.setThumbnail('https://i.imgur.com/1B8Xoik.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251> **Deadpool** \nDeadpool's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251> **Deadpool** \nDeadpool is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'drax' || command === 'draxthedestroyer') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Basic)** \n \n**Knife Slash • T4 Upgrade** \n \nAttack primary target for **220% -> 250%** damage + 30% Drain.")
	.setThumbnail('https://i.imgur.com/zzqAaT9.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Special)** \n \n**Fast Reflexes • T4 Upgrade** \n<:abilityon:663751832690229278> \nGain Taunt + **1-2 -> 2** Counter. \nGain Defense Up for 1-2 turns.")
	.setThumbnail('https://i.imgur.com/EJOcgHO.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Ultimate)** \n \n**Good Fighting • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **270% -> 300%** damage + **40% -> 50%** Drain. \nChain to 3-5 adjacent targets for **210% -> 240%** damage + \n**40% -> 50%** Drain. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/pXaX50Q.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Passive)** \n \n**Destroyer • T4 Upgrade** \n \nOn Spawn, gain Taunt. **+15% -> +20%** increase to Drain.")
	.setThumbnail('https://i.imgur.com/u45pYuj.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Basic)** \n \n**Knife Slash • T4 Upgrade** \n \nAttack primary target for **220% -> 250%** damage + 30% Drain.")
	.setThumbnail('https://i.imgur.com/zzqAaT9.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Special)** \n \n**Fast Reflexes • T4 Upgrade** \n<:abilityon:663751832690229278> \nGain Taunt + **1-2 -> 2** Counter. \nGain Defense Up for 1-2 turns.")
	.setThumbnail('https://i.imgur.com/EJOcgHO.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Ultimate)** \n \n**Good Fighting • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **270% -> 300%** damage + **40% -> 50%** Drain. \nChain to 3-5 adjacent targets for **210% -> 240%** damage + \n**40% -> 50%** Drain. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/pXaX50Q.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Passive)** \n \n**Destroyer • T4 Upgrade** \n \nOn Spawn, gain Taunt. **+15% -> +20%** increase to Drain.")
	.setThumbnail('https://i.imgur.com/u45pYuj.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062> **Drax** \nDrax's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062> **Drax** \nDrax is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'doctor' || command === 'ds' || command === 'strange' || command === 'mrdoctor') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Basic)** \n \n**Bolt of Balthak • T4 Upgrade** \n \nAttack primary target for **150% -> 170%** Piercing \n+ apply Offense Down for **1 -> 1-2** turns. \nThis is Unavoidable.")
	.setThumbnail('111') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Special)** \n \n**Winds of Watoomb • T4 Upgrade** \n<:abilityon:663751832690229278> \nApply 2 random negative effects against primary target + \n**90% -> 100%** chance to flip all positive effects on each enemy to negative effects. \nIf positive effects are not flipped, they are removed instead.")
	.setThumbnail('222') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Ultimate)** \n \n**Book of the Vishanti • T4 Upgrade** \n<:abilityoff:663751832413405184> \nRevive a dead SUPERNATURAL ally with 65% Health. \nRevive a dead ally with **40% -> 50%** Health. \nHeal all allies for **5000 -> 8000** Health + 10% of this character's Max Health.")
	.setThumbnail('333') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Passive)** \n \n**Master of the Arcane Arts • T4 Upgrade** \n \nOn Turn, **20% -> 30%** chance to Fill lowest Speed Bar by 30%. \nIf this character has 3 or more SUPERNATURAL allies, \nwhen a positive effect is applied to an enemy, \nheal for 5% of this character's Max Health + \ngain 1 Deflect, up to a maximum of 5.")
	.setThumbnail('444') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Basic)** \n \n**Bolt of Balthak • T4 Upgrade** \n \nAttack primary target for **150% -> 170%** Piercing \n+ apply Offense Down for **1 -> 1-2** turns. \nThis is Unavoidable.")
	.setThumbnail('111') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Special)** \n \n**Winds of Watoomb • T4 Upgrade** \n<:abilityon:663751832690229278> \nApply 2 random negative effects against primary target + \n**90% -> 100%** chance to flip all positive effects on each enemy to negative effects. \nIf positive effects are not flipped, they are removed instead.")
	.setThumbnail('222') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Ultimate)** \n \n**Book of the Vishanti • T4 Upgrade** \n<:abilityoff:663751832413405184> \nRevive a dead SUPERNATURAL ally with 65% Health. \nRevive a dead ally with **40% -> 50%** Health. \nHeal all allies for **5000 -> 8000** Health + 10% of this character's Max Health.")
	.setThumbnail('333') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Passive)** \n \n**Master of the Arcane Arts • T4 Upgrade** \n \nOn Turn, **20% -> 30%** chance to Fill lowest Speed Bar by 30%. \nIf this character has 3 or more SUPERNATURAL allies, \nwhen a positive effect is applied to an enemy, \nheal for 5% of this character's Max Health + \ngain 1 Deflect, up to a maximum of 5.")
	.setThumbnail('444') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364> **Doctor Strange** \nDoctor Strange's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364> **Doctor Strange** \nDoctor Strange is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'elektra' || command === 'elek' || command === 'electra' || command === 'elec') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Basic)** \n \n**Sneak Attack • T4 Upgrade** \n \nAttack primary target for **170% -> 200%** damage + \n**70% -> 100%** chance to apply Bleed. If target is a DEFENDER, \napply 3 Bleed and gain +1,000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/8uUMlme.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Special)** \n \n**Into Shadow • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **150% -> 160%** damage + \nclear **1-2 -> 2** positive effects. Gain Stealth.")
	.setThumbnail('https://i.imgur.com/Is7c5kJ.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Ultimate)** \n \n**Vital Strike • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **530% -> 600%** damage.")
	.setThumbnail('https://i.imgur.com/mt97ASL.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Passive)** \n \n**Death's Grace • T4 Upgrade** \n \nOn Spawn, a random HAND ally gains Evade. \n**10% -> 15%** chance to Revive on Death with 20% of Max Health.")
	.setThumbnail('https://i.imgur.com/P9572yf.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Basic)** \n \n**Sneak Attack • T4 Upgrade** \n \nAttack primary target for **170% -> 200%** damage + \n**70% -> 100%** chance to apply Bleed. If target is a DEFENDER, \napply 3 Bleed and gain +1,000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/8uUMlme.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Special)** \n \n**Into Shadow • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **150% -> 160%** damage + \nclear **1-2 -> 2** positive effects. Gain Stealth.")
	.setThumbnail('https://i.imgur.com/Is7c5kJ.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Ultimate)** \n \n**Vital Strike • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **530% -> 600%** damage.")
	.setThumbnail('https://i.imgur.com/mt97ASL.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Passive)** \n \n**Death's Grace • T4 Upgrade** \n \nOn Spawn, a random HAND ally gains Evade. \n**10% -> 15%** chance to Revive on Death with 20% of Max Health.")
	.setThumbnail('https://i.imgur.com/P9572yf.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265> **Elektra** \nElektra's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265> **Elektra** \nElektra is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'elsa' || command === 'blood' || command === 'stone' || command === 'bloodstone') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Basic)** \n \n**Bloody Good Guns • T4 Upgrade** \n \nAttack primary target for **35% -> 45%** Piercing + \nBonus Attack 5 times for **35% -> 45%** Piercing.")
	.setThumbnail('https://i.imgur.com/zWopFWi.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Special)** \n \n**Trick Shot • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **240% -> 300%** damage. \nAttack the most injured enemy for **290% -> 350%** damage, ignoring Taunt and Stealth.")
	.setThumbnail('https://i.imgur.com/datIsFj.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Ultimate)** \n \n**Scatterguns • T4 Upgrade** \n<:abilityoff:663751832413405184> \nGain Offense Up for 2 turns. \nAttack primary target and adjacent targets for **220% -> 250%** damage, **+15% -> +25%** per SUPERNATURAL ally.")
	.setThumbnail('https://i.imgur.com/L0hG2hU.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Passive)** \n \n**#%@$! • T4 Upgrade** \n \nOn Miss or on ally miss, if this character has 3 or more \nSUPERNATURAL allies, attack that target for **220% -> 270%** damage. \nOn enemy dodge, attack that enemy for **220% -> 270%** damage. \nGain +10% Crit Chance. MYSTIC allies gain +10% Crit Chance. \nGain **+10% -> +20%** Accuracy per SUPERNATURAL ally.")
	.setThumbnail('https://i.imgur.com/CDJ8voS.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Basic)** \n \n**Bloody Good Guns • T4 Upgrade** \n \nAttack primary target for **35% -> 45%** Piercing + \nBonus Attack 5 times for **35% -> 45%** Piercing.")
	.setThumbnail('https://i.imgur.com/zWopFWi.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Special)** \n \n**Trick Shot • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **240% -> 300%** damage. \nAttack the most injured enemy for **290% -> 350%** damage, ignoring Taunt and Stealth.")
	.setThumbnail('https://i.imgur.com/datIsFj.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Ultimate)** \n \n**Scatterguns • T4 Upgrade** \n<:abilityoff:663751832413405184> \nGain Offense Up for 2 turns. \nAttack primary target and adjacent targets for **220% -> 250%** damage, **+15% -> +25%** per SUPERNATURAL ally.")
	.setThumbnail('https://i.imgur.com/L0hG2hU.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Passive)** \n \n**#%@$! • T4 Upgrade** \n \nOn Miss or on ally miss, if this character has 3 or more \nSUPERNATURAL allies, attack that target for **220% -> 270%** damage. \nOn enemy dodge, attack that enemy for **220% -> 270%** damage. \nGain +10% Crit Chance. MYSTIC allies gain +10% Crit Chance. \nGain **+10% -> +20%** Accuracy per SUPERNATURAL ally.")
	.setThumbnail('https://i.imgur.com/CDJ8voS.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402> **Elsa** \nElsa's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402> **Elsa** \nElsa is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'falcon' || command === 'fal' || command === 'falc' || command === 'redwing') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Basic)** \n \n**Dual SMGs • T4 Upgrade** \n \nAttack primary target for **200% -> 230%** damage. \nIf primary target has any positive effects, \nBonus Attack for **110% -> 120%** damage. \nIn WAR, if target has any positive effects, \nBonus Attack again for **110% -> 120%** damage.")
	.setThumbnail('https://i.imgur.com/mZLJK8p.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Special)** \n \n**Redwing • T4 Upgrade** \n<:abilityon:663751832690229278> \nChange Speed Bar for self and all allies by **25% -> 30%** + \n10% for each enemy with a positive effect. \nClear Stealth from all enemies.")
	.setThumbnail('https://i.imgur.com/o6GRP9c.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Ultimate)** \n \n**Strafing Run • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack all enemies for **160% -> 190%** damage + 50% Piercing.  \nFor each positive effect on an enemy, \nBonus Attack that enemy for 80% damage + 50% Piercing. \nOn WAR OFFENSE, **+30% -> +50%** Piercing to primary and secondary attacks.")
	.setThumbnail('https://i.imgur.com/IQrr9kt.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Passive)** \n \n**EXO-7 Wingsuit • T4 Upgrade** \n \nGain +25% Block Chance. \nGain +5% Block Chance per POWER ARMOR ally. \nGain +10% Max Health. \nGain **+5% -> +10%** Block Amount.")
	.setThumbnail('https://i.imgur.com/LbGkeDk.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Basic)** \n \n**Dual SMGs • T4 Upgrade** \n \nAttack primary target for **200% -> 230%** damage. \nIf primary target has any positive effects, \nBonus Attack for **110% -> 120%** damage. \nIn WAR, if target has any positive effects, \nBonus Attack again for **110% -> 120%** damage.")
	.setThumbnail('https://i.imgur.com/mZLJK8p.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Special)** \n \n**Redwing • T4 Upgrade** \n<:abilityon:663751832690229278> \nChange Speed Bar for self and all allies by **25% -> 30%** + \n10% for each enemy with a positive effect. \nClear Stealth from all enemies.")
	.setThumbnail('https://i.imgur.com/o6GRP9c.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Ultimate)** \n \n**Strafing Run • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack all enemies for **160% -> 190%** damage + 50% Piercing.  \nFor each positive effect on an enemy, \nBonus Attack that enemy for 80% damage + 50% Piercing. \nOn WAR OFFENSE, **+30% -> +50%** Piercing to primary and secondary attacks.")
	.setThumbnail('https://i.imgur.com/IQrr9kt.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Passive)** \n \n**EXO-7 Wingsuit • T4 Upgrade** \n \nGain +25% Block Chance. \nGain +5% Block Chance per POWER ARMOR ally. \nGain +10% Max Health. \nGain **+5% -> +10%** Block Amount.")
	.setThumbnail('https://i.imgur.com/LbGkeDk.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063> **Falcon** \nFalcon's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063> **Falcon** \nFalcon is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'gamora' || command === 'daughterofthanos' || command === 'gam' || command === 'gamor') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Basic)** \n \n**Assassin's Strike • T4 Upgrade** \n \nAttack primary target for 250% damage + \n**40% -> 50%** chance to Bonus attack up to 2 times for 200% damage.")
	.setThumbnail('https://i.imgur.com/ZipNAx6.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Special)** \n \n**Ruthless Blade • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **230% -> 270%** damage. \nChain to 1-2 adjacent targets for **180% -> 200%** damage. \nOn Kill, fill Speed Bar by 100%. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/MVpJ1LM.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Ultimate)** \n \n**Flying Slash • T4 Upgrade** \n<:abilityoff:663751832413405184> \nGain Offense Up for 2 turns. \nAttack primary target for **370% -> 420%** damage. \nOn Kill, fill Speed Bar by 100%.")
	.setThumbnail('https://i.imgur.com/XPkQAtm.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Passive)** \n \n**Deadly Methods • T4 Upgrade** \n \nGain **+5% -> +10%** Crit Chance. \nApply +10% Crit Chance to GUARDIAN allies. \nApply +5% Crit Chance to additional allies.")
	.setThumbnail('https://i.imgur.com/iW861pc.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Basic)** \n \n**Assassin's Strike • T4 Upgrade** \n \nAttack primary target for 250% damage + \n**40% -> 50%** chance to Bonus attack up to 2 times for 200% damage.")
	.setThumbnail('https://i.imgur.com/ZipNAx6.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Special)** \n \n**Ruthless Blade • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **230% -> 270%** damage. \nChain to 1-2 adjacent targets for **180% -> 200%** damage. \nOn Kill, fill Speed Bar by 100%. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/MVpJ1LM.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Ultimate)** \n \n**Flying Slash • T4 Upgrade** \n<:abilityoff:663751832413405184> \nGain Offense Up for 2 turns. \nAttack primary target for **370% -> 420%** damage. \nOn Kill, fill Speed Bar by 100%.")
	.setThumbnail('https://i.imgur.com/XPkQAtm.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Passive)** \n \n**Deadly Methods • T4 Upgrade** \n \nGain **+5% -> +10%** Crit Chance. \nApply +10% Crit Chance to GUARDIAN allies. \nApply +5% Crit Chance to additional allies.")
	.setThumbnail('https://i.imgur.com/iW861pc.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234> **Gamora** \nGamora's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234> **Gamora** \nGamora is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'ghostrider' || command === 'ghost' || command === 'rider' || command === 'gr') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Basic)** \n \n**Hellfire • T4 Upgrade** \n \nAttack primary target for **200% -> 250%** damage + \napply Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/lgEhRB2.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Special)** \n \n**Hell Cycle • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **260% -> 290%** damage + \napply 2 Bleed for **1 -> 2** turns. \nAttack all adjacent targets for **240% -> 270%** damage + \napply 2 Bleed. This attack cannot be blocked and cannot miss.")
	.setThumbnail('https://i.imgur.com/6yqn9PM.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Ultimate)** \n \n**Penance Stare • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **430% -> 500%** Piercing + \napply Offense Down and Defense Down. \nIf Charged, this attack gains 200% Drain and lose 1 Charged.")
	.setThumbnail('https://i.imgur.com/41vRORY.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Passive)** \n \n**Spirit of Vengeance • T4 Upgrade** \n \nOn Death, grant 2 Ability Energy to all SUPERNATURAL allies. \nOn non-summoned ally Death, attack the enemy that killed the \ntarget for **400% -> 500%** damage and gain +1 Charged, up to a maximum of 5. \nGenerate **2 -> 3** Ability Energy for self. \nWhen a negative effect is applied to an enemy, \nchange Speed Bar of self and all SUPERNATURAL allies by 3%. \nGain **+20% -> +40%** Max Health. \nSUPERNATURAL allies gain **+20% -> +40%** Max Health. \nGain +30% Focus. MYSTIC allies gain +30% Focus.")
	.setThumbnail('https://i.imgur.com/4BqPBWT.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Basic)** \n \n**Hellfire • T4 Upgrade** \n \nAttack primary target for **200% -> 250%** damage + \napply Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/lgEhRB2.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Special)** \n \n**Hell Cycle • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **260% -> 290%** damage + \napply 2 Bleed for **1 -> 2** turns. \nAttack all adjacent targets for **240% -> 270%** damage + \napply 2 Bleed. This attack cannot be blocked and cannot miss.")
	.setThumbnail('https://i.imgur.com/6yqn9PM.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Ultimate)** \n \n**Penance Stare • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **430% -> 500%** Piercing + \napply Offense Down and Defense Down. \nIf Charged, this attack gains 200% Drain and lose 1 Charged.")
	.setThumbnail('https://i.imgur.com/41vRORY.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Passive)** \n \n**Spirit of Vengeance • T4 Upgrade** \n \nOn Death, grant 2 Ability Energy to all SUPERNATURAL allies. \nOn non-summoned ally Death, attack the enemy that killed the \ntarget for **400% -> 500%** damage and gain +1 Charged, up to a maximum of 5. \nGenerate **2 -> 3** Ability Energy for self. \nWhen a negative effect is applied to an enemy, \nchange Speed Bar of self and all SUPERNATURAL allies by 3%. \nGain **+20% -> +40%** Max Health. \nSUPERNATURAL allies gain **+20% -> +40%** Max Health. \nGain +30% Focus. MYSTIC allies gain +30% Focus.")
	.setThumbnail('https://i.imgur.com/4BqPBWT.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489> **Ghost Rider** \nGhost Rider's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489> **Ghost Rider** \nGhost Rider is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'greengoblin' || command === 'green' || command === 'goblin' || command === 'gg') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Basic)** \n \n**Goblin Strike • T4 Upgrade** \n \nAttack primary target for **290% -> 330%** damage. \n25% chance to attack adjacent targets for **220% -> 260%** damage.")
	.setThumbnail('https://i.imgur.com/nyBz8Ft.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Special)** \n \n**Burning Rage • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack a random target with Stealth for **380% -> 450%** damage. \nIf no targets have Stealth, attack primary target instead. \nDeal 50% additional damage per positive effect on the target.")
	.setThumbnail('https://i.imgur.com/fGvMb0I.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Ultimate)** \n \n**Fire and Brimstone • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **240% -> 290%** damage. \nAttack 3-4 random targets for **240% -> 290%** damage.")
	.setThumbnail('https://i.imgur.com/2NhIaAn.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Passive)** \n \n**Cauterize • T4 Upgrade** \n \nOn any SPIDER-VERSE ally's turn, choose 2 random enemies. \nIf they have a positive effect, remove 1. \nOn Spawn, apply Defense Down to the enemy with the most Resistance. \nIf that enemy is S.H.I.E.L.D., apply Defense Down for 2 turns. \nThis attack cannot be resisted. \nGain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/X2c7WOF.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Basic)** \n \n**Goblin Strike • T4 Upgrade** \n \nAttack primary target for **290% -> 330%** damage. \n25% chance to attack adjacent targets for **220% -> 260%** damage.")
	.setThumbnail('https://i.imgur.com/nyBz8Ft.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Special)** \n \n**Burning Rage • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack a random target with Stealth for **380% -> 450%** damage. \nIf no targets have Stealth, attack primary target instead. \nDeal 50% additional damage per positive effect on the target.")
	.setThumbnail('https://i.imgur.com/fGvMb0I.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Ultimate)** \n \n**Fire and Brimstone • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **240% -> 290%** damage. \nAttack 3-4 random targets for **240% -> 290%** damage.")
	.setThumbnail('https://i.imgur.com/2NhIaAn.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Passive)** \n \n**Cauterize • T4 Upgrade** \n \nOn any SPIDER-VERSE ally's turn, choose 2 random enemies. \nIf they have a positive effect, remove 1. \nOn Spawn, apply Defense Down to the enemy with the most Resistance. \nIf that enemy is S.H.I.E.L.D., apply Defense Down for 2 turns. \nThis attack cannot be resisted. \nGain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/X2c7WOF.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171> **Green Goblin** \nGreen Goblin's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171> **Green Goblin** \nGreen Goblin is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'graviton' || command === 'grav' || command === 'gravi' || command === 'gra') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Basic)** \n \n**Gravity Wall • T4 Upgrade** \n \nAttack primary target for **200% -> 250%** damage + \nBonus attack for **75% -> 100%** damage per negative effect on the target.")
	.setThumbnail('https://i.imgur.com/NeScjyY.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Special)** \n \n**Crushing Force • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target and adjacent targets for \n**240% -> 300%** damage. \nApply +2 Slow, up to a maximum of 5 to primary target and adjacent targets. \nIf Scientist Supreme is an ally, \napply Bleed to primary target and adjacent targets.")
	.setThumbnail('https://i.imgur.com/ub0g00N.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Ultimate)** \n \n**Singularity • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **250% -> 300%** damage + \n100% additional damage per negative effect + apply Stun.")
	.setThumbnail('https://i.imgur.com/LeQQHk1.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Passive)** \n \n**Weight of the World • T4 Upgrade** \n \nWhen an enemy drops below 50% health, \nincrease the duration of their negative effects by +1, \nup to a maximum of 5. \nA.I.M. MINION allies gain **+10% -> +20%** Damage. \nA.I.M. MINION allies gain +20% Max Health. \nIn WAR, on Turn, change Speed Bar of the enemy with the highest Speed by -25%. \nIn WAR, when an enemy drops below 75% health, apply Disrupted.")
	.setThumbnail('https://i.imgur.com/JR7a2DW.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Basic)** \n \n**Gravity Wall • T4 Upgrade** \n \nAttack primary target for **200% -> 250%** damage + \nBonus attack for **75% -> 100%** damage per negative effect on the target.")
	.setThumbnail('https://i.imgur.com/NeScjyY.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Special)** \n \n**Crushing Force • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target and adjacent targets for \n**240% -> 300%** damage. \nApply +2 Slow, up to a maximum of 5 to primary target and adjacent targets. \nIf Scientist Supreme is an ally, \napply Bleed to primary target and adjacent targets.")
	.setThumbnail('https://i.imgur.com/ub0g00N.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Ultimate)** \n \n**Singularity • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **250% -> 300%** damage + \n100% additional damage per negative effect + apply Stun.")
	.setThumbnail('https://i.imgur.com/LeQQHk1.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Passive)** \n \n**Weight of the World • T4 Upgrade** \n \nWhen an enemy drops below 50% health, \nincrease the duration of their negative effects by +1, \nup to a maximum of 5. \nA.I.M. MINION allies gain **+10% -> +20%** Damage. \nA.I.M. MINION allies gain +20% Max Health. \nIn WAR, on Turn, change Speed Bar of the enemy with the highest Speed by -25%. \nIn WAR, when an enemy drops below 75% health, apply Disrupted.")
	.setThumbnail('https://i.imgur.com/JR7a2DW.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300> **Graviton** \nGraviton's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300> **Graviton** \nGraviton is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'greg' || command === 'undead' || command === 'undeadasgardian') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614>	**Undead Asgardian (Basic)** \n \n**Heavy Slash • T4 Upgrade** \n \nAttack primary target for **210% -> 260%** Piercing + \napply Heal Block.")
	.setThumbnail('111') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614>	**Undead Asgardian (Special)** \n \n**Dark Sacrifice • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **340% -> 400%** Piercing + \napply 2 Bleed for 2 turns. \nAttack self for 2000% Piercing damage. \nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('222') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614>	**Undead Asgardian (Passive)** \n \n**Undeath • T4 Upgrade** \n \nOn Death, Heal most injured, non-summoned ASGARDIAN \nally for **140% -> 180%** of this character's Max Health. \nOn Death, change Speed Bar of all enemies by -10%.")
	.setThumbnail('444') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614>	**Undead Asgardian (Basic)** \n \n**Heavy Slash • T4 Upgrade** \n \nAttack primary target for **210% -> 260%** Piercing + \napply Heal Block.")
	.setThumbnail('111') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614>	**Undead Asgardian (Special)** \n \n**Dark Sacrifice • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **340% -> 400%** Piercing + \napply 2 Bleed for 2 turns. \nAttack self for 2000% Piercing damage. \nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('222') 
	message.channel.send(exampleEmbed2);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614>	**Undead Asgardian (Passive)** \n \n**Undeath • T4 Upgrade** \n \nOn Death, Heal most injured, non-summoned ASGARDIAN \nally for **140% -> 180%** of this character's Max Health. \nOn Death, change Speed Bar of all enemies by -10%.")
	.setThumbnail('444') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614> **Undead Asgardian** \nUndead Asgardian's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614> **Undead Asgardian** \nUndead Asgardian is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'groot' || command === 'tree') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Basic)** \n \n**Crushing Blow • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/HD4UZMG.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Special)** \n \n**Overgrowth • T4 Upgrade** \n<:abilityon:663751832690229278> \nGain **1 -> 2** Deathproof. \nApply Deathproof + Defense Up to all allies.")
	.setThumbnail('https://i.imgur.com/dkRv09G.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Ultimate)** \n \n**Life Spores • T4 Upgrade** \n<:abilityoff:663751832413405184> \nHeal all allies for **3000 -> 6000** Health + \n5% of this character's Max Health. Clear 2 negative effects from all allies. \nApply Immunity to Lowest Health GUARDIAN ally for 2 turns.")
	.setThumbnail('https://i.imgur.com/aR8npPS.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Passive)** \n \n**I am Groot • T4 Upgrade** \n \nWhen Groot is attacked, **50% -> 100%** chance to apply \nSlow to attacker for 1 turns. \nOn Death: \n20% chance to Revive with 25% of this character's Max Health. \nApply Deathproof to Rocket Raccoon. \nApply Defense Up to all allies. \nApply Speed Up + Offense Up + Counter to GUARDIAN allies")
	.setThumbnail('https://i.imgur.com/oZwLFbH.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Basic)** \n \n**Crushing Blow • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/HD4UZMG.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Special)** \n \n**Overgrowth • T4 Upgrade** \n<:abilityon:663751832690229278> \nGain **1 -> 2** Deathproof. \nApply Deathproof + Defense Up to all allies.")
	.setThumbnail('https://i.imgur.com/dkRv09G.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Ultimate)** \n \n**Life Spores • T4 Upgrade** \n<:abilityoff:663751832413405184> \nHeal all allies for **3000 -> 6000** Health + \n5% of this character's Max Health. Clear 2 negative effects from all allies. \nApply Immunity to Lowest Health GUARDIAN ally for 2 turns.")
	.setThumbnail('https://i.imgur.com/aR8npPS.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Passive)** \n \n**I am Groot • T4 Upgrade** \n \nWhen Groot is attacked, **50% -> 100%** chance to apply \nSlow to attacker for 1 turns. \nOn Death: \n20% chance to Revive with 25% of this character's Max Health. \nApply Deathproof to Rocket Raccoon. \nApply Defense Up to all allies. \nApply Speed Up + Offense Up + Counter to GUARDIAN allies")
	.setThumbnail('https://i.imgur.com/oZwLFbH.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282> **groot** \ngroot's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282> **groot** \ngroot is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

//<:handarcher:663749985258569769>
//<:handassassin:663749983413075969>
//<:handblademaster:663749983945752586>
//<:handsentry:663749985027883019>
//<:handsorceress:663749985094991915>

if(command === 'hawkeye' || command === 'hawk' || command === 'eye' || command === 'ronin'|| command === 'clint' || command === 'barton') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Basic)** \n \n**Deadeye • T4 Upgrade** \n \nAttack primary target for 250% damage. \nGain **+10% -> +15%** Crit chance and deal \n+20% Piercing with this attack. \nAttack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/CdMzOFW.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Special)** \n \n**Concussion Arrow • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **140% -> 150%** damage + \nchange Speed Bar by -20%. Clear **3 -> all** positive \neffects from primary and adjacent targets. \nThis attack cannot miss and cannot be dodged.")
	.setThumbnail('https://i.imgur.com/qJ67nw4.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Ultimate)** \n \n**Airburst • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack all enemies for **140% -> 190%** damage. \nApply Blind to primary target + 50% \nchance to apply Blind to all remaining targets. \nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/D1CooD8.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Passive)** \n \n**Shot in the Dark • T4 Upgrade** \n \nOn turn, 50% chance to attack an enemy with Stealth \nfor **170% -> 200%** Unavoidable damage. \nClear Stealth from that enemy.")
	.setThumbnail('https://i.imgur.com/UHRR6vU.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Basic)** \n \n**Deadeye • T4 Upgrade** \n \nAttack primary target for 250% damage. \nGain **+10% -> +15%** Crit chance and deal \n+20% Piercing with this attack. \nAttack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/CdMzOFW.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Special)** \n \n**Concussion Arrow • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **140% -> 150%** damage + \nchange Speed Bar by -20%. Clear **3 -> all** positive \neffects from primary and adjacent targets. \nThis attack cannot miss and cannot be dodged.")
	.setThumbnail('https://i.imgur.com/qJ67nw4.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Ultimate)** \n \n**Airburst • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack all enemies for **140% -> 190%** damage. \nApply Blind to primary target + 50% \nchance to apply Blind to all remaining targets. \nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/D1CooD8.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Passive)** \n \n**Shot in the Dark • T4 Upgrade** \n \nOn turn, 50% chance to attack an enemy with Stealth \nfor **170% -> 200%** Unavoidable damage. \nClear Stealth from that enemy.")
	.setThumbnail('https://i.imgur.com/UHRR6vU.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428> **Hawkeye** \nHawkeye's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428> **Hawkeye** \nHawkeye is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'heimdall') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Basic)** \n \n**Hofund Slash • T4 Upgrade** \n \nAttack primary target for **260% -> 310%** damage to primary target. \nGain an assist from a random ASGARDIAN ally.")
	.setThumbnail('https://i.imgur.com/VMPQ2dZ.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Special)** \n \n**Divine Foresight • T4 Upgrade** \n<:abilityon:663751832690229278> \nFlip Stealth on each enemy. \nAttack all enemies for **280% -> 330%** damage. \n**75% -> 100%** chance to clear Heal Block from self and all ASGARDIAN allies.")
	.setThumbnail('https://i.imgur.com/215OPOm.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Ultimate)** \n \n**Sworn Oath • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **310% -> 360%** damage. \nAttack all adjacent targets for **280% -> 330%** damage. \nApply Heal Block to primary and secondary targets.")
	.setThumbnail('https://i.imgur.com/ZKul340.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Passive)** \n \n**The All-Seeing • T4 Upgrade** \n \nGain +10000% Resistance against Blind. \nASGARDIAN allies gain +10000% Resistance against Blind. \nGain **+20% -> +30%** Focus. \nASGARDIAN allies gain **+20% -> +30%** Focus. \nOn Turn, heal self for 5% of Max Health + \n5% of Max Health per non-minion ASGARDIAN ally. \nOn WAR DEFENSE, on Spawn, apply Defense Up to \n**3 -> all** ASGARDIAN allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/AS0RQr3.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Basic)** \n \n**Hofund Slash • T4 Upgrade** \n \nAttack primary target for **260% -> 310%** damage to primary target. \nGain an assist from a random ASGARDIAN ally.")
	.setThumbnail('https://i.imgur.com/VMPQ2dZ.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Special)** \n \n**Divine Foresight • T4 Upgrade** \n<:abilityon:663751832690229278> \nFlip Stealth on each enemy. \nAttack all enemies for **280% -> 330%** damage. \n**75% -> 100%** chance to clear Heal Block from self and all ASGARDIAN allies.")
	.setThumbnail('https://i.imgur.com/215OPOm.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Ultimate)** \n \n**Sworn Oath • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **310% -> 360%** damage. \nAttack all adjacent targets for **280% -> 330%** damage. \nApply Heal Block to primary and secondary targets.")
	.setThumbnail('https://i.imgur.com/ZKul340.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Passive)** \n \n**The All-Seeing • T4 Upgrade** \n \nGain +10000% Resistance against Blind. \nASGARDIAN allies gain +10000% Resistance against Blind. \nGain **+20% -> +30%** Focus. \nASGARDIAN allies gain **+20% -> +30%** Focus. \nOn Turn, heal self for 5% of Max Health + \n5% of Max Health per non-minion ASGARDIAN ally. \nOn WAR DEFENSE, on Spawn, apply Defense Up to \n**3 -> all** ASGARDIAN allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/AS0RQr3.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195> **Heimdall** \nHeimdall's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195> **Heimdall** \nHeimdall is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'hela' || command === 'goddess' || command === 'godessofdeath') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Basic)** \n \n**Black Blade • T4 Upgrade** \n \nAttack primary target for **240% -> 300%** damage + \nflip 1 Deathproof on target. Attack the most injured enemy for \n**90% -> 100%** Piercing, ignoring Taunt.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089534094639104/Icon_Ability_Hela_Basic-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-347047578593136189.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Special)** \n \n**Command Undead • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **290% -> 350%** damage + \napply Disrupted for **1 -> 2** turns. Gain an Assist from Undead Asgardian.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089544295186452/Icon_Ability_Hela_Special-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-14908862531093919536-1.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Ultimate)** \n \n**Death Knives • T4 Upgrade** \n<:abilityoff:663751832413405184> \nClear 3 Deathproof from all enemies. \nGain +5000% Extra Focus for this action. \nAttack all enemies for **300% -> 350%** damage. \nSpread **2 -> 4** negative effects from the primary target to all secondary targets. \nThis will not spread Stun. \nApply 2 Regeneration to all non-summoned ASGARDIAN allies.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089553376116736/Icon_Ability_Hela_Ultimate-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-16661626197445216232.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Passive)** \n \n**Goddess of Death • T4 Upgrade** \n \nOn Spawn, summon an Undead Asgardian. \nOn an Undead Asgardian's Death, summon an Undead Asgardian. \nOn Turn, heal self for 5% of Max Health + \n5% of Max Health per non-summoned ASGARDIAN ally. \nGain **+10% -> +15%** Max Health. \nGain **+10% -> +15%** Max Health per non-summoned ASGARDIAN ally. \nOn WAR DEFENSE: \nOn non-summoned ASGARDIAN ally's Death, summon an Undead Asgardian. \nGain **+20% -> +25%** Damage. \nASGARDIAN allies gain **+20% -> +25%** Damage.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089576109244436/Icon_Ability_Hela_Passive-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-12955924800836498730.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Basic)** \n \n**Black Blade • T4 Upgrade** \n \nAttack primary target for **240% -> 300%** damage + \nflip 1 Deathproof on target. Attack the most injured enemy for \n**90% -> 100%** Piercing, ignoring Taunt.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089534094639104/Icon_Ability_Hela_Basic-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-347047578593136189.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Special)** \n \n**Command Undead • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **290% -> 350%** damage + \napply Disrupted for **1 -> 2** turns. Gain an Assist from Undead Asgardian.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089544295186452/Icon_Ability_Hela_Special-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-14908862531093919536-1.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Ultimate)** \n \n**Death Knives • T4 Upgrade** \n<:abilityoff:663751832413405184> \nClear 3 Deathproof from all enemies. \nGain +5000% Extra Focus for this action. \nAttack all enemies for **300% -> 350%** damage. \nSpread **2 -> 4** negative effects from the primary target to all secondary targets. \nThis will not spread Stun. \nApply 2 Regeneration to all non-summoned ASGARDIAN allies.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089553376116736/Icon_Ability_Hela_Ultimate-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-16661626197445216232.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Passive)** \n \n**Goddess of Death • T4 Upgrade** \n \nOn Spawn, summon an Undead Asgardian. \nOn an Undead Asgardian's Death, summon an Undead Asgardian. \nOn Turn, heal self for 5% of Max Health + \n5% of Max Health per non-summoned ASGARDIAN ally. \nGain **+10% -> +15%** Max Health. \nGain **+10% -> +15%** Max Health per non-summoned ASGARDIAN ally. \nOn WAR DEFENSE: \nOn non-summoned ASGARDIAN ally's Death, summon an Undead Asgardian. \nGain **+20% -> +25%** Damage. \nASGARDIAN allies gain **+20% -> +25%** Damage.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089576109244436/Icon_Ability_Hela_Passive-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-12955924800836498730.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512> **Hela** \nHela's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512> **Hela** \nHela is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'hulk' || command === 'bruce' || command === 'banner') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Basic)** \n \n**Smash • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage. If this character is below 50% Health, multiply damage by **1.4 -> 1.5**.")
	.setThumbnail('https://i.imgur.com/COy0USK.png ') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Special)** \n \n**Rage • T4 Upgrade** \n<:abilityon:663751832690229278> \nGain Taunt. If any ally is a WAVE I - AVENGER, gain Counter. Clear **3 -> all** negative effects from self.")
	.setThumbnail('https://i.imgur.com/AuAGucR.png ') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Ultimate)** \n \n**Leap • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for 330% damage and adjacent enemies for **190% -> 260%** damage. If this character is below 50% Health, multiply damage by 1.5.")
	.setThumbnail('https://i.imgur.com/GuF7Mzb.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Passive)** \n \n**Always Angry • T4 Upgrade** \n \nOn dropping below 50% Health, fill (75% -> 100%** Speed Bar + gain Offense Up + clear Stun from self. On dropping below 25% Health, gain Deathproof + clear all negative effects from self.")
	.setThumbnail('https://i.imgur.com/tOcy0ck.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Basic)** \n \n**Smash • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage. If this character is below 50% Health, multiply damage by **1.4 -> 1.5**.")
	.setThumbnail('https://i.imgur.com/COy0USK.png ') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Special)** \n \n**Rage • T4 Upgrade** \n<:abilityon:663751832690229278> \nGain Taunt. If any ally is a WAVE I - AVENGER, gain Counter. Clear **3 -> all** negative effects from self.")
	.setThumbnail('https://i.imgur.com/AuAGucR.png ') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Ultimate)** \n \n**Leap • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for 330% damage and adjacent enemies for **190% -> 260%** damage. If this character is below 50% Health, multiply damage by 1.5.")
	.setThumbnail('https://i.imgur.com/GuF7Mzb.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Passive)** \n \n**Always Angry • T4 Upgrade** \n \nOn dropping below 50% Health, fill **75% -> 100%** Speed Bar + gain Offense Up + clear Stun from self. On dropping below 25% Health, gain Deathproof + clear all negative effects from self.")
	.setThumbnail('https://i.imgur.com/tOcy0ck.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130> **Hulk** \nHulk's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130> **Hulk** \nHulk is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



//<:hydragrenadier:663749985669611540>
//<:hydraguard:663749985321353218>
//<:hydrascientist:663749986013413386>
//<:hydrasniper:663749986336374811>
//<:hydratrooper:663752253215342603>


if(command === 'iw' || command === 'invisible' || command === 'woman' || command === 'sue' || command === 'storm') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Basic)** \n \n**Cosmic Rays • T4 Upgrade** \n \nAttack primary target for **250% -> 290%** damage. Barrier self for **5% -> 10%** of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/e5xdMW2.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Special)** \n \n**Bending Light • T4 Upgrade** \n<:abilityon:663751832690229278> \nClear 2 negative effects from **3 most injured -> self and all** allies. Apply Stealth to **3 most injured -> self and all** allies. \nApply Defense Up for 2 turns to self and all allies. \nClear Stealth from highest Health ally. Apply 3 Deflect + Immunity for 2 turns to highest Health ally.\nClear Stealth from all enemies.")
	.setThumbnail('https://i.imgur.com/YJ5Txin.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Ultimate)** \n \n**Psionic Shields • T4 Upgrade** \n<:abilityoff:663751832413405184> \nApply Offense Down for 2 turns to **3 -> all** enemies.\nBarrier all allies for **30% -> 40%** of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/Er1kRs2.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Passive)** \n \n**Hard Light • T4 Upgrade** \n \nWhen an enemy attacks a FANTASTIC FOUR ally with Barrier, attack that enemy for **200% -> 250%** damage. \nGain **+10% -> +20%** Max Health. FANTASTIC FOUR and Namor allies gain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/RahrDqe.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Basic)** \n \n**Cosmic Rays • T4 Upgrade** \n \nAttack primary target for **250% -> 290%** damage. Barrier self for **5% -> 10%** of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/e5xdMW2.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Special)** \n \n**Bending Light • T4 Upgrade** \n<:abilityon:663751832690229278> \nClear 2 negative effects from **3 most injured -> self and all** allies. Apply Stealth to **3 most injured -> self and all** allies. \nApply Defense Up for 2 turns to self and all allies. \nClear Stealth from highest Health ally. Apply 3 Deflect + Immunity for 2 turns to highest Health ally.\nClear Stealth from all enemies.")
	.setThumbnail('https://i.imgur.com/YJ5Txin.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Ultimate)** \n \n**Psionic Shields • T4 Upgrade** \n<:abilityoff:663751832413405184> \nApply Offense Down for 2 turns to **3 -> all** enemies.\nBarrier all allies for **30% -> 40%** of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/Er1kRs2.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Passive)** \n \n**Hard Light • T4 Upgrade** \n \nWhen an enemy attacks a FANTASTIC FOUR ally with Barrier, attack that enemy for **200% -> 250%** damage. \nGain **+10% -> +20%** Max Health. FANTASTIC FOUR and Namor allies gain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/RahrDqe.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016> **Invisible Woman** \nInvisible Woman's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016> **Invisible Woman** \nInvisible Woman is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'iron' || command === 'fist') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Basic)** \n \n**Martial Arts • T4 Upgrade** \n \nAttack primary target for **210% -> 250%** damage. Chain to **1-2 -> 2** adjacent targets for 130% damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/1EciYhA.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Special)** \n \n**Inner Peace • T4 Upgrade** \n<:abilityon:663751832690229278> \nClear all negative effects from self.\nHeal self and all DEFENDER allies for **5000 -> 8000** Health + 10% of this character's Max Health. Then, heal most injured CITY HERO ally for **5000 -> 8000** Health + 10% of this character's Max Health\nChange Speed Bar by 30%.")
	.setThumbnail('https://i.imgur.com/bEPx4IK.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Ultimate)** \n \n**The Iron Fist • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **600% -> 700%** damage + clear 3 positive effects.\n60% chance to gain Offense Down.\nCannot be Blocked.")
	.setThumbnail('https://i.imgur.com/EeNRVBY.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Passive)** \n \n**Son of K'un-Lun • T4 Upgrade** \n \nOn Spawn, heal self and DEFENDER allies for 30% of this character's Max Health. Heal additional CITY HERO allies for 10% of this character's Max Health.\nOn Turn, **30% -> 40%** chance to heal self and DEFENDER allies for **20% -> 30%** of this character's Max Health, and heal additional CITY HERO allies for **10% -> 20%** of this character's Max Health.\nGain +5% damage for each DEFENDER ally.")
	.setThumbnail('https://i.imgur.com/oSfw4EU.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Basic)** \n \n**Martial Arts • T4 Upgrade** \n \nAttack primary target for **210% -> 250%** damage. Chain to **1-2 -> 2** adjacent targets for 130% damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/1EciYhA.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Special)** \n \n**Inner Peace • T4 Upgrade** \n<:abilityon:663751832690229278> \nClear all negative effects from self.\nHeal self and all DEFENDER allies for **5000 -> 8000** Health + 10% of this character's Max Health. Then, heal most injured CITY HERO ally for **5000 -> 8000** Health + 10% of this character's Max Health\nChange Speed Bar by 30%.")
	.setThumbnail('https://i.imgur.com/bEPx4IK.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Ultimate)** \n \n**The Iron Fist • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **600% -> 700%** damage + clear 3 positive effects.\n60% chance to gain Offense Down.\nCannot be Blocked.")
	.setThumbnail('https://i.imgur.com/EeNRVBY.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Passive)** \n \n**Son of K'un-Lun • T4 Upgrade** \n \nOn Spawn, heal self and DEFENDER allies for 30% of this character's Max Health. Heal additional CITY HERO allies for 10% of this character's Max Health.\nOn Turn, **30% -> 40%** chance to heal self and DEFENDER allies for **20% -> 30%** of this character's Max Health, and heal additional CITY HERO allies for **10% -> 20%** of this character's Max Health.\nGain +5% damage for each DEFENDER ally.")
	.setThumbnail('https://i.imgur.com/oSfw4EU.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254> **Iron Fist** \nIron Fist's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254> **Iron Fist** \nIron Fist is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'ironman' || command === 'ironm' || command === 'stark' || command === 'mrstark') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Basic)** \n \n**Repulsor Blast • T4 Upgrade** \n \nAttack primary target for 280% damage. 30% chance to Chain to up to 2 adjacent targets for **170% -> 230%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/krvvnqO.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Special)** \n \n**Rocket Barrage • T4 Upgrade** \n<:abilityon:663751832690229278> \n\nAttack all enemies for **190% -> 210%** Unavoidable damage. If Captain America is your ally, attack all enemies for **220% -> 250%** Unavoidable damage instead.")
	.setThumbnail('https://i.imgur.com/m2xUQ8h.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Ultimate)** \n \n**Unibeam • T4 Upgrade** \n<:abilityoff:> \n\nAttack primary target for **540% -> 600%** damage.")
	.setThumbnail('https://i.imgur.com/1shVLOz.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Passive)** \n \n**Stark Upgrades • T4 Upgrade** \n \nGain **+10% -> +15%** Extra Crit chance. Apply **+10% -> +15%** Extra Crit chance to TECH allies. Apply +10% Extra Crit chance all other allies.")
	.setThumbnail('https://i.imgur.com/jah6KCY.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Basic)** \n \n**Repulsor Blast • T4 Upgrade** \n \nAttack primary target for 280% damage. 30% chance to Chain to up to 2 adjacent targets for **170% -> 230%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/krvvnqO.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Special)** \n \n**Rocket Barrage • T4 Upgrade** \n<:abilityon:663751832690229278> \n\nAttack all enemies for **190% -> 210%** Unavoidable damage. If Captain America is your ally, attack all enemies for **220% -> 250%** Unavoidable damage instead.")
	.setThumbnail('https://i.imgur.com/m2xUQ8h.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Ultimate)** \n \n**Unibeam • T4 Upgrade** \n<:abilityoff:663751832413405184> \n\nAttack primary target for **540% -> 600%** damage.")
	.setThumbnail('https://i.imgur.com/1shVLOz.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Passive)** \n \n**Stark Upgrades • T4 Upgrade** \n \nGain **+10% -> +15%** Extra Crit chance. Apply **+10% -> +15%** Extra Crit chance to TECH allies. Apply +10% Extra Crit chance all other allies.")
	.setThumbnail('https://i.imgur.com/jah6KCY.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577> **Iron Man** \nIron Man's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577> **Iron Man** \nIron Man is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'jessicajones' || command === 'jessjones' || command === 'jjones' || command === 'jj') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Basic)** \n \n**Jaw Breaker • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage + 50% chance to Bonus attack **1 -> 1-2** times for 170% damage.\nGenerate 1 Ability Energy for a random DEFENDER ally. Each attack has a 50% chance to generate 1 Ability Energy for a random ally.")
	.setThumbnail('https://i.imgur.com/2fMoTUz.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Special)** \n \n**Shake it Off • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nClear all negative effects from self. Clear **3 -> all** negative effects from all allies.\nGenerate 1 Ability Energy for each DEFENDER ally. Generate 4 Ability Energy for random allies.")
	.setThumbnail('https://i.imgur.com/HFSba32.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Ultimate)** \n \n**Rejection • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **350% -> 400%** damage + clear **3 -> all** positive effects.\nGain +100000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/ehBy8R5.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Passive)** \n \n**Denial • T4 Upgrade** \n \nGain **+30% -> +40%** Resistance.\nDEFENDER allies gain **+30% -> +40%** Resistance.\nAdditional CITY allies gain +20% Resistance.\nOther additional allies gain +15% Resistance.")
	.setThumbnail('https://i.imgur.com/brAxAZ6.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Basic)** \n \n**Jaw Breaker • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage + 50% chance to Bonus attack **1 -> 1-2** times for 170% damage.\nGenerate 1 Ability Energy for a random DEFENDER ally. Each attack has a 50% chance to generate 1 Ability Energy for a random ally.")
	.setThumbnail('https://i.imgur.com/2fMoTUz.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Special)** \n \n**Shake it Off • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nClear all negative effects from self. Clear **3 -> all** negative effects from all allies.\nGenerate 1 Ability Energy for each DEFENDER ally. Generate 4 Ability Energy for random allies.")
	.setThumbnail('https://i.imgur.com/HFSba32.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Ultimate)** \n \n**Rejection • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **350% -> 400%** damage + clear **3 -> all** positive effects.\nGain +100000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/ehBy8R5.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Passive)** \n \n**Denial • T4 Upgrade** \n \nGain **+30% -> +40%** Resistance.\nDEFENDER allies gain **+30% -> +40%** Resistance.\nAdditional CITY allies gain +20% Resistance.\nOther additional allies gain +15% Resistance.")
	.setThumbnail('https://i.imgur.com/brAxAZ6.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612> **Jessica Jones** \nJessica Jones's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612> **Jessica Jones** \nJessica Jones is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'humantorch' || command === 'human' || command === 'torch' || command === 'johnny' || command === 'blaze') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Basic)** \n \n**Hotshot • T4 Upgrade** \n \nAttack primary target for **180% -> 210%** damage + apply Bleed for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/zlifSxj.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Special)** \n \n**Heating Up • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nGain **+1 -> +2** Offense Up, up to a maximum of 5.\nApply +1 Offense Up, up to a maximum of 3, to **3 -> all** FANTASTIC FOUR or Namor allies.\nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/CuqT4Hh.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Ultimate)** \n \n**Supernova • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_off::ability_off::ability_off:\nAttack all enemies for **340% -> 400%** damage. Apply Offense Down to **3 -> all** enemies.\nThis attack is Unavoidable and cannot be Countered.")
	.setThumbnail('https://i.imgur.com/zOiq2Ic.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Passive)** \n \n**Flame On! • T4 Upgrade** \n \nOn Turn, flip **1 -> 2** negative effects on self to positive effects.\nGain **+20% -> +30%** Damage. FANTASTIC FOUR and Namor allies gain **+20% -> +30%** Damage.\nGain +10000% Resistance against Bleed.")
	.setThumbnail('https://i.imgur.com/mGPapSX.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Basic)** \n \n**Hotshot • T4 Upgrade** \n \nAttack primary target for **180% -> 210%** damage + apply Bleed for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/zlifSxj.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Special)** \n \n**Heating Up • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nGain **+1 -> +2** Offense Up, up to a maximum of 5.\nApply +1 Offense Up, up to a maximum of 3, to **3 -> all** FANTASTIC FOUR or Namor allies.\nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/CuqT4Hh.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Ultimate)** \n \n**Supernova • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_off::ability_off::ability_off:\nAttack all enemies for **340% -> 400%** damage. Apply Offense Down to **3 -> all** enemies.\nThis attack is Unavoidable and cannot be Countered.")
	.setThumbnail('https://i.imgur.com/zOiq2Ic.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Passive)** \n \n**Flame On! • T4 Upgrade** \n \nOn Turn, flip **1 -> 2** negative effects on self to positive effects.\nGain **+20% -> +30%** Damage. FANTASTIC FOUR and Namor allies gain **+20% -> +30%** Damage.\nGain +10000% Resistance against Bleed.")
	.setThumbnail('https://i.imgur.com/mGPapSX.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186> **Human Torch** \nHuman Torch's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186> **Human Torch** \nHuman Torch is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'juggernaut' || command === 'jugg' || command === 'juggs') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Basic)** \n \n**Overwhelming Blow • T4 Upgrade** \n \nAttack primary target for **250% -> 290%** damage. Gain +1 Charged, up to a maximum of 4. **80% -> 100%** chance to gain Ability Energy. This attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/CBXhFrO.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Special)** \n \n**Immovable Object • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nGain Taunt + Defense Up for 2 turns + Immunity + Deathproof + **1 -> 2** Regeneration.\nIf Magneto is an ally, gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/KWVh15e.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Ultimate)** \n \n**Crushing Charge • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nAttack primary and adjacent targets for **320% -> 380%** damage. Damage is increased by 80% per Charged.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/I4YIICo.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Passive)** \n \n**I'm the Juggernaut! • T4 Upgrade** \n \nOn Turn, gain Charged, up to a maximum of 4. On Spawn, clear all but one stack of Charged. If any Charged were cleared, fill Speed Bar by 40%.\nIf Magneto is an ally, when an enemy attacks this character, fill Speed Bar by **15% -> 20%**.\nGain +5% Max Health\nGain **+5% -> +10%** Resistance\nGain +1000% Resistance while he has Immunity.\nGain +1000% Resistance against Stun.")
	.setThumbnail('https://i.imgur.com/WaM6O1k.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Basic)** \n \n**Overwhelming Blow • T4 Upgrade** \n \nAttack primary target for **250% -> 290%** damage. Gain +1 Charged, up to a maximum of 4. **80% -> 100%** chance to gain Ability Energy. This attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/CBXhFrO.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Special)** \n \n**Immovable Object • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nGain Taunt + Defense Up for 2 turns + Immunity + Deathproof + **1 -> 2** Regeneration.\nIf Magneto is an ally, gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/KWVh15e.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Ultimate)** \n \n**Crushing Charge • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nAttack primary and adjacent targets for **320% -> 380%** damage. Damage is increased by 80% per Charged.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/I4YIICo.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Passive)** \n \n**I'm the Juggernaut! • T4 Upgrade** \n \nOn Turn, gain Charged, up to a maximum of 4. On Spawn, clear all but one stack of Charged. If any Charged were cleared, fill Speed Bar by 40%.\nIf Magneto is an ally, when an enemy attacks this character, fill Speed Bar by **15% -> 20%**.\nGain +5% Max Health\nGain **+5% -> +10%** Resistance\nGain +1000% Resistance while he has Immunity.\nGain +1000% Resistance against Stun.")
	.setThumbnail('https://i.imgur.com/WaM6O1k.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970> **Juggernaut** \nJuggernaut's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970> **Juggernaut** \nJuggernaut is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'killmonger' || command === 'kill' || command === 'monger' || command === 'km') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Basic)** \n \n**Focus Fire • T4 Upgrade** \n \nAttack primary target for **290% -> 330%** damage + **20% -> 30%** Drain. On Crit, Bonus Attack **1-2 -> 2** times for **200% -> 240%** damage + **20% -> 30%** Drain and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/u1dFKdS.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Special)** \n \n**Full Auto • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on:\nAttack primary target for **160% -> 200%** damage 3 times. On Crit, gain Offense Up and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/qsNve8S.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Ultimate)** \n \n**Battle Frenzy • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nAttack primary target for **270% -> 300%** damage. Chain to **5 -> all** adjacent targets for **210% -> 240%** damage.\nOn Crit, attack all enemies for **175% -> 200%** damage and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/DRa9myB.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Passive)** \n \n**Retribution • T4 Upgrade** \n \nOn Defense Up, attack the most injured enemy for **260% -> 330%** damage.\nOn Kill, heal for 10% of this character's Max Health.\nGain +20% Drain.\nGain +20% Crit Chance per Charged.\nIn RAIDS, +20% chance to Counterattack. In RAIDS, gain +20% chance to Counterattack for each WAKANDAN ally.")
	.setThumbnail('https://i.imgur.com/l2VAvX5.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Basic)** \n \n**Focus Fire • T4 Upgrade** \n \nAttack primary target for **290% -> 330%** damage + **20% -> 30%** Drain. On Crit, Bonus Attack **1-2 -> 2** times for **200% -> 240%** damage + **20% -> 30%** Drain and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/u1dFKdS.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Special)** \n \n**Full Auto • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on:\nAttack primary target for **160% -> 200%** damage 3 times. On Crit, gain Offense Up and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/qsNve8S.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Ultimate)** \n \n**Battle Frenzy • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nAttack primary target for **270% -> 300%** damage. Chain to **5 -> all** adjacent targets for **210% -> 240%** damage.\nOn Crit, attack all enemies for **175% -> 200%** damage and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/DRa9myB.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Passive)** \n \n**Retribution • T4 Upgrade** \n \nOn Defense Up, attack the most injured enemy for **260% -> 330%** damage.\nOn Kill, heal for 10% of this character's Max Health.\nGain +20% Drain.\nGain +20% Crit Chance per Charged.\nIn RAIDS, +20% chance to Counterattack. In RAIDS, gain +20% chance to Counterattack for each WAKANDAN ally.")
	.setThumbnail('https://i.imgur.com/l2VAvX5.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566> **Killmonger** \nKillmonger's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566> **Killmonger** \nKillmonger is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

//<:kingpin:663750493612539904>
//<:korath:663750493331521547>


//<:kreecyborg:663750490512687116>
//<:kreeguard:663750493398368276>
//<:kreenoble:663750496569524255>
//<:kreeoracle:663750494795202562>
//<:kreereaper:663750487346118676>



if(command === 'loki' || command === 'godofmischief' || command === 'mischief') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Basic)** \n \n**Eldritch Bolt • T4 Upgrade** \n \nAttack primary target for **230% -> 260%** Piercing. **40% -> 50%** chance to gain Evade.")
	.setThumbnail('https://i.imgur.com/kW2iCC4.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Special)** \n \n**Mind Control • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nApply Defense Down to primary target for 2 turns.\nOn WAR DEFENSE, with 4 or more ASGARDIAN allies, apply Taunt to primary target.\nMind Control 1 enemy to attack the primary target + **75% -> 100%** chance to control a second enemy. The controlled enemies gain +25% Damage for this attack.")
	.setThumbnail('https://i.imgur.com/1hjIgKf.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Ultimate)** \n \n**Mirror Image • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nApply Stealth to self and all allies except Mirror Images for **1 -> 2** turns.\nSummon 2-3 Mirror Images at **300% -> 340%** of normal Damage and 150% of normal Health. Mirror Images gain Evade.")
	.setThumbnail('https://i.imgur.com/drVwLcu.png')
	.setFooter("**Mirror Images only have Basic attacks, and do not count as ASGARDIANS.**")
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Passive)** \n \n**God of Mischief • T4 Upgrade** \n \nOn Spawn, gain 15% Speed Bar. MYSTIC CONTROLLER allies gain 10% Speed Bar.\nApply **-20% -> -30%** Resistance to all enemies.\nGain +20% Focus. MYSTIC CONTROLLER allies gain +20% Focus.\nGain +20% Resistance. MYSTIC CONTROLLER allies gain 20% Resistance.\nOn Turn, heal self for 5% of Max Health + 5% of Max Health per non-minion ASGARDIAN ally.\nWhen an ASGARDIAN ally drops below 50% Max Health, apply Stealth to that ally.")
	.setThumbnail('https://i.imgur.com/HGc4Oed.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Basic)** \n \n**Eldritch Bolt • T4 Upgrade** \n \nAttack primary target for **230% -> 260%** Piercing. **40% -> 50%** chance to gain Evade.")
	.setThumbnail('https://i.imgur.com/kW2iCC4.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Special)** \n \n**Mind Control • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nApply Defense Down to primary target for 2 turns.\nOn WAR DEFENSE, with 4 or more ASGARDIAN allies, apply Taunt to primary target.\nMind Control 1 enemy to attack the primary target + **75% -> 100%** chance to control a second enemy. The controlled enemies gain +25% Damage for this attack.")
	.setThumbnail('https://i.imgur.com/1hjIgKf.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Ultimate)** \n \n**Mirror Image • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nApply Stealth to self and all allies except Mirror Images for **1 -> 2** turns.\nSummon 2-3 Mirror Images at **300% -> 340%** of normal Damage and 150% of normal Health. Mirror Images gain Evade.")
	.setThumbnail('https://i.imgur.com/drVwLcu.png')
	.setFooter("**Mirror Images only have Basic attacks, and do not count as ASGARDIANS.**")
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Passive)** \n \n**God of Mischief • T4 Upgrade** \n \nOn Spawn, gain 15% Speed Bar. MYSTIC CONTROLLER allies gain 10% Speed Bar.\nApply **-20% -> -30%** Resistance to all enemies.\nGain +20% Focus. MYSTIC CONTROLLER allies gain +20% Focus.\nGain +20% Resistance. MYSTIC CONTROLLER allies gain 20% Resistance.\nOn Turn, heal self for 5% of Max Health + 5% of Max Health per non-minion ASGARDIAN ally.\nWhen an ASGARDIAN ally drops below 50% Max Health, apply Stealth to that ally.")
	.setThumbnail('https://i.imgur.com/HGc4Oed.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591> **Loki** \nLoki's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591> **Loki** \nLoki is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'luke' || command === 'cage' || command === 'lc') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Basic)** \n \n**Beat Up • T4 Upgrade** \n \n30% chance to apply Assist Now to a random HERO ally. If that ally is a DEFENDER they also gain Offense Up.\nAttack primary target for **290% -> 330%** damage.")
	.setThumbnail('https://i.imgur.com/i8Mz7f5.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Special)** \n \n**Bring it On! • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nGain Taunt for 2 turns + 2 Regeneration. Clear **2 -> all** negative effects from self.\nApply Regeneration to all DEFENDER allies.")
	.setThumbnail('https://i.imgur.com/Nk0iZmf.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Ultimate)** \n \n**Unbreakable • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nGain Defense Up for 2 turns + Deathproof.\nApply Defense Up to all DEFENDER allies for 2 turns. Apply Defense Up to all additional allies. Generate **1-2 -> 1-3** Ability Energy for random allies.")
	.setThumbnail('https://i.imgur.com/fNLZxtq.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Passive)** \n \n**Power Man • T4 Upgrade** \n \nGain +5% Max Health per DEFENDER ally.\nGain +5% Armor.\nGain **+10% -> +15%** Max Health.")
	.setThumbnail('https://i.imgur.com/l7OsOFK.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Basic)** \n \n**Beat Up • T4 Upgrade** \n \n30% chance to apply Assist Now to a random HERO ally. If that ally is a DEFENDER they also gain Offense Up.\nAttack primary target for **290% -> 330%** damage.")
	.setThumbnail('https://i.imgur.com/i8Mz7f5.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Special)** \n \n**Bring it On! • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nGain Taunt for 2 turns + 2 Regeneration. Clear **2 -> all** negative effects from self.\nApply Regeneration to all DEFENDER allies.")
	.setThumbnail('https://i.imgur.com/Nk0iZmf.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Ultimate)** \n \n**Unbreakable • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nGain Defense Up for 2 turns + Deathproof.\nApply Defense Up to all DEFENDER allies for 2 turns. Apply Defense Up to all additional allies. Generate **1-2 -> 1-3** Ability Energy for random allies.")
	.setThumbnail('https://i.imgur.com/fNLZxtq.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Passive)** \n \n**Power Man • T4 Upgrade** \n \nGain +5% Max Health per DEFENDER ally.\nGain +5% Armor.\nGain **+10% -> +15%** Max Health.")
	.setThumbnail('https://i.imgur.com/l7OsOFK.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936> **Luke Cage** \nLuke Cage's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936> **Luke Cage** \nLuke Cage is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'magneto' || command === 'mag' || command === 'neto') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Basic)** \n \n**Magnetic Force • T4 Upgrade** \n \nAttack primary target for **190% -> 220%** damage + 20% Piercing. Chain to 1-2 additional targets for **160% -> 190%** damage + 20% Piercing.")
	.setThumbnail('https://i.imgur.com/7Al4uBi.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Special)** \n \n**Polarized Beam • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **210% -> 240%** damage + 20% Piercing + apply Disrupted for 2 turns + apply Slow for 2 turns + remove **2 -> all** positive effects.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/DMdU1aN.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Ultimate)** \n \n**Magnetic Vortex • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nPull all enemies up to 2 spaces toward the primary target, then attack primary and targets within 2 spaces for **210% -> 240%** damage + apply Blind.\nThis attack is Unavoidable and cannot be Counterattacked.")
	.setThumbnail('https://i.imgur.com/TsiNlf2.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Passive)** \n \n**Brotherhood of Mutants • T4 Upgrade** \n \nOn Spawn, fill 15% Speed Bar. Fill 15% Speed Bar per BROTHERHOOD ally. On enemy Crit, apply Speed Up to self and all BROTHERHOOD allies.\nGain **+30% -> +50%** Focus. BROTHERHOOD allies gain **+30% -> +50%** Focus.\nGain **+20% -> +30%** Max Health. BROTHERHOOD allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/FxgCNd0.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Basic)** \n \n**Magnetic Force • T4 Upgrade** \n \nAttack primary target for **190% -> 220%** damage + 20% Piercing. Chain to 1-2 additional targets for **160% -> 190%** damage + 20% Piercing.")
	.setThumbnail('https://i.imgur.com/7Al4uBi.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Special)** \n \n**Polarized Beam • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **210% -> 240%** damage + 20% Piercing + apply Disrupted for 2 turns + apply Slow for 2 turns + remove **2 -> all** positive effects.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/DMdU1aN.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Ultimate)** \n \n**Magnetic Vortex • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nPull all enemies up to 2 spaces toward the primary target, then attack primary and targets within 2 spaces for **210% -> 240%** damage + apply Blind.\nThis attack is Unavoidable and cannot be Counterattacked.")
	.setThumbnail('https://i.imgur.com/TsiNlf2.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Passive)** \n \n**Brotherhood of Mutants • T4 Upgrade** \n \nOn Spawn, fill 15% Speed Bar. Fill 15% Speed Bar per BROTHERHOOD ally. On enemy Crit, apply Speed Up to self and all BROTHERHOOD allies.\nGain **+30% -> +50%** Focus. BROTHERHOOD allies gain **+30% -> +50%** Focus.\nGain **+20% -> +30%** Max Health. BROTHERHOOD allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/FxgCNd0.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810> **Magneto** \nMagneto's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810> **Magneto** \nMagneto is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


//<:mantis:663750493583179808>
//<:mbaku:663750495621480449>


//<:mercleuitenant:663750495462227978>
//<:mercriotguard:663750491431370776>
//<:mercsniper:663750493750820864>


if(command === 'miles' || command === 'mile' || command === 'morales' || command === 'moral') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Basic)** \n \n**Quick Strike • T4 Upgrade** \n \nAttack primary target for **240% -> 280%** damage. If the target has Defense Down, clear 3 positive effect.")
	.setThumbnail('https://i.imgur.com/2IY1dUP.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Special)** \n \n**Venom Shock • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **260% -> 300%** damage + change Speed Bar by -50%. Apply Slow for **1 -> 2** turns + prolong all negative effects by 1. Gain Stealth.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/7c797AE.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Ultimate)** \n \n**Web Blast • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all enemies for **230% -> 260%** damage. Apply Disrupted to the primary target for 2 turns. Apply Disrupted to **1 -> 2** additional targets.")
	.setThumbnail('https://i.imgur.com/9Fb5mEd.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Passive)** \n \n**Ultimate Spidey • T4 Upgrade** \n \nOn Spawn, gain Stealth. On Turn, apply Defense Down to a random target. If that target already had Defense Down, gain Offense Up instead. This attack is Unavoidable and cannot be blocked.\nDuring Stealth, +50% Dodge Chance.")
	.setThumbnail('https://i.imgur.com/mB3KolU.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Basic)** \n \n**Quick Strike • T4 Upgrade** \n \nAttack primary target for **240% -> 280%** damage. If the target has Defense Down, clear 3 positive effect.")
	.setThumbnail('https://i.imgur.com/2IY1dUP.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Special)** \n \n**Venom Shock • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **260% -> 300%** damage + change Speed Bar by -50%. Apply Slow for **1 -> 2** turns + prolong all negative effects by 1. Gain Stealth.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/7c797AE.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Ultimate)** \n \n**Web Blast • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all enemies for **230% -> 260%** damage. Apply Disrupted to the primary target for 2 turns. Apply Disrupted to **1 -> 2** additional targets.")
	.setThumbnail('https://i.imgur.com/9Fb5mEd.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Passive)** \n \n**Ultimate Spidey • T4 Upgrade** \n \nOn Spawn, gain Stealth. On Turn, apply Defense Down to a random target. If that target already had Defense Down, gain Offense Up instead. This attack is Unavoidable and cannot be blocked.\nDuring Stealth, +50% Dodge Chance.")
	.setThumbnail('https://i.imgur.com/mB3KolU.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<> **Miles Morales** \nMiles Morales's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<> **Miles Morales** \nMiles Morales is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'minnerva' || command === 'min' || command === 'minn' || command === 'minerva') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Basic)** \n \n**Bio-Weapon • T4 Upgrade** \n \nAttack primary target for **170% -> 200%** damage + apply Bleed.\nApply Regeneration to the most injured non-summoned ally.")
	.setThumbnail('https://i.imgur.com/14XjiHu.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Special)** \n \n**Genetic Reconstruction • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nHeal most injured ally for **3000 -> 5000** Health + 15% of this character's Max Health.\nGenerate Ability Energy to a random KREE ally.\nRevive dead ally with 40% Max Health + apply 2 Deathproof.")
	.setThumbnail('https://i.imgur.com/vI6OfS5.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Ultimate)** \n \n**Mass Phlebotomy • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nSteal 15% Health from all enemies and redistribute to all allies. All allies receive an additional **4000 -> 5000** Health. This bypasses Heal Block.\nAlways apply Regeneration for 2 turns to all allies.\nAlways apply Bleed for 2 turns to all enemies.\nApply Deflect to all KREE allies.")
	.setThumbnail('https://i.imgur.com/arTUC8y.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Passive)** \n \n**Kree Nanotech • T4 Upgrade** \n \nOn ally Death, change Speed Bar by **20% -> 25%**.\nOn enemy Death, heal the most injured non-summoned ally for 15% of this character's Max Health. If that ally is KREE, also apply a random positive effect.")
	.setThumbnail('https://i.imgur.com/IMGc2RJ.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Basic)** \n \n**Bio-Weapon • T4 Upgrade** \n \nAttack primary target for **170% -> 200%** damage + apply Bleed.\nApply Regeneration to the most injured non-summoned ally.")
	.setThumbnail('https://i.imgur.com/14XjiHu.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Special)** \n \n**Genetic Reconstruction • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nHeal most injured ally for **3000 -> 5000** Health + 15% of this character's Max Health.\nGenerate Ability Energy to a random KREE ally.\nRevive dead ally with 40% Max Health + apply 2 Deathproof.")
	.setThumbnail('https://i.imgur.com/vI6OfS5.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Ultimate)** \n \n**Mass Phlebotomy • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nSteal 15% Health from all enemies and redistribute to all allies. All allies receive an additional **4000 -> 5000** Health. This bypasses Heal Block.\nAlways apply Regeneration for 2 turns to all allies.\nAlways apply Bleed for 2 turns to all enemies.\nApply Deflect to all KREE allies.")
	.setThumbnail('https://i.imgur.com/arTUC8y.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Passive)** \n \n**Kree Nanotech • T4 Upgrade** \n \nOn ally Death, change Speed Bar by **20% -> 25%**.\nOn enemy Death, heal the most injured non-summoned ally for 15% of this character's Max Health. If that ally is KREE, also apply a random positive effect.")
	.setThumbnail('https://i.imgur.com/IMGc2RJ.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954> **Minnerva** \nMinnerva's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954> **Minnerva** \nMinnerva is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'misterfantastic' || command === 'fantastic' || command === 'mrf' || command === 'reed' || command === 'richards') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Basic)** \n \n**Tensile Strength • T4 Upgrade** \n \nAttack primary target for **190% -> 230%** damage. Chain to **2 -> 3** adjacent targets for **150% -> 190%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/Akv0VRQ.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Special)** \n \n**Entangle • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nAttack primary target for **330% -> 400%** damage + **50% -> 100%** chance to apply Stun.")
	.setThumbnail('https://i.imgur.com/7KGg9V8.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Ultimate)** \n \n**Orbital Assault • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on:\nClear Defense Up from primary target.\nAttack primary target for **390% -> 450%** damage.\nGain +100,000% Extra Focus for this attack.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/M1UKAbS.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Passive)** \n \n**For Science! • T4 Upgrade** \n \nGain **+50% -> +60%** Focus and Resistance for self, FANTASTIC FOUR and Namor allies.\nOn self and each FANTASTIC FOUR ally's turn, 100% chance to apply Assist Now to self, Namor, or a random FANTASTIC FOUR ally. If Assist Now is applied, clear Blind on that target.\nOn Turn, choose **2 -> 3** random enemies. If they have a positive effect, remove 1.")
	.setThumbnail('https://i.imgur.com/7fAovIF.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Basic)** \n \n**Tensile Strength • T4 Upgrade** \n \nAttack primary target for **190% -> 230%** damage. Chain to **2 -> 3** adjacent targets for **150% -> 190%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/Akv0VRQ.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Special)** \n \n**Entangle • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nAttack primary target for **330% -> 400%** damage + **50% -> 100%** chance to apply Stun.")
	.setThumbnail('https://i.imgur.com/7KGg9V8.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Ultimate)** \n \n**Orbital Assault • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on:\nClear Defense Up from primary target.\nAttack primary target for **390% -> 450%** damage.\nGain +100,000% Extra Focus for this attack.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/M1UKAbS.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Passive)** \n \n**For Science! • T4 Upgrade** \n \nGain **+50% -> +60%** Focus and Resistance for self, FANTASTIC FOUR and Namor allies.\nOn self and each FANTASTIC FOUR ally's turn, 100% chance to apply Assist Now to self, Namor, or a random FANTASTIC FOUR ally. If Assist Now is applied, clear Blind on that target.\nOn Turn, choose **2 -> 3** random enemies. If they have a positive effect, remove 1.")
	.setThumbnail('https://i.imgur.com/7fAovIF.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488> **Mister Fantastic** \nMister Fantastic's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488> **Mister Fantastic** \nMister Fantastic is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'mordo' || command === 'mor' || command === 'mo' || command === 'mord') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Basic)** \n \n**Arcane Scourge • T4 Upgrade** \n \nAttack primary target for 220% damage + apply **1-2 -> 2** random negative effects.")
	.setThumbnail('https://i.imgur.com/e3zrXWe.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Special)** \n \n**Mesmerize • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\n**50% -> 100%** chance to Stun primary target + 50% chance to Blind up to 3 targets. 50% chance to Slow up to 2 targets.")
	.setThumbnail('https://i.imgur.com/tCTZxEW.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Ultimate)** \n \n**Demons of Denak • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all targets for **210% -> 240%** damage + apply Heal Block for 2 turns. This attack cannot miss.")
	.setThumbnail('https://i.imgur.com/1ZJm9JT.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Passive)** \n \n**Too Many Sorcerers • T4 Upgrade** \n \nOn Death of any Character, Heal self and the most injured SUPERNATURAL ally for 10% of this character's Max Health.\nOn Death of a Mystic, Heal self and most injured SUPERNATURAL ally for 15% of this character's Max Health + grant **1 -> 1-2** Ability Energy to self and that ally.")
	.setThumbnail('https://i.imgur.com/jzxYATv.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Basic)** \n \n**Arcane Scourge • T4 Upgrade** \n \nAttack primary target for 220% damage + apply **1-2 -> 2** random negative effects.")
	.setThumbnail('https://i.imgur.com/e3zrXWe.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Special)** \n \n**Mesmerize • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\n**50% -> 100%** chance to Stun primary target + 50% chance to Blind up to 3 targets. 50% chance to Slow up to 2 targets.")
	.setThumbnail('https://i.imgur.com/tCTZxEW.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Ultimate)** \n \n**Demons of Denak • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all targets for **210% -> 240%** damage + apply Heal Block for 2 turns. This attack cannot miss.")
	.setThumbnail('https://i.imgur.com/1ZJm9JT.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Passive)** \n \n**Too Many Sorcerers • T4 Upgrade** \n \nOn Death of any Character, Heal self and the most injured SUPERNATURAL ally for 10% of this character's Max Health.\nOn Death of a Mystic, Heal self and most injured SUPERNATURAL ally for 15% of this character's Max Health + grant **1 -> 1-2** Ability Energy to self and that ally.")
	.setThumbnail('https://i.imgur.com/jzxYATv.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161> **Mordo** \nMordo's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161> **Mordo** \nMordo is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'mistersinister' || command === 'sinister' || command === 'mrsinister' || command === 'mrsin' || command === 'mistersin') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Basic)** \n \n**Psionic Beam • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage + 50% damage per non-Cloned MARAUDERS ally.\nGain an assist from a random Cloned ally.\n**70% -> 100%** chance to gain an assist from a random MARAUDERS ally.")
	.setThumbnail('https://i.imgur.com/de6it8b.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Special)** \n \n**Gene Therapy • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **250% -> 300%** damage + 50% damage per non-Cloned MARAUDERS ally.\nGain an assist from a random Cloned ally.\n**70% -> 100%** chance to gain an assist from a random MARAUDERS ally.")
	.setThumbnail('https://i.imgur.com/j2uQE0R.png')
	.setFooter("Mister Sinister spawns with 3 energy from his passive, so this ability is available turn 1.")
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Ultimate)** \n \n**Clone • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_off::ability_off::ability_off:\nSummon a Clone of the primary target. This Clone scales with Mr Sinister's stats instead of the primary target.\nClone gains Defense Up for 2 turns.\nOn WAR DEFENSE, generate 2 Ability Energy for all MARAUDERS and Cloned allies.\n \nThe ability text on this ability doesn't change between level 6, and 7. Upgrading the ability will upgrade the basic, special, and ultimate abilities of the clone from 6 to 7.")
	.setThumbnail('https://i.imgur.com/Nh4cvtn.png') 
	.setFooter("Mister Sinister spawns with 3 energy from his passive, so this ability is available turn 1.")
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Passive)** \n \n**Mutant Eugenicist • T4 Upgrade** \n \nOn Spawn, generate 3 Ability Energy for this character if non-Cloned.\nOn turn, Heal 15% of Max Health +5% of Max Health per MARAUDERS ally and apply regenaration to the 2 most injured MUTANT allies.\nOn MARAUDERS ally's turn, if this character's Health is greater than 50%, redistribute 10% Health from this character to that ally.\nGain **+30% -> +50%** Focus. MARAUDERS allies gain **+30% -> +50%** Focus.\nGain **+10% -> +20%** Max Health. MARAUDERS allies gain **+10% -> +20%** Max Health.\nOn WAR DEFENSE, MARAUDERS allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/brC383z.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Basic)** \n \n**Psionic Beam • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage + 50% damage per non-Cloned MARAUDERS ally.\nGain an assist from a random Cloned ally.\n**70% -> 100%** chance to gain an assist from a random MARAUDERS ally.")
	.setThumbnail('https://i.imgur.com/de6it8b.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Special)** \n \n**Gene Therapy • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **250% -> 300%** damage + 50% damage per non-Cloned MARAUDERS ally.\nGain an assist from a random Cloned ally.\n**70% -> 100%** chance to gain an assist from a random MARAUDERS ally.")
	.setThumbnail('https://i.imgur.com/j2uQE0R.png')
	.setFooter("Mister Sinister spawns with 3 energy from his passive, so this ability is available turn 1.")	
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Ultimate)** \n \n**Clone • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_off::ability_off::ability_off:\nSummon a Clone of the primary target. This Clone scales with Mr Sinister's stats instead of the primary target.\nClone gains Defense Up for 2 turns.\nOn WAR DEFENSE, generate 2 Ability Energy for all MARAUDERS and Cloned allies.\n \nThe ability text on this ability doesn't change between level 6, and 7. Upgrading the ability will upgrade the basic, special, and ultimate abilities of the clone from 6 to 7.")
	.setThumbnail('https://i.imgur.com/Nh4cvtn.png') 
	.setFooter("Mister Sinister spawns with 3 energy from his passive, so this ability is available turn 1.")
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Passive)** \n \n**Mutant Eugenicist • T4 Upgrade** \n \nOn Spawn, generate 3 Ability Energy for this character if non-Cloned.\nOn turn, Heal 15% of Max Health +5% of Max Health per MARAUDERS ally and apply regenaration to the 2 most injured MUTANT allies.\nOn MARAUDERS ally's turn, if this character's Health is greater than 50%, redistribute 10% Health from this character to that ally.\nGain **+30% -> +50%** Focus. MARAUDERS allies gain **+30% -> +50%** Focus.\nGain **+10% -> +20%** Max Health. MARAUDERS allies gain **+10% -> +20%** Max Health.\nOn WAR DEFENSE, MARAUDERS allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/brC383z.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185> **Mister Sinister** \nMister Sinister's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185> **Mister Sinister** \nMister Sinister is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'msmarvel' || command === 'ms' || command === 'msmarv' || command === 'missmarvel') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Basic)** \n \n**Big Bash • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage. Gain Deflect.")
	.setThumbnail('https://i.imgur.com/f0wYw6N.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Special)** \n \n**Rejuvenate • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_off::ability_off::ability_off:\nHeal self for **17000 -> 20000** Health + 50% of this character's Max Health. If Health started below 50%, also gain Slow.")
	.setThumbnail('https://i.imgur.com/jU3pYkS.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Ultimate)** \n \n**Embiggen • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all enemies for **200% -> 220%** damage + **40% -> 60%** chance to generate 1 Ability Energy per target hit. Energy is granted to random HERO allies.")
	.setThumbnail('https://i.imgur.com/SPHaJsz.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Passive)** \n \n**Fangirl • T4 Upgrade** \n \n**80% -> 100%** chance to gain Assist Now on each HERO BRAWLER ally's turn. On Turn, **80% -> 100%** chance to grant Assist Now to a random HERO BRAWLER ally.\nWhen a HERO ally drops below 50% Health, gain Taunt. If that ally is a BRAWLER, also gain 2 Deflect.")
	.setThumbnail('https://i.imgur.com/Gjt5dxc.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Basic)** \n \n**Big Bash • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage. Gain Deflect.")
	.setThumbnail('https://i.imgur.com/f0wYw6N.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Special)** \n \n**Rejuvenate • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_off::ability_off::ability_off:\nHeal self for **17000 -> 20000** Health + 50% of this character's Max Health. If Health started below 50%, also gain Slow.")
	.setThumbnail('https://i.imgur.com/jU3pYkS.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Ultimate)** \n \n**Embiggen • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all enemies for **200% -> 220%** damage + **40% -> 60%** chance to generate 1 Ability Energy per target hit. Energy is granted to random HERO allies.")
	.setThumbnail('https://i.imgur.com/SPHaJsz.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Passive)** \n \n**Fangirl • T4 Upgrade** \n \n**80% -> 100%** chance to gain Assist Now on each HERO BRAWLER ally's turn. On Turn, **80% -> 100%** chance to grant Assist Now to a random HERO BRAWLER ally.\nWhen a HERO ally drops below 50% Health, gain Taunt. If that ally is a BRAWLER, also gain 2 Deflect.")
	.setThumbnail('https://i.imgur.com/Gjt5dxc.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679> **Ms. Marvel** \nMs. Marvel's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679> **Ms. Marvel** \nMs. Marvel is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'mysterio' || command === 'myste' || command === 'myster') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Basic)** \n \n**The Ol' One-Two • T4 Upgrade** \n \nClear **2 -> 3** positive effects from primary target. Attack primary target for **200% -> 250%** damage.")
	.setThumbnail('https://i.imgur.com/NK7IpG6.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Special)** \n \n**Master of Illusion • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nApply Blind to primary target.\n**70% -> 100%** chance to gain an assist from a random SINISTER SIX ally.\nGain an assist from a random ally.\nIf target is a CITY HERO, **70% -> 100%** chance to apply Ability Block.")
	.setThumbnail('https://i.imgur.com/m9Wv9CM.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Ultimate)** \n \n**Smoke and Mirrors • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all enemies for **290% -> 350%** damage. Apply Heal Block to **primary + 2 -> all** enemies.")
	.setThumbnail('https://i.imgur.com/0NHGdEZ.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Passive)** \n \n**Grand Masquerade • T4 Upgrade** \n \nOn Spawn, apply 2 Deflect to self and all SINISTER SIX allies.\nGain **15% -> +20%** Focus for self per SPIDER-VERSE ally.\nSPIDER-VERSE allies gain **15% -> +20%** Focus.\nOn Death, summon **1-2 -> 2** Mirror Images at **220% -> 260%** of normal Damage and 150% of normal Health.")
	.setThumbnail('https://i.imgur.com/hj41dNn.png')
	.addFooter("(Mirror Images only have Basic attacks.)")
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Basic)** \n \n**The Ol' One-Two • T4 Upgrade** \n \nClear **2 -> 3** positive effects from primary target. Attack primary target for **200% -> 250%** damage.")
	.setThumbnail('https://i.imgur.com/NK7IpG6.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Special)** \n \n**Master of Illusion • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nApply Blind to primary target.\n**70% -> 100%** chance to gain an assist from a random SINISTER SIX ally.\nGain an assist from a random ally.\nIf target is a CITY HERO, **70% -> 100%** chance to apply Ability Block.")
	.setThumbnail('https://i.imgur.com/m9Wv9CM.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Ultimate)** \n \n**Smoke and Mirrors • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all enemies for **290% -> 350%** damage. Apply Heal Block to **primary + 2 -> all** enemies.")
	.setThumbnail('https://i.imgur.com/0NHGdEZ.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Passive)** \n \n**Grand Masquerade • T4 Upgrade** \n \nOn Spawn, apply 2 Deflect to self and all SINISTER SIX allies.\nGain **15% -> +20%** Focus for self per SPIDER-VERSE ally.\nSPIDER-VERSE allies gain **15% -> +20%** Focus.\nOn Death, summon **1-2 -> 2** Mirror Images at **220% -> 260%** of normal Damage and 150% of normal Health.")
	.setThumbnail('https://i.imgur.com/hj41dNn.png')
	.addFooter("(Mirror Images only have Basic attacks.)")
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656> **Mysterio** \nMysterio's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656> **Mysterio** \nMysterio is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'mystique' || command === 'mysti' || command === 'mystiq') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Basic)** \n \n**Mimic Strike • T4 Upgrade** \n \nAttack primary target for **190% -> 230%** damage + Bonus Attack 1-2 times for **150% -> 190%** damage + copy **1 -> 2** positive effects and apply them to self.\nIf Magneto is an ally, copy all positive effects.")
	.setThumbnail('https://i.imgur.com/o42oYto.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Special)** \n \n**Infiltrate • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **210% -> 240%** damage. Attack **2 -> 3** additional targets that do not have Stealth for **140 -> 170%** damage.\nAttack all additional targets that do have Stealth for **140% -> 170%** damage + clear Stealth from each target.\nIf no enemies had Stealth, gain Stealth.\nThis ability does not remove Stealth from the primary target.\nIf Magneto is ally, this attack is Unavoidable.\nIf Mister Sinister is an ally, flip **1 -> 2** positive effects to negative effects on each target.")
	.setThumbnail('https://i.imgur.com/7RdsgtC.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Ultimate)** \n \n**Shapeshifter • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **130% -> 150%** damage.\nTrick 1 random enemy to attack the primary target. The tricked enemy gains **180% -> +200%** Damage for this attack.\nGain Evade.")
	.setThumbnail('https://i.imgur.com/Lz6FWz7.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Passive)** \n \n**Subterfuge • T4 Upgrade** \n \nOn Spawn, **50% -> 100%** chance to gain Evade. Gain 1000% Resistance against Bleed.\nOn a non-Cloned Magneto's or Mister Sinister's turn, prolong all positive effects on self and Magneto by a duration of 1, up to a maximum of 3.\nOn WAR DEFENSE, if Mister Sinister is an ally, gain **50% -> 100%** chance to assist on non-attack abilities.")
	.setThumbnail('https://i.imgur.com/XdFhnSw.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Basic)** \n \n**Mimic Strike • T4 Upgrade** \n \nAttack primary target for **190% -> 230%** damage + Bonus Attack 1-2 times for **150% -> 190%** damage + copy **1 -> 2** positive effects and apply them to self.\nIf Magneto is an ally, copy all positive effects.")
	.setThumbnail('https://i.imgur.com/o42oYto.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Special)** \n \n**Infiltrate • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **210% -> 240%** damage. Attack **2 -> 3** additional targets that do not have Stealth for **140 -> 170%** damage.\nAttack all additional targets that do have Stealth for **140% -> 170%** damage + clear Stealth from each target.\nIf no enemies had Stealth, gain Stealth.\nThis ability does not remove Stealth from the primary target.\nIf Magneto is ally, this attack is Unavoidable.\nIf Mister Sinister is an ally, flip **1 -> 2** positive effects to negative effects on each target.")
	.setThumbnail('https://i.imgur.com/7RdsgtC.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Ultimate)** \n \n**Shapeshifter • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **130% -> 150%** damage.\nTrick 1 random enemy to attack the primary target. The tricked enemy gains **180% -> +200%** Damage for this attack.\nGain Evade.")
	.setThumbnail('https://i.imgur.com/Lz6FWz7.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Passive)** \n \n**Subterfuge • T4 Upgrade** \n \nOn Spawn, **50% -> 100%** chance to gain Evade. Gain 1000% Resistance against Bleed.\nOn a non-Cloned Magneto's or Mister Sinister's turn, prolong all positive effects on self and Magneto by a duration of 1, up to a maximum of 3.\nOn WAR DEFENSE, if Mister Sinister is an ally, gain **50% -> 100%** chance to assist on non-attack abilities.")
	.setThumbnail('https://i.imgur.com/XdFhnSw.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002> **Mystique** \nMystique's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002> **Mystique** \nMystique is farmable in:**")
	message.channel.send(speedEmbed); 
}

}
if(command === 'namor' || command === 'nam' || command === 'namo' || command === 'na') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Basic)** \n \n**Neptune's Trident • T4 Upgrade** \n \nAttack primary target for **170% -> 210%** damage + **40% -> 50%** Piercing.")
	.setThumbnail('https://i.imgur.com/OsjwCi3.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Special)** \n \n**Tidal Wave • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on:\nAttack primary target for **290% -> 350%** damage. Attack adjacent targets for **280% -> 340%** damage.\nOn target Block, Bonus Attack 2 times for **80% -> 100%** Piercing to primary and adjacent targets.")
	.setThumbnail('https://i.imgur.com/G1OQ8F8.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Ultimate)** \n \n**Giganto • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all enemies for **250% -> 300%** damage.\nOn WAR OFFENSE:\nThis attack always Crits\nClear **3 -> all** positive effects from each target\nChange Speed Bar of all targets by **-40% -> -50%**\nThis attack is Unavoidable and cannot be Countered.")
	.setThumbnail('https://i.imgur.com/fml7P0D.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Passive)** \n \n**Imperius Rex • T4 Upgrade** \n \nGain **+10% -> +20%** Damage.\nGain **+20% -> +30%** Armor.\nOn WAR OFFENSE:\nOn Spawn, apply Offense Up for 2 turns to **3 -> all** FANTASTIC FOUR allies and self.\nOn Spawn, apply Deflect for 2 turns to **3 -> all** FANTASTIC FOUR ally or self.\nGain additional **+20% -> +30%** Damage.\nFANTASTIC FOUR allies gain **+20% -> +30%** Damage.")
	.setThumbnail('https://i.imgur.com/DnrNz6X.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Basic)** \n \n**Neptune's Trident • T4 Upgrade** \n \nAttack primary target for **170% -> 210%** damage + **40% -> 50%** Piercing.")
	.setThumbnail('https://i.imgur.com/OsjwCi3.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Special)** \n \n**Tidal Wave • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on:\nAttack primary target for **290% -> 350%** damage. Attack adjacent targets for **280% -> 340%** damage.\nOn target Block, Bonus Attack 2 times for **80% -> 100%** Piercing to primary and adjacent targets.")
	.setThumbnail('https://i.imgur.com/G1OQ8F8.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Ultimate)** \n \n**Giganto • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on::ability_on::ability_on:\nAttack all enemies for **250% -> 300%** damage.\nOn WAR OFFENSE:\nThis attack always Crits\nClear **3 -> all** positive effects from each target\nChange Speed Bar of all targets by **-40% -> -50%**\nThis attack is Unavoidable and cannot be Countered.")
	.setThumbnail('https://i.imgur.com/fml7P0D.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Passive)** \n \n**Imperius Rex • T4 Upgrade** \n \nGain **+10% -> +20%** Damage.\nGain **+20% -> +30%** Armor.\nOn WAR OFFENSE:\nOn Spawn, apply Offense Up for 2 turns to **3 -> all** FANTASTIC FOUR allies and self.\nOn Spawn, apply Deflect for 2 turns to **3 -> all** FANTASTIC FOUR ally or self.\nGain additional **+20% -> +30%** Damage.\nFANTASTIC FOUR allies gain **+20% -> +30%** Damage.")
	.setThumbnail('https://i.imgur.com/DnrNz6X.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919> **Namor** \nNamor's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919> **Namor** \nNamor is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


//<:nebula:663750493033594890>


if(command === 'nick' || command === 'fury' || command === 'nickfury') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Basic)** \n \n**Custom I.C.E.R. • T4 Upgrade** \n \nAttack primary target for **200% -> 230%** damage + Chain to 1 adjacent target for **150% -> 180%** damage. Generate 1 ability energy on each Crit. Energy is granted to adjacent allies.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/VKziREv.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Special)** \n \n**Rally • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nGain Defense Up. Spread all positive effects on self to all allies.\nHeal self and all S.H.I.E.L.D. MINION allies for **8000 -> 10000** Health + 15% of this character's Max Health.\nOn WAR DEFENSE, Heal Coulson as well.")
	.setThumbnail('https://i.imgur.com/w27xVao.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Ultimate)** \n \n**Reinforcements • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nSummon **2 -> 2-3** S.H.I.E.L.D. Agent at **300 -> 340%** normal Damage and 150% of normal Health + gain positive effect for 2 turns.\nPossible Summons:\nS.H.I.E.L.D. Operative + Nick Fury gains Speed Up\nS.H.I.E.L.D. Security + Nick Fury gains Offense Up")
	.setThumbnail('https://i.imgur.com/fIeIGS0.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Passive)** \n \n**Director of S.H.I.E.L.D. • T4 Upgrade** \n \nOn Spawn, grant Speed Up to self and all S.H.I.E.L.D. MINION allies. On WAR DEFENSE, this action also affects Coulson. On Turn, **30% -> 50%** chance to grant Speed Up to self + S.H.I.E.L.D. MINION allies.\n**20% -> 30%** chance to grant Assist Now to self or a random ally on each HERO ally's turn. If the ally granted Assist Now is a S.H.I.E.L.D. MINION or Nick Fury, they also gain Offense Up. On WAR DEFENSE, if Coulson is granted Assist Now, he also gains Offense Up.\nS.H.I.E.L.D. MINION allies gain +10% Armor. S.H.I.E.L.D. MINION allies gain +30% Resistance.\nOn WAR DEFENSE, Coulson gains +10% Armor and +30% Resistance.")
	.setThumbnail('https://i.imgur.com/JMUV6fS.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Basic)** \n \n**Custom I.C.E.R. • T4 Upgrade** \n \nAttack primary target for **200% -> 230%** damage + Chain to 1 adjacent target for **150% -> 180%** damage. Generate 1 ability energy on each Crit. Energy is granted to adjacent allies.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/VKziREv.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Special)** \n \n**Rally • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nGain Defense Up. Spread all positive effects on self to all allies.\nHeal self and all S.H.I.E.L.D. MINION allies for **8000 -> 10000** Health + 15% of this character's Max Health.\nOn WAR DEFENSE, Heal Coulson as well.")
	.setThumbnail('https://i.imgur.com/w27xVao.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Ultimate)** \n \n**Reinforcements • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_on:\nSummon **2 -> 2-3** S.H.I.E.L.D. Agent at **300 -> 340%** normal Damage and 150% of normal Health + gain positive effect for 2 turns.\nPossible Summons:\nS.H.I.E.L.D. Operative + Nick Fury gains Speed Up\nS.H.I.E.L.D. Security + Nick Fury gains Offense Up")
	.setThumbnail('https://i.imgur.com/fIeIGS0.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Passive)** \n \n**Director of S.H.I.E.L.D. • T4 Upgrade** \n \nOn Spawn, grant Speed Up to self and all S.H.I.E.L.D. MINION allies. On WAR DEFENSE, this action also affects Coulson. On Turn, **30% -> 50%** chance to grant Speed Up to self + S.H.I.E.L.D. MINION allies.\n**20% -> 30%** chance to grant Assist Now to self or a random ally on each HERO ally's turn. If the ally granted Assist Now is a S.H.I.E.L.D. MINION or Nick Fury, they also gain Offense Up. On WAR DEFENSE, if Coulson is granted Assist Now, he also gains Offense Up.\nS.H.I.E.L.D. MINION allies gain +10% Armor. S.H.I.E.L.D. MINION allies gain +30% Resistance.\nOn WAR DEFENSE, Coulson gains +10% Armor and +30% Resistance.")
	.setThumbnail('https://i.imgur.com/JMUV6fS.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236> **Fury** \nFury's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236> **Fury** \nFury is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


//<:nightnurse:663750495873007627>

if(command === 'okoye' || command === 'oko' || command === 'okoy' || command === 'ok') {
if(kit === "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Basic)** \n \n**Spear Strike • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage + clear a positive effect.\nGain +50% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/Esux29j.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Special)** \n \n**Precision Strike • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **180% -> 220%** damage + apply Defense Down. Chain to 1 adjacent target for **150% -> 190%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/m6uRMYd.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Ultimate)** \n \n**Aerial Impalement • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nGain Offense Up.\nAttack primary target for **250% -> 280%** Piercing + change Speed Bar by **-30% -> -50%**.")
	.setThumbnail('https://i.imgur.com/zm60LAQ.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Passive)** \n \n**Dora Milaje • T4 Upgrade** \n \nGain **+30% -> +50%** Piercing. On Defense Up, gain Immunity.\nOn self or WAKANDAN ally Crit, gain +1 Charged, up to a maximum of 5.\nOn WAKANDAN ally's turn, while in Charged, gain Assist Now and lose 1 Charged. Otherwise, 20% chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/btc42kI.png') 
	message.channel.send(exampleEmbed4);
}

if(basic === "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Basic)** \n \n**Spear Strike • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage + clear a positive effect.\nGain +50% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/Esux29j.png') 
	message.channel.send(exampleEmbed);
}

if(special === "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Special)** \n \n**Precision Strike • T4 Upgrade** \n<:abilityon:663751832690229278> \n:ability_on::ability_on::ability_on::ability_on:\nAttack primary target for **180% -> 220%** damage + apply Defense Down. Chain to 1 adjacent target for **150% -> 190%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/m6uRMYd.png') 
	message.channel.send(exampleEmbed2);
}

if(ultimate === "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Ultimate)** \n \n**Aerial Impalement • T4 Upgrade** \n<:abilityoff:663751832413405184> \n:ability_on::ability_on::ability_on::ability_on::ability_off::ability_off:\nGain Offense Up.\nAttack primary target for **250% -> 280%** Piercing + change Speed Bar by **-30% -> -50%**.")
	.setThumbnail('https://i.imgur.com/zm60LAQ.png') 
	message.channel.send(exampleEmbed3);
}

if(passive === "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Passive)** \n \n**Dora Milaje • T4 Upgrade** \n \nGain **+30% -> +50%** Piercing. On Defense Up, gain Immunity.\nOn self or WAKANDAN ally Crit, gain +1 Charged, up to a maximum of 5.\nOn WAKANDAN ally's turn, while in Charged, gain Assist Now and lose 1 Charged. Otherwise, 20% chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/btc42kI.png') 
	message.channel.send(exampleEmbed4);
}

if(speed === "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848> **Okeye** \nOkeye's speed is: **")
	message.channel.send(speedEmbed);
}

if(unlock === "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848> **Okeye** \nOkeye is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


//<:phoenix:663750496829308958>
//<:psylocke:663750496837828608>
//<:punisher:663750495982190620>
//<:pyro:663750496346963968>
//<:quake:663750496024133632>


//<:ravagerboomer:663750496099500032>
//<:ravagerbruiser:663750495839584267>
//<:ravagerstitcher:663750496338837504>


//<:redskull:663750496959594531>
//<:rescue:663750496057819147>
//<:rhino:663750497328693261>
//<:rocketraccoon:663750494908579851>
//<:ronan:663752093135274014>
//<:sabretooth:663752081659789312>
//<:scarletwitch:663751626665885707>
//<:scientistsupreme:663751613256826910>


//<:shieldassault:663750496670187521>
//<:shieldmedic:663750794700390421>
//<:shieldoperative:663750789021564938>
//<:shieldsecurity:663750788891541504>
//<:shieldtrooper:663750790791561219>



//<:shocker:663750794142679041>
//<:shuri:663750793765060629>
//<:sif:663750798311948299>
//<:spiderman:663750794092216361>
//<:starlord:663750797447921705>
//<:storm:663750791110197249>
//<:stryfe:663750797871546368>
//<:thanos:663750798324400128>
//<:thing:663750797791592478>
//<:thor:663750798014021632>
//<:ultimus:663750798039056384>
//<:ultron:663750798202634250>


//<:ultronaccelerator:663753510210240525>
//<:ultronfabricator:663753510268960788>
//<:ultronincinerator:663753510080217119>


//<:venom:663750908668018710>
//<:vision:663750896835887110>
//<:vulture:663750909653811221>
//<:warmachine:663750909146300441>
//<:wasp:663750911088394280>
//<:wintersoldier:663750908940779560>
//<:wolverine:663750909062414356>
//<:yondu:663750908957556785>
//<:YOYO:663750909582508053>






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


//COMMANDS LIST
client.on('message', message => {	
if (message.content === '!comm') {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Commands List** \n \n**!away** \nSends away note to captains \n[!away travelling for 2 days] \n(It will remove your message for privacy and inform captains of your circumstances) \n \n**!uniques** \nSends an infographic of uniques tied to characters. \n \n**!blitz** \nShows current blitz predictions, (!blitz2 for orb assault blitz) \n \n**!event [charactername]** \nSends an infographic of lowest reported requirements to beat the legendary event 5/6/7* \n \n**![charactername]** \nSends an infographic of required gear levels for the character GearTier 10/11/12 + 1-13 + T4 recommendations \n \n**-------------CHARACTERS-------------** \n**![charactername] basic** \nSends characters basic information \n**![charactername] special** \nSends characters special information \n**![charactername] ultimate** \nSends characters ultimate information \n**![charactername] passive** \nSends characters passive information \n**![charactername] speed** \nSends characters speed \n**![charactername] unlock** \n Sends characters unlock/farming location \n**![charactername] trait** \nSends characters traits \n**![charactername] kit** \nSends characters full kit \n \n**---------------WAR---------------** \n **!counter [teamname]** \nSends an infographic of war counters \nexample:[!counter aim] \n \n** !counter [teamname+info]** \nSends a detailed guide including text,youtube videos, and winning matchups. \n \n**!submit counter aim** \nSends your text&image to be reviewed by captains. If approved they will be added to the counter infographics. \n**(Image + command must be sent in the same message)** \n \n")
	.setThumbnail('https://i.imgur.com/9eCZztr.png') 
	message.channel.send(exampleEmbed);
}
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

//RAIDS AND WAR COMMANDS (FINISHED)
client.on("message", async message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let alpha = args[0];
let beta = args[0];
let gamma = args[0];
let ultimus = args[0]; 

//ULTIMUS & EVENT RAIDS
const TB1captains = message.guild.roles.find(role => role.name === 'TB1 Captain');
const TB2captains = message.guild.roles.find(role => role.name === 'TB2 Captain');
const TB3captains = message.guild.roles.find(role => role.name === 'TB3 Captain');
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') { //BOT SPAM CHANNEL
if(command === 'raid') {
if(alpha === "alpha" && args[1] === "4"){
if (msg.channel.id === '656230420265828363' || msg.channel.id === '656230665221701682' || msg.channel.id === '656207417033359371' || msg.channel.id === '656216714723459116' || msg.channel.id === '656232194137784333' || msg.channel.id === '656232345371672577' || msg.channel.id === '643229344793231370') {
//                       TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2                           TB3 ALPHA ROOM 
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
if(beta === "beta" && args[1] === "4"){
if (msg.channel.id === '656230420265828363' || msg.channel.id === '656230665221701682' || msg.channel.id === '656207417033359371' || msg.channel.id === '656216714723459116' || msg.channel.id === '656232194137784333' || msg.channel.id === '656232345371672577' || msg.channel.id === '651159388685336587') {
//                       TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2 TB3 room 
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
}
}
if(gamma === "gamma" && args[1] === "4"){
if (msg.channel.id === '656230420265828363' || msg.channel.id === '656230665221701682' || msg.channel.id === '656207417033359371' || msg.channel.id === '656216714723459116' || msg.channel.id === '656232194137784333' || msg.channel.id === '656232345371672577' || msg.channel.id === '655246084418830346') {
//                       TB1 EVENT ROOM#1                           TB1 EVENT ROOM#2                           TB2 EVENT ROOM#1                           TB2 EVENT ROOM#2                           TB3 EVENT ROOM#1                           TB3 EVENT ROOM#2                            TB3 GAMMA ROOM :/
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
}
}
if(ultimus === "ultimus" && args[1] === "6"){
if (message.channel.id === '656244057244303361' || message.channel.id === '643229492650704973') {
//                        TB2 ULT 6 ROOM                             TB3 ULT 6 ROOM                       
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
}
}
if(ultimus === "ultimus" && args[1] === "7"){
if (msg.channel.id === '634155222490415104' || msg.channel.id === '634155347736526848' || msg.channel.id === '646322699869880340') {
//                       TB1 ULT 7 ROOM                             TB2 ULT 7 ROOM                              TB3 ULT 7 ROOM
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
}//END OF RAID COMMAND
}
//***************************EVENT REFRESH ROOMS*************************
//***********************************************************************
if(command === 'refresh') {
if(alpha === "alpha" && args[1] === "4"){
if (message.channel.id === '656230420265828363') { // TB1 EVENT ROOM #1
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
if (message.channel.id === '656230665221701682') { // TB1 EVENT ROOM #2
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
if (message.channel.id === '656207417033359371') { // TB2 EVENT ROOM #1
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
if (message.channel.id === '656216714723459116') { // TB2 EVENT ROOM #2
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
if (message.channel.id === '656232194137784333') { // TB3 EVENT ROOM #1
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
if (message.channel.id === '656232345371672577') { // TB3 EVENT ROOM #2
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
}//END OF ALPHA 4
if(beta === "beta" && args[1] === "4"){
if (message.channel.id === '656230420265828363') { //TB1 EVENT ROOM #1
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
if (message.channel.id === '656230665221701682') { //TB1 EVENT ROOM #2
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
if (message.channel.id === '656207417033359371') { //TB2 EVENT ROOM #1
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
if (message.channel.id === '656216714723459116') { //TB2 EVENT ROOM #2
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
if (message.channel.id === '656232194137784333') { //TB3 EVENT ROOM #1
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
if (message.channel.id === '656232345371672577') { //TB3 EVENT ROOM #2
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
}//END OF BETA 4
if(gamma === "gamma" && args[1] === "4"){
if (message.channel.id === '656230420265828363') { //TB1 EVENT ROOM #1
	message.channel.bulkDelete(1)
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
if (message.channel.id === '656230665221701682') { //TB1 EVENT ROOM #2
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
}
}	
if (message.channel.id === '656207417033359371') { //TB2 EVENT ROOM #1
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
if (message.channel.id === '656216714723459116') { //TB2 EVENT ROOM #2
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
if (message.channel.id === '656232194137784333') { //TB3 EVENT ROOM #1
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
if (message.channel.id === '656232345371672577') { //TB3 EVENT ROOM #2
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
}//END OF GAMMA 4
if(ultimus === "ultimus" && args[1] === "6"){
if (message.channel.id === '656244057244303361'){ //TB2 ULTIMUS 6 ROOM
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
if (message.channel.id === '643229492650704973'){ //TB3 ULTIMUS 6 ROOM
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
}//END OF ULTIMUS 6
if(ultimus === "ultimus" && args[1] === "7"){
if (message.channel.id === '634155222490415104') { //TB1 U7 ROOM
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
	message.delete(510000).then(() => message.channel.send('!raid ultimus 7'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '634155347736526848') { //TB2 U7 ROOM
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
	message.delete(510000).then(() => message.channel.send('!raid ultimus 7'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
if (message.channel.id === '646322699869880340') { //TB3 U7 ROOM
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
	message.delete(510000).then(() => message.channel.send('!raid ultimus 7'));
	};
	if (message.attachments.size > 0) message.delete(5000);
	  })});
}
}//END OF ULTIMUS 7
}//END OF REFRESH COMMAND

//RAID LAUNCHES
if(command === 'u6') {
message.channel.bulkDelete(1)
message.channel.send("@everyone Ultimus 6 Launched")  
}
if(command === 'u7') {
message.channel.bulkDelete(1)
message.channel.send("@everyone Ultimus 7 Launched")  
}
if(command === 'a4') {
message.channel.bulkDelete(1)
message.channel.send("@everyone Alpha 4 Launched")  
}
if(command === 'b4') {
message.channel.bulkDelete(1)
message.channel.send("@everyone Beta 4 Launched")  
}
if(command === 'g4') {
message.channel.bulkDelete(1)
message.channel.send("@everyone Gamma 4 Launched")  
}

//WAR COMMANDS
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') { //WAR CHANNEL
let l = args[0];
let r = args[0];
let f = args[0];
let ffa = args[0]; 
if(command === 'fd1') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 1 - Full Clear")  
}
}
if(command === 'fd2') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 2 - Full Clear")  
}
}
if(command === 'fd3') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Flight Deck 3 - Full Clear")  
}
}
if(command === 'han') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Hangar - Full Clear")  
}
}
if(command === 'eng') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Engineering - Full Clear")  
}
}
if(command === 'bar') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Barracks - Full Clear")  
}
}
if(command === 'rea') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Reactor - Full Clear")  
}
}
if(command === 'arm') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Armory - Full Clear")  
}
}
if(command === 'bri') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Bridge - Full Clear")  
}
}
if(command === 'car') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Cargo - Full Clear")  
}
}
if(command === 'sec') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Security - Full Clear")  
}
}
if(command === 'med') {
if(l === "l"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Left Side")  
}
if(r === "r"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Right Side")  
}
if(f === "f"){
message.channel.bulkDelete(1)
message.channel.send("@everyone Medbay - Full Clear")  
}
}
if(command === 'ffa') {
message.channel.bulkDelete(1)
message.channel.send("@everyone Free For All")  
}
}//IF USER IS IN WAR CHANNELS



}//IF USER HAS ROLES TB1/2/3 CAPTAIN
}); //END OF CLIENT

//PURGE MESSAGES (FINISHED)
client.on("message", async message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const TB1captains = message.guild.roles.find(role => role.name === 'TB1 Captain');
const TB2captains = message.guild.roles.find(role => role.name === 'TB2 Captain');
const TB3captains = message.guild.roles.find(role => role.name === 'TB3 Captain');
if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}}
});

//ADD & REMOVE ROLES (FINISHED)
client.on("message", async message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const TB1captains = message.guild.roles.find(role => role.name === 'TB1 Captain');
const TB2captains = message.guild.roles.find(role => role.name === 'TB2 Captain');
const TB3captains = message.guild.roles.find(role => role.name === 'TB3 Captain');
let recruit = args[0]; 
let tb1 = args[0];
let tb1team1 = args[0];
let tb1team2 = args[0];
let tb1team3 = args[0];
let tb1recruit = args[0];
let tb1recruiter = args[0];
let tb2 = args[0];
let tb2team1 = args[0];
let tb2team2 = args[0];
let tb2team3 = args[0];
let tb2recruit = args[0];
let tb2recruiter = args[0];
let tb3 = args[0];
let tb3team1 = args[0];
let tb3team2 = args[0];
let tb3team3 = args[0];
let tb3recruit = args[0];
let tb3recruiter = args[0];

if(message.member.roles.has(TB1captains.id) || message.member.roles.has(TB2captains.id) || message.member.roles.has(TB3captains.id)) {
if(command === "add") { //ADD ROLES
if(recruit === "recruit"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("476045239719821324");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("RECRUIT Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
//TB1 ROLES
if(tb1 === "tb1"){
const MENTION = message.mentions.members.first();
	//GIVE TB1 REMOVE TB2
if(MENTION){
const TB1 = message.guild.roles.find(role => role.name === 'TB1');
const TB2 = message.guild.roles.find(role => role.name === 'TB2');
const TB3 = message.guild.roles.find(role => role.name === 'TB3');
const aTB1team1 = message.guild.roles.find(role => role.name === 'TB1team1');
const aTB1team2 = message.guild.roles.find(role => role.name === 'TB1team2');
const aTB1team3 = message.guild.roles.find(role => role.name === 'TB1team3');
const aTB2team1 = message.guild.roles.find(role => role.name === 'TB2team1');
const aTB2team2 = message.guild.roles.find(role => role.name === 'TB2team2');
const aTB2team3 = message.guild.roles.find(role => role.name === 'TB2team3');
const aTB3team1 = message.guild.roles.find(role => role.name === 'TB3team1');
const aTB3team2 = message.guild.roles.find(role => role.name === 'TB3team2');
const aTB3team3 = message.guild.roles.find(role => role.name === 'TB3team3');
const RANDOMTEAM = message.guild.roles.find(role => role.name === 'TB1team1');
if(MENTION.roles.has(TB2.id)) {
MENTION.addRole(TB1).catch(console.error);
MENTION.removeRole(TB2).catch(console.error);
MENTION.removeRole(aTB1team1).catch(console.error);
MENTION.removeRole(aTB1team2).catch(console.error);
MENTION.removeRole(aTB1team3).catch(console.error);
MENTION.removeRole(aTB2team1).catch(console.error);
MENTION.removeRole(aTB2team2).catch(console.error);
MENTION.removeRole(aTB2team3).catch(console.error);
MENTION.removeRole(aTB3team1).catch(console.error);
MENTION.removeRole(aTB3team2).catch(console.error);
MENTION.removeRole(aTB3team3).catch(console.error);
message.channel.send("TB2 Removed from " + MENTION + " + TB1 Added.")
} else if(MENTION.roles.has(TB3.id)) { //GIVE TB1 REMOVE TB3
MENTION.addRole(TB1).catch(console.error);
MENTION.removeRole(TB3).catch(console.error);
MENTION.removeRole(aTB1team1).catch(console.error);
MENTION.removeRole(aTB1team2).catch(console.error);
MENTION.removeRole(aTB1team3).catch(console.error);
MENTION.removeRole(aTB2team1).catch(console.error);
MENTION.removeRole(aTB2team2).catch(console.error);
MENTION.removeRole(aTB2team3).catch(console.error);
MENTION.removeRole(aTB3team1).catch(console.error);
MENTION.removeRole(aTB3team2).catch(console.error);
MENTION.removeRole(aTB3team3).catch(console.error);
message.channel.send("TB3 Removed from " + MENTION + " + TB1 Added.")
} else if(MENTION.roles.has(TB1.id)) { // GIVE TB1 WHILST HAVING TB1
message.channel.send("" + MENTION + " Is already in TB1")
} else {
MENTION.addRole(TB1).catch(console.error);
message.channel.send("TB1 added to " + MENTION );
} 
}
}
if(tb1team1 === "tb1team1"){
const MENTION = message.mentions.members.first();
if(MENTION){
const MENTION = message.mentions.members.first();
const TB1 = message.guild.roles.find(role => role.name === 'TB1');
const team1 = message.guild.roles.find(role => role.name === 'TB1team1');
const team2 = message.guild.roles.find(role => role.name === 'TB1team2');
const team3 = message.guild.roles.find(role => role.name === 'TB1team3');
if(MENTION.roles.has(TB1.id) && MENTION.roles.has(team2.id)) {
MENTION.addRole(team1).catch(console.error);
MENTION.removeRole(team2).catch(console.error);
message.channel.send("Team2 Removed from " + MENTION + " + Team1 Added")
} else if(MENTION.roles.has(TB1.id) && MENTION.roles.has(team3.id)) { //GIVE TEAM 1 REMOVE TEAM 3
MENTION.addRole(team1).catch(console.error);
MENTION.removeRole(team3).catch(console.error);
message.channel.send("Team3 Removed from " + MENTION + " + Team1 Added")
} else if(MENTION.roles.has(TB1.id) && MENTION.roles.has(team1.id)) { // GIVE TEAM 1 WHILST HAVING TEAM 1
message.channel.send("" + MENTION + " Is already in TB1team1")
} else {
MENTION.addRole(team1).catch(console.error);
message.channel.send("TB1team1 added to " + MENTION );
}}
}
if(tb1team2 === "tb1team2"){
const MENTION = message.mentions.members.first();
if(MENTION){
const MENTION = message.mentions.members.first();
const TB1 = message.guild.roles.find(role => role.name === 'TB1');
const team1 = message.guild.roles.find(role => role.name === 'TB1team1');
const team2 = message.guild.roles.find(role => role.name === 'TB1team2');
const team3 = message.guild.roles.find(role => role.name === 'TB1team3');
if(MENTION.roles.has(TB1.id) && MENTION.roles.has(team3.id)) {
MENTION.addRole(team2).catch(console.error);
MENTION.removeRole(team3).catch(console.error);
message.channel.send("Team3 Removed from " + MENTION + " + Team2 Added")
} else if(MENTION.roles.has(TB1.id) && MENTION.roles.has(team1.id)) { //GIVE TEAM 2 REMOVE TEAM 1
MENTION.addRole(team2).catch(console.error);
MENTION.removeRole(team1).catch(console.error);
message.channel.send("Team1 Removed from " + MENTION + " + Team2 Added")
} else if(MENTION.roles.has(TB1.id) && MENTION.roles.has(team2.id)) { // GIVE TEAM 2 WHILST HAVING TEAM 2
message.channel.send("" + MENTION + " Is already in TB2team2")
}  else {
MENTION.addRole(team2).catch(console.error);
message.channel.send("TB1team2 added to " + MENTION );
}
}
}
if(tb1team3 === "tb1team3"){
const MENTION = message.mentions.members.first();
if(MENTION){
const MENTION = message.mentions.members.first();
const TB1 = message.guild.roles.find(role => role.name === 'TB1');
const team1 = message.guild.roles.find(role => role.name === 'TB1team1');
const team2 = message.guild.roles.find(role => role.name === 'TB1team2');
const team3 = message.guild.roles.find(role => role.name === 'TB1team3');
if(MENTION.roles.has(TB1.id) && MENTION.roles.has(team2.id)) {
MENTION.addRole(team3).catch(console.error);
MENTION.removeRole(team2).catch(console.error);
message.channel.send("Team2 Removed from " + MENTION + " + Team3 Added")
} else if(MENTION.roles.has(TB1.id) && MENTION.roles.has(team1.id)) { //GIVE TEAM 3 REMOVE TEAM 1
MENTION.addRole(team3).catch(console.error);
MENTION.removeRole(team1).catch(console.error);
message.channel.send("Team1 Removed from " + MENTION + " + Team3 Added")
} else if(MENTION.roles.has(TB1.id) && MENTION.roles.has(team3.id)) { // GIVE TEAM 3 WHILST HAVING TEAM 3
message.channel.send("" + MENTION + " Is already in TB1team3")
} else {
MENTION.addRole(team3).catch(console.error);
message.channel.send("TB1team3 added to " + MENTION );
}
}
}
if(tb1recruit === "tb1recruit"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668741770182677");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb1recruit Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(tb1recruiter === "tb1recruiter"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("580453797554552832");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb1recruiter Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
//TB2 ROLES
if(tb2 === "tb2"){
const MENTION = message.mentions.members.first();
	//GIVE TB2 REMOVE TB1
if(MENTION){
const MENTION = message.mentions.members.first();
const TB1 = message.guild.roles.find(role => role.name === 'TB1');
const TB2 = message.guild.roles.find(role => role.name === 'TB2');
const TB3 = message.guild.roles.find(role => role.name === 'TB3');
const RANDOMTEAM = message.guild.roles.find(role => role.name === 'TB2team1');
const aTB1team1 = message.guild.roles.find(role => role.name === 'TB1team1');
const aTB1team2 = message.guild.roles.find(role => role.name === 'TB1team2');
const aTB1team3 = message.guild.roles.find(role => role.name === 'TB1team3');
const aTB2team1 = message.guild.roles.find(role => role.name === 'TB2team1');
const aTB2team2 = message.guild.roles.find(role => role.name === 'TB2team2');
const aTB2team3 = message.guild.roles.find(role => role.name === 'TB2team3');
const aTB3team1 = message.guild.roles.find(role => role.name === 'TB3team1');
const aTB3team2 = message.guild.roles.find(role => role.name === 'TB3team2');
const aTB3team3 = message.guild.roles.find(role => role.name === 'TB3team3');
if(MENTION.roles.has(TB1.id)) {
MENTION.addRole(TB2).catch(console.error);
MENTION.removeRole(TB1).catch(console.error);
MENTION.removeRole(aTB1team1).catch(console.error);
MENTION.removeRole(aTB1team2).catch(console.error);
MENTION.removeRole(aTB1team3).catch(console.error);
MENTION.removeRole(aTB2team1).catch(console.error);
MENTION.removeRole(aTB2team2).catch(console.error);
MENTION.removeRole(aTB2team3).catch(console.error);
MENTION.removeRole(aTB3team1).catch(console.error);
MENTION.removeRole(aTB3team2).catch(console.error);
MENTION.removeRole(aTB3team3).catch(console.error);
message.channel.send("TB1 Removed from " + MENTION + " TB2 added.")
} else if(MENTION.roles.has(TB3.id)) { //GIVE TB2 REMOVE TB3
MENTION.addRole(TB2).catch(console.error);
MENTION.removeRole(TB3).catch(console.error);
MENTION.removeRole(aTB1team1).catch(console.error);
MENTION.removeRole(aTB1team2).catch(console.error);
MENTION.removeRole(aTB1team3).catch(console.error);
MENTION.removeRole(aTB2team1).catch(console.error);
MENTION.removeRole(aTB2team2).catch(console.error);
MENTION.removeRole(aTB2team3).catch(console.error);
MENTION.removeRole(aTB3team1).catch(console.error);
MENTION.removeRole(aTB3team2).catch(console.error);
MENTION.removeRole(aTB3team3).catch(console.error);
message.channel.send("TB3 Removed from " + MENTION + " + TB2 Added.")
} else if(MENTION.roles.has(TB2.id)) { // GIVE TB2 WHILST HAVING TB2
message.channel.send("" + MENTION + " Is already in TB2")
} else {
MENTION.addRole(TB2).catch(console.error);
message.channel.send("TB2 added to " + MENTION );
}
}
}
if(tb2team1 === "tb2team1"){
const MENTION = message.mentions.members.first();
if(MENTION){
const MENTION = message.mentions.members.first();
const TB2 = message.guild.roles.find(role => role.name === 'TB2');
const team1 = message.guild.roles.find(role => role.name === 'TB2team1');
const team2 = message.guild.roles.find(role => role.name === 'TB2team2');
const team3 = message.guild.roles.find(role => role.name === 'TB2team3');
if(MENTION.roles.has(TB2.id) && MENTION.roles.has(team2.id)) {
MENTION.addRole(team1).catch(console.error);
MENTION.removeRole(team2).catch(console.error);
message.channel.send("Team2 Removed from " + MENTION + " + Team1 Added")
} else if(MENTION.roles.has(TB2.id) && MENTION.roles.has(team3.id)) { //GIVE TEAM 1 REMOVE TEAM 3
MENTION.addRole(team1).catch(console.error);
MENTION.removeRole(team3).catch(console.error);
message.channel.send("Team3 Removed from " + MENTION + " + Team1 Added")
} else if(MENTION.roles.has(TB2.id) && MENTION.roles.has(team1.id)) { // GIVE TEAM 1 WHILST HAVING TEAM 1
message.channel.send("" + MENTION + " Is already in TB2team1")
} else {
MENTION.addRole(team1).catch(console.error);
message.channel.send("TB2team1 added to " + MENTION );
}
}
}
if(tb2team2 === "tb2team2"){
const MENTION = message.mentions.members.first();
if(MENTION){
const MENTION = message.mentions.members.first();
const TB2 = message.guild.roles.find(role => role.name === 'TB2');
const team1 = message.guild.roles.find(role => role.name === 'TB2team1');
const team2 = message.guild.roles.find(role => role.name === 'TB2team2');
const team3 = message.guild.roles.find(role => role.name === 'TB2team3');
if(MENTION.roles.has(TB2.id) && MENTION.roles.has(team3.id)) {
MENTION.addRole(team2).catch(console.error);
MENTION.removeRole(team3).catch(console.error);
message.channel.send("Team3 Removed from " + MENTION + " + Team2 Added")
} else if(MENTION.roles.has(TB2.id) && MENTION.roles.has(team1.id)) { //GIVE TEAM 2 REMOVE TEAM 1
MENTION.addRole(team2).catch(console.error);
MENTION.removeRole(team1).catch(console.error);
message.channel.send("Team1 Removed from " + MENTION + " + Team2 Added")
} else if(MENTION.roles.has(TB2.id) && MENTION.roles.has(team2.id)) { // GIVE TEAM 2 WHILST HAVING TEAM 2
message.channel.send("" + MENTION + " Is already in TB2team2")
} else {
MENTION.addRole(team2).catch(console.error);
message.channel.send("TB2team2 added to " + MENTION );
}
}
}
if(tb2team3 === "tb2team3"){
const MENTION = message.mentions.members.first();
if(MENTION){
const MENTION = message.mentions.members.first();
const TB2 = message.guild.roles.find(role => role.name === 'TB2');
const team1 = message.guild.roles.find(role => role.name === 'TB2team1');
const team2 = message.guild.roles.find(role => role.name === 'TB2team2');
const team3 = message.guild.roles.find(role => role.name === 'TB2team3');
if(MENTION.roles.has(TB2.id) && MENTION.roles.has(team2.id)) {
MENTION.addRole(team3).catch(console.error);
MENTION.removeRole(team2).catch(console.error);
message.channel.send("Team2 Removed from " + MENTION + " + Team3 Added")
} else if(MENTION.roles.has(TB2.id) && MENTION.roles.has(team1.id)) { //GIVE TEAM 3 REMOVE TEAM 1
MENTION.addRole(team3).catch(console.error);
MENTION.removeRole(team1).catch(console.error);
message.channel.send("Team1 Removed from " + MENTION + " + Team3 Added")
} else if(MENTION.roles.has(TB2.id) && MENTION.roles.has(team3.id)) { // GIVE TEAM 3 WHILST HAVING TEAM 3
message.channel.send("" + MENTION + " Is already in TB2team3")
} else {
MENTION.addRole(team3).catch(console.error);
message.channel.send("TB2team3 added to " + MENTION );
}
}
}
if(tb2recruit === "tb2recruit"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668979008405504");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb2recruit Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(tb2recruiter === "tb2recruiter"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("580453859650961408");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb2recruiter Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
//TB3 ROLES
if(tb3 === "tb3"){
const MENTION = message.mentions.members.first();
	//GIVE TB3 REMOVE TB2
if(MENTION){
const MENTION = message.mentions.members.first();
const TB1 = message.guild.roles.find(role => role.name === 'TB1');
const TB3 = message.guild.roles.find(role => role.name === 'TB3');
const TB2 = message.guild.roles.find(role => role.name === 'TB2');
const RANDOMTEAM = message.guild.roles.find(role => role.name === 'TB3team1');
const aTB1team1 = message.guild.roles.find(role => role.name === 'TB1team1');
const aTB1team2 = message.guild.roles.find(role => role.name === 'TB1team2');
const aTB1team3 = message.guild.roles.find(role => role.name === 'TB1team3');
const aTB2team1 = message.guild.roles.find(role => role.name === 'TB2team1');
const aTB2team2 = message.guild.roles.find(role => role.name === 'TB2team2');
const aTB2team3 = message.guild.roles.find(role => role.name === 'TB2team3');
const aTB3team1 = message.guild.roles.find(role => role.name === 'TB3team1');
const aTB3team2 = message.guild.roles.find(role => role.name === 'TB3team2');
const aTB3team3 = message.guild.roles.find(role => role.name === 'TB3team3');
if(MENTION.roles.has(TB2.id)) {
MENTION.addRole(TB3).catch(console.error);
MENTION.removeRole(TB2).catch(console.error);
MENTION.removeRole(aTB1team1).catch(console.error);
MENTION.removeRole(aTB1team2).catch(console.error);
MENTION.removeRole(aTB1team3).catch(console.error);
MENTION.removeRole(aTB2team1).catch(console.error);
MENTION.removeRole(aTB2team2).catch(console.error);
MENTION.removeRole(aTB2team3).catch(console.error);
MENTION.removeRole(aTB3team1).catch(console.error);
MENTION.removeRole(aTB3team2).catch(console.error);
MENTION.removeRole(aTB3team3).catch(console.error);
message.channel.send("TB2 Removed from " + MENTION + " + TB3 Added.")
} else if(MENTION.roles.has(TB1.id)) { //GIVE TB3 REMOVE TB1
MENTION.addRole(TB3).catch(console.error);
MENTION.removeRole(TB1).catch(console.error);
MENTION.removeRole(aTB1team1).catch(console.error);
MENTION.removeRole(aTB1team2).catch(console.error);
MENTION.removeRole(aTB1team3).catch(console.error);
MENTION.removeRole(aTB2team1).catch(console.error);
MENTION.removeRole(aTB2team2).catch(console.error);
MENTION.removeRole(aTB2team3).catch(console.error);
MENTION.removeRole(aTB3team1).catch(console.error);
MENTION.removeRole(aTB3team2).catch(console.error);
MENTION.removeRole(aTB3team3).catch(console.error);
message.channel.send("TB1 Removed from " + MENTION + " + TB3 Added.")

} else if(MENTION.roles.has(TB3.id)) { // GIVE TB3 WHILST HAVING TB3
//console.log("Reached has role");
message.channel.send("" + MENTION + " Is already in TB3")  //if(message.content && message.content.toLowerCase() === 'xd') { 
} else {
MENTION.addRole(TB3).catch(console.error);
message.channel.send("TB3 added to " + MENTION );
}
}
}
if(tb3team1 === "tb3team1"){
const MENTION = message.mentions.members.first();
if(MENTION){
const MENTION = message.mentions.members.first();
const TB3 = message.guild.roles.find(role => role.name === 'TB3');
const team1 = message.guild.roles.find(role => role.name === 'TB3team1');
const team2 = message.guild.roles.find(role => role.name === 'TB3team2');
const team3 = message.guild.roles.find(role => role.name === 'TB3team3');
if(MENTION.roles.has(TB3.id) && MENTION.roles.has(team2.id)) {
MENTION.addRole(team1).catch(console.error);
MENTION.removeRole(team2).catch(console.error);
message.channel.send("Team2 Removed from " + MENTION + " + Team1 Added")
} else if(MENTION.roles.has(TB3.id) && MENTION.roles.has(team3.id)) { //GIVE TEAM 1 REMOVE TEAM 3
MENTION.addRole(team1).catch(console.error);
MENTION.removeRole(team3).catch(console.error);
message.channel.send("Team3 Removed from " + MENTION + " + Team1 Added")
} else if(MENTION.roles.has(TB3.id) && MENTION.roles.has(team1.id)) { // GIVE Team1 WHILST HAVING team1
//console.log("Reached has role");
message.channel.send("" + MENTION + " Is already in TB3team1")
} else {
MENTION.addRole(team1).catch(console.error);
message.channel.send("TB3team1 added to " + MENTION );
}
}
}
if(tb3team2 === "tb3team2"){
const MENTION = message.mentions.members.first();
if(MENTION){
const MENTION = message.mentions.members.first();
const TB3 = message.guild.roles.find(role => role.name === 'TB3');
const team1 = message.guild.roles.find(role => role.name === 'TB3team1');
const team2 = message.guild.roles.find(role => role.name === 'TB3team2');
const team3 = message.guild.roles.find(role => role.name === 'TB3team3');
if(MENTION.roles.has(TB3.id) && MENTION.roles.has(team3.id)) {
MENTION.addRole(team2).catch(console.error);
MENTION.removeRole(team3).catch(console.error);
message.channel.send("Team3 Removed from " + MENTION + " + Team2 Added")
} else if(MENTION.roles.has(TB3.id) && MENTION.roles.has(team1.id)) { //GIVE TEAM 2 REMOVE TEAM 1
MENTION.addRole(team2).catch(console.error);
MENTION.removeRole(team1).catch(console.error);
message.channel.send("Team1 Removed from " + MENTION + " + Team2 Added")
} else if(MENTION.roles.has(TB3.id) && MENTION.roles.has(team2.id)) { // GIVE TEAM 2 WHILST HAVING TEAM 2
message.channel.send("" + MENTION + " Is already in TB3team2")
} else {
MENTION.addRole(team2).catch(console.error);
message.channel.send("TB3team2 added to " + MENTION );
}
}
}
if(tb3team3 === "tb3team3"){
const MENTION = message.mentions.members.first();
if(MENTION){
const MENTION = message.mentions.members.first();
const TB3 = message.guild.roles.find(role => role.name === 'TB3');
const team1 = message.guild.roles.find(role => role.name === 'TB3team1');
const team2 = message.guild.roles.find(role => role.name === 'TB3team2');
const team3 = message.guild.roles.find(role => role.name === 'TB3team3');
if(MENTION.roles.has(TB3.id) && MENTION.roles.has(team2.id)) {
MENTION.addRole(team3).catch(console.error);
MENTION.removeRole(team2).catch(console.error);
message.channel.send("Team2 Removed from " + MENTION + " + Team3 Added")
} else if(MENTION.roles.has(TB3.id) && MENTION.roles.has(team1.id)) { //GIVE TEAM 3 REMOVE TEAM 1
MENTION.addRole(team3).catch(console.error);
MENTION.removeRole(team1).catch(console.error);
message.channel.send("Team1 Removed from " + MENTION + " + Team3 Added")
} else if(MENTION.roles.has(TB3.id) && MENTION.roles.has(team3.id)) { // GIVE TEAM 3 WHILST HAVING TEAM 3
message.channel.send("" + MENTION + " Is already in TB3team3")
} else {
MENTION.addRole(team3).catch(console.error);
message.channel.send("TB3team3 added to " + MENTION );
}
}
}
if(tb3recruit === "tb3recruit"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668979008405504");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb2recruit Role was GIVEN by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(tb3recruiter === "tb3recruiter"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643176503542022212");
userToModify.addRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb3recruiter Role was GIVEN to " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
}//END OF ADD COMMAND
if(command === "remove") { //REMOVE ROLES
if(recruit === "recruit"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("476045239719821324"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("RECRUIT Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(tb1recruit === "tb1recruit"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668741770182677"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb1recruit Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
} 
if(tb1recruiter === "tb1recruiter"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("580453797554552832");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb1recruiter Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(tb2recruit === "tb2recruit"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("575668979008405504"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb2recruit Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(tb2recruiter === "tb2recruiter"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("580453859650961408");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb2recruiter Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(tb3recruit === "tb3recruit"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643128934187139072"); 
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb3recruit Role was REMOVED by " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}
if(tb3recruiter === "tb3recruiter"){
let userToModify = message.mentions.members.first();
let roleToAdd = message.guild.roles.get("643176503542022212");
userToModify.removeRole(roleToAdd).catch(console.error);
message.guild.channels.find(c => c.name === 'leader-logs').send("tb3recruiter Role was REMOVED from " + userToModify + " by " + message.author);
message.channel.bulkDelete(1)
}


}//END OF REMOVE COMMAND

}//IF USER HAS CAPTAINS PRIVILEDGE
});//END OF CLIENT

//POLLS (FINISHED)
client.on('message', message =>{
let args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
	switch(args[0]){
		
		case "poll1":
			if(!args[1]){
			break;
			}
			
			let msgArgs = args.slice(1).join(" ");
			message.channel.bulkDelete(1)
			message.channel.send(msgArgs).then(messageReaction => {
			messageReaction.react("👍");
			});
			
		break;
		case "poll2":	
			if(!args[1]){
				break;
			}
			let msgArgs1 = args.slice(1).join(" ");
			message.channel.bulkDelete(1)
			message.channel.send(msgArgs1).then(async messageReaction => {
				await messageReaction.react("👍");
				await messageReaction.react("👎");

			});	
		break;
		case "poll3":		
			if(!args[1]){
				break;
			}
			let msgArgs2 = args.slice(1).join(" ");
			message.channel.bulkDelete(1).catch(O_o=>{}); 
			message.channel.send(msgArgs2).then(async messageReaction => {
				await messageReaction.react("1️⃣");
				await messageReaction.react("2️⃣");
				await messageReaction.react("3️⃣");

			});	
		break;
		case "poll4":		
			if(!args[1]){
				break;
			}
			let msgArgs3 = args.slice(1).join(" ");
			message.channel.bulkDelete(1)
			message.channel.send(msgArgs3).then(async messageReaction => {
				await messageReaction.react("1️⃣");
				await messageReaction.react("2️⃣");
				await messageReaction.react("3️⃣"); 
				await messageReaction.react("4️⃣"); 
			});	
		break;
	}
	let command = args.shift().toLowerCase();
	if(command === 'poll') {
	let Embed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle("Initiate Poll")
	.setDescription("!poll1 to launch a 1 responce poll 👍 \n!poll2 to launch a 2 responce poll 👍,👎 \n!poll3 to launch a 3 responce poll 1️⃣,2️⃣,3️⃣\n!poll4 to launch a 4 responce poll 1️⃣,2️⃣,3️⃣,4️⃣");	
	message.channel.send(Embed);
}
});


//*********TRAITS***********
client.on("message", message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

//EVERY CHARACTER
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') { //bot spam channel
if(command === 'trait') {





//aim global protector - //aim protector global //global aim protector  //global protector aim   //protector aim global   //protector global aim
if(args[0] === "aim" && args[1] === "global" & args[2] === "protector" || args[0] === "aim" && args[1] === "protector" & args[2] === "global" || args[0] === "global" && args[1] === "aim" & args[2] === "protector" || args[0] === "global" && args[1] === "protector" & args[2] === "aim" || args[0] === "protector" && args[1] === "aim" & args[2] === "global" || args[0] === "protector" && args[1] === "global" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Global, Protector** \n \n<:aimsecurity:663749977071157283> Aim Security ")
message.channel.send(exampleEmbed);
//aim global minion - //aim minion global //global aim minion  //global minion aim   //minion aim global   //minion global aim
} else if(args[0] === "aim" && args[1] === "global" & args[2] === "minion" || args[0] === "aim" && args[1] === "minion" & args[2] === "global" || args[0] === "global" && args[1] === "aim" & args[2] === "minion" || args[0] === "global" && args[1] === "minion" & args[2] === "aim" || args[0] === "minion" && args[1] === "aim" & args[2] === "global" || args[0] === "minion" && args[1] === "global" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Global, Minion** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:aimresearcher:663749975200759829> Aim Researcher \n<:aimsecurity:663749977071157283> Aim Security ")
message.channel.send(exampleEmbed);
//aim controller villain - //aim villain controller //controller aim villain  //controller villain aim   //villain aim controller   //villain controller aim
} else if(args[0] === "aim" && args[1] === "controller" & args[2] === "villain" || args[0] === "aim" && args[1] === "villain" & args[2] === "controller" || args[0] === "controller" && args[1] === "aim" & args[2] === "villain" || args[0] === "controller" && args[1] === "villain" & args[2] === "aim" || args[0] === "villain" && args[1] === "aim" & args[2] === "controller" || args[0] === "villain" && args[1] === "controller" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Controller, Villain** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:graviton:663749985417953300> Graviton")
message.channel.send(exampleEmbed);
//aim controller minion - //aim minion controller //controller aim minion  //controller minion aim   //minion aim controller   //minion controller aim
} else if(args[0] === "aim" && args[1] === "controller" & args[2] === "minion" || args[0] === "aim" && args[1] === "minion" & args[2] === "controller" || args[0] === "controller" && args[1] === "aim" & args[2] === "minion" || args[0] === "controller" && args[1] === "minion" & args[2] === "aim" || args[0] === "minion" && args[1] === "aim" & args[2] === "controller" || args[0] === "minion" && args[1] === "controller" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Controller, Minion** \n \n<:aiminfector:663749979441070090> Aim Infector")
message.channel.send(exampleEmbed);
//aim controller global - //aim global controller //controller aim global  //controller global aim   //global aim controller   //global controller aim
} else if(args[0] === "aim" && args[1] === "controller" & args[2] === "global" || args[0] === "aim" && args[1] === "global" & args[2] === "controller" || args[0] === "controller" && args[1] === "aim" & args[2] === "global" || args[0] === "controller" && args[1] === "global" & args[2] === "aim" || args[0] === "global" && args[1] === "aim" & args[2] === "controller" || args[0] === "global" && args[1] === "controller" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Controller, Global** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:graviton:663749985417953300> Graviton")
message.channel.send(exampleEmbed);
//aim brawler villain - //aim villain brawler //brawler aim villain  //brawler villain aim   //villain aim brawler   //villain brawler aim
} else if(args[0] === "aim" && args[1] === "brawler" & args[2] === "villain" || args[0] === "aim" && args[1] === "villain" & args[2] === "brawler" || args[0] === "brawler" && args[1] === "aim" & args[2] === "villain" || args[0] === "brawler" && args[1] === "villain" & args[2] === "aim" || args[0] === "villain" && args[1] === "aim" & args[2] === "brawler" || args[0] === "villain" && args[1] === "brawler" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Brawler, Villain** \n \n<:aimmonstrosity:663749978639827004> Aim Monstrosity")
message.channel.send(exampleEmbed);
//aim brawler minion - //aim minion brawler //brawler aim minion  //brawler minion aim   //minion aim brawler   //minion brawler aim
} else if(args[0] === "aim" && args[1] === "brawler" & args[2] === "minion" || args[0] === "aim" && args[1] === "minion" & args[2] === "brawler" || args[0] === "brawler" && args[1] === "aim" & args[2] === "minion" || args[0] === "brawler" && args[1] === "minion" & args[2] === "aim" || args[0] === "minion" && args[1] === "aim" & args[2] === "brawler" || args[0] === "minion" && args[1] === "brawler" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Brawler, Minion** \n \n<:aimmonstrosity:663749978639827004> Aim Monstrosity")
message.channel.send(exampleEmbed);
//aim brawler global - //aim global brawler //brawler aim global  //brawler global aim   //global aim brawler   //global brawler aim
} else if(args[0] === "aim" && args[1] === "brawler" & args[2] === "global" || args[0] === "aim" && args[1] === "global" & args[2] === "brawler" || args[0] === "brawler" && args[1] === "aim" & args[2] === "global" || args[0] === "brawler" && args[1] === "global" & args[2] === "aim" || args[0] === "global" && args[1] === "aim" & args[2] === "brawler" || args[0] === "global" && args[1] === "brawler" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Brawler, Global** \n \n<:aimmonstrosity:663749978639827004> Aim Monstrosity")
message.channel.send(exampleEmbed);
//aim blaster villain - //aim villain blaster //blaster aim villain  //blaster villain aim   //villain aim blaster   //villain blaster aim
} else if(args[0] === "aim" && args[1] === "blaster" & args[2] === "villain" || args[0] === "aim" && args[1] === "villain" & args[2] === "blaster" || args[0] === "blaster" && args[1] === "aim" & args[2] === "villain" || args[0] === "blaster" && args[1] === "villain" & args[2] === "aim" || args[0] === "villain" && args[1] === "aim" & args[2] === "blaster" || args[0] === "villain" && args[1] === "blaster" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Blaster, Villain** \n \n<:aimassault:663749974869147648> Aim Assaulter")
message.channel.send(exampleEmbed);
//aim blaster tech - //aim tech blaster //blaster aim tech  //blaster tech aim   //tech aim blaster   //tech blaster aim
} else if(args[0] === "aim" && args[1] === "blaster" & args[2] === "tech" || args[0] === "aim" && args[1] === "tech" & args[2] === "blaster" || args[0] === "blaster" && args[1] === "aim" & args[2] === "tech" || args[0] === "blaster" && args[1] === "tech" & args[2] === "aim" || args[0] === "tech" && args[1] === "aim" & args[2] === "blaster" || args[0] === "tech" && args[1] === "blaster" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Blaster, Tech** \n \n<:aimassault:663749974869147648> Aim Assaulter")
message.channel.send(exampleEmbed);
//aim blaster minion - //aim minion blaster //blaster aim minion  //blaster minion aim   //minion aim blaster   //minion blaster aim
} else if(args[0] === "aim" && args[1] === "blaster" & args[2] === "minion" || args[0] === "aim" && args[1] === "minion" & args[2] === "blaster" || args[0] === "blaster" && args[1] === "aim" & args[2] === "minion" || args[0] === "blaster" && args[1] === "minion" & args[2] === "aim" || args[0] === "minion" && args[1] === "aim" & args[2] === "blaster" || args[0] === "minion" && args[1] === "blaster" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Blaster, Minion** \n \n<:aimassault:663749974869147648> Aim Assaulter")
message.channel.send(exampleEmbed);
//aim blaster global - //aim global blaster //blaster aim global  //blaster global aim   //global aim blaster   //global blaster aim
} else if(args[0] === "aim" && args[1] === "blaster" & args[2] === "global" || args[0] === "aim" && args[1] === "global" & args[2] === "blaster" || args[0] === "blaster" && args[1] === "aim" & args[2] === "global" || args[0] === "blaster" && args[1] === "global" & args[2] === "aim" || args[0] === "global" && args[1] === "aim" & args[2] === "blaster" || args[0] === "global" && args[1] === "blaster" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Blaster, Global** \n \n<:aimassault:663749974869147648> Aim Assaulter")
message.channel.send(exampleEmbed);
//aim bio brawler - //aim brawler bio //bio aim brawler  //bio brawler aim   //brawler aim bio   //brawler bio aim
} else if(args[0] === "aim" && args[1] === "bio" & args[2] === "brawler" || args[0] === "aim" && args[1] === "brawler" & args[2] === "bio" || args[0] === "bio" && args[1] === "aim" & args[2] === "brawler" || args[0] === "bio" && args[1] === "brawler" & args[2] === "aim" || args[0] === "brawler" && args[1] === "aim" & args[2] === "bio" || args[0] === "brawler" && args[1] === "bio" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Bio, Brawler** \n \n<:aimmonstrosity:663749978639827004> Aim Monstrosity")
message.channel.send(exampleEmbed);
//aim bio controller - //aim controller bio	- //bio aim controller - //bio controller aim - //controller aim bio - //controller bio aim
} else if(args[0] === "aim" && args[1] === "bio" & args[2] === "controller" || args[0] === "aim" && args[1] === "controller" & args[2] === "bio" || args[0] === "bio" && args[1] === "aim" & args[2] === "controller" || args[0] === "bio" && args[1] === "controller" & args[2] === "aim" || args[0] === "controller" && args[1] === "aim" & args[2] === "bio" || args[0] === "controller" && args[1] === "bio" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Bio, Controller** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:graviton:663749985417953300> Graviton")
message.channel.send(exampleEmbed);
//aim bio global - //aim global bio	- //bio aim global - //bio global aim - //global aim bio - //global bio aim
} else if(args[0] === "aim" && args[1] === "bio" & args[2] === "global" || args[0] === "aim" && args[1] === "global" & args[2] === "bio" || args[0] === "bio" && args[1] === "aim" & args[2] === "global" || args[0] === "bio" && args[1] === "global" & args[2] === "aim" || args[0] === "global" && args[1] === "aim" & args[2] === "bio" || args[0] === "global" && args[1] === "bio" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Bio, Global** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:graviton:663749985417953300> Graviton")
message.channel.send(exampleEmbed);
//aim bio minion - //aim minion bio	- //bio aim minion - //bio minion aim - //minion aim bio - //minion bio aim
} else if(args[0] === "aim" && args[1] === "bio" & args[2] === "minion" || args[0] === "aim" && args[1] === "minion" & args[2] === "bio" || args[0] === "bio" && args[1] === "aim" & args[2] === "minion" || args[0] === "bio" && args[1] === "minion" & args[2] === "aim" || args[0] === "minion" && args[1] === "aim" & args[2] === "bio" || args[0] === "minion" && args[1] === "bio" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Bio, Minion** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity")
message.channel.send(exampleEmbed);
//aim bio villain - //aim villain bio	- //bio aim villain - //bio villain aim - //villain aim bio - //villain bio aim
} else if(args[0] === "aim" && args[1] === "bio" & args[2] === "villain" || args[0] === "aim" && args[1] === "villain" & args[2] === "bio" || args[0] === "bio" && args[1] === "aim" & args[2] === "villain" || args[0] === "bio" && args[1] === "villain" & args[2] === "aim" || args[0] === "villain" && args[1] === "aim" & args[2] === "bio" || args[0] === "villain" && args[1] === "bio" & args[2] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Bio, Villain** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:graviton:663749985417953300> Graviton")
message.channel.send(exampleEmbed);
//****DOUBLES BELOW HERE****
//aim blaster - //blaster aim
} else if(args[0] === "aim" && args[1] === "blaster" || args[0] === "blaster" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Blaster** \n \n<:aimassault:663749974869147648> Aim Assaulter")
message.channel.send(exampleEmbed);
//aim brawler - //brawler aim
} else if(args[0] === "aim" && args[1] === "brawler" || args[0] === "brawler" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Brawler** \n \n<:aimmonstrosity:663749978639827004> Aim Monstrosity")
message.channel.send(exampleEmbed);
//aim controller - //controller aim
}  else if(args[0] === "aim" && args[1] === "controller" || args[0] === "controller" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Controller** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:graviton:663749985417953300> Graviton")
message.channel.send(exampleEmbed);
//aim global - //global aim
}  else if(args[0] === "aim" && args[1] === "global" || args[0] === "global" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Global** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:aimresearcher:663749975200759829> Aim Researcher \n<:aimsecurity:663749977071157283> Aim Security \n<:graviton:663749985417953300> Graviton \n<:scientistsupreme:663751613256826910> Scientist Supreme")
message.channel.send(exampleEmbed);
//aim minion - //minion aim
}  else if(args[0] === "aim" && args[1] === "minion" || args[0] === "minion" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Minion** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:aimresearcher:663749975200759829> Aim Researcher \n<:aimsecurity:663749977071157283> Aim Security")
message.channel.send(exampleEmbed);
//aim protector - //protector aim
}  else if(args[0] === "aim" && args[1] === "protector" || args[0] === "protector" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Protector** \n \n<:aimsecurity:663749977071157283> Aim Security")
message.channel.send(exampleEmbed);
//aim skill - //skill aim
}  else if(args[0] === "aim" && args[1] === "skill" || args[0] === "skill" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Skill** \n \n<:aimresearcher:663749975200759829> Aim Researcher")
message.channel.send(exampleEmbed);
//aim support - //support aim
}  else if(args[0] === "aim" && args[1] === "support" || args[0] === "support" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Support** \n \n<:aimresearcher:663749975200759829> Aim Researcher \n<:scientistsupreme:663751613256826910> Scientist Supreme")
message.channel.send(exampleEmbed);
//aim tech - //tech aim
}  else if(args[0] === "aim" && args[1] === "tech" || args[0] === "tech" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Tech** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aimsecurity:663749977071157283> Aim Security \n<:scientistsupreme:663751613256826910> Scientist Supreme")
message.channel.send(exampleEmbed);
//aim villain - //villain aim
}  else if(args[0] === "aim" && args[1] === "villain" || args[0] === "villain" && args[1] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Villain** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:aimresearcher:663749975200759829> Aim Researcher \n<:aimsecurity:663749977071157283> Aim Security \n<:graviton:663749985417953300> Graviton \n<:scientistsupreme:663751613256826910> Scientist Supreme")
message.channel.send(exampleEmbed);
//aim bio - //bio aim
} else if(args[0] === "aim" && args[1] === "bio" || args[0] === "bio" && args[1] === "aim"){
const exampleEmbed1 = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim, Bio** \n \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:graviton:663749985417953300> Graviton")
message.channel.send(exampleEmbed1);
//****SINGLES BELOW HERE****
} else if(args[0] === "aim"){
const exampleEmbed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("**Aim** \n \n<:aimassault:663749974869147648> Aim Assaulter \n<:aiminfector:663749979441070090> Aim Infector \n<:aimmonstrosity:663749978639827004> Aim Monstrosity \n<:aimresearcher:663749975200759829> Aim Researcher \n<:aimsecurity:663749977071157283> Aim Security \n<:graviton:663749985417953300> Graviton \n<:scientistsupreme:663751613256826910> Scientist Supreme")
message.channel.send(exampleEmbed);
}


}//command
}//channel ID
});


client.login(process.env.TOKEN);
