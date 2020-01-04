client.on('message', msg => {
if (msg.content === '!unlock shuri') {
	msg.channel.bulkDelete(1)
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("__**Shuri Unlock**__ \n<:staron:662797309205151744><:staron:662797309205151744><:staron:662797309205151744><:staron:662797309205151744><:staron:662797309205151744><:staroff:662797308835921935><:staroff:662797308835921935> \n \n**Spiderverse** \n‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎ ‎‎ ‎‎<:heimdall:661370019325935666>‏‏‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎ ‎‎ ‎‎<:heimdall:661370019325935666>‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎ ‎‎ ‎‎<:heimdall:661370019325935666>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‎ ‎‎‎<:heimdall:661370019325935666>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎ ‎‎<:heimdall:661370019325935666>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎ ‎‎<:heimdall:661370019325935666>‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ \nPERSON1 PERSON1 PERSON1 PERSON1 PERSON1 PERSON1 \n \n**Sinister six** \n‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎ ‎‎ ‎‎<:sif:661370019300638737>‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎‎ ‎‎‎<:sif:661370019300638737>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎ ‎‎ ‎‎<:sif:661370019300638737>‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎ ‎‎<:sif:661370019300638737>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎ ‎‎ ‎‎<:sif:661370019300638737>‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎ ‎‎<:sif:661370019300638737>‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎\nPERSON1 PERSON1 PERSON1 PERSON1 PERSON1 PERSON1")
	msg.channel.send(exampleEmbed);
}});


user.presence.clientStatus

client.on('message', msg => {
if (msg.content === '!status') {
if (member.presence.clientStatus = 'desktop') {
console.log("using computer")
}
if (member.presence.clientStatus = 'mobile') {
console.log("using mobile")
}
}
});


if (msg.content === '!status') {
if (msg.author.presence.clientStatus ==== 'desktop') {
console.log("{ desktop: 'online' }")
}
if (msg.author.presence.clientStatus === 'mobile') {
{ mobile: 'online' }
console.log("using mobile")
}
if (msg.author.presence.clientStatus === 'web') {
{ web: 'online' }
console.log("using web")
}

, if one was on desktop, it will return this object
so check if desktop, web, or mobile exists in the object it returns
and it will tell you where the user is logged in
however it doesn't work if the user is appearing offline
it will return an empty object
