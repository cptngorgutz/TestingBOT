const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


//*********CHARACTERS + TEAMS*********** (NOT FINISHED)
//example: !ironman speed || !asgardians)
client.on("message", async message => {
if (!message.content.startsWith(config.prefix) || message.author.bot) return;
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

if(command === 'canvas'){
const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(200, 200)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
ctx.font = '30px Impact'
ctx.rotate(0.1)
ctx.fillText('Awesome!', 50, 100)

// Draw line under text
var text = ctx.measureText('Awesome!')
ctx.strokeStyle = 'rgba(0,0,0,0.5)'
ctx.beginPath()
ctx.lineTo(50, 102)
ctx.lineTo(50 + text.width, 102)
ctx.stroke()

// Draw cat with lime helmet
loadImage('lime-cat.jpg').then((image) => {
  ctx.drawImage(image, 50, 0, 70, 70)

  message.channel.send('<img src="' + canvas.toDataURL() + '" />');
})

}

});


client.login(process.env.TOKEN);