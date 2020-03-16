const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


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
let farm = args[0];
let akit = args[1]; 
let abasic = args[1];
let aspecial = args[1];
let aultimate = args[1];
let apassive = args[1];
let aspeed = args[1];
let aunlock = args[1];
let atrait = args[1];
let afarm = args[1];

//EVERY CHARACTER
if (message.channel.id === '666305824813219870' || message.channel.id === '617707484626288672' || message.channel.id === '661221254958940220') { //bot spam channel
if(command === 'aim' || command === 'ai') {
if(args[0] === "assaulter" || args[0] === "assault" || args[0] === "ass" || args[0] === "assau" || args[0] === "assa"){
if(akit === "kit" || akit === "k"){
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Basic)** \n \n**Submachine Gun • T4 Upgrade** \n \nAttack primary target for **140% -> 160%** damage + \napply Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/M2II5ei.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "s"){
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Special)** \n \n**Hyperdose • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nIf this character has a negative effect, Bonus attack the primary \ntarget for **100% -> 125%** per negative effect on the target. \nGain Speed Up for 4 turns.")
	.setThumbnail('https://i.imgur.com/nNIMVDs.png') 
	message.channel.send(exampleEmbed2);
}  else if(apassive === "passive" || apassive === "pass" || apassive === "p"){
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648>	**Aim Assaulter (Passive)** \n \n**Juicer • T4 Upgrade** \n \nOn Turn, change Speed Bar by **+10% -> +20%** for self \nand adjacent A.I.M. allies. \nGain **+10% -> +15%** Damage and +10% Max Health.")
	.setThumbnail('https://i.imgur.com/6b9TZXU.png') 
	message.channel.send(exampleEmbed4);
}  else if(aspeed === "speed" || aspeed === "spe" || aspeed === "s"){
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nAim Assaulter's speed is: 118")
	message.channel.send(speedEmbed);
}  else if(aunlock == "unlock" || aunlock == "unl" || aunlock == "u" || afarm === "farm" || afarm === "far" || afarm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nAim Assaulter is farmable in: \n**Heroes Campaign \nNode 5-3**")
	message.channel.send(speedEmbed); 
} else if(atrait == "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \nA.I.M., Blaster, Global, Minion, Tech, Villain.")  
	message.channel.send(speedEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimassault:663749974869147648> **Aim Assaulter** \n**Please use a valid phrase:** \nbasic\nspecial\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}
if(args[0] === "infector" || args[0] === "infect" || args[0] === "infe" || args[0] === "inf" || args[0] === "infec") {
if(akit === "kit" || akit === "k"){
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Basic)** \n \n**Puncture • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "s"){
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Special)** \n \n**Biohazard • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p"){
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090>	**Aim Infector (Passive)** \n \n**Metabolism • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spe" || aspeed === "s"){
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \nA.I.M. Infector's base speed is **104**, but he gains: \n+5% to +%10 Speed after any character's first turn. \nWith level 4 passive, that makes his speed after turn one **114.4**. \nWith level 4 passive, **Scientist Supreme**, and 3 other AIM characters: \nHis effective turn 1 speed is **108.16**. \nWith an adjacent **A.I.M. Assaulter** with level 4 passive and no **Scientist Supreme**, **A.I.M. Infector's** effective turn 1 speed is usually **115.11**. /nWith **Assaulter** and his level 5 passive or level 4 passive along with \n**Scientist Supreme**, his effective turn 1 speed is **118**.")
	message.channel.send(speedEmbed);
} else if(aunlock == "unlock" || aunlock == "unl" || aunlock == "u" || afarm === "farm" || afarm === "far" || afarm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \nAim Infector is farmable in: \n**Orbs: \nPremium, Basic and Raid Orb.**")
	message.channel.send(speedEmbed); 
} else if(atrait == "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \nAim,Bio,Controller,Global,Minion,Villain")  
	message.channel.send(speedEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aiminfector:663749979441070090> **Aim Infector** \n**Please use a valid phrase:** \nbasic\nspecial\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}
