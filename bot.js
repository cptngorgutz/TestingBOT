const Discord = require('discord.js');
const client = new Discord.Client();

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
	channel.send(`Welcome to the server, ${member}!`);
});


client.on('message', message => {
	if (message.content === '!join') {
		client.emit('guildMemberAdd', message.member);
	}
});


client.login(process.env.TOKEN);
