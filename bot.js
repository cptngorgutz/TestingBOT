client.on("message", message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let kit = args[0]; 
let speed = args.slice(1).join(' ')
let unlock = args.slice(1).join(' ')

if (message.content.startsWith(config.prefix + "daredevil")) {
if (args[0] === "kit") {
const Embed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("kit")
message.channel.send(Embed);
}

if (args === "speed"){
const Embed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("speed")
message.channel.send(Embed);
}

if (args === "unlock"){
const Embed = new Discord.RichEmbed()
.setColor('#0099ff')
.setDescription("unlock")
message.channel.send(Embed);
}

}
});