if(args[0] === "monstrosity" || args[0] === "monstrosit" || args[0] === "monstros" || args[0] === "monsto" || args[0] === "mon") {
if(akit === "kit" || akit === "k"){
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Basic)** \n \n**Bash • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. \nTransfer all negative effects on this character to primary target + \n**70% -> 100%** chance to apply a random negative effect.")
	.setThumbnail('https://i.imgur.com/LcGVgou.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial == "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Special)** \n \n**Sudden Evolution • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 250%** damage. \nChange Speed Bar by **+50% -> +75%**. \nHeal self for **6000 -> 10000** Health + 20% of Max Health. \nGain **1 -> 2** Counter. \nApply **1 -> 2** Counter to adjacent A.I.M. allies.")
	.setThumbnail('https://i.imgur.com/ctXEGhs.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive == "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004>	**Aim Monstrosity (Passive)** \n \n**Growth Spurt • T4 Upgrade** \n \n**On Turn** \nGain **1 -> 2** random negative effects for 2 turns. \nGain +10% Speed. \nGain **10% -> +15%** Max Health. \n \nIf Offense Down, gain Offense Up for 2 turns. \nIf Defense Down, gain Defense Up for 2 turns. \nIf Slow, gain Speed Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/6GgGj50.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed == "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \nA.I.M. Monstrosity's base speed is 77, but his effective turn 1 speed with an adjacent A.I.M. Assaulter is 85.33 with their level 4 passive, \nor 95.18 with their level 5 passive.")
	message.channel.send(speedEmbed);
} else if(aunlock == "unlock" || afarm == "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \nAim Monstrosity is farmable in: \n**Orbs: \nPremium & Basic. \n \nBlitz: \nBlitz orb & blitz store**")
	message.channel.send(speedEmbed); 
} else if(atrait == "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \nAim,Bio,Brawler,Global,Minion,Villain")  
	message.channel.send(speedEmbed); 
}else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimmonstrosity:663749978639827004> **Aim Monstrosity** \n**Please use a valid phrase:** \nbasic\nspecial\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}
if(args[0] === 'researcher' || args[0] === 'reasearcher' || args[0] === 'rea' || args[0] === 'res' || args[0] === 'research' || args[0] === 'reasearch') {
if(akit === "kit" || akit === "k"){
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Basic)** \n \n**Wounding Shot • T4 Upgrade** \n \nAttack primary target for **250% -> 280%** damage. \n**90% -> 100%** chance to apply Offense Down for 1 turn..")
	.setThumbnail('https://i.imgur.com/qThfwy9.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial == "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Special)** \n \n**Surgery Drone • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nHeal lowest Health ally and their adjacent allies for \n**6000 -> 7000** Health + 15% of this character's Max Health + \n**75% -> 100%** chance to flip Bleed on lowest Health ally and their adjacent allies.")
	.setThumbnail('https://i.imgur.com/Y2X5nS8.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive == "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829>	**Aim Researcher (Passive)** \n \n**Antidote • T4 Upgrade** \n \n**On Turn** \n**75% -> 100%** chance to choose 1 random ally to apply 1 random positive effect from this list: Offense Up, Defense Up, Speed Up, Regeneration, Deathproof, Deflect. \nIf ally is A.I.M., then apply 2 random positive effects from the list. \n \nWhen a negative effect is applied to an A.I.M. ally, fill this character's Speed Bar by **+10% -> +20%**.")
	.setThumbnail('https://i.imgur.com/x7MKhcD.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed == "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \nA.I.M. Researcher's base speed is 81, but she can gain 10% to 20% speed bar multiple times from her and A.I.M. Assaulter's passive. \nHer possible effective turn 1 speed can be as follows: \n+10% Speed Bar: **89.33**, +20%: **101**, +30%: **114.33**, 40%: **131**, 50%: **152.43**.")
	message.channel.send(speedEmbed);
} else if(aunlock == "unlock" || afarm == "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \nAim Researcher is farmable in: \n**Orbs: \nPremium & Basic. \n \nBlitz: \nBlitz orb & blitz store**")
	message.channel.send(speedEmbed); 
} else if(atrait == "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \nAim,Global,Minion,Skill,Support,Villain")  
	message.channel.send(speedEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimresearcher:663749975200759829> **Aim Researcher** \n**Please use a valid phrase:** \nbasic\nspecial\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}
if(args[0] === 'security' || args[0] === 'sec' || args[0] === 'securit' || args[0] === 'secur' || args[0] === 'securi') {
if(akit === "kit" || akit === "k"){
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Basic)** \n \n**Takedown • T4 Upgrade** \n \nAttack primary target for **230% -> 270%** damage. \nIf Ability Blocked, attack primary target for \n**430% -> 470%** damage instead. \nApply Slow.")
	.setThumbnail('https://i.imgur.com/S00SWQw.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial == "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Special)** \n \n**Charge Capacitor • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt for 1 turn + Slow for 2 turns. Heal self and adjacent A.I.M. allies for **7000 -> 10000** Health + 10% of Max Health. Clear Speed Up on self.")
	.setThumbnail('https://i.imgur.com/Ted3CoX.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive == "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283>	**Aim Security (Passive)** \n \n**Immunization • T4 Upgrade** \n \nAfter attacked, if Scientist Supreme is an ally, if still above 75% Health, transfer 1 negative effect from self and each A.I.M. ally to the attacking enemy. \nGain +10% Max Health and **+10% -> +15%** Resistance.")
	.setThumbnail('https://i.imgur.com/Fx7CjEy.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed == "speed") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \nA.I.M. Security's base speed is 76, but her effective turn 1 speed with an adjacent A.I.M. Assaulter is 84.33 with their level 4 passive, \nor 94.18 with their level 5 passive.")
	message.channel.send(speedEmbed);
} else if(aunlock == "unlock" || afarm == "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \nAim Security is farmable in: \n**Orbs: \nPremium & Basic. \n \nMissions: \nVillains United: Chapter 5-3**")
	message.channel.send(speedEmbed); 
} else if(atrait == "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \nAim,Global,Minion,Protector,Tech,Villain")  
	message.channel.send(speedEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:aimsecurity:663749977071157283> **Aim Security** \n**Please use a valid phrase:** \nbasic\nspecial\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}
}

if(command === 'america' || command === 'chavez' || command === 'ac' || command === 'america' && args[0] === "chavez" || command === 'america' && args[0] === "chave" || command === 'america' && args[0] === "chav" || command === 'america' && args[0] === "cha") {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k"){
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Basic)** \n \n**Starstruck • T4 Upgrade** \n \nAttack primary target for **240% -> 290%** damage + \napply Defense Down.")
	.setThumbnail('https://i.imgur.com/XVvMMSA.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Special)** \n \n**Shooting Star • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **250% -> 300%** damage + \n**50% -> 75%** damage per HERO BRAWLER ally.")
	.setThumbnail('https://i.imgur.com/0V2pdTr.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Ultimate)** \n \n**America's Starling • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nClear 3 positive effects. \nAttack primary target for **350% -> 430%** damage.")
	.setThumbnail('https://i.imgur.com/hdqNsvC.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686>	**America Chavez (Passive)** \n \n**Starling Highway • T4 Upgrade** \n \nGain **+10% -> +20%** Max Health. \nHERO BRAWLER allies gain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/dpbmvcX.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \nAmerica Chavez's speed is: 115")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \nAmerica Chavez is farmable via:\n\n**Campaign:** Villains, **6-9**\n\n**Orbs:** Mega, Milestone, Premium, Red Star")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \nBrawler,Cosmic,Hero,Mystic.")  
	message.channel.send(speedEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:americachavez:663749979394801686> **America Chavez** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}

if(command === 'ant' || command === 'man' ||command === 'scott' || command === 'lang' || command === 'am' || command === 'ant' && args[0] === "man" || command === 'ant' && args[0] === "ma" || command === 'ant' && args[0] === "m" || command === 'ant' && args[0] === "man") {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Basic)** \n \n**Scrappy Fighter • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage + \ncopy a positive effect from the target to Self + \nclear the copied effect. \nIf Wasp is an ally, she also gains the copied effect.")
	.setThumbnail('https://i.imgur.com/0gqCigL.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Special)** \n \n**Gum Up the Works • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 220%** damage + \napply Ability Block for 2 turns. \nThis attack cannot be dodged or blocked.")
	.setThumbnail('https://i.imgur.com/kHl8bsh.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Ultimate)** \n \n**Stomp • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack all for **130% -> 140%** damage + Apply Slow to all targets. \nIf Wasp is an ally, deal an additional +30% damage to all targets.")
	.setThumbnail('https://i.imgur.com/MTgIIvw.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273>	**Ant Man (Passive)** \n \n**Escape Plan • T4 Upgrade** \n \nOn Spawn, apply Evade to Wasp if she is an ally. \nOn Turn, 15% chance to gain Evade + \n**10% -> 15%** chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/5yQ6YZx.png')
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \n**Ant-Man**'s base speed is 100, but with **Black Widow** \nusing her turn 1 special, his effective turn 1 speed is 110.")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const unlockEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \nAnt Man is farmable via:\n\n**Supplies:** Blitz Store\n\n**Orbs:** Blitz, Mega, Milestone, Legacy, Premium, Red Star")	 
	message.channel.send(unlockEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \nAvenger,Controller,Global,Hero,Tech")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:antman:663749977469878273> **Ant Man** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}

if(command === 'blackbolt' || command === 'bb' || command === 'bolt' || command === 'blackbo' || command === 'blackbol' || command === 'kingofattilan' || command === 'blackagar' || command === 'boltagon') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Basic)** \n \n**Royal Strike • T4 Upgrade** \n \nIf the primary target has slow, flip **1 -> 2** negative effects on self. \nAttack primary target for **350% -> 400%** damage + \nclear **1 -> 2** positive effects.")
	.setThumbnail('https://i.imgur.com/qdQRIfE.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Special)** \n \n**Staggering Voice • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack Primary target for **500% -> 600%** damage. \nThis attack is unavoidable.")
	.setThumbnail('https://i.imgur.com/5wsashb.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Ultimate)** \n \n**Sonic Scream • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **380% -> 500%** damage.")
	.setThumbnail('https://i.imgur.com/IiJQ57n.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698>	**Black Bolt (Passive)** \n \n**King Of Attilan • T4 Upgrade** \n \nCharacters killed by Black Bolt cannot be revived. \nWhen an enemy drops below 25% Health, attack that enemy for\n**150% -> 200%** damage. If that enemy is VILLAIN TECH, attack that enemy \nfor **300% -> 400%** damage instead. \nOn enemy summon, apply Disrupted + clear 3 positive effects on\nthe summoner. \nGain +40% Resistance. INHUMAN allies gain +40% Resistance. \nGain **+30% -> +50%** Max Health. INHUMAN allies gain **+30% -> +50%** Max Health.")
	.setThumbnail('https://i.imgur.com/JthP6vO.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \nBlack Bolt's speed is: 100")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \nBlack bolt is a legendary event.**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \nBio,Blaster,Cosmic,Hero,Inh
