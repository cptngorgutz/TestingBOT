const Discord = require('discord.js');
const Canvas = require('canvas');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!join') {
		client.emit('guildMemberAdd', message.member);
	}
});


client.login(process.env.TOKEN);
