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
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \nBio,Blaster,Cosmic,Hero,Inhuman")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackbolt:663749971971014698> **Black Bolt** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}

if(command === 'blackpanther' || command === 'bp' || command === 'panther' || command === 'blackpan' || command === 'tchalla' || command === 'kingofwakanda') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Basic)** \n \n**Claw Slash • T4 Upgrade** \n \nAttack primary target for **180% -> 210%** damage + \n30% Piercing. **90% -> 100%** chance to apply Slow.")
	.setThumbnail('https://i.imgur.com/CBg3Fze.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Special)** \n \n**Hunter's Spirit • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **190% -> 230%** damage + \n30% Piercing. Gain Offense Up for 2 turns. \nOn Crit, gain Counter.")
	.setThumbnail('https://i.imgur.com/mkWgTWh.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Ultimate)** \n \n**Panther Rush • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **250% -> 280%** damage. \nChain to 1-3 adjacent targets for **170% -> 200%** damage. \nCounterattack breaks this Chain. \nWhile in Charged, attack all enemies for **220% -> 250%** damage, \nthen lose all Charged. This attack gains +20% Damage per Charged. \nAll attacks have +30% Piercing and **+15% -> +20%** \nExtra Crit Chance.")
	.setThumbnail('https://i.imgur.com/WNirdk2.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233>	**Black Panther (Passive)** \n \n**Defender of Wakanda • T4 Upgrade** \n \nOn dropping below 50% of Max Health, gain +1 Charged, \nup to a maximum of 5. \nOn Kill, fill Speed Bar by **80% -> 100%**. \nOn Defense Up, gain Deflect.")
	.setThumbnail('https://i.imgur.com/VP20XOH.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \nBlack Panther's speed is: 125 \nHis effective turn 1 speed is 187.5 with Shuri. \nWith Black Widow using her turn 1 special, his effective speed is still 125.")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \nBlack Panther is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \nAvenger,Brawler,Global,Hero,Mystic,Wakanda")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackpanther:663749966212104233> **Black Panther** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}

if(command === 'blackwidow' || command === 'blackw' || command === 'blackwid' || command === 'bw' || command === 'widow' || command === 'natasha' || command === 'romanova') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Basic)** \n \n**Sabotage • T4 Upgrade** \n \nAttack primary target for **190% -> 250%** damage. \nDuring Stealth, copy & clear all positive effects on primary target.")
	.setThumbnail('https://i.imgur.com/Adce8ne.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Special)** \n \n**Camouflage Tech • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Stealth for 2 turns + clear all negative effects from Self. \nClear 1 negative effect from AVENGER allies. \nApply Speed Up to Self/S.H.I.E.L.D./AVENGER allies for 2 turns. \n60% chance to apply Speed Up to all allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/l51dzex.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Ultimate)** \n \n**Widow's Bite • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **230% -> 290%** damage + apply Stun. \n60% chance to Chain up to 3 adjacent targets for \n**170% -> 220%** damage + apply 2 Bleed for 2 turns. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/A2R5zPl.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370>	**Black Widow (Passive)** \n \n**Saboteur • T4 Upgrade** \n \nGain **+10% -> +15%** Speed. \nThis is applied after any character has taken a turn. \nWhen in Stealth, gain Offense Up.")
	.setThumbnail('https://i.imgur.com/ExIr73Q.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \nBlack Widow's base speed is 135, \nbut she gains +5%, +10%, or +15% speed bar \ndepending on her passive level after any character's first turn. \nThat makes her speed after turn one 141.75, 148.5, or 155.25 depending on her passive level.")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \nBlack Widow is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \nController,Global,Hero,Shield,Skill,Wave1Avenger")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blackwidow:663749977637519370> **Black Widow** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}

if(command === 'blob') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127>	**Blob (Basic)** \n \n**Heavy Handed • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage + apply Slow. If the target has Disrupted, change the target's Speed Bar by **-15% -> -20%**.")
	.setThumbnail('https://i.imgur.com/oYVwci5.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127>	**Blob (Special)** \n \n**Meat Shield • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nCopy all positive effects from BROTHERHOOD allies to this character. Attack primary target for **290% -> 350%** damage. Attack all adjacent targets for **260% -> 320%** damage.")
	.setThumbnail('https://i.imgur.com/28OGyCi.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127>	**Blob (Ultimate)** \n \n**Belly Flop • T4 Upgrade** \n \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and all adjacent targets for **380% -> 460%** damage.")
	.setThumbnail('https://i.imgur.com/Ugu5GyJ.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127>	**Blob (Passive)** \n \n**Solid Mass • T4 Upgrade** \n \nOn Spawn, gain Offense Up for 2 turns.\nWhen a Brotherhood ally drops below 50% Health, gain Taunt.\nOn Enemy turn, apply +1 Deflect, up to a maximum of 3, to adjacent allies.\nGain **+40% -> +50%** Resistance. BROTHERHOOD allies gain **+40% -> +50%** Resistance.\nGain **+15% -> +25%** chance to Counterattack. Gain **+15% -> +25%** chance to Counterattack per BROTHERHOOD ally.")
	.setThumbnail('https://i.imgur.com/24fh31S.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127>	**Blob (Basic)** \n \n**Heavy Handed • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage + apply Slow. If the target has Disrupted, change the target's Speed Bar by **-15% -> -20%**.")
	.setThumbnail('https://i.imgur.com/oYVwci5.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127>	**Blob (Special)** \n \n**Meat Shield • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nCopy all positive effects from BROTHERHOOD allies to this character. Attack primary target for **290% -> 350%** damage. Attack all adjacent targets for **260% -> 320%** damage.")
	.setThumbnail('https://i.imgur.com/28OGyCi.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127>	**Blob (Ultimate)** \n \n**Belly Flop • T4 Upgrade** \n \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and all adjacent targets for **380% -> 460%** damage.")
	.setThumbnail('https://i.imgur.com/Ugu5GyJ.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127>	**Blob (Passive)** \n \n**Solid Mass • T4 Upgrade** \n \nOn Spawn, gain Offense Up for 2 turns.\nWhen a Brotherhood ally drops below 50% Health, gain Taunt.\nOn Enemy turn, apply +1 Deflect, up to a maximum of 3, to adjacent allies.\nGain **+40% -> +50%** Resistance. BROTHERHOOD allies gain **+40% -> +50%** Resistance.\nGain **+15% -> +25%** chance to Counterattack. Gain **+15% -> +25%** chance to Counterattack per BROTHERHOOD ally.")
	.setThumbnail('https://i.imgur.com/24fh31S.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127> **Blob** \nBlob's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127> **Blob** \nBlob is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127> **Blob** \nBrotherhood,Global,Mutant,Protector,Villain")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:blob:684029278366597127> **Blob** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}

if(command === 'bullseye' || command === 'bull' || command === 'bulls') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Basic)** \n \n**Throwing Knife • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage. \nThis attack cannot miss **though it can be dodged**. \nGain **+15% -> +20%** Crit chance for this attack.")
	.setThumbnail('https://i.imgur.com/WSaVkNn.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Special)** \n \n**Card Trick • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 230%** damage and **+20% -> +25%** Crit chance. 80% chance to gain a Bonus attack for 190% damage and +40% Crit chance.")
	.setThumbnail('https://i.imgur.com/qydaGnn.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Ultimate)** \n \n**Kill Shot • T4 Upgrade** \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **500% -> 550%** damage. Gain +30% Crit chance and +20% Crit damage for this attack.")
	.setThumbnail('https://i.imgur.com/Q2cxNpU.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828>	**Bullseye (Passive)** \n \n**Never Miss • T4 Upgrade** \n \nGain +10% Accuracy. All allies gain **+5% -> +10%** Accuracy. \nMERCENARY allies gain +10% Crit damage.")
	.setThumbnail('https://i.imgur.com/3P6OIZC.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828> **Bullseye** \nBullseye's speed is: 110.")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828> **Bullseye** \nBullseye is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828> **Bullseye** \nBlaster,City,Mercenary,Skill,Villain")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:bullseye:663749972939767828> **Bullseye** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}


if(command === 'cable' || command === 'cab') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Basic)** \n \n**Plasma Rifle • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage + \ngain Charged.")
	.setThumbnail('https://i.imgur.com/B953HdD.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Special)** \n \n**Overload • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **200% -> 220%** damage + \nchange Speed Bar by -50%. Attack adjacent targets for: \n**150% -> 170%** damage + change Speed Bar by -10%. \n \nIf Charged, in addition, attack targets 2 spaces from primary for **150% -> 170%** damage and change Speed Bar by -10%, then lose Charged.")
	.setThumbnail('https://i.imgur.com/uc6jIiV.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Ultimate)** \n \n**Psychic Surge • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **470% -> 530%** Unavoidable damage. \nIf Deadpool is an ally, gain assist from Deadpool. \nOn Kill, fill Cable and Deadpool's Speed Bars by 70%.")
	.setThumbnail('https://i.imgur.com/MfPeGOZ.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154>	**Cable (Passive)** \n \n**Time Sense • T4 Upgrade** \n \nOn Spawn, Self and all allies gain 5% Speed Bar. \nOn Turn, **20% -> 30%** chance to apply Counter to a random \nMUTANT ally, and 20% chance to apply Counter to another random ally.")
	.setThumbnail('https://i.imgur.com/JBgSQPz.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154> **Cable** \nCable's base speed is 91, but his effective turn 1 speed is 95.54.")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154> **Cable** \nCable is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154> **Cable** \nBlaster,Cosmic,Hero,Mutant,X-Force")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cable:663749981290758154> **Cable** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}

if(command === 'captain' && args[0] === "america" || command === 'cap' && args[0] === "america" || command === 'ca' || command === 'cap' || command === 'steve' && args[0] === "rogers" || command === 'steve' || command === 'rogers') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Basic)** \n \n**Shield Bash • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage. \n30% chance to Chain to up to 2 adjacent targets for 170% damage. \n**50% -> 100%** chance to gain Defense Up for 1 turn. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/FPGV5SJ.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Special)** \n \n**Inspire • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt and Defense Up on self. \nApply Defense Up to all allies. \nGrant 1 Ability Energy to 1-2 AVENGER allies. \nGrant 1 Ability Energy to **1-2 -> 1-3** random allies.")
	.setThumbnail('https://i.imgur.com/rWpO013.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Ultimate)** \n \n**Shield Throw • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **280% -> 300%** damage, \nclearing 2 positive effects. \nChain to 1-2 additional targets for **210% -> 230%** damage, \nclearing 2 positive effects. Dodge breaks this Chain.")
	.setThumbnail('https://i.imgur.com/TsGHh0g.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701>	**Captain America (Passive)** \n \n**!Assemble • T4 Upgrade** \n \n+25% Block chance. **+5% -> +10%** Block Amount. \n+10% Max Health. +5% Block chance per AVENGER ally.")
	.setThumbnail('https://i.imgur.com/JiJhO67.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701> **Captain America** \nCaptain America's base speed is 114, but with Black Widow using her turn 1 special, his effective turn 1 speed is 120.33.")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainamerica:663749981299015701> **Captain America** \nCaptain America is farmable in:**")
	message.channel.send(speedEmbed); 
}
} else if(command === 'captain' && args[0] === "marvel" || command === 'cm' || command === 'captainmarvel' || command === 'cptnmarvel' || command === 'capmarvel' || command === 'carol' || command === 'danvers') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Ultimate)** \n \n**Binary • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Binary. Clear all negative effects from self. \nAttack primary target for **540% -> 640%** damage. \nThis attack cannot be dodged and cannot crit.")
	.setThumbnail('https://i.imgur.com/DFTzcpK.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Passive)** \n \n**Higher. Further. Faster. • T4 Upgrade** \n \nWhile in Binary gain: 25% Damage, 25% Armor, 100% Focus, and 100% Resistance. While in Binary, on End of Turn, attack all enemies for **120% -> 150%** damage. \nOn Spawn: \n Clear all Charged. If any Charged were cleared, gain Regeneration. \nGain Charged, If at least one ally is MILITARY, gain an additional Charge. \nMILITARY allies gain +15% Max Health. \nMILITARY allies gain +10% Damage. \nIf not in Binary, when this character gains Ability Energy, \ngain +1 Charged, up to a maximum of 5. \nOn Turn, heal self for **10% -> 20%** of Max Health.")
	.setThumbnail('https://i.imgur.com/Tnz6HZT.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Basic)** \n \n**Princess Sparkle Fist • T4 Upgrade** \n \nAttack primary target for **280% -> 320%** damage. \n50% chance to Chain to 1 adjacent target for **180% -> 220%** damage. \nIf not in Binary, gain +1 Charged, up to a maximum of 5 If in Binary, lose 1 Charged. On losing all Charged, end Binary. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/gAN4p41.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Special)** \n \n**Warbird • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **360% -> 450%** damage + \nclear all positive effects. \nIf not in Binary, gain +1 Charged, up to a maximum of 5. \nIf in Binary, lose 1 Charged. On losing all Charged, end Binary.")
	.setThumbnail('https://i.imgur.com/M1CQNl8.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Ultimate)** \n \n**Binary • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Binary. Clear all negative effects from self. \nAttack primary target for **540% -> 640%** damage. \nThis attack cannot be dodged and cannot crit.")
	.setThumbnail('https://i.imgur.com/DFTzcpK.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340>	**Captain Marvel (Passive)** \n \n**Higher. Further. Faster. • T4 Upgrade** \n \nWhile in Binary gain: 25% Damage, 25% Armor, 100% Focus, and 100% Resistance. While in Binary, on End of Turn, attack all enemies for **120% -> 150%** damage. \nOn Spawn: \n Clear all Charged. If any Charged were cleared, gain Regeneration. \nGain Charged, If at least one ally is MILITARY, gain an additional Charge. \nMILITARY allies gain +15% Max Health. \nMILITARY allies gain +10% Damage. \nIf not in Binary, when this character gains Ability Energy, \ngain +1 Charged, up to a maximum of 5. \nOn Turn, heal self for **10% -> 20%** of Max Health.")
	.setThumbnail('https://i.imgur.com/Tnz6HZT.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340> **Captain Marvel** \nCaptain Marvel's speed is: 127")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340> **Captain Marvel** \nCaptain Marvel is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340> **Captain Marvel** \nBio,Brawler,Cosmic,Hero,Kree,Military")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:captainmarvel:663749985459896340> **Captain Marvel** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
} else if(command === 'captain'){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("**Please choose a character:** \ncaptain marvel = !captain marvel \ncaptain america = !captain america")
	.setThumbnail('https://i.imgur.com/9eCZztr.png') 
	message.channel.send(exampleEmbed);
}



if(command === 'carnage' || command === 'car' || command === 'carn') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Basic)** \n \n**Cleave • T4 Upgrade** \n \nAttack primary target for **230% -> 280%** damage. \nIf the primary target has a negative effect, \nChain to 1-2 adjacent targets for 90% damage + \nspread 2 negative effects from the primary target to secondary targets. \nThis will not spread Stun. Counterattack breaks this Chain.")
	.setThumbnail('hhttps://i.imgur.com/4ZYwBP6.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Special)** \n \n**Slaughter • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **350% -> 420%** damage + \n100% additional damage per negative effect. \nRemove all negative effects from the primary target. \nAttack all adjacent targets for **180% -> 250%** damage.")
	.setThumbnail('https://i.imgur.com/1qWwq9c.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Ultimate)** \n \n**Absolute Carnage • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **420% -> 500%** Piercing + \napply 2 Bleed for 2 turns. If the primary target is above 50% Health, \napply an additional Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/xdp5RKK.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570>	**Carnage (Passive)** \n \n**Frenzied Fury • T4 Upgrade** \n \nWhen an enemy drops below 25% Health, change Speed Bar of self and all SYMBIOTE allies by **+20% -> +30%** + heal them for 10% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/n2opSAu.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570> **Carnage** \nCarnage's speed is: 126.")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570> **Carnage** \nCarnage is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570> **Carnage** \nBio,Brawler,City,SpiderVerse,Symbiote,Villain")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:carnage:663749984843202570> **Carnage** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'colossus' || command === 'colo' || command === 'col' || command === 'coloss') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Basic)** \n \n**Ringdinger • T4 Upgrade** \n \nAttack primary target for **290% -> 340%** damage + \napply Offense Down for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/6jkNvF4.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Special)** \n \n**Altruism • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt. Gain **1 -> 2** Counter. \nApply 2 Deflect to Self and X-MEN Allies. \nApply Deflect to all other allies. \nIf Phoenix is an ally, gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/jYII4lt.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Ultimate)** \n \n**Enduring Protection • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nIncrease duration of positive effects on self by **+2 -> +3**, \nup to a maximum of 5. Gain 2 Deathproof. \nGain +2 Charged, up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/MBeRT0x.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528>	**Colossus (Passive)** \n \n**Steel Form • T4 Upgrade** \n \nOn Spawn, if Charged, generate 1 Ability Energy for self. \nThen clear Charged. \nOn Spawn, if Phoenix is an ally: \nGain Defense Up for **1 -> 2** turns. \nApply Defense Up to all X-MEN allies. \nWhen a negative effect is applied to an X-MEN ally, gain +1 Charged, up to a maximum of 5. \nWhile Charged, when attacked, attack that enemy for \n**75% -> 100%** damage +10% damage per Charged. \nWhen an X-MEN ally drops below 50% Max Health, \ngain +1 Taunt, up to a maximum of 2. \nWhile in Defense Up, gain +1000% Resistance. \nGain +15% Max Health. X-MEN allies gain +15% Max Health.")
	.setThumbnail('https://i.imgur.com/CgRxvbF.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528> **Colossus** \nColossus's speed is: 88.")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528> **Colossus** \nColossus is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528> **Colossus** \nGlobal,Hero,Mutant,Protector,Xmen")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:colossus:663749981559062528> **Colossus** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}



if(command === 'coulson' || command === 'agent' || command === 'coul' || command === 'couls' || command === 'colson') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Basic)** \n \n**Night-Night Gun • T4 Upgrade** \n \nAttack primary target for **210% -> 230%** damage + \nChain to 2-4 adjacent targets for **160% -> 180%** damage. \nCounterattack breaks this Chain. \nChange Speed Bar of primary and secondary targets by -20%.")
	.setThumbnail('https://i.imgur.com/gB1LwCS.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Special)** \n \n**EMP Punch • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **190% -> 200%** damage. \nAttack all other enemies for **140% -> 150%** damage. \nOn WAR DEFENSE: \nTransfer 4 positive effects from primary target to all \nnon-MINION S.H.I.E.L.D. allies. \nFlip all positive effects on primary target. \nRemove **3 -> all** positive effects from all enemies. \nApply Slow to all TECH enemies.")
	.setThumbnail('https://i.imgur.com/Uhjr6sg.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Ultimate)** \n \n**Teamwork  • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nApply Offense Up to all S.H.I.E.L.D. allies. \nOn WAR DEFENSE, clear **3 -> all** positive effects from \nthe enemy with the most Damage. \nApply Defense Down and Taunt to the \nenemy with the most Damage. \nCall **1 -> 2** allies with the most Damage to attack \nthe enemy with the most Damage. \nAttack all enemies for **250% -> 280%** damage.")
	.setThumbnail('https://i.imgur.com/iVLUvo8.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912>	**Coulson (Passive)** \n \n**The Agent • T4 Upgrade** \n \nIf Coulson drops below 50% Health, change Speed Bar by \n**50% -> 60%** for S.H.I.E.L.D. Medic. \nOn WAR DEFENSE: \nGain **+20% -> +40%** Max Health. \nS.H.I.E.L.D. allies gain **+20% -> +40%** Max Health. \nOn Spawn, apply Immunity to **4 -> all** S.H.I.E.L.D. allies. \nGain +120% Resistance. \nS.H.I.E.L.D. allies gain +120% Resistance.")
	.setThumbnail('https://i.imgur.com/pKDbt3g.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912> **Coulson** \nAgent Coulson's base speed is 115, but: \nHis effective turn 1 speed is 172.5 with Nick Fury on War Defense. \nWith Black Widow using her turn 1 special, his effective turn 1 speed is 121.39.")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912> **Coulson** \nCoulson is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912> **Coulson** \nAvenger,Controller,Global,Hero,Shield,Tech")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:coulson:663749981605199912> **Coulson** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}



if(command === 'crossbones' || command === 'cb' || command === 'xb' || command === 'cross' || command === 'xbones') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Basic)** \n \n**Piston Punch • T4 Upgrade** \n \nAttack primary target for **175% -> 200%** damage. \n75% chance of a Bonus attack for **125% -> 150%** damage and apply Offense Down.")
	.setThumbnail('https://i.imgur.com/Z4eF8IS.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Special)** \n \n**Wrath • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nGain Taunt + **2 -> 2-3** Counter. \nHeal self for 15% of Max Health.")
	.setThumbnail('https://i.imgur.com/2lsqAdz.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Ultimate)** \n \n**Detonate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nGain 2 Deathproof, then explode for **440% -> 480%** damage \n to self and all enemies. \nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('https://i.imgur.com/fYlrlDB.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937>	**Crossbones (Passive)** \n \n**Vengeance • T4 Upgrade** \n \n**+15% -> +20%** Max Health. HYDRA allies gain +5% Armor.")
	.setThumbnail('https://i.imgur.com/vtQvQxC.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937> **Crossbones** \nCrossbones's speed is: 99")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937> **Crossbones** \nCrossbones is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937> **Crossbones** \nGlobal,Hydra,Protector,Tech,Villain")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:crossbones:663749981177511937> **Crossbones** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}



if(command === 'cyclops' || command === 'cy' || command === 'clops' || command === 'cyc') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Basic)** \n \n**Optic Blast • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage + \n50% chance to apply Defense Down. \nIf Psylocke is an ally, always apply Defense Down.")
	.setThumbnail('https://i.imgur.com/S663f9U.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Special)** \n \n**To Me! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nApply Taunt to the 2 most injured non-summoned \nnon-primary target enemies. \nCall an ally Wolverine to attack the most injured \nof those previous enemies. \n**75% -> 100%** chance to call an ally to attack the second most injured of those previous enemies. \nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/lfQC1y7.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Ultimate)** \n \n**Optic Devastation • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack all enemies for **200% -> 250%** damage + \napply Slow for **1 -> 2** turns. \nDamage is increased by 25% per Charged. \nThen lose all Charged.")
	.setThumbnail('https://i.imgur.com/Phpta6j.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230>	**Cyclops (Passive)** \n \n**Team Synergy • T4 Upgrade** \n \nOn Turn and on X-Men ally turn, gain **+1 -> +2** Charged,\n up to a maximum of **10 -> 20**. \nWhen an enemy attacks an ally Phoenix or Dark Phoenix, \n50% chance to attack that enemy for 200% damage. \nIf this character does not attack, \ncall an assist from an ally Wolverine to attack that enemy. \nWolverine gains +80% Damage for the assist. \nOn ally Phoenix death, gain Offense Up + \nchange an ally Wolverine Speed Bar by +100%.")
	.setThumbnail('https://i.imgur.com/qwD4QRu.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230> **Cyclops** \n:Cyclops: Cyclops's speed is: 108")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230> **Cyclops** \nCyclops is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230> **Cyclops** \nBlaster,Global,Hero,Mutant,Xmen")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:cyclops:663749981387358230> **Cyclops** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'daredevil' || command === 'dd' || command === 'dare' || command === 'devil') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Basic)** \n \n**Strike Without Fear • T4 Upgrade** \n \nAttack primary target for **240% -> 270%** damage. \n**40% -> 50%** chance to Bonus attack for 200% damage. \nIf target is VILLAIN, always Bonus attack.")
	.setThumbnail('https://i.imgur.com/lI26m6t.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Special)** \n \n**Throw Baton • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278> \nAttack primary target for **180% -> 200%** damage + \nChain to **1-2 -> 2** targets within 2 spaces of \nprevious target for **130% -> 150%** damage. \nDodge breaks this Chain. \nApply 2 Counter to self and all DEFENDER allies.")
	.setThumbnail('https://i.imgur.com/N1gdtlW.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Ultimate)** \n \n**Brawl • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184> \nAttack primary target for **370% -> 400%** damage + \nChain to **3-4 -> 4-6** adjacent targets for 240% damage. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/hV0vTQY.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156>	**Daredevil (Passive)** \n \n**Enhance Senses • T4 Upgrade** \n \nSelf and DEFENDER allies gain **+5% -> +10%** Speed. \nGain +5% Dodge chance. \nGain +5% Dodge chance per DEFENDER ally. \nGain +10% Damage.")
	.setThumbnail('https://i.imgur.com/UgnuwNE.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156> **Daredevil** \nDaredevil's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156> **Daredevil** \nDaredevil is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156> **Daredevil** \nBio,Brawler,City,Defender,Hero,MartialArtist")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:daredevil:663749979994587156> **Daredevil** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'deadpool' || command === 'dp' || command === 'dead' || command === 'pool') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Basic)** \n \n**Dual Pistols • T4 Upgrade** \n \nAttack primary target for **190% -> 220%** damage + \n80% chance to Bonus attack for **140% -> 170%** damage. \nBonus attack always Crits if the target is a MINION.")
	.setThumbnail('https://i.imgur.com/EO9r38O.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Special)** \n \n**Bounty Hunter • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack the most injured target for **490% -> 550%** damage, \nignoring Taunt. On Kill, gain Regeneration.")
	.setThumbnail('https://i.imgur.com/FlCE0BS.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Ultimate)** \n \n**Hack 'n' Slash • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **230% -> 260%** damage + \nRebound Chain 3-4 additional targets for \n**160% -> 200%** damage. Apply Bleed to MINION targets. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/IjD2h1e.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251>	**Deadpool (Passive)** \n \n**Merc With A Mouth • T4 Upgrade** \n \nOn Turn, clear all negative effects from Self + \nHeal **10% -> 15%** of Max Health per negative effect removed. \n5% chance to Revive for 10% of Max Health.")
	.setThumbnail('https://i.imgur.com/1B8Xoik.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251> **Deadpool** \nDeadpool's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251> **Deadpool** \nDeadpool is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251> **Deadpool** \nBrawler,Global,Hero,Mercenary,Mutant,Xforce")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Deadpool:663749981705994251> **Deadpool** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'drax' || command === 'draxthedestroyer') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Basic)** \n \n**Knife Slash • T4 Upgrade** \n \nAttack primary target for **220% -> 250%** damage + 30% Drain.")
	.setThumbnail('https://i.imgur.com/zzqAaT9.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Special)** \n \n**Fast Reflexes • T4 Upgrade** \n<:abilityon:663751832690229278> \nGain Taunt + **1-2 -> 2** Counter. \nGain Defense Up for 1-2 turns.")
	.setThumbnail('https://i.imgur.com/EJOcgHO.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Ultimate)** \n \n**Good Fighting • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **270% -> 300%** damage + **40% -> 50%** Drain. \nChain to 3-5 adjacent targets for **210% -> 240%** damage + \n**40% -> 50%** Drain. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/pXaX50Q.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062>	**Drax (Passive)** \n \n**Destroyer • T4 Upgrade** \n \nOn Spawn, gain Taunt. **+15% -> +20%** increase to Drain.")
	.setThumbnail('https://i.imgur.com/u45pYuj.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062> **Drax** \nDrax's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062> **Drax** \nDrax is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062> **Drax** \nBio,Cosmic,GotG,Hero,Protector")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drax:663749981496279062> **Drax** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'doctor' || command === 'ds' || command === 'strange' || command === 'mrdoctor') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Basic)** \n \n**Bolt of Balthak • T4 Upgrade** \n \nAttack primary target for **150% -> 170%** Piercing \n+ apply Offense Down for **1 -> 1-2** turns. \nThis is Unavoidable.")
	.setThumbnail('111') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Special)** \n \n**Winds of Watoomb • T4 Upgrade** \n<:abilityon:663751832690229278> \nApply 2 random negative effects against primary target + \n**90% -> 100%** chance to flip all positive effects on each enemy to negative effects. \nIf positive effects are not flipped, they are removed instead.")
	.setThumbnail('222') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Ultimate)** \n \n**Book of the Vishanti • T4 Upgrade** \n<:abilityoff:663751832413405184> \nRevive a dead SUPERNATURAL ally with 65% Health. \nRevive a dead ally with **40% -> 50%** Health. \nHeal all allies for **5000 -> 8000** Health + 10% of this character's Max Health.")
	.setThumbnail('333') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364>	**Doctor Strange (Passive)** \n \n**Master of the Arcane Arts • T4 Upgrade** \n \nOn Turn, **20% -> 30%** chance to Fill lowest Speed Bar by 30%. \nIf this character has 3 or more SUPERNATURAL allies, \nwhen a positive effect is applied to an enemy, \nheal for 5% of this character's Max Health + \ngain 1 Deflect, up to a maximum of 5.")
	.setThumbnail('444') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364> **Doctor Strange** \nDoctor Strange's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364> **Doctor Strange** \nDoctor Strange is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364> **Doctor Strange** \nCosmic,Hero,Mystic,Supernatural,Support")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:drstrange:663749984990265364> **Doctor Strange** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'elektra' || command === 'elek' || command === 'electra' || command === 'elec') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Basic)** \n \n**Sneak Attack • T4 Upgrade** \n \nAttack primary target for **170% -> 200%** damage + \n**70% -> 100%** chance to apply Bleed. If target is a DEFENDER, \napply 3 Bleed and gain +1,000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/8uUMlme.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Special)** \n \n**Into Shadow • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **150% -> 160%** damage + \nclear **1-2 -> 2** positive effects. Gain Stealth.")
	.setThumbnail('https://i.imgur.com/Is7c5kJ.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Ultimate)** \n \n**Vital Strike • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **530% -> 600%** damage.")
	.setThumbnail('https://i.imgur.com/mt97ASL.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265>	**Elektra (Passive)** \n \n**Death's Grace • T4 Upgrade** \n \nOn Spawn, a random HAND ally gains Evade. \n**10% -> 15%** chance to Revive on Death with 20% of Max Health.")
	.setThumbnail('https://i.imgur.com/P9572yf.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265> **Elektra** \nElektra's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265> **Elektra** \nElektra is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265> **Elektra** \nBrawler,City,Hand,MartialArtist,Mystic,Villain")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elektra:663749981940875265> **Elektra** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'elsa' || command === 'blood' || command === 'stone' || command === 'bloodstone') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
}  else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Basic)** \n \n**Bloody Good Guns • T4 Upgrade** \n \nAttack primary target for **35% -> 45%** Piercing + \nBonus Attack 5 times for **35% -> 45%** Piercing.")
	.setThumbnail('https://i.imgur.com/zWopFWi.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Special)** \n \n**Trick Shot • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **240% -> 300%** damage. \nAttack the most injured enemy for **290% -> 350%** damage, ignoring Taunt and Stealth.")
	.setThumbnail('https://i.imgur.com/datIsFj.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Ultimate)** \n \n**Scatterguns • T4 Upgrade** \n<:abilityoff:663751832413405184> \nGain Offense Up for 2 turns. \nAttack primary target and adjacent targets for **220% -> 250%** damage, **+15% -> +25%** per SUPERNATURAL ally.")
	.setThumbnail('https://i.imgur.com/L0hG2hU.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402>	**Elsa (Passive)** \n \n**#%@$! • T4 Upgrade** \n \nOn Miss or on ally miss, if this character has 3 or more \nSUPERNATURAL allies, attack that target for **220% -> 270%** damage. \nOn enemy dodge, attack that enemy for **220% -> 270%** damage. \nGain +10% Crit Chance. MYSTIC allies gain +10% Crit Chance. \nGain **+10% -> +20%** Accuracy per SUPERNATURAL ally.")
	.setThumbnail('https://i.imgur.com/CDJ8voS.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402> **Elsa** \nElsa's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402> **Elsa** \nElsa is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402> **Elsa** \nBlaster,Global,Hero,Mystic,Supernatural")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:elsa:663749985460027402> **Elsa** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'falcon' || command === 'fal' || command === 'falc' || command === 'redwing') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Basic)** \n \n**Dual SMGs • T4 Upgrade** \n \nAttack primary target for **200% -> 230%** damage. \nIf primary target has any positive effects, \nBonus Attack for **110% -> 120%** damage. \nIn WAR, if target has any positive effects, \nBonus Attack again for **110% -> 120%** damage.")
	.setThumbnail('https://i.imgur.com/mZLJK8p.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Special)** \n \n**Redwing • T4 Upgrade** \n<:abilityon:663751832690229278> \nChange Speed Bar for self and all allies by **25% -> 30%** + \n10% for each enemy with a positive effect. \nClear Stealth from all enemies.")
	.setThumbnail('https://i.imgur.com/o6GRP9c.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Ultimate)** \n \n**Strafing Run • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack all enemies for **160% -> 190%** damage + 50% Piercing.  \nFor each positive effect on an enemy, \nBonus Attack that enemy for 80% damage + 50% Piercing. \nOn WAR OFFENSE, **+30% -> +50%** Piercing to primary and secondary attacks.")
	.setThumbnail('https://i.imgur.com/IQrr9kt.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063>	**Falcon (Passive)** \n \n**EXO-7 Wingsuit • T4 Upgrade** \n \nGain +25% Block Chance. \nGain +5% Block Chance per POWER ARMOR ally. \nGain +10% Max Health. \nGain **+5% -> +10%** Block Amount.")
	.setThumbnail('https://i.imgur.com/LbGkeDk.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063> **Falcon** \nFalcon's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063> **Falcon** \nFalcon is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063> **Falcon** \nAvenger,Blaster,Global,Hero,PowerArmor,Tech")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:falcon:663749983551488063> **Falcon** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'gamora' || command === 'daughterofthanos' || command === 'gam' || command === 'gamor') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Basic)** \n \n**Assassin's Strike • T4 Upgrade** \n \nAttack primary target for 250% damage + \n**40% -> 50%** chance to Bonus attack up to 2 times for 200% damage.")
	.setThumbnail('https://i.imgur.com/ZipNAx6.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Special)** \n \n**Ruthless Blade • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **230% -> 270%** damage. \nChain to 1-2 adjacent targets for **180% -> 200%** damage. \nOn Kill, fill Speed Bar by 100%. \nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/MVpJ1LM.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Ultimate)** \n \n**Flying Slash • T4 Upgrade** \n<:abilityoff:663751832413405184> \nGain Offense Up for 2 turns. \nAttack primary target for **370% -> 420%** damage. \nOn Kill, fill Speed Bar by 100%.")
	.setThumbnail('https://i.imgur.com/XPkQAtm.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234>	**Gamora (Passive)** \n \n**Deadly Methods • T4 Upgrade** \n \nGain **+5% -> +10%** Crit Chance. \nApply +10% Crit Chance to GUARDIAN allies. \nApply +5% Crit Chance to additional allies.")
	.setThumbnail('https://i.imgur.com/iW861pc.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234> **Gamora** \nGamora's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234> **Gamora** \nGamora is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234> **Gamora** \nBrawler,Cosmic,GotG,Hero,Skill")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:gamora:663749983815860234> **Gamora** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'ghostrider' || command === 'ghost' || command === 'rider' || command === 'gr') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
}  else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Basic)** \n \n**Hellfire • T4 Upgrade** \n \nAttack primary target for **200% -> 250%** damage + \napply Bleed for 2 turns.")
	.setThumbnail('https://i.imgur.com/lgEhRB2.png') 
	message.channel.send(exampleEmbed);
}  else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Special)** \n \n**Hell Cycle • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **260% -> 290%** damage + \napply 2 Bleed for **1 -> 2** turns. \nAttack all adjacent targets for **240% -> 270%** damage + \napply 2 Bleed. This attack cannot be blocked and cannot miss.")
	.setThumbnail('https://i.imgur.com/6yqn9PM.png') 
	message.channel.send(exampleEmbed2);
}  else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Ultimate)** \n \n**Penance Stare • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **430% -> 500%** Piercing + \napply Offense Down and Defense Down. \nIf Charged, this attack gains 200% Drain and lose 1 Charged.")
	.setThumbnail('https://i.imgur.com/41vRORY.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489>	**Ghost Rider (Passive)** \n \n**Spirit of Vengeance • T4 Upgrade** \n \nOn Death, grant 2 Ability Energy to all SUPERNATURAL allies. \nOn non-summoned ally Death, attack the enemy that killed the \ntarget for **400% -> 500%** damage and gain +1 Charged, up to a maximum of 5. \nGenerate **2 -> 3** Ability Energy for self. \nWhen a negative effect is applied to an enemy, \nchange Speed Bar of self and all SUPERNATURAL allies by 3%. \nGain **+20% -> +40%** Max Health. \nSUPERNATURAL allies gain **+20% -> +40%** Max Health. \nGain +30% Focus. MYSTIC allies gain +30% Focus.")
	.setThumbnail('https://i.imgur.com/4BqPBWT.png') 
	message.channel.send(exampleEmbed4);
}  else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489> **Ghost Rider** \nGhost Rider's speed is: **")
	message.channel.send(speedEmbed);
}  else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489> **Ghost Rider** \nGhost Rider is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489> **Ghost Rider** \nBrawler,City,hero,Mystic,Supernatural")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ghostrider:663749984662847489> **Ghost Rider** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'greengoblin' || command === 'green' || command === 'goblin' || command === 'gg') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
}  else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Basic)** \n \n**Goblin Strike • T4 Upgrade** \n \nAttack primary target for **290% -> 330%** damage. \n25% chance to attack adjacent targets for **220% -> 260%** damage.")
	.setThumbnail('https://i.imgur.com/nyBz8Ft.png') 
	message.channel.send(exampleEmbed);
}  else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Special)** \n \n**Burning Rage • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack a random target with Stealth for **380% -> 450%** damage. \nIf no targets have Stealth, attack primary target instead. \nDeal 50% additional damage per positive effect on the target.")
	.setThumbnail('https://i.imgur.com/fGvMb0I.png') 
	message.channel.send(exampleEmbed2);
}  else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Ultimate)** \n \n**Fire and Brimstone • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **240% -> 290%** damage. \nAttack 3-4 random targets for **240% -> 290%** damage.")
	.setThumbnail('https://i.imgur.com/2NhIaAn.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171>	**Green Goblin (Passive)** \n \n**Cauterize • T4 Upgrade** \n \nOn any SPIDER-VERSE ally's turn, choose 2 random enemies. \nIf they have a positive effect, remove 1. \nOn Spawn, apply Defense Down to the enemy with the most Resistance. \nIf that enemy is S.H.I.E.L.D., apply Defense Down for 2 turns. \nThis attack cannot be resisted. \nGain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/X2c7WOF.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171> **Green Goblin** \nGreen Goblin's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171> **Green Goblin** \nGreen Goblin is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171> **Green Goblin** \nBio,Blaster,City,SinisterSix,SpiderVerse,Villain")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:goblin:663749986160476171> **Green Goblin** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'graviton' || command === 'grav' || command === 'gravi' || command === 'gra') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Basic)** \n \n**Gravity Wall • T4 Upgrade** \n \nAttack primary target for **200% -> 250%** damage + \nBonus attack for **75% -> 100%** damage per negative effect on the target.")
	.setThumbnail('https://i.imgur.com/NeScjyY.png') 
	message.channel.send(exampleEmbed);
}  else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Special)** \n \n**Crushing Force • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target and adjacent targets for \n**240% -> 300%** damage. \nApply +2 Slow, up to a maximum of 5 to primary target and adjacent targets. \nIf Scientist Supreme is an ally, \napply Bleed to primary target and adjacent targets.")
	.setThumbnail('https://i.imgur.com/ub0g00N.png') 
	message.channel.send(exampleEmbed2);
}  else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Ultimate)** \n \n**Singularity • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **250% -> 300%** damage + \n100% additional damage per negative effect + apply Stun.")
	.setThumbnail('https://i.imgur.com/LeQQHk1.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300>	**Graviton (Passive)** \n \n**Weight of the World • T4 Upgrade** \n \nWhen an enemy drops below 50% health, \nincrease the duration of their negative effects by +1, \nup to a maximum of 5. \nA.I.M. MINION allies gain **+10% -> +20%** Damage. \nA.I.M. MINION allies gain +20% Max Health. \nIn WAR, on Turn, change Speed Bar of the enemy with the highest Speed by -25%. \nIn WAR, when an enemy drops below 75% health, apply Disrupted.")
	.setThumbnail('https://i.imgur.com/JR7a2DW.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300> **Graviton** \nGraviton's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300> **Graviton** \nGraviton is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300> **Graviton** \nAim,Bio,Controller,Global,Villain")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:graviton:663749985417953300> **Graviton** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'greg' || command === 'undead' || command === 'undeadasgardian') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614>	**Undead Asgardian (Basic)** \n \n**Heavy Slash • T4 Upgrade** \n \nAttack primary target for **210% -> 260%** Piercing + \napply Heal Block.")
	.setThumbnail('111') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614>	**Undead Asgardian (Special)** \n \n**Dark Sacrifice • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **340% -> 400%** Piercing + \napply 2 Bleed for 2 turns. \nAttack self for 2000% Piercing damage. \nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('222') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614>	**Undead Asgardian (Passive)** \n \n**Undeath • T4 Upgrade** \n \nOn Death, Heal most injured, non-summoned ASGARDIAN \nally for **140% -> 180%** of this character's Max Health. \nOn Death, change Speed Bar of all enemies by -10%.")
	.setThumbnail('444') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614> **Undead Asgardian** \nUndead Asgardian's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614> **Undead Asgardian** \nUndead Asgardian is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614> **Undead Asgardian** \nAsgard,Brawler,Cosmic,Minion,Mystic,Summon,Villain")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:greg:663749986290499614> **Undead Asgardian** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'groot' || command === 'tree') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Basic)** \n \n**Crushing Blow • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/HD4UZMG.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Special)** \n \n**Overgrowth • T4 Upgrade** \n<:abilityon:663751832690229278> \nGain **1 -> 2** Deathproof. \nApply Deathproof + Defense Up to all allies.")
	.setThumbnail('https://i.imgur.com/dkRv09G.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Ultimate)** \n \n**Life Spores • T4 Upgrade** \n<:abilityoff:663751832413405184> \nHeal all allies for **3000 -> 6000** Health + \n5% of this character's Max Health. Clear 2 negative effects from all allies. \nApply Immunity to Lowest Health GUARDIAN ally for 2 turns.")
	.setThumbnail('https://i.imgur.com/aR8npPS.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282>	**groot (Passive)** \n \n**I am Groot • T4 Upgrade** \n \nWhen Groot is attacked, **50% -> 100%** chance to apply \nSlow to attacker for 1 turns. \nOn Death: \n20% chance to Revive with 25% of this character's Max Health. \nApply Deathproof to Rocket Raccoon. \nApply Defense Up to all allies. \nApply Speed Up + Offense Up + Counter to GUARDIAN allies")
	.setThumbnail('https://i.imgur.com/oZwLFbH.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282> **groot** \ngroot's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282> **groot** \ngroot is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(atrait === "trait" || atrait === "traits" || atrait === "trai" || atrait === "tra" || atrait === "t" || trait === "trait" || trait === "traits" || trait === "trai" || trait === "tra" || trait === "t") {
	const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282> **groot** \nBio,Cosmic,GotG,Hero,Support")  
	message.channel.send(traitEmbed); 
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:groot:663749986218934282> **groot** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}

}



if(command === 'handarcher' || command === 'archer') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handarcher:663749985258569769>	**Hand Archer (Basic)** \n \n**Arrow • T4 Upgrade** \n \nAttack primary target for **240% -> 300%** damage + 20% Piercing.")
	.setThumbnail('https://i.imgur.com/wWq0Gjb.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handarcher:663749985258569769>	**Hand Archer (Special)** \n \n**Arrow Storm • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **170% -> 190%** damage + clear 1 positive effect off each enemy.\nGain +100,000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/yzkodgQ.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handarcher:663749985258569769>	**Hand Archer (Passive)** \n \n**Archery • T4 Upgrade** \n \nGain +5% accuracy and +5% damage. Gain +10% damage per HAND ally. Gain **+5% -> +10%** accuracy per HAND ally.")
	.setThumbnail('https://i.imgur.com/LiFY2Tl.png') 
	message.channel.send(exampleEmbed4);
}  else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handarcher:663749985258569769>	**Hand Archer (Basic)** \n \n**Arrow • T4 Upgrade** \n \nAttack primary target for **240% -> 300%** damage + 20% Piercing.")
	.setThumbnail('https://i.imgur.com/wWq0Gjb.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handarcher:663749985258569769>	**Hand Archer (Special)** \n \n**Arrow Storm • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **170% -> 190%** damage + clear 1 positive effect off each enemy.\nGain +100,000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/yzkodgQ.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handarcher:663749985258569769>	**Hand Archer (Passive)** \n \n**Archery • T4 Upgrade** \n \nGain +5% accuracy and +5% damage. Gain +10% damage per HAND ally. Gain **+5% -> +10%** accuracy per HAND ally.")
	.setThumbnail('https://i.imgur.com/LiFY2Tl.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handarcher:663749985258569769> **Hand Archer** \nHand Archer's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handarcher:663749985258569769> **Hand Archer** \nHand Archer is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'handassassin' || command === 'assassin') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handassassin:663749983413075969>	**Hand Assassin (Basic)** \n \n**Ninjutsu • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/wA4w3Ql.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handassassin:663749983413075969>	**Hand Assassin (Special)** \n \n**Shuriken • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **410% -> 480%** damage + apply Heal Block for **2 -> 3** turns.")
	.setThumbnail('https://i.imgur.com/FtA3o9b.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handassassin:663749983413075969>	**Hand Assassin (Passive)** \n \n**Touch of Death • T4 Upgrade** \n \nGain **+20% -> +25%** damage.")
	.setThumbnail('https://i.imgur.com/g124yni.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handassassin:663749983413075969>	**Hand Assassin (Basic)** \n \n**Ninjutsu • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/wA4w3Ql.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handassassin:663749983413075969>	**Hand Assassin (Special)** \n \n**Shuriken • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **410% -> 480%** damage + apply Heal Block for **2 -> 3** turns.")
	.setThumbnail('https://i.imgur.com/FtA3o9b.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handassassin:663749983413075969>	**Hand Assassin (Passive)** \n \n**Touch of Death • T4 Upgrade** \n \nGain **+20% -> +25%** damage.")
	.setThumbnail('https://i.imgur.com/g124yni.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handassassin:663749983413075969> **Hand Assassin** \nHand Assassin's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handassassin:663749983413075969> **Hand Assassin** \nHand Assassin is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'handblademaster' || command === 'blademaster') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handblademaster:663749983945752586>	**Hand Blademaster (Basic)** \n \n**Sword Slash • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/GF1wM1C.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handblademaster:663749983945752586>	**Hand Blademaster (Special)** \n \n**Assailing Blade • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **370% -> 430%** damage + 40% chance to gain a Bonus attack for **290% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/nm2hZ2i.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handblademaster:663749983945752586>	**Hand Blademaster (Passive)** \n \n**Kenjutsu • T4 Upgrade** \n \nGain **+20% -> +25%** damage.")
	.setThumbnail('https://i.imgur.com/eXiwtH1.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handblademaster:663749983945752586>	**Hand Blademaster (Basic)** \n \n**Sword Slash • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/GF1wM1C.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handblademaster:663749983945752586>	**Hand Blademaster (Special)** \n \n**Assailing Blade • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **370% -> 430%** damage + 40% chance to gain a Bonus attack for **290% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/nm2hZ2i.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handblademaster:663749983945752586>	**Hand Blademaster (Passive)** \n \n**Kenjutsu • T4 Upgrade** \n \nGain **+20% -> +25%** damage.")
	.setThumbnail('https://i.imgur.com/eXiwtH1.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handblademaster:663749983945752586> **Hand Blademaster** \nHand Blademaster's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handblademaster:663749983945752586> **Hand Blademaster** \nHand Blademaster is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'handsentry' || command === 'sentry') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsentry:663749985027883019>	**Hand Sentry (Basic)** \n \n**Sai Strike • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/Dowyzgq.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsentry:663749985027883019>	**Hand Sentry (Special)** \n \n**Smoke Bomb • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Stealth to all allies except self for 2 turns. Apply Evade to 4 allies. Gain Deflect.")
	.setThumbnail('https://i.imgur.com/k2YiJiz.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsentry:663749985027883019>	**Hand Sentry (Passive)** \n \n**Way of the Scorpion • T4 Upgrade** \n \nGain **+15 -> +20%** Block chance and +10% damage.")
	.setThumbnail('https://i.imgur.com/BUAvhdv.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsentry:663749985027883019>	**Hand Sentry (Basic)** \n \n**Sai Strike • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/Dowyzgq.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsentry:663749985027883019>	**Hand Sentry (Special)** \n \n**Smoke Bomb • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Stealth to all allies except self for 2 turns. Apply Evade to 4 allies. Gain Deflect.")
	.setThumbnail('https://i.imgur.com/k2YiJiz.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsentry:663749985027883019>	**Hand Sentry (Passive)** \n \n**Way of the Scorpion • T4 Upgrade** \n \nGain **+15 -> +20%** Block chance and +10% damage.")
	.setThumbnail('https://i.imgur.com/BUAvhdv.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsentry:663749985027883019> **Hand Sentry** \nHand Sentry's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsentry:663749985027883019> **Hand Sentry** \nHand Sentry is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'handsorceress' || command === 'sorceress') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsorceress:663749985094991915>	**Hand Sorceress (Basic)** \n \n**Chi Strike • T4 Upgrade** \n \nAttack primary target for **260% -> 300%** damage + Drain for 20% of base damage.")
	.setThumbnail('https://i.imgur.com/neYaqG0.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsorceress:663749985094991915>	**Hand Sorceress (Special)** \n \n**Blood Magic • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal all allies **3600 -> 4200** Health + 15% of this character's Max Health. Apply Defense Up to **4 -> all** allies.")
	.setThumbnail('https://i.imgur.com/DexeOzh.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsorceress:663749985094991915>	**Hand Sorceress (Passive)** \n \n**Way of the Shadow • T4 Upgrade** \n \nOn turn, **20% -> 25%** chance to gain Stealth for the next 2 turns.")
	.setThumbnail('https://i.imgur.com/x4Ki1Q1.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsorceress:663749985094991915>	**Hand Sorceress (Basic)** \n \n**Chi Strike • T4 Upgrade** \n \nAttack primary target for **260% -> 300%** damage + Drain for 20% of base damage.")
	.setThumbnail('https://i.imgur.com/neYaqG0.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsorceress:663749985094991915>	**Hand Sorceress (Special)** \n \n**Blood Magic • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal all allies **3600 -> 4200** Health + 15% of this character's Max Health. Apply Defense Up to **4 -> all** allies.")
	.setThumbnail('https://i.imgur.com/DexeOzh.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsorceress:663749985094991915>	**Hand Sorceress (Passive)** \n \n**Way of the Shadow • T4 Upgrade** \n \nOn turn, **20% -> 25%** chance to gain Stealth for the next 2 turns.")
	.setThumbnail('https://i.imgur.com/x4Ki1Q1.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsorceress:663749985094991915> **Hand Sorceress** \nHand Sorceress's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:handsorceress:663749985094991915> **Hand Sorceress** \nHand Sorceress is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'hawkeye' || command === 'hawk' || command === 'eye' || command === 'ronin'|| command === 'clint' || command === 'barton') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Basic)** \n \n**Deadeye • T4 Upgrade** \n \nAttack primary target for 250% damage. \nGain **+10% -> +15%** Crit chance and deal \n+20% Piercing with this attack. \nAttack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/CdMzOFW.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Special)** \n \n**Concussion Arrow • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **140% -> 150%** damage + \nchange Speed Bar by -20%. Clear **3 -> all** positive \neffects from primary and adjacent targets. \nThis attack cannot miss and cannot be dodged.")
	.setThumbnail('https://i.imgur.com/qJ67nw4.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Ultimate)** \n \n**Airburst • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack all enemies for **140% -> 190%** damage. \nApply Blind to primary target + 50% \nchance to apply Blind to all remaining targets. \nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/D1CooD8.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428>	**Hawkeye (Passive)** \n \n**Shot in the Dark • T4 Upgrade** \n \nOn turn, 50% chance to attack an enemy with Stealth \nfor **170% -> 200%** Unavoidable damage. \nClear Stealth from that enemy.")
	.setThumbnail('https://i.imgur.com/UHRR6vU.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428> **Hawkeye** \nHawkeye's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hawkeye:663749985267089428> **Hawkeye** \nHawkeye is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'heimdall') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Basic)** \n \n**Hofund Slash • T4 Upgrade** \n \nAttack primary target for **260% -> 310%** damage to primary target. \nGain an assist from a random ASGARDIAN ally.")
	.setThumbnail('https://i.imgur.com/VMPQ2dZ.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Special)** \n \n**Divine Foresight • T4 Upgrade** \n<:abilityon:663751832690229278> \nFlip Stealth on each enemy. \nAttack all enemies for **280% -> 330%** damage. \n**75% -> 100%** chance to clear Heal Block from self and all ASGARDIAN allies.")
	.setThumbnail('https://i.imgur.com/215OPOm.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Ultimate)** \n \n**Sworn Oath • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **310% -> 360%** damage. \nAttack all adjacent targets for **280% -> 330%** damage. \nApply Heal Block to primary and secondary targets.")
	.setThumbnail('https://i.imgur.com/ZKul340.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195>	**Heimdall (Passive)** \n \n**The All-Seeing • T4 Upgrade** \n \nGain +10000% Resistance against Blind. \nASGARDIAN allies gain +10000% Resistance against Blind. \nGain **+20% -> +30%** Focus. \nASGARDIAN allies gain **+20% -> +30%** Focus. \nOn Turn, heal self for 5% of Max Health + \n5% of Max Health per non-minion ASGARDIAN ally. \nOn WAR DEFENSE, on Spawn, apply Defense Up to \n**3 -> all** ASGARDIAN allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/AS0RQr3.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195> **Heimdall** \nHeimdall's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:heimdall:663750299575517195> **Heimdall** \nHeimdall is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'hela' || command === 'goddess' || command === 'godessofdeath') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Basic)** \n \n**Black Blade • T4 Upgrade** \n \nAttack primary target for **240% -> 300%** damage + \nflip 1 Deathproof on target. Attack the most injured enemy for \n**90% -> 100%** Piercing, ignoring Taunt.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089534094639104/Icon_Ability_Hela_Basic-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-347047578593136189.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Special)** \n \n**Command Undead • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **290% -> 350%** damage + \napply Disrupted for **1 -> 2** turns. Gain an Assist from Undead Asgardian.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089544295186452/Icon_Ability_Hela_Special-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-14908862531093919536-1.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Ultimate)** \n \n**Death Knives • T4 Upgrade** \n<:abilityoff:663751832413405184> \nClear 3 Deathproof from all enemies. \nGain +5000% Extra Focus for this action. \nAttack all enemies for **300% -> 350%** damage. \nSpread **2 -> 4** negative effects from the primary target to all secondary targets. \nThis will not spread Stun. \nApply 2 Regeneration to all non-summoned ASGARDIAN allies.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089553376116736/Icon_Ability_Hela_Ultimate-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-16661626197445216232.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512>	**Hela (Passive)** \n \n**Goddess of Death • T4 Upgrade** \n \nOn Spawn, summon an Undead Asgardian. \nOn an Undead Asgardian's Death, summon an Undead Asgardian. \nOn Turn, heal self for 5% of Max Health + \n5% of Max Health per non-summoned ASGARDIAN ally. \nGain **+10% -> +15%** Max Health. \nGain **+10% -> +15%** Max Health per non-summoned ASGARDIAN ally. \nOn WAR DEFENSE: \nOn non-summoned ASGARDIAN ally's Death, summon an Undead Asgardian. \nGain **+20% -> +25%** Damage. \nASGARDIAN allies gain **+20% -> +25%** Damage.")
	.setThumbnail('https://cdn.discordapp.com/attachments/480441624606801921/624089576109244436/Icon_Ability_Hela_Passive-CAB-2e5e3344582a4ca6dcde2b3b1806d1e0-12955924800836498730.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512> **Hela** \nHela's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hela:663749986290368512> **Hela** \nHela is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'hulk' || command === 'bruce' || command === 'banner') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Basic)** \n \n**Smash • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage. If this character is below 50% Health, multiply damage by **1.4 -> 1.5**.")
	.setThumbnail('https://i.imgur.com/COy0USK.png ') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Special)** \n \n**Rage • T4 Upgrade** \n<:abilityon:663751832690229278> \nGain Taunt. If any ally is a WAVE I - AVENGER, gain Counter. Clear **3 -> all** negative effects from self.")
	.setThumbnail('https://i.imgur.com/AuAGucR.png ') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Ultimate)** \n \n**Leap • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for 330% damage and adjacent enemies for **190% -> 260%** damage. If this character is below 50% Health, multiply damage by 1.5.")
	.setThumbnail('https://i.imgur.com/GuF7Mzb.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130>	**Hulk (Passive)** \n \n**Always Angry • T4 Upgrade** \n \nOn dropping below 50% Health, fill **75% -> 100%** Speed Bar + gain Offense Up + clear Stun from self. On dropping below 25% Health, gain Deathproof + clear all negative effects from self.")
	.setThumbnail('https://i.imgur.com/tOcy0ck.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130> **Hulk** \nHulk's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hulk:663749985594245130> **Hulk** \nHulk is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'hydragrenadier' || command === 'grenadier') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydragrenadier:663749985669611540>	**Hydra Grenadier (Basic)** \n \n**Flak Grenade • T4 Upgrade** \n \nAttack primary and adjacent targets for **190% -> 210%** damage and **15% -> 20%** Piercing.\nApply Slow to primary target.")
	.setThumbnail('https://i.imgur.com/HrnNBuu.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydragrenadier:663749985669611540>	**Hydra Grenadier (Special)** \n \n**Corrosive Grenade • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and adjacent targets for **160% -> 190%** damage + clear 1 positive effect from each target.\nRepeat this attack 1 time.")
	.setThumbnail('https://i.imgur.com/NL4rzmY.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydragrenadier:663749985669611540>	**Hydra Grenadier (Passive)** \n \n**Hydra Arsenal • T4 Upgrade** \n \nGain **+20% -> +25%** Focus.")
	.setThumbnail('https://i.imgur.com/cN3Owso.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydragrenadier:663749985669611540>	**Hydra Grenadier (Basic)** \n \n**Flak Grenade • T4 Upgrade** \n \nAttack primary and adjacent targets for **190% -> 210%** damage and **15% -> 20%** Piercing.\nApply Slow to primary target.")
	.setThumbnail('https://i.imgur.com/HrnNBuu.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydragrenadier:663749985669611540>	**Hydra Grenadier (Special)** \n \n**Corrosive Grenade • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and adjacent targets for **160% -> 190%** damage + clear 1 positive effect from each target.\nRepeat this attack 1 time.")
	.setThumbnail('https://i.imgur.com/NL4rzmY.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydragrenadier:663749985669611540>	**Hydra Grenadier (Passive)** \n \n**Hydra Arsenal • T4 Upgrade** \n \nGain **+20% -> +25%** Focus.")
	.setThumbnail('https://i.imgur.com/cN3Owso.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydragrenadier:663749985669611540> **Hydra Grenadier** \nHydra Grenadier's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydragrenadier:663749985669611540> **Hydra Grenadier** \nHydra Grenadier is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'hydraarmoredguard' || command === 'guard') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydraguard:663749985321353218>	**Hydra Armored Guard (Basic)** \n \n**Rapid Fire • T4 Upgrade** \n \nApply Assist Now to a Hydra Rifle Trooper ally.\nAttack primary target for 290% damage and **20% -> 25%** Piercing.")
	.setThumbnail('https://i.imgur.com/NUldi84.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydraguard:663749985321353218>	**Hydra Armored Guard (Special)** \n \n**Alert! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt for 1 turn.\nClear all negative effects from self + heal 5% of Max Health per negative effect removed.\nHeal self for **1,400 -> 2,500** Health + 10% of Max Health.\nIf Red Skull is an ally, gain Immunity.")
	.setThumbnail('https://i.imgur.com/n0DfTBB.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydraguard:663749985321353218>	**Hydra Armored Guard (Passive)** \n \n**Serum Treatment • T4 Upgrade** \n \nGain **+15 -> +20%** Armor. HYDRA MINION and Red Skull allies gain **+15% -> +20%** Armor.\nOn Turn, Heal for 10% of Max Health.")
	.setThumbnail('https://i.imgur.com/QZwG6bP.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydraguard:663749985321353218>	**Hydra Armored Guard (Basic)** \n \n**Rapid Fire • T4 Upgrade** \n \nApply Assist Now to a Hydra Rifle Trooper ally.\nAttack primary target for 290% damage and **20% -> 25%** Piercing.")
	.setThumbnail('https://i.imgur.com/NUldi84.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydraguard:663749985321353218>	**Hydra Armored Guard (Special)** \n \n**Alert! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt for 1 turn.\nClear all negative effects from self + heal 5% of Max Health per negative effect removed.\nHeal self for **1,400 -> 2,500** Health + 10% of Max Health.\nIf Red Skull is an ally, gain Immunity.")
	.setThumbnail('https://i.imgur.com/n0DfTBB.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydraguard:663749985321353218>	**Hydra Armored Guard (Passive)** \n \n**Serum Treatment • T4 Upgrade** \n \nGain **+15 -> +20%** Armor. HYDRA MINION and Red Skull allies gain **+15% -> +20%** Armor.\nOn Turn, Heal for 10% of Max Health.")
	.setThumbnail('https://i.imgur.com/QZwG6bP.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydraguard:663749985321353218> **Hydra Armored Guard** \nHydra Armored Guard's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydraguard:663749985321353218> **Hydra Armored Guard** \nHydra Armored Guard is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'hydrascientist' || command === 'scientist') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrascientist:663749986013413386>	**Hydra Scientist (Basic)** \n \n**Talon Pistol • T4 Upgrade** \n \nAttack primary target for **260 -> 280%** damage and **20% -> 25%** Piercing. 50% chance to apply Heal Block for 1 turn.\nIf Red Skull is an ally, always apply Heal Block.")
	.setThumbnail('https://i.imgur.com/c70A9Ft.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrascientist:663749986013413386>	**Hydra Scientist (Special)** \n \n**Test Patient Zero • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Deathproof and Deflect to the most injured ally and Heal that ally for **7000 -> 10000** Health + **15% -> 20%** of this character's Max Health.\nOn WAR DEFENSE, clear Stun from Red Skull ally.")
	.setThumbnail('https://i.imgur.com/WqwwFE8.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrascientist:663749986013413386>	**Hydra Scientist (Passive)** \n \n**Experimental Serum • T4 Upgrade** \n \nGain **+10% -> +20%** Max Health. HYDRA MINION and Red Skull allies gain **+10% -> +20%** Max Health.\nOn Turn, apply Regeneration + **1-2 -> 2** random positive effects to the 2 most injured HYDRA allies.\nOn WAR DEFENSE, when an enemy drops below 50% Health, apply Defense Down and Offense Down to that enemy.")
	.setThumbnail('https://i.imgur.com/uf8cfjH.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrascientist:663749986013413386>	**Hydra Scientist (Basic)** \n \n**Talon Pistol • T4 Upgrade** \n \nAttack primary target for **260 -> 280%** damage and **20% -> 25%** Piercing. 50% chance to apply Heal Block for 1 turn.\nIf Red Skull is an ally, always apply Heal Block.")
	.setThumbnail('https://i.imgur.com/c70A9Ft.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrascientist:663749986013413386>	**Hydra Scientist (Special)** \n \n**Test Patient Zero • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Deathproof and Deflect to the most injured ally and Heal that ally for **7000 -> 10000** Health + **15% -> 20%** of this character's Max Health.\nOn WAR DEFENSE, clear Stun from Red Skull ally.")
	.setThumbnail('https://i.imgur.com/WqwwFE8.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrascientist:663749986013413386>	**Hydra Scientist (Passive)** \n \n**Experimental Serum • T4 Upgrade** \n \nGain **+10% -> +20%** Max Health. HYDRA MINION and Red Skull allies gain **+10% -> +20%** Max Health.\nOn Turn, apply Regeneration + **1-2 -> 2** random positive effects to the 2 most injured HYDRA allies.\nOn WAR DEFENSE, when an enemy drops below 50% Health, apply Defense Down and Offense Down to that enemy.")
	.setThumbnail('https://i.imgur.com/uf8cfjH.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrascientist:663749986013413386> **Hydra Scientist** \nHydra Scientist's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrascientist:663749986013413386> **Hydra Scientist** \nHydra Scientist is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'hydrasniper' || command === 'sniper') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrasniper:663749986336374811>	**Hydra Sniper (Basic)** \n \n**Marksman Shot • T4 Upgrade** \n \nAttack primary target for **250% -> 290%** Piercing.")
	.setThumbnail('https://i.imgur.com/sPkKQJV.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrasniper:663749986336374811>	**Hydra Sniper (Special)** \n \n**Zero In • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain +2 Offense Up, up to a maximum of 3, for self and **3 -> all** HYDRA MINION and Red Skull allies.\nGain Speed Up for 2 turns. Change Speed Bar by **50% -> 60%**.")
	.setThumbnail('https://i.imgur.com/i2VTDl5.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrasniper:663749986336374811>	**Hydra Sniper (Passive)** \n \n**On Target • T4 Upgrade** \n \nGain **+10% -> +15%** Speed. HYDRA MINION and Red Skull allies gain **+10% -> +15%** Speed.\nOn WAR DEFENSE:\nGain **+10% -> +15%** Crit Chance.\nHYDRA MINION and Red Skull allies gain **+10% -> +15%** Crit Chance.\nOn Spawn, Gain Stealth for 2 turns.")
	.setThumbnail('https://i.imgur.com/yTy6hiu.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrasniper:663749986336374811>	**Hydra Sniper (Basic)** \n \n**Marksman Shot • T4 Upgrade** \n \nAttack primary target for **250% -> 290%** Piercing.")
	.setThumbnail('https://i.imgur.com/sPkKQJV.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrasniper:663749986336374811>	**Hydra Sniper (Special)** \n \n**Zero In • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain +2 Offense Up, up to a maximum of 3, for self and **3 -> all** HYDRA MINION and Red Skull allies.\nGain Speed Up for 2 turns. Change Speed Bar by **50% -> 60%**.")
	.setThumbnail('https://i.imgur.com/i2VTDl5.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrasniper:663749986336374811>	**Hydra Sniper (Passive)** \n \n**On Target • T4 Upgrade** \n \nGain **+10% -> +15%** Speed. HYDRA MINION and Red Skull allies gain **+10% -> +15%** Speed.\nOn WAR DEFENSE:\nGain **+10% -> +15%** Crit Chance.\nHYDRA MINION and Red Skull allies gain **+10% -> +15%** Crit Chance.\nOn Spawn, Gain Stealth for 2 turns.")
	.setThumbnail('https://i.imgur.com/yTy6hiu.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrasniper:663749986336374811> **Hydra Sniper** \nHydra Sniper's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydrasniper:663749986336374811> **Hydra Sniper** \nHydra Sniper is farmable in:**")
	message.channel.send(speedEmbed); 
}

}




if(command === 'hydrarifletrooper' || command === 'trooper') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydratrooper:663752253215342603>	**Hydra Rifle Trooper (Basic)** \n \n**Talon Assault Rifle • T4 Upgrade** \n \nAttack primary target for 290% damage and **20% -> 25%** Piercing.")
	.setThumbnail('https://i.imgur.com/tC4HWhS.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydratrooper:663752253215342603>	**Hydra Rifle Trooper (Special)** \n \n**Hail of Bullets • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **150% -> 180%** Piercing.")
	.setThumbnail('https://i.imgur.com/6MipyYF.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydratrooper:663752253215342603>	**Hydra Rifle Trooper (Passive)** \n \n**For the Cause • T4 Upgrade** \n \nGain +10% damage. HYDRA MINION and Red Skull allies gain +10% damage. Gain +10% Max Health.\nGain **60% -> 100%** chance to assist HYDRA allies on non-attack abilities.\nOn Revive, attack all enemies for **150% -> 180%** Piercing.\nOn WAR DEFENSE, on Spawn, gain Offense Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/Ym0Kl6v.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydratrooper:663752253215342603>	**Hydra Rifle Trooper (Basic)** \n \n**Talon Assault Rifle • T4 Upgrade** \n \nAttack primary target for 290% damage and **20% -> 25%** Piercing.")
	.setThumbnail('https://i.imgur.com/tC4HWhS.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydratrooper:663752253215342603>	**Hydra Rifle Trooper (Special)** \n \n**Hail of Bullets • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **150% -> 180%** Piercing.")
	.setThumbnail('https://i.imgur.com/6MipyYF.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydratrooper:663752253215342603>	**Hydra Rifle Trooper (Passive)** \n \n**For the Cause • T4 Upgrade** \n \nGain +10% damage. HYDRA MINION and Red Skull allies gain +10% damage. Gain +10% Max Health.\nGain **60% -> 100%** chance to assist HYDRA allies on non-attack abilities.\nOn Revive, attack all enemies for **150% -> 180%** Piercing.\nOn WAR DEFENSE, on Spawn, gain Offense Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/Ym0Kl6v.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydratrooper:663752253215342603> **Hydra Rifle Trooper** \nHydra Rifle Trooper's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:hydratrooper:663752253215342603> **Hydra Rifle Trooper** \nHydra Rifle Trooper is farmable in:**")
	message.channel.send(speedEmbed); 
}

}




if(command === 'iw' || command === 'invisible' || command === 'woman' || command === 'sue' || command === 'storm') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Basic)** \n \n**Cosmic Rays • T4 Upgrade** \n \nAttack primary target for **250% -> 290%** damage. Barrier self for **5% -> 10%** of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/e5xdMW2.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Special)** \n \n**Bending Light • T4 Upgrade** \n<:abilityon:663751832690229278> \nClear 2 negative effects from **3 most injured -> self and all** allies. Apply Stealth to **3 most injured -> self and all** allies. \nApply Defense Up for 2 turns to self and all allies. \nClear Stealth from highest Health ally. Apply 3 Deflect + Immunity for 2 turns to highest Health ally.\nClear Stealth from all enemies.")
	.setThumbnail('https://i.imgur.com/YJ5Txin.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Ultimate)** \n \n**Psionic Shields • T4 Upgrade** \n<:abilityoff:663751832413405184> \nApply Offense Down for 2 turns to **3 -> all** enemies.\nBarrier all allies for **30% -> 40%** of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/Er1kRs2.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016>	**Invisible Woman (Passive)** \n \n**Hard Light • T4 Upgrade** \n \nWhen an enemy attacks a FANTASTIC FOUR ally with Barrier, attack that enemy for **200% -> 250%** damage. \nGain **+10% -> +20%** Max Health. FANTASTIC FOUR and Namor allies gain **+10% -> +20%** Max Health.")
	.setThumbnail('https://i.imgur.com/RahrDqe.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016> **Invisible Woman** \nInvisible Woman's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:invisiblewoman:663752234126934016> **Invisible Woman** \nInvisible Woman is farmable in:**")
	message.channel.send(speedEmbed); 
}

}




if(command === 'iron' || command === 'fist') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Basic)** \n \n**Martial Arts • T4 Upgrade** \n \nAttack primary target for **210% -> 250%** damage. Chain to **1-2 -> 2** adjacent targets for 130% damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/1EciYhA.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Special)** \n \n**Inner Peace • T4 Upgrade** \n<:abilityon:663751832690229278> \nClear all negative effects from self.\nHeal self and all DEFENDER allies for **5000 -> 8000** Health + 10% of this character's Max Health. Then, heal most injured CITY HERO ally for **5000 -> 8000** Health + 10% of this character's Max Health\nChange Speed Bar by 30%.")
	.setThumbnail('https://i.imgur.com/bEPx4IK.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Ultimate)** \n \n**The Iron Fist • T4 Upgrade** \n<:abilityoff:663751832413405184> \nAttack primary target for **600% -> 700%** damage + clear 3 positive effects.\n60% chance to gain Offense Down.\nCannot be Blocked.")
	.setThumbnail('https://i.imgur.com/EeNRVBY.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254>	**Iron Fist (Passive)** \n \n**Son of K'un-Lun • T4 Upgrade** \n \nOn Spawn, heal self and DEFENDER allies for 30% of this character's Max Health. Heal additional CITY HERO allies for 10% of this character's Max Health.\nOn Turn, **30% -> 40%** chance to heal self and DEFENDER allies for **20% -> 30%** of this character's Max Health, and heal additional CITY HERO allies for **10% -> 20%** of this character's Max Health.\nGain +5% damage for each DEFENDER ally.")
	.setThumbnail('https://i.imgur.com/oSfw4EU.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254> **Iron Fist** \nIron Fist's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironfist:663751749454004254> **Iron Fist** \nIron Fist is farmable in:**")
	message.channel.send(speedEmbed); 
}

}




if(command === 'ironheart') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566>	**Ironheart (Basic)** \n \n**Prototype Repulsors • T4 Upgrade** \n \nAttack primary target for **260% -> 320%** damage. Gain an Assist from Iron Man.")
	.setThumbnail('https://i.imgur.com/v6VnBpS.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566>	**Ironheart (Special)** \n \n**Deploy Flares • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and adjacent targets for **160% -> 180%** damage.\nChange Speed Bar of primary and adjacent targets by **-15% -> -20%**. Apply Ability Block to primary target.")
	.setThumbnail('https://i.imgur.com/jyXeFZz.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566>	**Ironheart (Ultimate)** \n \n**Heart Breaker • T4 Upgrade** \n \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **230% -> 260%** damage + apply Defense Down for **1 -> 2** turns.\nIn War, gain +100,000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/K1feVdu.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566>	**Ironheart (Passive)** \n \n**Prodigy • T4 Upgrade** \n \nOn Spawn, apply Defense Up to self and all POWER ARMOR allies for 2 turns.\nApply **+30% -> +40%** Resist, **+10% -> +15%** Max Health, and **+10% -> +15%** Armor to self and all POWER ARMOR allies.")
	.setThumbnail('https://i.imgur.com/rIwmhpf.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566>	**Ironheart (Basic)** \n \n**Prototype Repulsors • T4 Upgrade** \n \nAttack primary target for **260% -> 320%** damage. Gain an Assist from Iron Man.")
	.setThumbnail('https://i.imgur.com/v6VnBpS.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566>	**Ironheart (Special)** \n \n**Deploy Flares • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and adjacent targets for **160% -> 180%** damage.\nChange Speed Bar of primary and adjacent targets by **-15% -> -20%**. Apply Ability Block to primary target.")
	.setThumbnail('https://i.imgur.com/jyXeFZz.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566>	**Ironheart (Ultimate)** \n \n**Heart Breaker • T4 Upgrade** \n \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **230% -> 260%** damage + apply Defense Down for **1 -> 2** turns.\nIn War, gain +100,000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/K1feVdu.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566>	**Ironheart (Passive)** \n \n**Prodigy • T4 Upgrade** \n \nOn Spawn, apply Defense Up to self and all POWER ARMOR allies for 2 turns.\nApply **+30% -> +40%** Resist, **+10% -> +15%** Max Health, and **+10% -> +15%** Armor to self and all POWER ARMOR allies.")
	.setThumbnail('https://i.imgur.com/rIwmhpf.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566> **Ironheart** \nIronheart's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Ironheart:684029278425579566> **Ironheart** \nIronheart is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'ironman' || command === 'ironm' || command === 'stark' || command === 'mrstark') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Basic)** \n \n**Repulsor Blast • T4 Upgrade** \n \nAttack primary target for 280% damage. 30% chance to Chain to up to 2 adjacent targets for **170% -> 230%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/krvvnqO.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Special)** \n \n**Rocket Barrage • T4 Upgrade** \n<:abilityon:663751832690229278> \n\nAttack all enemies for **190% -> 210%** Unavoidable damage. If Captain America is your ally, attack all enemies for **220% -> 250%** Unavoidable damage instead.")
	.setThumbnail('https://i.imgur.com/m2xUQ8h.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Ultimate)** \n \n**Unibeam • T4 Upgrade** \n<:abilityoff:663751832413405184> \n\nAttack primary target for **540% -> 600%** damage.")
	.setThumbnail('https://i.imgur.com/1shVLOz.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577>	**Iron Man (Passive)** \n \n**Stark Upgrades • T4 Upgrade** \n \nGain **+10% -> +15%** Extra Crit chance. Apply **+10% -> +15%** Extra Crit chance to TECH allies. Apply +10% Extra Crit chance all other allies.")
	.setThumbnail('https://i.imgur.com/jah6KCY.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577> **Iron Man** \nIron Man's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ironman:663751735591960577> **Iron Man** \nIron Man is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'jessicajones' || command === 'jessjones' || command === 'jjones' || command === 'jj') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Basic)** \n \n**Jaw Breaker • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage + 50% chance to Bonus attack **1 -> 1-2** times for 170% damage.\nGenerate 1 Ability Energy for a random DEFENDER ally. Each attack has a 50% chance to generate 1 Ability Energy for a random ally.")
	.setThumbnail('https://i.imgur.com/2fMoTUz.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Special)** \n \n**Shake it Off • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nClear all negative effects from self. Clear **3 -> all** negative effects from all allies.\nGenerate 1 Ability Energy for each DEFENDER ally. Generate 4 Ability Energy for random allies.")
	.setThumbnail('https://i.imgur.com/HFSba32.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Ultimate)** \n \n**Rejection • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **350% -> 400%** damage + clear **3 -> all** positive effects.\nGain +100000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/ehBy8R5.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Passive)** \n \n**Denial • T4 Upgrade** \n \nGain **+30% -> +40%** Resistance.\nDEFENDER allies gain **+30% -> +40%** Resistance.\nAdditional CITY allies gain +20% Resistance.\nOther additional allies gain +15% Resistance.")
	.setThumbnail('https://i.imgur.com/brAxAZ6.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Basic)** \n \n**Jaw Breaker • T4 Upgrade** \n \nAttack primary target for **200% -> 220%** damage + 50% chance to Bonus attack **1 -> 1-2** times for 170% damage.\nGenerate 1 Ability Energy for a random DEFENDER ally. Each attack has a 50% chance to generate 1 Ability Energy for a random ally.")
	.setThumbnail('https://i.imgur.com/2fMoTUz.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Special)** \n \n**Shake it Off • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nClear all negative effects from self. Clear **3 -> all** negative effects from all allies.\nGenerate 1 Ability Energy for each DEFENDER ally. Generate 4 Ability Energy for random allies.")
	.setThumbnail('https://i.imgur.com/HFSba32.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Ultimate)** \n \n**Rejection • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **350% -> 400%** damage + clear **3 -> all** positive effects.\nGain +100000% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/ehBy8R5.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612>	**Jessica Jones (Passive)** \n \n**Denial • T4 Upgrade** \n \nGain **+30% -> +40%** Resistance.\nDEFENDER allies gain **+30% -> +40%** Resistance.\nAdditional CITY allies gain +20% Resistance.\nOther additional allies gain +15% Resistance.")
	.setThumbnail('https://i.imgur.com/brAxAZ6.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612> **Jessica Jones** \nJessica Jones's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:jessicajones:663750493540974612> **Jessica Jones** \nJessica Jones is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'humantorch' || command === 'human' || command === 'torch' || command === 'johnny' || command === 'blaze') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Basic)** \n \n**Hotshot • T4 Upgrade** \n \nAttack primary target for **180% -> 210%** damage + apply Bleed for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/zlifSxj.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Special)** \n \n**Heating Up • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain **+1 -> +2** Offense Up, up to a maximum of 5.\nApply +1 Offense Up, up to a maximum of 3, to **3 -> all** FANTASTIC FOUR or Namor allies.\nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/CuqT4Hh.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Ultimate)** \n \n**Supernova • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **340% -> 400%** damage. Apply Offense Down to **3 -> all** enemies.\nThis attack is Unavoidable and cannot be Countered.")
	.setThumbnail('https://i.imgur.com/zOiq2Ic.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Passive)** \n \n**Flame On! • T4 Upgrade** \n \nOn Turn, flip **1 -> 2** negative effects on self to positive effects.\nGain **+20% -> +30%** Damage. FANTASTIC FOUR and Namor allies gain **+20% -> +30%** Damage.\nGain +10000% Resistance against Bleed.")
	.setThumbnail('https://i.imgur.com/mGPapSX.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Basic)** \n \n**Hotshot • T4 Upgrade** \n \nAttack primary target for **180% -> 210%** damage + apply Bleed for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/zlifSxj.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Special)** \n \n**Heating Up • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain **+1 -> +2** Offense Up, up to a maximum of 5.\nApply +1 Offense Up, up to a maximum of 3, to **3 -> all** FANTASTIC FOUR or Namor allies.\nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/CuqT4Hh.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Ultimate)** \n \n**Supernova • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **340% -> 400%** damage. Apply Offense Down to **3 -> all** enemies.\nThis attack is Unavoidable and cannot be Countered.")
	.setThumbnail('https://i.imgur.com/zOiq2Ic.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186>	**Human Torch (Passive)** \n \n**Flame On! • T4 Upgrade** \n \nOn Turn, flip **1 -> 2** negative effects on self to positive effects.\nGain **+20% -> +30%** Damage. FANTASTIC FOUR and Namor allies gain **+20% -> +30%** Damage.\nGain +10000% Resistance against Bleed.")
	.setThumbnail('https://i.imgur.com/mGPapSX.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186> **Human Torch** \nHuman Torch's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:johnnystorm:663750493478322186> **Human Torch** \nHuman Torch is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'juggernaut' || command === 'jugg' || command === 'juggs') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Basic)** \n \n**Overwhelming Blow • T4 Upgrade** \n \nAttack primary target for **250% -> 290%** damage. Gain +1 Charged, up to a maximum of 4. **80% -> 100%** chance to gain Ability Energy. This attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/CBXhFrO.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Special)** \n \n**Immovable Object • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt + Defense Up for 2 turns + Immunity + Deathproof + **1 -> 2** Regeneration.\nIf Magneto is an ally, gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/KWVh15e.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Ultimate)** \n \n**Crushing Charge • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary and adjacent targets for **320% -> 380%** damage. Damage is increased by 80% per Charged.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/I4YIICo.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Passive)** \n \n**I'm the Juggernaut! • T4 Upgrade** \n \nOn Turn, gain Charged, up to a maximum of 4. On Spawn, clear all but one stack of Charged. If any Charged were cleared, fill Speed Bar by 40%.\nIf Magneto is an ally, when an enemy attacks this character, fill Speed Bar by **15% -> 20%**.\nGain +5% Max Health\nGain **+5% -> +10%** Resistance\nGain +1000% Resistance while he has Immunity.\nGain +1000% Resistance against Stun.")
	.setThumbnail('https://i.imgur.com/WaM6O1k.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Basic)** \n \n**Overwhelming Blow • T4 Upgrade** \n \nAttack primary target for **250% -> 290%** damage. Gain +1 Charged, up to a maximum of 4. **80% -> 100%** chance to gain Ability Energy. This attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/CBXhFrO.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Special)** \n \n**Immovable Object • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt + Defense Up for 2 turns + Immunity + Deathproof + **1 -> 2** Regeneration.\nIf Magneto is an ally, gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/KWVh15e.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Ultimate)** \n \n**Crushing Charge • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary and adjacent targets for **320% -> 380%** damage. Damage is increased by 80% per Charged.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/I4YIICo.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970>	**Juggernaut (Passive)** \n \n**I'm the Juggernaut! • T4 Upgrade** \n \nOn Turn, gain Charged, up to a maximum of 4. On Spawn, clear all but one stack of Charged. If any Charged were cleared, fill Speed Bar by 40%.\nIf Magneto is an ally, when an enemy attacks this character, fill Speed Bar by **15% -> 20%**.\nGain +5% Max Health\nGain **+5% -> +10%** Resistance\nGain +1000% Resistance while he has Immunity.\nGain +1000% Resistance against Stun.")
	.setThumbnail('https://i.imgur.com/WaM6O1k.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970> **Juggernaut** \nJuggernaut's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:juggernaut:663750495558696970> **Juggernaut** \nJuggernaut is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'killmonger' || command === 'kill' || command === 'monger' || command === 'km') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Basic)** \n \n**Focus Fire • T4 Upgrade** \n \nAttack primary target for **290% -> 330%** damage + **20% -> 30%** Drain. On Crit, Bonus Attack **1-2 -> 2** times for **200% -> 240%** damage + **20% -> 30%** Drain and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/u1dFKdS.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Special)** \n \n**Full Auto • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **160% -> 200%** damage 3 times. On Crit, gain Offense Up and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/qsNve8S.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Ultimate)** \n \n**Battle Frenzy • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **270% -> 300%** damage. Chain to **5 -> all** adjacent targets for **210% -> 240%** damage.\nOn Crit, attack all enemies for **175% -> 200%** damage and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/DRa9myB.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Passive)** \n \n**Retribution • T4 Upgrade** \n \nOn Defense Up, attack the most injured enemy for **260% -> 330%** damage.\nOn Kill, heal for 10% of this character's Max Health.\nGain +20% Drain.\nGain +20% Crit Chance per Charged.\nIn RAIDS, +20% chance to Counterattack. In RAIDS, gain +20% chance to Counterattack for each WAKANDAN ally.")
	.setThumbnail('https://i.imgur.com/l2VAvX5.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Basic)** \n \n**Focus Fire • T4 Upgrade** \n \nAttack primary target for **290% -> 330%** damage + **20% -> 30%** Drain. On Crit, Bonus Attack **1-2 -> 2** times for **200% -> 240%** damage + **20% -> 30%** Drain and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/u1dFKdS.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Special)** \n \n**Full Auto • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **160% -> 200%** damage 3 times. On Crit, gain Offense Up and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/qsNve8S.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Ultimate)** \n \n**Battle Frenzy • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **270% -> 300%** damage. Chain to **5 -> all** adjacent targets for **210% -> 240%** damage.\nOn Crit, attack all enemies for **175% -> 200%** damage and lose Charged. Otherwise, gain +1 Charged up to a maximum of 5.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/DRa9myB.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566>	**Killmonger (Passive)** \n \n**Retribution • T4 Upgrade** \n \nOn Defense Up, attack the most injured enemy for **260% -> 330%** damage.\nOn Kill, heal for 10% of this character's Max Health.\nGain +20% Drain.\nGain +20% Crit Chance per Charged.\nIn RAIDS, +20% chance to Counterattack. In RAIDS, gain +20% chance to Counterattack for each WAKANDAN ally.")
	.setThumbnail('https://i.imgur.com/l2VAvX5.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566> **Killmonger** \nKillmonger's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:killmonger:663750495608897566> **Killmonger** \nKillmonger is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'kingpin' || command === 'king' || command === 'pin') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904>	**Kingpin (Basic)** \n \n**Batter • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. 50% chance to gain an Assist.")
	.setThumbnail('https://i.imgur.com/JIX9WAF.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904>	**Kingpin (Special)** \n \n**Crime Lord • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **2 -> 2-3** Bodyguards at **300% -> 340%** normal damage and 100% of normal Health. Bodyguard gains Taunt on self when Summoned.")
	.setThumbnail('https://i.imgur.com/KHCRGmc.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904>	**Kingpin (Ultimate)** \n \n**Boss's Orders • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Defense Up to all allies for 2 turns. Apply Offense Up to 5 allies. **20% -> 30%** chance for Assist from allies **twice as likely to select a VILLAIN or MERCENARY for Assist**.")
	.setThumbnail('https://i.imgur.com/7WJNDGF.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904>	**Kingpin (Passive)** \n \n**Mastermind • T4 Upgrade** \n \nAt the start of each VILLAIN ally's turn, **20% -> 25%** chance for an ally to gain Team Attack for that turn.")
	.setThumbnail('https://i.imgur.com/NHeHRDS.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904>	**Kingpin (Basic)** \n \n**Batter • T4 Upgrade** \n \nAttack primary target for **210% -> 270%** damage. 50% chance to gain an Assist.")
	.setThumbnail('https://i.imgur.com/JIX9WAF.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904>	**Kingpin (Special)** \n \n**Crime Lord • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **2 -> 2-3** Bodyguards at **300% -> 340%** normal damage and 100% of normal Health. Bodyguard gains Taunt on self when Summoned.")
	.setThumbnail('https://i.imgur.com/KHCRGmc.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904>	**Kingpin (Ultimate)** \n \n**Boss's Orders • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Defense Up to all allies for 2 turns. Apply Offense Up to 5 allies. **20% -> 30%** chance for Assist from allies **twice as likely to select a VILLAIN or MERCENARY for Assist**.")
	.setThumbnail('https://i.imgur.com/7WJNDGF.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904>	**Kingpin (Passive)** \n \n**Mastermind • T4 Upgrade** \n \nAt the start of each VILLAIN ally's turn, **20% -> 25%** chance for an ally to gain Team Attack for that turn.")
	.setThumbnail('https://i.imgur.com/NHeHRDS.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904> **Kingpin** \nKingpin's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kingpin:663750493612539904> **Kingpin** \nKingpin is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'korath' || command === 'the' || command === 'pursuer') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547>	**Korath the Pursuer (Basic)** \n \n**Smart-linked Rifle • T4 Upgrade** \n \nAttack primary target for 190% damage + **30% -> 40%** Piercing. **90% -> 100%** chance to apply Slow for 1 turn.")
	.setThumbnail('https://i.imgur.com/GPVogcS.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547>	**Korath the Pursuer (Special)** \n \n**Target Lock • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **200% -> 260%** damage. Apply Taunt to target for 1 turn. Gain an Assist from an ally **greater assist chance from MERCENARY and KREE allies**.\nGain +750% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/HsDRVps.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547>	**Korath the Pursuer (Ultimate)** \n \n**Takedown Shot • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **450% -> 570%** damage + apply Heal Block for 2 turns. 50% chance to apply Ability Block.")
	.setThumbnail('https://i.imgur.com/5u8mljD.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547>	**Korath the Pursuer (Passive)** \n \n**Hot Pursuit • T4 Upgrade** \n \nOn Enemy Death, gain Speed Up for **1 -> 2** turns. On Spawn, gain Speed Up for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/a8ePGSF.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547>	**Korath the Pursuer (Basic)** \n \n**Smart-linked Rifle • T4 Upgrade** \n \nAttack primary target for 190% damage + **30% -> 40%** Piercing. **90% -> 100%** chance to apply Slow for 1 turn.")
	.setThumbnail('https://i.imgur.com/GPVogcS.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547>	**Korath the Pursuer (Special)** \n \n**Target Lock • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **200% -> 260%** damage. Apply Taunt to target for 1 turn. Gain an Assist from an ally **greater assist chance from MERCENARY and KREE allies**.\nGain +750% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/HsDRVps.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547>	**Korath the Pursuer (Ultimate)** \n \n**Takedown Shot • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **450% -> 570%** damage + apply Heal Block for 2 turns. 50% chance to apply Ability Block.")
	.setThumbnail('https://i.imgur.com/5u8mljD.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547>	**Korath the Pursuer (Passive)** \n \n**Hot Pursuit • T4 Upgrade** \n \nOn Enemy Death, gain Speed Up for **1 -> 2** turns. On Spawn, gain Speed Up for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/a8ePGSF.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547> **Korath the Pursuer** \nKorath the Pursuer's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:korath:663750493331521547> **Korath the Pursuer** \nKorath the Pursuer is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'kreecyborg' || command === 'cyborg') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreecyborg:663750490512687116>	**Kree Cyborg (Basic)** \n \n**Energy Blaster • T4 Upgrade** \n \nAttack primary target for 270% damage.\nOn Kill, Chain to 1 adjacent target for 270% damage and grant 1 Ability Energy to **1-2 -> 2** random allies.")
	.setThumbnail('https://i.imgur.com/oF9Zte6.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreecyborg:663750490512687116>	**Kree Cyborg (Special)** \n \n**Auto Targeter • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **310% -> 360%** damage + **80% -> 100%** chance to Bonus Attack for 260% damage.")
	.setThumbnail('https://i.imgur.com/MzXF5Pn.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreecyborg:663750490512687116>	**Kree Cyborg (Passive)** \n \n**Integrated Systems • T4 Upgrade** \n \nOn Enemy Taunt, **75% -> 100%** chance to gain Offense Up for 2 turns and apply Offense Up to a KREE ally for 2 turns.\nGain +5% Speed per other KREE character. This is applied after any character has taken a turn.")
	.setThumbnail('https://i.imgur.com/ThxjYBS.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreecyborg:663750490512687116>	**Kree Cyborg (Basic)** \n \n**Energy Blaster • T4 Upgrade** \n \nAttack primary target for 270% damage.\nOn Kill, Chain to 1 adjacent target for 270% damage and grant 1 Ability Energy to **1-2 -> 2** random allies.")
	.setThumbnail('https://i.imgur.com/oF9Zte6.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreecyborg:663750490512687116>	**Kree Cyborg (Special)** \n \n**Auto Targeter • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **310% -> 360%** damage + **80% -> 100%** chance to Bonus Attack for 260% damage.")
	.setThumbnail('https://i.imgur.com/MzXF5Pn.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreecyborg:663750490512687116>	**Kree Cyborg (Passive)** \n \n**Integrated Systems • T4 Upgrade** \n \nOn Enemy Taunt, **75% -> 100%** chance to gain Offense Up for 2 turns and apply Offense Up to a KREE ally for 2 turns.\nGain +5% Speed per other KREE character. This is applied after any character has taken a turn.")
	.setThumbnail('https://i.imgur.com/ThxjYBS.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreecyborg:663750490512687116> **Kree Cyborg** \nKree Cyborg's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreecyborg:663750490512687116> **Kree Cyborg** \nKree Cyborg is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'Kree Royal Guard' || command === 'dp' || command === 'dead' || command === 'pool') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeguard:663750493398368276>	**Kree Royal Guard (Basic)** \n \n**Guardian Blaster • T4 Upgrade** \n \nAttack primary target for 180% damage. **80% -> 100%** chance to gain Counter.")
	.setThumbnail('https://i.imgur.com/Q1BWarM.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeguard:663750493398368276>	**Kree Royal Guard (Special)** \n \n**Call to Glory • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt + Defense Up. Apply Defense Up to all KREE allies. Heal self for **1300 -> 1850** Health + 10% of Max Health.\nIf Ronan is an ally, heal for an additional **1300 -> 1850** Health + 10% of Max Health.")
	.setThumbnail('https://i.imgur.com/DpryBis.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeguard:663750493398368276>	**Kree Royal Guard (Passive)** \n \n**Royal Guard Armor • T4 Upgrade** \n \nWhile in Taunt, when attacked, **50% -> 75%** chance to generate 1 Ability Energy for a random KREE ally.\nGain **+15% -> +20%** Armor. Gain +5% Armor per KREE ally.")
	.setThumbnail('https://i.imgur.com/s7yQlOz.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeguard:663750493398368276>	**Kree Royal Guard (Basic)** \n \n**Guardian Blaster • T4 Upgrade** \n \nAttack primary target for 180% damage. **80% -> 100%** chance to gain Counter.")
	.setThumbnail('https://i.imgur.com/Q1BWarM.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeguard:663750493398368276>	**Kree Royal Guard (Special)** \n \n**Call to Glory • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt + Defense Up. Apply Defense Up to all KREE allies. Heal self for **1300 -> 1850** Health + 10% of Max Health.\nIf Ronan is an ally, heal for an additional **1300 -> 1850** Health + 10% of Max Health.")
	.setThumbnail('https://i.imgur.com/DpryBis.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeguard:663750493398368276>	**Kree Royal Guard (Passive)** \n \n**Royal Guard Armor • T4 Upgrade** \n \nWhile in Taunt, when attacked, **50% -> 75%** chance to generate 1 Ability Energy for a random KREE ally.\nGain **+15% -> +20%** Armor. Gain +5% Armor per KREE ally.")
	.setThumbnail('https://i.imgur.com/s7yQlOz.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeguard:663750493398368276> **Kree Royal Guard** \nKree Royal Guard's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeguard:663750493398368276> **Kree Royal Guard** \nKree Royal Guard is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'kreenoble' || command === 'noble') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreenoble:663750496569524255>	**Kree Noble (Basic)** \n \n**Kree Sidearm • T4 Upgrade** \n \nAttack primary target for 270% damage.\nIf target has a positive ability, (75% -> 100%) chance to:\nGenerate 1 Ability Energy for 1-2 allies.\nClear 1 positive effect from the target.")
	.setThumbnail('https://i.imgur.com/0HbstOl.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreenoble:663750496569524255>	**Kree Noble (Special)** \n \n**Imperial Decree • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Assist Now to an adjacent ally. If that ally is KREE, they also gain Offense Up. Attack primary target for (465 -> 530%) damage.")
	.setThumbnail('https://i.imgur.com/FsIfDnm.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreenoble:663750496569524255>	**Kree Noble (Passive)** \n \n**Loyalist • T4 Upgrade** \n \nOn Turn, clear 1 negative effect from (1 -> 2) allies that have negative effects. If those allies are KREE, remove an additional negative effect.")
	.setThumbnail('https://i.imgur.com/IZCzP1j.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreenoble:663750496569524255>	**Kree Noble (Basic)** \n \n**Kree Sidearm • T4 Upgrade** \n \nAttack primary target for 270% damage.\nIf target has a positive ability, (75% -> 100%) chance to:\nGenerate 1 Ability Energy for 1-2 allies.\nClear 1 positive effect from the target.")
	.setThumbnail('https://i.imgur.com/0HbstOl.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreenoble:663750496569524255>	**Kree Noble (Special)** \n \n**Imperial Decree • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Assist Now to an adjacent ally. If that ally is KREE, they also gain Offense Up. Attack primary target for (465 -> 530%) damage.")
	.setThumbnail('https://i.imgur.com/FsIfDnm.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreenoble:663750496569524255>	**Kree Noble (Passive)** \n \n**Loyalist • T4 Upgrade** \n \nOn Turn, clear 1 negative effect from (1 -> 2) allies that have negative effects. If those allies are KREE, remove an additional negative effect.")
	.setThumbnail('https://i.imgur.com/IZCzP1j.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreenoble:663750496569524255> **Kree Noble** \nKree Noble's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreenoble:663750496569524255> **Kree Noble** \nKree Noble is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'kreeoracle' || command === 'oracle') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeoracle:663750494795202562>	**Kree Oracle (Basic)** \n \n**Kree Energy Pistol • T4 Upgrade** \n \nAttack primary target for 270% damage. **80% -> 100%** generate 1 Ability Energy to 1 random ally.")
	.setThumbnail('https://i.imgur.com/ioJOGO2.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeoracle:663750494795202562>	**Kree Oracle (Special)** \n \n**Nanomachine Cloud • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Regeneration to all allies for **1 -> 2** turns. Apply an additional Regeneration to Ronan and KREE MINION allies.")
	.setThumbnail('https://i.imgur.com/b3pHwcV.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeoracle:663750494795202562>	**Kree Oracle (Passive)** \n \n**Zeal • T4 Upgrade** \n \nWhenever this character or an ally gains energy, heal them for **1400 -> 2000** Health + 5% of this character's Max Health.\nIf that target is Ronan or a KREE MINION, heal them for **2800 -> 4000** Health + 10% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/n2FeiuX.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeoracle:663750494795202562>	**Kree Oracle (Basic)** \n \n**Kree Energy Pistol • T4 Upgrade** \n \nAttack primary target for 270% damage. **80% -> 100%** generate 1 Ability Energy to 1 random ally.")
	.setThumbnail('https://i.imgur.com/ioJOGO2.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeoracle:663750494795202562>	**Kree Oracle (Special)** \n \n**Nanomachine Cloud • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Regeneration to all allies for **1 -> 2** turns. Apply an additional Regeneration to Ronan and KREE MINION allies.")
	.setThumbnail('https://i.imgur.com/b3pHwcV.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeoracle:663750494795202562>	**Kree Oracle (Passive)** \n \n**Zeal • T4 Upgrade** \n \nWhenever this character or an ally gains energy, heal them for **1400 -> 2000** Health + 5% of this character's Max Health.\nIf that target is Ronan or a KREE MINION, heal them for **2800 -> 4000** Health + 10% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/n2FeiuX.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeoracle:663750494795202562> **Kree Oracle** \nKree Oracle's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreeoracle:663750494795202562> **Kree Oracle** \nKree Oracle is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'kreereaper' || command === 'reaper') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreereaper:663750487346118676>	**Kree Reaper (Basic)** \n \n**Predatory Strike • T4 Upgrade** \n \nAttack primary target for 270% damage + **70% -> 100%** chance to apply Bleed.")
	.setThumbnail('https://i.imgur.com/QKg90v6.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreereaper:663750487346118676>	**Kree Reaper (Special)** \n \n**Ferocious Pursuit • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for 540% damage + apply Heal Block for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/eQx4nPB.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreereaper:663750487346118676>	**Kree Reaper (Passive)** \n \n**Hunter-Killer • T4 Upgrade** \n \nOn Crit, heal self for 15% of Max Health and generate 1 Ability Energy for 1-2 random KREE allies.\nGain **+10% -> +15%** Crit Chance.\nGain +5% Crit Chance per KREE MINION ally.")
	.setThumbnail('https://i.imgur.com/HkiAKlf.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreereaper:663750487346118676>	**Kree Reaper (Basic)** \n \n**Predatory Strike • T4 Upgrade** \n \nAttack primary target for 270% damage + **70% -> 100%** chance to apply Bleed.")
	.setThumbnail('https://i.imgur.com/QKg90v6.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreereaper:663750487346118676>	**Kree Reaper (Special)** \n \n**Ferocious Pursuit • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for 540% damage + apply Heal Block for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/eQx4nPB.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreereaper:663750487346118676>	**Kree Reaper (Passive)** \n \n**Hunter-Killer • T4 Upgrade** \n \nOn Crit, heal self for 15% of Max Health and generate 1 Ability Energy for 1-2 random KREE allies.\nGain **+10% -> +15%** Crit Chance.\nGain +5% Crit Chance per KREE MINION ally.")
	.setThumbnail('https://i.imgur.com/HkiAKlf.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreereaper:663750487346118676> **Kree Reaper** \nKree Reaper's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:kreereaper:663750487346118676> **Kree Reaper** \nKree Reaper is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'loki' || command === 'godofmischief' || command === 'mischief') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Basic)** \n \n**Eldritch Bolt • T4 Upgrade** \n \nAttack primary target for **230% -> 260%** Piercing. **40% -> 50%** chance to gain Evade.")
	.setThumbnail('https://i.imgur.com/kW2iCC4.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Special)** \n \n**Mind Control • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Defense Down to primary target for 2 turns.\nOn WAR DEFENSE, with 4 or more ASGARDIAN allies, apply Taunt to primary target.\nMind Control 1 enemy to attack the primary target + **75% -> 100%** chance to control a second enemy. The controlled enemies gain +25% Damage for this attack.")
	.setThumbnail('https://i.imgur.com/1hjIgKf.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Ultimate)** \n \n**Mirror Image • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nApply Stealth to self and all allies except Mirror Images for **1 -> 2** turns.\nSummon 2-3 Mirror Images at **300% -> 340%** of normal Damage and 150% of normal Health. Mirror Images gain Evade.")
	.setThumbnail('https://i.imgur.com/drVwLcu.png')
	.setFooter("**Mirror Images only have Basic attacks, and do not count as ASGARDIANS.**")
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Passive)** \n \n**God of Mischief • T4 Upgrade** \n \nOn Spawn, gain 15% Speed Bar. MYSTIC CONTROLLER allies gain 10% Speed Bar.\nApply **-20% -> -30%** Resistance to all enemies.\nGain +20% Focus. MYSTIC CONTROLLER allies gain +20% Focus.\nGain +20% Resistance. MYSTIC CONTROLLER allies gain 20% Resistance.\nOn Turn, heal self for 5% of Max Health + 5% of Max Health per non-minion ASGARDIAN ally.\nWhen an ASGARDIAN ally drops below 50% Max Health, apply Stealth to that ally.")
	.setThumbnail('https://i.imgur.com/HGc4Oed.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Basic)** \n \n**Eldritch Bolt • T4 Upgrade** \n \nAttack primary target for **230% -> 260%** Piercing. **40% -> 50%** chance to gain Evade.")
	.setThumbnail('https://i.imgur.com/kW2iCC4.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Special)** \n \n**Mind Control • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Defense Down to primary target for 2 turns.\nOn WAR DEFENSE, with 4 or more ASGARDIAN allies, apply Taunt to primary target.\nMind Control 1 enemy to attack the primary target + **75% -> 100%** chance to control a second enemy. The controlled enemies gain +25% Damage for this attack.")
	.setThumbnail('https://i.imgur.com/1hjIgKf.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Ultimate)** \n \n**Mirror Image • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nApply Stealth to self and all allies except Mirror Images for **1 -> 2** turns.\nSummon 2-3 Mirror Images at **300% -> 340%** of normal Damage and 150% of normal Health. Mirror Images gain Evade.")
	.setThumbnail('https://i.imgur.com/drVwLcu.png')
	.setFooter("**Mirror Images only have Basic attacks, and do not count as ASGARDIANS.**")
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591>	**Loki (Passive)** \n \n**God of Mischief • T4 Upgrade** \n \nOn Spawn, gain 15% Speed Bar. MYSTIC CONTROLLER allies gain 10% Speed Bar.\nApply **-20% -> -30%** Resistance to all enemies.\nGain +20% Focus. MYSTIC CONTROLLER allies gain +20% Focus.\nGain +20% Resistance. MYSTIC CONTROLLER allies gain 20% Resistance.\nOn Turn, heal self for 5% of Max Health + 5% of Max Health per non-minion ASGARDIAN ally.\nWhen an ASGARDIAN ally drops below 50% Max Health, apply Stealth to that ally.")
	.setThumbnail('https://i.imgur.com/HGc4Oed.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591> **Loki** \nLoki's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:loki:663750495139266591> **Loki** \nLoki is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'luke' || command === 'cage' || command === 'lc') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Basic)** \n \n**Beat Up • T4 Upgrade** \n \n30% chance to apply Assist Now to a random HERO ally. If that ally is a DEFENDER they also gain Offense Up.\nAttack primary target for **290% -> 330%** damage.")
	.setThumbnail('https://i.imgur.com/i8Mz7f5.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Special)** \n \n**Bring it On! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt for 2 turns + 2 Regeneration. Clear **2 -> all** negative effects from self.\nApply Regeneration to all DEFENDER allies.")
	.setThumbnail('https://i.imgur.com/Nk0iZmf.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Ultimate)** \n \n**Unbreakable • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Defense Up for 2 turns + Deathproof.\nApply Defense Up to all DEFENDER allies for 2 turns. Apply Defense Up to all additional allies. Generate **1-2 -> 1-3** Ability Energy for random allies.")
	.setThumbnail('https://i.imgur.com/fNLZxtq.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Passive)** \n \n**Power Man • T4 Upgrade** \n \nGain +5% Max Health per DEFENDER ally.\nGain +5% Armor.\nGain **+10% -> +15%** Max Health.")
	.setThumbnail('https://i.imgur.com/l7OsOFK.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Basic)** \n \n**Beat Up • T4 Upgrade** \n \n30% chance to apply Assist Now to a random HERO ally. If that ally is a DEFENDER they also gain Offense Up.\nAttack primary target for **290% -> 330%** damage.")
	.setThumbnail('https://i.imgur.com/i8Mz7f5.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Special)** \n \n**Bring it On! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt for 2 turns + 2 Regeneration. Clear **2 -> all** negative effects from self.\nApply Regeneration to all DEFENDER allies.")
	.setThumbnail('https://i.imgur.com/Nk0iZmf.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Ultimate)** \n \n**Unbreakable • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Defense Up for 2 turns + Deathproof.\nApply Defense Up to all DEFENDER allies for 2 turns. Apply Defense Up to all additional allies. Generate **1-2 -> 1-3** Ability Energy for random allies.")
	.setThumbnail('https://i.imgur.com/fNLZxtq.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936>	**Luke Cage (Passive)** \n \n**Power Man • T4 Upgrade** \n \nGain +5% Max Health per DEFENDER ally.\nGain +5% Armor.\nGain **+10% -> +15%** Max Health.")
	.setThumbnail('https://i.imgur.com/l7OsOFK.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936> **Luke Cage** \nLuke Cage's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:lukecage:663750493172006936> **Luke Cage** \nLuke Cage is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'magneto' || command === 'mag' || command === 'neto') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Basic)** \n \n**Magnetic Force • T4 Upgrade** \n \nAttack primary target for **190% -> 220%** damage + 20% Piercing. Chain to 1-2 additional targets for **160% -> 190%** damage + 20% Piercing.")
	.setThumbnail('https://i.imgur.com/7Al4uBi.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Special)** \n \n**Polarized Beam • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **210% -> 240%** damage + 20% Piercing + apply Disrupted for 2 turns + apply Slow for 2 turns + remove **2 -> all** positive effects.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/DMdU1aN.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Ultimate)** \n \n**Magnetic Vortex • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nPull all enemies up to 2 spaces toward the primary target, then attack primary and targets within 2 spaces for **210% -> 240%** damage + apply Blind.\nThis attack is Unavoidable and cannot be Counterattacked.")
	.setThumbnail('https://i.imgur.com/TsiNlf2.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Passive)** \n \n**Brotherhood of Mutants • T4 Upgrade** \n \nOn Spawn, fill 15% Speed Bar. Fill 15% Speed Bar per BROTHERHOOD ally. On enemy Crit, apply Speed Up to self and all BROTHERHOOD allies.\nGain **+30% -> +50%** Focus. BROTHERHOOD allies gain **+30% -> +50%** Focus.\nGain **+20% -> +30%** Max Health. BROTHERHOOD allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/FxgCNd0.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Basic)** \n \n**Magnetic Force • T4 Upgrade** \n \nAttack primary target for **190% -> 220%** damage + 20% Piercing. Chain to 1-2 additional targets for **160% -> 190%** damage + 20% Piercing.")
	.setThumbnail('https://i.imgur.com/7Al4uBi.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Special)** \n \n**Polarized Beam • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **210% -> 240%** damage + 20% Piercing + apply Disrupted for 2 turns + apply Slow for 2 turns + remove **2 -> all** positive effects.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/DMdU1aN.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Ultimate)** \n \n**Magnetic Vortex • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nPull all enemies up to 2 spaces toward the primary target, then attack primary and targets within 2 spaces for **210% -> 240%** damage + apply Blind.\nThis attack is Unavoidable and cannot be Counterattacked.")
	.setThumbnail('https://i.imgur.com/TsiNlf2.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810>	**Magneto (Passive)** \n \n**Brotherhood of Mutants • T4 Upgrade** \n \nOn Spawn, fill 15% Speed Bar. Fill 15% Speed Bar per BROTHERHOOD ally. On enemy Crit, apply Speed Up to self and all BROTHERHOOD allies.\nGain **+30% -> +50%** Focus. BROTHERHOOD allies gain **+30% -> +50%** Focus.\nGain **+20% -> +30%** Max Health. BROTHERHOOD allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/FxgCNd0.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810> **Magneto** \nMagneto's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:magneto:663750493419339810> **Magneto** \nMagneto is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'mantis' || command === 'mant' || command === 'manti') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808>	**Mantis (Basic)** \n \n**Sleeeeep • T4 Upgrade** \n \nAttack primary target for **200% -> 240%** damage. If Charged, then in addition, Stun the target. Then lose Charged.\nIf Drax is an ally, apply Deflect to Drax.")
	.setThumbnail('https://i.imgur.com/khpgArI.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808>	**Mantis (Special)** \n \n**Empathy • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nHeal self and adjacent allies for **2750 -> 3000** Health + 15% of this character's Max Health. Heal all additional allies for **1500 -> 1750** Health + 10% of this character's Max Health. **75% -> 100%** chance to apply Regeneration to self and adjacent allies.\nIn RAIDS, apply additional Regeneration to all allies.")
	.setThumbnail('https://i.imgur.com/2gfaB83.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808>	**Mantis (Ultimate)** \n \n**Soothe • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nRedistribute Health between self and lowest health ally evenly + heal self and that ally for **1500 -> 2000**.\nIn RAIDS, Transfer **1-2 -> 2** negative effects from both self and that ally to primary target. Clear **1-2 -> 2** positive effects from primary target.\nThis ability cannot target summoned allies.")
	.setThumbnail('https://i.imgur.com/D5rlK2q.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808>	**Mantis (Passive)** \n \n**Will to Power • T4 Upgrade** \n \nOn Spawn, **75% -> 100%** chance to gain Charged.\nOn Turn, Heal for 15% of this character's Max Health.\nGain +5% Max Health per GUARDIAN ally.")
	.setThumbnail('https://i.imgur.com/0B0oj9F.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808>	**Mantis (Basic)** \n \n**Sleeeeep • T4 Upgrade** \n \nAttack primary target for **200% -> 240%** damage. If Charged, then in addition, Stun the target. Then lose Charged.\nIf Drax is an ally, apply Deflect to Drax.")
	.setThumbnail('https://i.imgur.com/khpgArI.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808>	**Mantis (Special)** \n \n**Empathy • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nHeal self and adjacent allies for **2750 -> 3000** Health + 15% of this character's Max Health. Heal all additional allies for **1500 -> 1750** Health + 10% of this character's Max Health. **75% -> 100%** chance to apply Regeneration to self and adjacent allies.\nIn RAIDS, apply additional Regeneration to all allies.")
	.setThumbnail('https://i.imgur.com/2gfaB83.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808>	**Mantis (Ultimate)** \n \n**Soothe • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nRedistribute Health between self and lowest health ally evenly + heal self and that ally for **1500 -> 2000**.\nIn RAIDS, Transfer **1-2 -> 2** negative effects from both self and that ally to primary target. Clear **1-2 -> 2** positive effects from primary target.\nThis ability cannot target summoned allies.")
	.setThumbnail('https://i.imgur.com/D5rlK2q.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808>	**Mantis (Passive)** \n \n**Will to Power • T4 Upgrade** \n \nOn Spawn, **75% -> 100%** chance to gain Charged.\nOn Turn, Heal for 15% of this character's Max Health.\nGain +5% Max Health per GUARDIAN ally.")
	.setThumbnail('https://i.imgur.com/0B0oj9F.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808> **Mantis** \nMantis's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mantis:663750493583179808> **Mantis** \nMantis is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'mbaku' || command === 'baku' || command === 'mba' || command === 'bak') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449>	**M'Baku (Basic)** \n \n**Cudgel Slam • T4 Upgrade** \n \nAttack primary target for **260% -> 300%** damage. On target Dodge, Bonus Attack for **260% -> 300%** damage.")
	.setThumbnail('https://i.imgur.com/Qxfd2Cq.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449>	**M'Baku (Special)** \n \n**Call of the Mountain • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt + **1-2 -> 2** Counter. Gain **+1 -> +2** Charged, up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/221kYD0.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449>	**M'Baku (Ultimate)** \n \n**Jabari Avalanche • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target and all adjacent targets for **260% -> 320%** damage. On Kill, Chain to target adjacent to primary and attack that target and all adjacent targets for **260% -> 320%** damage.")
	.setThumbnail('https://i.imgur.com/tzXHtF0.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449>	**M'Baku (Passive)** \n \n**Ancestral Might • T4 Upgrade** \n \nOn Defense Up, Heal for **10% -> 15%** of Max Health. If already at Max Health, gain +1 Defense Up.\nWhile Charged, gain +100% Block Chance and **+25% -> +50%** Block Amount.\nOn Block, lose 1 Charged.\nIn RAIDS, on Block, Heal for 10% of Max Health.\nIn RAIDS gain +25% Block chance.")
	.setThumbnail('https://i.imgur.com/RkDYLql.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449>	**M'Baku (Basic)** \n \n**Cudgel Slam • T4 Upgrade** \n \nAttack primary target for **260% -> 300%** damage. On target Dodge, Bonus Attack for **260% -> 300%** damage.")
	.setThumbnail('https://i.imgur.com/Qxfd2Cq.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449>	**M'Baku (Special)** \n \n**Call of the Mountain • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt + **1-2 -> 2** Counter. Gain **+1 -> +2** Charged, up to a maximum of 5.")
	.setThumbnail('https://i.imgur.com/221kYD0.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449>	**M'Baku (Ultimate)** \n \n**Jabari Avalanche • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target and all adjacent targets for **260% -> 320%** damage. On Kill, Chain to target adjacent to primary and attack that target and all adjacent targets for **260% -> 320%** damage.")
	.setThumbnail('https://i.imgur.com/tzXHtF0.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449>	**M'Baku (Passive)** \n \n**Ancestral Might • T4 Upgrade** \n \nOn Defense Up, Heal for **10% -> 15%** of Max Health. If already at Max Health, gain +1 Defense Up.\nWhile Charged, gain +100% Block Chance and **+25% -> +50%** Block Amount.\nOn Block, lose 1 Charged.\nIn RAIDS, on Block, Heal for 10% of Max Health.\nIn RAIDS gain +25% Block chance.")
	.setThumbnail('https://i.imgur.com/RkDYLql.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449> **M'Baku** \nM'Baku's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mbaku:663750495621480449> **M'Baku** \nM'Baku is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'mercenarylieutenant' || command === 'merc' || command === 'leui' || command === 'lieu') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercleuitenant:663750495462227978>	**Mercenary Lieutenant (Basic)** \n \n**Cover Fire • T4 Upgrade** \n \nAttack primary target for **240% -> 290%** damage. Grant 1 ability energy to an ally.")
	.setThumbnail('https://i.imgur.com/iBLkNH0.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercleuitenant:663750495462227978>	**Mercenary Lieutenant (Special)** \n \n**Call the Shots • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Offense Up to **4 -> all** allies for 1 turn. Apply Speed Up to **4 -> all** allies for 1 turn.")
	.setThumbnail('https://i.imgur.com/FfBLQJp.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercleuitenant:663750495462227978>	**Mercenary Lieutenant (Passive)** \n \n**Squad Coherency • T4 Upgrade** \n \nOn Turn, **30% -> 40%** chance to heal Lowest Health ally for 20% of this character's Max Health. If ally is MERCENARY, heal for +30% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/WbRu0sF.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercleuitenant:663750495462227978>	**Mercenary Lieutenant (Basic)** \n \n**Cover Fire • T4 Upgrade** \n \nAttack primary target for **240% -> 290%** damage. Grant 1 ability energy to an ally.")
	.setThumbnail('https://i.imgur.com/iBLkNH0.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercleuitenant:663750495462227978>	**Mercenary Lieutenant (Special)** \n \n**Call the Shots • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Offense Up to **4 -> all** allies for 1 turn. Apply Speed Up to **4 -> all** allies for 1 turn.")
	.setThumbnail('https://i.imgur.com/FfBLQJp.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercleuitenant:663750495462227978>	**Mercenary Lieutenant (Passive)** \n \n**Squad Coherency • T4 Upgrade** \n \nOn Turn, **30% -> 40%** chance to heal Lowest Health ally for 20% of this character's Max Health. If ally is MERCENARY, heal for +30% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/WbRu0sF.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercleuitenant:663750495462227978> **Mercenary Lieutenant** \nMercenary Lieutenant's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercleuitenant:663750495462227978> **Mercenary Lieutenant** \nMercenary Lieutenant is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'mercenaryriotguard' || command === 'riot' || command === 'guard') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercriotguard:663750491431370776>	**Mercenary Riot Guard (Basic)** \n \n**Combat Pistol • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/TXLau8I.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercriotguard:663750491431370776>	**Mercenary Riot Guard (Special)** \n \n**Rampart • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt for 1 turn. Gain Defense Up on self for **2 -> 3** turns. Apply Defense Up to 4 Lowest Health allies for 1 turn.")
	.setThumbnail('https://i.imgur.com/dwZiUUv.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercriotguard:663750491431370776>	**Mercenary Riot Guard (Passive)** \n \n**Riot Suppression • T4 Upgrade** \n \nGain **+20% -> +25%** Block chance.")
	.setThumbnail('https://i.imgur.com/dSsVZR9.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercriotguard:663750491431370776>	**Mercenary Riot Guard (Basic)** \n \n**Combat Pistol • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/TXLau8I.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercriotguard:663750491431370776>	**Mercenary Riot Guard (Special)** \n \n**Rampart • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt for 1 turn. Gain Defense Up on self for **2 -> 3** turns. Apply Defense Up to 4 Lowest Health allies for 1 turn.")
	.setThumbnail('https://i.imgur.com/dwZiUUv.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercriotguard:663750491431370776>	**Mercenary Riot Guard (Passive)** \n \n**Riot Suppression • T4 Upgrade** \n \nGain **+20% -> +25%** Block chance.")
	.setThumbnail('https://i.imgur.com/dSsVZR9.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercriotguard:663750491431370776> **Mercenary Riot Guard** \nMercenary Riot Guard's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercriotguard:663750491431370776> **Mercenary Riot Guard** \nMercenary Riot Guard is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'mercenarysniper' || command === 'merc' || command === 'sniper') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercsniper:663750493750820864>	**Mercenary Sniper (Basic)** \n \n**Sniper Shot • T4 Upgrade** \n \nAttack primary target for 290% damage and **20% -> 25%** Piercing.")
	.setThumbnail('https://i.imgur.com/k7dZjaX.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercsniper:663750493750820864>	**Mercenary Sniper (Special)** \n \n**Steady Aim • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **360% -> 450%** damage and **40% -> 50%** Piercing.")
	.setThumbnail('https://i.imgur.com/kLPTxMO.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercsniper:663750493750820864>	**Mercenary Sniper (Passive)** \n \n**High Velocity • T4 Upgrade** \n \nGain +15% Damage and **+5% -> +10%** Piercing")
	.setThumbnail('https://i.imgur.com/c8nEwTe.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercsniper:663750493750820864>	**Mercenary Sniper (Basic)** \n \n**Sniper Shot • T4 Upgrade** \n \nAttack primary target for 290% damage and **20% -> 25%** Piercing.")
	.setThumbnail('https://i.imgur.com/k7dZjaX.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercsniper:663750493750820864>	**Mercenary Sniper (Special)** \n \n**Steady Aim • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **360% -> 450%** damage and **40% -> 50%** Piercing.")
	.setThumbnail('https://i.imgur.com/kLPTxMO.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercsniper:663750493750820864>	**Mercenary Sniper (Passive)** \n \n**High Velocity • T4 Upgrade** \n \nGain +15% Damage and **+5% -> +10%** Piercing")
	.setThumbnail('https://i.imgur.com/c8nEwTe.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercsniper:663750493750820864> **Mercenary Sniper** \nMercenary Sniper's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mercsniper:663750493750820864> **Mercenary Sniper** \nMercenary Sniper is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'miles' || command === 'mile' || command === 'morales' || command === 'moral') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Basic)** \n \n**Quick Strike • T4 Upgrade** \n \nAttack primary target for **240% -> 280%** damage. If the target has Defense Down, clear 3 positive effect.")
	.setThumbnail('https://i.imgur.com/2IY1dUP.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Special)** \n \n**Venom Shock • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **260% -> 300%** damage + change Speed Bar by -50%. Apply Slow for **1 -> 2** turns + prolong all negative effects by 1. Gain Stealth.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/7c797AE.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Ultimate)** \n \n**Web Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **230% -> 260%** damage. Apply Disrupted to the primary target for 2 turns. Apply Disrupted to **1 -> 2** additional targets.")
	.setThumbnail('https://i.imgur.com/9Fb5mEd.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Passive)** \n \n**Ultimate Spidey • T4 Upgrade** \n \nOn Spawn, gain Stealth. On Turn, apply Defense Down to a random target. If that target already had Defense Down, gain Offense Up instead. This attack is Unavoidable and cannot be blocked.\nDuring Stealth, +50% Dodge Chance.")
	.setThumbnail('https://i.imgur.com/mB3KolU.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Basic)** \n \n**Quick Strike • T4 Upgrade** \n \nAttack primary target for **240% -> 280%** damage. If the target has Defense Down, clear 3 positive effect.")
	.setThumbnail('https://i.imgur.com/2IY1dUP.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Special)** \n \n**Venom Shock • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **260% -> 300%** damage + change Speed Bar by -50%. Apply Slow for **1 -> 2** turns + prolong all negative effects by 1. Gain Stealth.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/7c797AE.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Ultimate)** \n \n**Web Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **230% -> 260%** damage. Apply Disrupted to the primary target for 2 turns. Apply Disrupted to **1 -> 2** additional targets.")
	.setThumbnail('https://i.imgur.com/9Fb5mEd.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<>	**Miles Morales (Passive)** \n \n**Ultimate Spidey • T4 Upgrade** \n \nOn Spawn, gain Stealth. On Turn, apply Defense Down to a random target. If that target already had Defense Down, gain Offense Up instead. This attack is Unavoidable and cannot be blocked.\nDuring Stealth, +50% Dodge Chance.")
	.setThumbnail('https://i.imgur.com/mB3KolU.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<> **Miles Morales** \nMiles Morales's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<> **Miles Morales** \nMiles Morales is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'minnerva' || command === 'min' || command === 'minn' || command === 'minerva') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Basic)** \n \n**Bio-Weapon • T4 Upgrade** \n \nAttack primary target for **170% -> 200%** damage + apply Bleed.\nApply Regeneration to the most injured non-summoned ally.")
	.setThumbnail('https://i.imgur.com/14XjiHu.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Special)** \n \n**Genetic Reconstruction • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal most injured ally for **3000 -> 5000** Health + 15% of this character's Max Health.\nGenerate Ability Energy to a random KREE ally.\nRevive dead ally with 40% Max Health + apply 2 Deathproof.")
	.setThumbnail('https://i.imgur.com/vI6OfS5.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Ultimate)** \n \n**Mass Phlebotomy • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSteal 15% Health from all enemies and redistribute to all allies. All allies receive an additional **4000 -> 5000** Health. This bypasses Heal Block.\nAlways apply Regeneration for 2 turns to all allies.\nAlways apply Bleed for 2 turns to all enemies.\nApply Deflect to all KREE allies.")
	.setThumbnail('https://i.imgur.com/arTUC8y.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Passive)** \n \n**Kree Nanotech • T4 Upgrade** \n \nOn ally Death, change Speed Bar by **20% -> 25%**.\nOn enemy Death, heal the most injured non-summoned ally for 15% of this character's Max Health. If that ally is KREE, also apply a random positive effect.")
	.setThumbnail('https://i.imgur.com/IMGc2RJ.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Basic)** \n \n**Bio-Weapon • T4 Upgrade** \n \nAttack primary target for **170% -> 200%** damage + apply Bleed.\nApply Regeneration to the most injured non-summoned ally.")
	.setThumbnail('https://i.imgur.com/14XjiHu.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Special)** \n \n**Genetic Reconstruction • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal most injured ally for **3000 -> 5000** Health + 15% of this character's Max Health.\nGenerate Ability Energy to a random KREE ally.\nRevive dead ally with 40% Max Health + apply 2 Deathproof.")
	.setThumbnail('https://i.imgur.com/vI6OfS5.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Ultimate)** \n \n**Mass Phlebotomy • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSteal 15% Health from all enemies and redistribute to all allies. All allies receive an additional **4000 -> 5000** Health. This bypasses Heal Block.\nAlways apply Regeneration for 2 turns to all allies.\nAlways apply Bleed for 2 turns to all enemies.\nApply Deflect to all KREE allies.")
	.setThumbnail('https://i.imgur.com/arTUC8y.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954>	**Minnerva (Passive)** \n \n**Kree Nanotech • T4 Upgrade** \n \nOn ally Death, change Speed Bar by **20% -> 25%**.\nOn enemy Death, heal the most injured non-summoned ally for 15% of this character's Max Health. If that ally is KREE, also apply a random positive effect.")
	.setThumbnail('https://i.imgur.com/IMGc2RJ.png') 
	message.channel.send(exampleEmbed4);
}  else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954> **Minnerva** \nMinnerva's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:minnerva:663750495751634954> **Minnerva** \nMinnerva is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'misterfantastic' || command === 'fantastic' || command === 'mrf' || command === 'reed' || command === 'richards') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Basic)** \n \n**Tensile Strength • T4 Upgrade** \n \nAttack primary target for **190% -> 230%** damage. Chain to **2 -> 3** adjacent targets for **150% -> 190%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/Akv0VRQ.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Special)** \n \n**Entangle • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **330% -> 400%** damage + **50% -> 100%** chance to apply Stun.")
	.setThumbnail('https://i.imgur.com/7KGg9V8.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Ultimate)** \n \n**Orbital Assault • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nClear Defense Up from primary target.\nAttack primary target for **390% -> 450%** damage.\nGain +100,000% Extra Focus for this attack.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/M1UKAbS.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Passive)** \n \n**For Science! • T4 Upgrade** \n \nGain **+50% -> +60%** Focus and Resistance for self, FANTASTIC FOUR and Namor allies.\nOn self and each FANTASTIC FOUR ally's turn, 100% chance to apply Assist Now to self, Namor, or a random FANTASTIC FOUR ally. If Assist Now is applied, clear Blind on that target.\nOn Turn, choose **2 -> 3** random enemies. If they have a positive effect, remove 1.")
	.setThumbnail('https://i.imgur.com/7fAovIF.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Basic)** \n \n**Tensile Strength • T4 Upgrade** \n \nAttack primary target for **190% -> 230%** damage. Chain to **2 -> 3** adjacent targets for **150% -> 190%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/Akv0VRQ.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Special)** \n \n**Entangle • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **330% -> 400%** damage + **50% -> 100%** chance to apply Stun.")
	.setThumbnail('https://i.imgur.com/7KGg9V8.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Ultimate)** \n \n**Orbital Assault • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nClear Defense Up from primary target.\nAttack primary target for **390% -> 450%** damage.\nGain +100,000% Extra Focus for this attack.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/M1UKAbS.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488>	**Mister Fantastic (Passive)** \n \n**For Science! • T4 Upgrade** \n \nGain **+50% -> +60%** Focus and Resistance for self, FANTASTIC FOUR and Namor allies.\nOn self and each FANTASTIC FOUR ally's turn, 100% chance to apply Assist Now to self, Namor, or a random FANTASTIC FOUR ally. If Assist Now is applied, clear Blind on that target.\nOn Turn, choose **2 -> 3** random enemies. If they have a positive effect, remove 1.")
	.setThumbnail('https://i.imgur.com/7fAovIF.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488> **Mister Fantastic** \nMister Fantastic's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrfantastic:663750493746495488> **Mister Fantastic** \nMister Fantastic is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'mordo' || command === 'mor' || command === 'mo' || command === 'mord') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Basic)** \n \n**Arcane Scourge • T4 Upgrade** \n \nAttack primary target for 220% damage + apply **1-2 -> 2** random negative effects.")
	.setThumbnail('https://i.imgur.com/e3zrXWe.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Special)** \n \n**Mesmerize • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\n**50% -> 100%** chance to Stun primary target + 50% chance to Blind up to 3 targets. 50% chance to Slow up to 2 targets.")
	.setThumbnail('https://i.imgur.com/tCTZxEW.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Ultimate)** \n \n**Demons of Denak • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all targets for **210% -> 240%** damage + apply Heal Block for 2 turns. This attack cannot miss.")
	.setThumbnail('https://i.imgur.com/1ZJm9JT.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Passive)** \n \n**Too Many Sorcerers • T4 Upgrade** \n \nOn Death of any Character, Heal self and the most injured SUPERNATURAL ally for 10% of this character's Max Health.\nOn Death of a Mystic, Heal self and most injured SUPERNATURAL ally for 15% of this character's Max Health + grant **1 -> 1-2** Ability Energy to self and that ally.")
	.setThumbnail('https://i.imgur.com/jzxYATv.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Basic)** \n \n**Arcane Scourge • T4 Upgrade** \n \nAttack primary target for 220% damage + apply **1-2 -> 2** random negative effects.")
	.setThumbnail('https://i.imgur.com/e3zrXWe.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Special)** \n \n**Mesmerize • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\n**50% -> 100%** chance to Stun primary target + 50% chance to Blind up to 3 targets. 50% chance to Slow up to 2 targets.")
	.setThumbnail('https://i.imgur.com/tCTZxEW.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Ultimate)** \n \n**Demons of Denak • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all targets for **210% -> 240%** damage + apply Heal Block for 2 turns. This attack cannot miss.")
	.setThumbnail('https://i.imgur.com/1ZJm9JT.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161>	**Mordo (Passive)** \n \n**Too Many Sorcerers • T4 Upgrade** \n \nOn Death of any Character, Heal self and the most injured SUPERNATURAL ally for 10% of this character's Max Health.\nOn Death of a Mystic, Heal self and most injured SUPERNATURAL ally for 15% of this character's Max Health + grant **1 -> 1-2** Ability Energy to self and that ally.")
	.setThumbnail('https://i.imgur.com/jzxYATv.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161> **Mordo** \nMordo's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mordo:663750495562629161> **Mordo** \nMordo is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'mistersinister' || command === 'sinister' || command === 'mrsinister' || command === 'mrsin' || command === 'mistersin') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
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
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Ultimate)** \n \n**Clone • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nSummon a Clone of the primary target. This Clone scales with Mr Sinister's stats instead of the primary target.\nClone gains Defense Up for 2 turns.\nOn WAR DEFENSE, generate 2 Ability Energy for all MARAUDERS and Cloned allies.\n \nThe ability text on this ability doesn't change between level 6, and 7. Upgrading the ability will upgrade the basic, special, and ultimate abilities of the clone from 6 to 7.")
	.setThumbnail('https://i.imgur.com/Nh4cvtn.png') 
	.setFooter("Mister Sinister spawns with 3 energy from his passive, so this ability is available turn 1.")
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Passive)** \n \n**Mutant Eugenicist • T4 Upgrade** \n \nOn Spawn, generate 3 Ability Energy for this character if non-Cloned.\nOn turn, Heal 15% of Max Health +5% of Max Health per MARAUDERS ally and apply regenaration to the 2 most injured MUTANT allies.\nOn MARAUDERS ally's turn, if this character's Health is greater than 50%, redistribute 10% Health from this character to that ally.\nGain **+30% -> +50%** Focus. MARAUDERS allies gain **+30% -> +50%** Focus.\nGain **+10% -> +20%** Max Health. MARAUDERS allies gain **+10% -> +20%** Max Health.\nOn WAR DEFENSE, MARAUDERS allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/brC383z.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Basic)** \n \n**Psionic Beam • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage + 50% damage per non-Cloned MARAUDERS ally.\nGain an assist from a random Cloned ally.\n**70% -> 100%** chance to gain an assist from a random MARAUDERS ally.")
	.setThumbnail('https://i.imgur.com/de6it8b.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Special)** \n \n**Gene Therapy • T4 Upgrade** \n<:abilityon:663751832690229278> \nAttack primary target for **250% -> 300%** damage + 50% damage per non-Cloned MARAUDERS ally.\nGain an assist from a random Cloned ally.\n**70% -> 100%** chance to gain an assist from a random MARAUDERS ally.")
	.setThumbnail('https://i.imgur.com/j2uQE0R.png')
	.setFooter("Mister Sinister spawns with 3 energy from his passive, so this ability is available turn 1.")	
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Ultimate)** \n \n**Clone • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nSummon a Clone of the primary target. This Clone scales with Mr Sinister's stats instead of the primary target.\nClone gains Defense Up for 2 turns.\nOn WAR DEFENSE, generate 2 Ability Energy for all MARAUDERS and Cloned allies.\n \nThe ability text on this ability doesn't change between level 6, and 7. Upgrading the ability will upgrade the basic, special, and ultimate abilities of the clone from 6 to 7.")
	.setThumbnail('https://i.imgur.com/Nh4cvtn.png') 
	.setFooter("Mister Sinister spawns with 3 energy from his passive, so this ability is available turn 1.")
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185>	**Mister Sinister (Passive)** \n \n**Mutant Eugenicist • T4 Upgrade** \n \nOn Spawn, generate 3 Ability Energy for this character if non-Cloned.\nOn turn, Heal 15% of Max Health +5% of Max Health per MARAUDERS ally and apply regenaration to the 2 most injured MUTANT allies.\nOn MARAUDERS ally's turn, if this character's Health is greater than 50%, redistribute 10% Health from this character to that ally.\nGain **+30% -> +50%** Focus. MARAUDERS allies gain **+30% -> +50%** Focus.\nGain **+10% -> +20%** Max Health. MARAUDERS allies gain **+10% -> +20%** Max Health.\nOn WAR DEFENSE, MARAUDERS allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/brC383z.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185> **Mister Sinister** \nMister Sinister's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mrsinister:663750495839453185> **Mister Sinister** \nMister Sinister is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'msmarvel' || command === 'ms' || command === 'msmarv' || command === 'missmarvel') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Basic)** \n \n**Big Bash • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage. Gain Deflect.")
	.setThumbnail('https://i.imgur.com/f0wYw6N.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Special)** \n \n**Rejuvenate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nHeal self for **17000 -> 20000** Health + 50% of this character's Max Health. If Health started below 50%, also gain Slow.")
	.setThumbnail('https://i.imgur.com/jU3pYkS.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Ultimate)** \n \n**Embiggen • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **200% -> 220%** damage + **40% -> 60%** chance to generate 1 Ability Energy per target hit. Energy is granted to random HERO allies.")
	.setThumbnail('https://i.imgur.com/SPHaJsz.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Passive)** \n \n**Fangirl • T4 Upgrade** \n \n**80% -> 100%** chance to gain Assist Now on each HERO BRAWLER ally's turn. On Turn, **80% -> 100%** chance to grant Assist Now to a random HERO BRAWLER ally.\nWhen a HERO ally drops below 50% Health, gain Taunt. If that ally is a BRAWLER, also gain 2 Deflect.")
	.setThumbnail('https://i.imgur.com/Gjt5dxc.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Basic)** \n \n**Big Bash • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage. Gain Deflect.")
	.setThumbnail('https://i.imgur.com/f0wYw6N.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Special)** \n \n**Rejuvenate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nHeal self for **17000 -> 20000** Health + 50% of this character's Max Health. If Health started below 50%, also gain Slow.")
	.setThumbnail('https://i.imgur.com/jU3pYkS.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Ultimate)** \n \n**Embiggen • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **200% -> 220%** damage + **40% -> 60%** chance to generate 1 Ability Energy per target hit. Energy is granted to random HERO allies.")
	.setThumbnail('https://i.imgur.com/SPHaJsz.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679>	**Ms. Marvel (Passive)** \n \n**Fangirl • T4 Upgrade** \n \n**80% -> 100%** chance to gain Assist Now on each HERO BRAWLER ally's turn. On Turn, **80% -> 100%** chance to grant Assist Now to a random HERO BRAWLER ally.\nWhen a HERO ally drops below 50% Health, gain Taunt. If that ally is a BRAWLER, also gain 2 Deflect.")
	.setThumbnail('https://i.imgur.com/Gjt5dxc.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679> **Ms. Marvel** \nMs. Marvel's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:msmarvel:663750496355483679> **Ms. Marvel** \nMs. Marvel is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'mysterio' || command === 'myste' || command === 'myster') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Basic)** \n \n**The Ol' One-Two • T4 Upgrade** \n \nClear **2 -> 3** positive effects from primary target. Attack primary target for **200% -> 250%** damage.")
	.setThumbnail('https://i.imgur.com/NK7IpG6.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Special)** \n \n**Master of Illusion • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Blind to primary target.\n**70% -> 100%** chance to gain an assist from a random SINISTER SIX ally.\nGain an assist from a random ally.\nIf target is a CITY HERO, **70% -> 100%** chance to apply Ability Block.")
	.setThumbnail('https://i.imgur.com/m9Wv9CM.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Ultimate)** \n \n**Smoke and Mirrors • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **290% -> 350%** damage. Apply Heal Block to **primary + 2 -> all** enemies.")
	.setThumbnail('https://i.imgur.com/0NHGdEZ.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Passive)** \n \n**Grand Masquerade • T4 Upgrade** \n \nOn Spawn, apply 2 Deflect to self and all SINISTER SIX allies.\nGain **15% -> +20%** Focus for self per SPIDER-VERSE ally.\nSPIDER-VERSE allies gain **15% -> +20%** Focus.\nOn Death, summon **1-2 -> 2** Mirror Images at **220% -> 260%** of normal Damage and 150% of normal Health.")
	.setThumbnail('https://i.imgur.com/hj41dNn.png')
	.addFooter("(Mirror Images only have Basic attacks.)")
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Basic)** \n \n**The Ol' One-Two • T4 Upgrade** \n \nClear **2 -> 3** positive effects from primary target. Attack primary target for **200% -> 250%** damage.")
	.setThumbnail('https://i.imgur.com/NK7IpG6.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Special)** \n \n**Master of Illusion • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Blind to primary target.\n**70% -> 100%** chance to gain an assist from a random SINISTER SIX ally.\nGain an assist from a random ally.\nIf target is a CITY HERO, **70% -> 100%** chance to apply Ability Block.")
	.setThumbnail('https://i.imgur.com/m9Wv9CM.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Ultimate)** \n \n**Smoke and Mirrors • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **290% -> 350%** damage. Apply Heal Block to **primary + 2 -> all** enemies.")
	.setThumbnail('https://i.imgur.com/0NHGdEZ.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656>	**Mysterio (Passive)** \n \n**Grand Masquerade • T4 Upgrade** \n \nOn Spawn, apply 2 Deflect to self and all SINISTER SIX allies.\nGain **15% -> +20%** Focus for self per SPIDER-VERSE ally.\nSPIDER-VERSE allies gain **15% -> +20%** Focus.\nOn Death, summon **1-2 -> 2** Mirror Images at **220% -> 260%** of normal Damage and 150% of normal Health.")
	.setThumbnail('https://i.imgur.com/hj41dNn.png')
	.addFooter("(Mirror Images only have Basic attacks.)")
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656> **Mysterio** \nMysterio's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("mysterio:663750495734726656> **Mysterio** \nMysterio is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'mystique' || command === 'mysti' || command === 'mystiq') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Basic)** \n \n**Mimic Strike • T4 Upgrade** \n \nAttack primary target for **190% -> 230%** damage + Bonus Attack 1-2 times for **150% -> 190%** damage + copy **1 -> 2** positive effects and apply them to self.\nIf Magneto is an ally, copy all positive effects.")
	.setThumbnail('https://i.imgur.com/o42oYto.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Special)** \n \n**Infiltrate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **210% -> 240%** damage. Attack **2 -> 3** additional targets that do not have Stealth for **140 -> 170%** damage.\nAttack all additional targets that do have Stealth for **140% -> 170%** damage + clear Stealth from each target.\nIf no enemies had Stealth, gain Stealth.\nThis ability does not remove Stealth from the primary target.\nIf Magneto is ally, this attack is Unavoidable.\nIf Mister Sinister is an ally, flip **1 -> 2** positive effects to negative effects on each target.")
	.setThumbnail('https://i.imgur.com/7RdsgtC.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Ultimate)** \n \n**Shapeshifter • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **130% -> 150%** damage.\nTrick 1 random enemy to attack the primary target. The tricked enemy gains **180% -> +200%** Damage for this attack.\nGain Evade.")
	.setThumbnail('https://i.imgur.com/Lz6FWz7.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Passive)** \n \n**Subterfuge • T4 Upgrade** \n \nOn Spawn, **50% -> 100%** chance to gain Evade. Gain 1000% Resistance against Bleed.\nOn a non-Cloned Magneto's or Mister Sinister's turn, prolong all positive effects on self and Magneto by a duration of 1, up to a maximum of 3.\nOn WAR DEFENSE, if Mister Sinister is an ally, gain **50% -> 100%** chance to assist on non-attack abilities.")
	.setThumbnail('https://i.imgur.com/XdFhnSw.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Basic)** \n \n**Mimic Strike • T4 Upgrade** \n \nAttack primary target for **190% -> 230%** damage + Bonus Attack 1-2 times for **150% -> 190%** damage + copy **1 -> 2** positive effects and apply them to self.\nIf Magneto is an ally, copy all positive effects.")
	.setThumbnail('https://i.imgur.com/o42oYto.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Special)** \n \n**Infiltrate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **210% -> 240%** damage. Attack **2 -> 3** additional targets that do not have Stealth for **140 -> 170%** damage.\nAttack all additional targets that do have Stealth for **140% -> 170%** damage + clear Stealth from each target.\nIf no enemies had Stealth, gain Stealth.\nThis ability does not remove Stealth from the primary target.\nIf Magneto is ally, this attack is Unavoidable.\nIf Mister Sinister is an ally, flip **1 -> 2** positive effects to negative effects on each target.")
	.setThumbnail('https://i.imgur.com/7RdsgtC.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Ultimate)** \n \n**Shapeshifter • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **130% -> 150%** damage.\nTrick 1 random enemy to attack the primary target. The tricked enemy gains **180% -> +200%** Damage for this attack.\nGain Evade.")
	.setThumbnail('https://i.imgur.com/Lz6FWz7.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002>	**Mystique (Passive)** \n \n**Subterfuge • T4 Upgrade** \n \nOn Spawn, **50% -> 100%** chance to gain Evade. Gain 1000% Resistance against Bleed.\nOn a non-Cloned Magneto's or Mister Sinister's turn, prolong all positive effects on self and Magneto by a duration of 1, up to a maximum of 3.\nOn WAR DEFENSE, if Mister Sinister is an ally, gain **50% -> 100%** chance to assist on non-attack abilities.")
	.setThumbnail('https://i.imgur.com/XdFhnSw.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002> **Mystique** \nMystique's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:mystique:663750495697109002> **Mystique** \nMystique is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'namor' || command === 'nam' || command === 'namo' || command === 'na') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Basic)** \n \n**Neptune's Trident • T4 Upgrade** \n \nAttack primary target for **170% -> 210%** damage + **40% -> 50%** Piercing.")
	.setThumbnail('https://i.imgur.com/OsjwCi3.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Special)** \n \n**Tidal Wave • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **290% -> 350%** damage. Attack adjacent targets for **280% -> 340%** damage.\nOn target Block, Bonus Attack 2 times for **80% -> 100%** Piercing to primary and adjacent targets.")
	.setThumbnail('https://i.imgur.com/G1OQ8F8.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Ultimate)** \n \n**Giganto • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **250% -> 300%** damage.\nOn WAR OFFENSE:\nThis attack always Crits\nClear **3 -> all** positive effects from each target\nChange Speed Bar of all targets by **-40% -> -50%**\nThis attack is Unavoidable and cannot be Countered.")
	.setThumbnail('https://i.imgur.com/fml7P0D.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Passive)** \n \n**Imperius Rex • T4 Upgrade** \n \nGain **+10% -> +20%** Damage.\nGain **+20% -> +30%** Armor.\nOn WAR OFFENSE:\nOn Spawn, apply Offense Up for 2 turns to **3 -> all** FANTASTIC FOUR allies and self.\nOn Spawn, apply Deflect for 2 turns to **3 -> all** FANTASTIC FOUR ally or self.\nGain additional **+20% -> +30%** Damage.\nFANTASTIC FOUR allies gain **+20% -> +30%** Damage.")
	.setThumbnail('https://i.imgur.com/DnrNz6X.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Basic)** \n \n**Neptune's Trident • T4 Upgrade** \n \nAttack primary target for **170% -> 210%** damage + **40% -> 50%** Piercing.")
	.setThumbnail('https://i.imgur.com/OsjwCi3.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Special)** \n \n**Tidal Wave • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **290% -> 350%** damage. Attack adjacent targets for **280% -> 340%** damage.\nOn target Block, Bonus Attack 2 times for **80% -> 100%** Piercing to primary and adjacent targets.")
	.setThumbnail('https://i.imgur.com/G1OQ8F8.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Ultimate)** \n \n**Giganto • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **250% -> 300%** damage.\nOn WAR OFFENSE:\nThis attack always Crits\nClear **3 -> all** positive effects from each target\nChange Speed Bar of all targets by **-40% -> -50%**\nThis attack is Unavoidable and cannot be Countered.")
	.setThumbnail('https://i.imgur.com/fml7P0D.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919>	**Namor (Passive)** \n \n**Imperius Rex • T4 Upgrade** \n \nGain **+10% -> +20%** Damage.\nGain **+20% -> +30%** Armor.\nOn WAR OFFENSE:\nOn Spawn, apply Offense Up for 2 turns to **3 -> all** FANTASTIC FOUR allies and self.\nOn Spawn, apply Deflect for 2 turns to **3 -> all** FANTASTIC FOUR ally or self.\nGain additional **+20% -> +30%** Damage.\nFANTASTIC FOUR allies gain **+20% -> +30%** Damage.")
	.setThumbnail('https://i.imgur.com/DnrNz6X.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919> **Namor** \nNamor's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:namor:663750493709008919> **Namor** \nNamor is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'nebula') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890>	**Nebula (Basic)** \n \n**Relentless Pursuit • T4 Upgrade** \n \nAttack primary target for 280% damage. **90% -> 100%** chance to gain Speed Up for 1 turn.")
	.setThumbnail('https://i.imgur.com/deh24z2.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890>	**Nebula (Special)** \n \n**Challenging Foe • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **170% -> 200%** damage + gain 2 Counter.")
	.setThumbnail('https://i.imgur.com/F2SyORs.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890>	**Nebula (Ultimate)** \n \n**Mayhem • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **270% -> 320%** damage. 60% chance to Chain to up to 2 adjacent targets for **210% -> 250%** damage. Gain 2 Evade.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/faHg1zz.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890>	**Nebula (Passive)** \n \n**Exploit Weakness • T4 Upgrade** \n \n**10% -> 15%** chance to Assist when an ally attacks. 15% chance to Revive on Death with 10% of Max Health.")
	.setThumbnail('https://i.imgur.com/qvSqK9R.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890>	**Nebula (Basic)** \n \n**Relentless Pursuit • T4 Upgrade** \n \nAttack primary target for 280% damage. **90% -> 100%** chance to gain Speed Up for 1 turn.")
	.setThumbnail('https://i.imgur.com/deh24z2.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890>	**Nebula (Special)** \n \n**Challenging Foe • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **170% -> 200%** damage + gain 2 Counter.")
	.setThumbnail('https://i.imgur.com/F2SyORs.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890>	**Nebula (Ultimate)** \n \n**Mayhem • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **270% -> 320%** damage. 60% chance to Chain to up to 2 adjacent targets for **210% -> 250%** damage. Gain 2 Evade.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/faHg1zz.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890>	**Nebula (Passive)** \n \n**Exploit Weakness • T4 Upgrade** \n \n**10% -> 15%** chance to Assist when an ally attacks. 15% chance to Revive on Death with 10% of Max Health.")
	.setThumbnail('https://i.imgur.com/qvSqK9R.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890> **Nebula** \nNebula's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nebula:663750493033594890> **Nebula** \nNebula is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'nick' || command === 'fury' || command === 'nickfury') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Basic)** \n \n**Custom I.C.E.R. • T4 Upgrade** \n \nAttack primary target for **200% -> 230%** damage + Chain to 1 adjacent target for **150% -> 180%** damage. Generate 1 ability energy on each Crit. Energy is granted to adjacent allies.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/VKziREv.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Special)** \n \n**Rally • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Defense Up. Spread all positive effects on self to all allies.\nHeal self and all S.H.I.E.L.D. MINION allies for **8000 -> 10000** Health + 15% of this character's Max Health.\nOn WAR DEFENSE, Heal Coulson as well.")
	.setThumbnail('https://i.imgur.com/w27xVao.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Ultimate)** \n \n**Reinforcements • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **2 -> 2-3** S.H.I.E.L.D. Agent at **300 -> 340%** normal Damage and 150% of normal Health + gain positive effect for 2 turns.\nPossible Summons:\nS.H.I.E.L.D. Operative + Nick Fury gains Speed Up\nS.H.I.E.L.D. Security + Nick Fury gains Offense Up")
	.setThumbnail('https://i.imgur.com/fIeIGS0.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Passive)** \n \n**Director of S.H.I.E.L.D. • T4 Upgrade** \n \nOn Spawn, grant Speed Up to self and all S.H.I.E.L.D. MINION allies. On WAR DEFENSE, this action also affects Coulson. On Turn, **30% -> 50%** chance to grant Speed Up to self + S.H.I.E.L.D. MINION allies.\n**20% -> 30%** chance to grant Assist Now to self or a random ally on each HERO ally's turn. If the ally granted Assist Now is a S.H.I.E.L.D. MINION or Nick Fury, they also gain Offense Up. On WAR DEFENSE, if Coulson is granted Assist Now, he also gains Offense Up.\nS.H.I.E.L.D. MINION allies gain +10% Armor. S.H.I.E.L.D. MINION allies gain +30% Resistance.\nOn WAR DEFENSE, Coulson gains +10% Armor and +30% Resistance.")
	.setThumbnail('https://i.imgur.com/JMUV6fS.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Basic)** \n \n**Custom I.C.E.R. • T4 Upgrade** \n \nAttack primary target for **200% -> 230%** damage + Chain to 1 adjacent target for **150% -> 180%** damage. Generate 1 ability energy on each Crit. Energy is granted to adjacent allies.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/VKziREv.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Special)** \n \n**Rally • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Defense Up. Spread all positive effects on self to all allies.\nHeal self and all S.H.I.E.L.D. MINION allies for **8000 -> 10000** Health + 15% of this character's Max Health.\nOn WAR DEFENSE, Heal Coulson as well.")
	.setThumbnail('https://i.imgur.com/w27xVao.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Ultimate)** \n \n**Reinforcements • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **2 -> 2-3** S.H.I.E.L.D. Agent at **300 -> 340%** normal Damage and 150% of normal Health + gain positive effect for 2 turns.\nPossible Summons:\nS.H.I.E.L.D. Operative + Nick Fury gains Speed Up\nS.H.I.E.L.D. Security + Nick Fury gains Offense Up")
	.setThumbnail('https://i.imgur.com/fIeIGS0.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236>	**Fury (Passive)** \n \n**Director of S.H.I.E.L.D. • T4 Upgrade** \n \nOn Spawn, grant Speed Up to self and all S.H.I.E.L.D. MINION allies. On WAR DEFENSE, this action also affects Coulson. On Turn, **30% -> 50%** chance to grant Speed Up to self + S.H.I.E.L.D. MINION allies.\n**20% -> 30%** chance to grant Assist Now to self or a random ally on each HERO ally's turn. If the ally granted Assist Now is a S.H.I.E.L.D. MINION or Nick Fury, they also gain Offense Up. On WAR DEFENSE, if Coulson is granted Assist Now, he also gains Offense Up.\nS.H.I.E.L.D. MINION allies gain +10% Armor. S.H.I.E.L.D. MINION allies gain +30% Resistance.\nOn WAR DEFENSE, Coulson gains +10% Armor and +30% Resistance.")
	.setThumbnail('https://i.imgur.com/JMUV6fS.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236> **Fury** \nFury's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nickfury:663750493687775236> **Fury** \nFury is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'nightnurse' || command === 'night' || command === 'nurse') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627>	**Night Nurse (Basic)** \n \n**Self Defense • T4 Upgrade** \n \nAttack primary target for **210% -> 250%** damage + 50% chance to apply Slow for 2 turns.")
	.setThumbnail('https://i.imgur.com/bGEmAEx.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627>	**Night Nurse (Special)** \n \n**First Aid • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal lowest Health ally for **3300 -> 4200** Health + 20% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/mVZTPHB.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627>	**Night Nurse (Ultimate)** \n \n**Urgent Care • T4 Upgrade** \n<:abilityoff:663751832413405184> \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nHeal all allies for **2500 -> 3200** Health + 10% of this character's Max Health. Apply 2 Regeneration to each ally.")
	.setThumbnail('https://i.imgur.com/2upHeDY.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627>	**Night Nurse (Passive)** \n \n**Triage • T4 Upgrade** \n \nOn turn, if the ally with the least Health has less than 100% Health, **20% -> 25%** chance to Heal them for 15% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/O63uwu0.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627>	**Night Nurse (Basic)** \n \n**Self Defense • T4 Upgrade** \n \nAttack primary target for **210% -> 250%** damage + 50% chance to apply Slow for 2 turns.")
	.setThumbnail('https://i.imgur.com/bGEmAEx.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627>	**Night Nurse (Special)** \n \n**First Aid • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal lowest Health ally for **3300 -> 4200** Health + 20% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/mVZTPHB.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627>	**Night Nurse (Ultimate)** \n \n**Urgent Care • T4 Upgrade** \n<:abilityoff:663751832413405184> \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nHeal all allies for **2500 -> 3200** Health + 10% of this character's Max Health. Apply 2 Regeneration to each ally.")
	.setThumbnail('https://i.imgur.com/2upHeDY.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627>	**Night Nurse (Passive)** \n \n**Triage • T4 Upgrade** \n \nOn turn, if the ally with the least Health has less than 100% Health, **20% -> 25%** chance to Heal them for 15% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/O63uwu0.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627> **Night Nurse** \nNight Nurse's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:nightnurse:663750495873007627> **Night Nurse** \nNight Nurse is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'okoye' || command === 'oko' || command === 'okoy' || command === 'ok') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Basic)** \n \n**Spear Strike • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage + clear a positive effect.\nGain +50% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/Esux29j.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Special)** \n \n**Precision Strike • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **180% -> 220%** damage + apply Defense Down. Chain to 1 adjacent target for **150% -> 190%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/m6uRMYd.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Ultimate)** \n \n**Aerial Impalement • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nGain Offense Up.\nAttack primary target for **250% -> 280%** Piercing + change Speed Bar by **-30% -> -50%**.")
	.setThumbnail('https://i.imgur.com/zm60LAQ.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Passive)** \n \n**Dora Milaje • T4 Upgrade** \n \nGain **+30% -> +50%** Piercing. On Defense Up, gain Immunity.\nOn self or WAKANDAN ally Crit, gain +1 Charged, up to a maximum of 5.\nOn WAKANDAN ally's turn, while in Charged, gain Assist Now and lose 1 Charged. Otherwise, 20% chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/btc42kI.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Basic)** \n \n**Spear Strike • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage + clear a positive effect.\nGain +50% Extra Focus for this attack.")
	.setThumbnail('https://i.imgur.com/Esux29j.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Special)** \n \n**Precision Strike • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **180% -> 220%** damage + apply Defense Down. Chain to 1 adjacent target for **150% -> 190%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/m6uRMYd.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Ultimate)** \n \n**Aerial Impalement • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nGain Offense Up.\nAttack primary target for **250% -> 280%** Piercing + change Speed Bar by **-30% -> -50%**.")
	.setThumbnail('https://i.imgur.com/zm60LAQ.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848>	**Okeye (Passive)** \n \n**Dora Milaje • T4 Upgrade** \n \nGain **+30% -> +50%** Piercing. On Defense Up, gain Immunity.\nOn self or WAKANDAN ally Crit, gain +1 Charged, up to a maximum of 5.\nOn WAKANDAN ally's turn, while in Charged, gain Assist Now and lose 1 Charged. Otherwise, 20% chance to gain Assist Now.")
	.setThumbnail('https://i.imgur.com/btc42kI.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848> **Okeye** \nOkeye's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:okeye:663750495860686848> **Okeye** \nOkeye is farmable in:**")
	message.channel.send(speedEmbed); 
}

}



if(command === 'da' || command === 'dar'|| command === 'dark' && args[0] == "pho" || args[0] == "phoe" || args[0] == "phoen" || args[0] == "phoeni" || args[0] == "phoenix") {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958>	**Dark Phoenix (Basic)** \n \n**Immolation • T4 Upgrade** \n \nAttack primary target and all adjacent targets for **200% -> 250%** damage. Clear 2 positive effects on each target.")
	.setThumbnail('https://i.imgur.com/f9CRI8p.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958>	**Dark Phoenix (Special)** \n \n**Vitality Drain • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSteal **15% -> 20%** Health from all enemies and redistribute to self. Apply Regeneration to all allies. Apply an additional Regeneration to all X-MEN allies.")
	.setThumbnail('https://i.imgur.com/8YAN1aJ.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958>	**Dark Phoenix (Ultimate)** \n \n**Phoenix Unleashed • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **350% -> 400%** damage.\nClear **3 -> all** positive effects on each target.\nGain +50000% Extra Focus for this attack.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/sLWbL8Y.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958>	**Dark Phoenix (Passive)** \n \n**From the Ashes • T4 Upgrade** \n \nOn Spawn, attack all enemies for **200% -> 250%** damage + apply Defense Down for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/8oHzMHk.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958>	**Dark Phoenix (Basic)** \n \n**Immolation • T4 Upgrade** \n \nAttack primary target and all adjacent targets for **200% -> 250%** damage. Clear 2 positive effects on each target.")
	.setThumbnail('https://i.imgur.com/f9CRI8p.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958>	**Dark Phoenix (Special)** \n \n**Vitality Drain • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSteal **15% -> 20%** Health from all enemies and redistribute to self. Apply Regeneration to all allies. Apply an additional Regeneration to all X-MEN allies.")
	.setThumbnail('https://i.imgur.com/8YAN1aJ.png') 
	message.channel.send(exampleEmbed2);
} else if(args[1] == "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958>	**Dark Phoenix (Ultimate)** \n \n**Phoenix Unleashed • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **350% -> 400%** damage.\nClear **3 -> all** positive effects on each target.\nGain +50000% Extra Focus for this attack.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/sLWbL8Y.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958>	**Dark Phoenix (Passive)** \n \n**From the Ashes • T4 Upgrade** \n \nOn Spawn, attack all enemies for **200% -> 250%** damage + apply Defense Down for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/8oHzMHk.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958> **Dark Phoenix** \nDark Phoenix's speed is: **")
	message.channel.send(speedEmbed);
} else if(args[1] == "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958> **Dark Phoenix** \nDark Phoenix is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(args[1] == "trait" || unlock === "trait") {
		const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958> **Dark Phoenix** \nHero, Global, Mutant, Controller, Xmen.")
	message.channel.send(traitEmbed);	
} else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958> **Dark Phoenix** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
} 


if(command === 'pho' || command === 'phoe'|| command === 'phoen' || command === 'phoeni' || command === 'phoenix') {
if(args[0] == "kit"){
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958>	**Phoenix (Basic)** \n \n**Psychic Blast • T4 Upgrade** \n \nAttack primary target for **200% -> 250%** damage + clear 2 positive effects.")
	.setThumbnail('https://i.imgur.com/7tVRvd6.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958>	**Phoenix (Special)** \n \n**Bestow Light • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Stealth to all allies to 2 turns. Apply Defense Up to all allies.\nRedistribute 25% of Max Health from self to all allies. All allies receive an additional **6000 -> 10000** Health. This bypasses Heal Block.\nTransfer all negative effects from allies to self.\nIf there are no allies, attack self for 5000% Piercing damage.\nIf Phoenix dies, her Passive Ability is triggered.")
	.setThumbnail('https://i.imgur.com/kAV4oD8.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958>	**Phoenix (Ultimate)** \n \n**Phoenix Force • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **350% -> 400%** damage + clear **3 -> all** positive effects.\nGain +50000% Extra Focus for this attack")
	.setThumbnail('https://i.imgur.com/TbhMRUg.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958>	**Phoenix (Passive)** \n \n**Phoenix Rising • T4 Upgrade** \n \nOn Death, summon Dark Phoenix.\nPhoenix cannot be revived.\nOn ally Taunt, gain Taunt.\nGain **+20% -> +30%** Damage. X-Men allies gain **+20% -> +30%** Damage.\nGain **+20% -> +30%** Max Health. X-Men allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/a8ILqVz.png') 
	message.channel.send(exampleEmbed4);
} else if(args[0] == "basic") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958>	**Phoenix (Basic)** \n \n**Psychic Blast • T4 Upgrade** \n \nAttack primary target for **200% -> 250%** damage + clear 2 positive effects.")
	.setThumbnail('https://i.imgur.com/7tVRvd6.png') 
	message.channel.send(exampleEmbed);
} else if(args[0] == "special") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958>	**Phoenix (Special)** \n \n**Bestow Light • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Stealth to all allies to 2 turns. Apply Defense Up to all allies.\nRedistribute 25% of Max Health from self to all allies. All allies receive an additional **6000 -> 10000** Health. This bypasses Heal Block.\nTransfer all negative effects from allies to self.\nIf there are no allies, attack self for 5000% Piercing damage.\nIf Phoenix dies, her Passive Ability is triggered.")
	.setThumbnail('https://i.imgur.com/kAV4oD8.png') 
	message.channel.send(exampleEmbed2);
} else if(args[0] == "ultimate") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958>	**Phoenix (Ultimate)** \n \n**Phoenix Force • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **350% -> 400%** damage + clear **3 -> all** positive effects.\nGain +50000% Extra Focus for this attack")
	.setThumbnail('https://i.imgur.com/TbhMRUg.png') 
	message.channel.send(exampleEmbed3);
} else if(args[0] == "passive") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958>	**Phoenix (Passive)** \n \n**Phoenix Rising • T4 Upgrade** \n \nOn Death, summon Dark Phoenix.\nPhoenix cannot be revived.\nOn ally Taunt, gain Taunt.\nGain **+20% -> +30%** Damage. X-Men allies gain **+20% -> +30%** Damage.\nGain **+20% -> +30%** Max Health. X-Men allies gain **+20% -> +30%** Max Health.")
	.setThumbnail('https://i.imgur.com/a8ILqVz.png') 
	message.channel.send(exampleEmbed4);
} else if(args[0] == "speed") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958> **Phoenix** \nPhoenix's speed is: **")
	message.channel.send(speedEmbed);
} else if(args[0] == "unlock" || unlock === "farm") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:phoenix:663750496829308958> **Phoenix** \nPhoenix is farmable in:**")
	message.channel.send(speedEmbed); 
} else if(args[0] == "trait" || unlock === "trait") {
		const traitEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958> **Phoenix** \nHero, Global, Mutant, Controller, Xmen.")
	message.channel.send(traitEmbed);	
}  else {
	const embedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:Phoenix:663750496829308958> **Phoenix** \n**Please use a valid phrase:** \nbasic\nspecial\nultimate\nkit\nspeed\ntrait\nunlock")
	message.channel.send(embedEmbed); 
}
}

if(command === 'psylocke' || command === 'psy' || command === 'psyl' || command === 'psylock') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608>	**Psylocke (Basic)** \n \n**Psi Knife • T4 Upgrade** \n \nAttack primary target for **220% -> 270%** Piercing damage.")
	.setThumbnail('https://i.imgur.com/kc9S2WU.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608>	**Psylocke (Special)** \n \n**Telekinetic Armament • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **160% -> 200%** Piercing damage. Chain to 3 adjacent targets for **160% -> 200%** Piercing damage. Clear 2 positive effects from each target.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/iQK40EF.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608>	**Psylocke (Ultimate)** \n \n**Astral Butterflies • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nTransfer 2 negative effects from each ally to primary target. Transfer **1 -> all** additional negative effects from self and X-MEN allies to primary target.\nAttack primary target for **240% -> 300%** Piercing damage.\nThis attack cannot miss.")
	.setThumbnail('https://i.imgur.com/5iLTdOO.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608>	**Psylocke (Passive)** \n \n**Reinvigorate • T4 Upgrade** \n \nOn Spawn, **50% -> 100%** chance to gain Evade + Counter. When an X-MEN ally drops below 50% Max Health, apply Evade + Counter to that ally.\nGain +1000% Resistance against Disrupted.")
	.setThumbnail('https://i.imgur.com/wIJzuuW.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608>	**Psylocke (Basic)** \n \n**Psi Knife • T4 Upgrade** \n \nAttack primary target for **220% -> 270%** Piercing damage.")
	.setThumbnail('https://i.imgur.com/kc9S2WU.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608>	**Psylocke (Special)** \n \n**Telekinetic Armament • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **160% -> 200%** Piercing damage. Chain to 3 adjacent targets for **160% -> 200%** Piercing damage. Clear 2 positive effects from each target.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/iQK40EF.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608>	**Psylocke (Ultimate)** \n \n**Astral Butterflies • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nTransfer 2 negative effects from each ally to primary target. Transfer **1 -> all** additional negative effects from self and X-MEN allies to primary target.\nAttack primary target for **240% -> 300%** Piercing damage.\nThis attack cannot miss.")
	.setThumbnail('https://i.imgur.com/5iLTdOO.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608>	**Psylocke (Passive)** \n \n**Reinvigorate • T4 Upgrade** \n \nOn Spawn, **50% -> 100%** chance to gain Evade + Counter. When an X-MEN ally drops below 50% Max Health, apply Evade + Counter to that ally.\nGain +1000% Resistance against Disrupted.")
	.setThumbnail('https://i.imgur.com/wIJzuuW.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608> **Psylocke** \nPsylocke's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:psylocke:663750496837828608> **Psylocke** \nPsylocke is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'punisher' || command === 'punish' || command === 'pun' || command === 'puni' || command === 'frank' || command === 'castle') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620>	**Punisher (Basic)** \n \n**M4 Carbine • T4 Upgrade** \n \nAttack primary target for **200% -> 240%** damage + 20% Piercing. 30% chance to Chain to up to 2 additional targets for **160% -> 200%** damage + 20% Piercing.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/8PAfiqv.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620>	**Punisher (Special)** \n \n**Grenade Launcher • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **180% -> 200%** damage + 10% Piercing. Attack all adjacent enemies for **140% -> 160%** damage + 10% Piercing.")
	.setThumbnail('https://i.imgur.com/mMHPY6h.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620>	**Punisher (Ultimate)** \n \n**Fully Loaded • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **170% -> 200%** damage + 20% Piercing.")
	.setThumbnail('https://i.imgur.com/VeCMPk9.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620>	**Punisher (Passive)** \n \n**Lock and Load • T4 Upgrade** \n \nIf at least one ally is a CITY HERO, gain **+10% -> +20%** chance to assist on non-attack abilities. Gain **+10% -> +20%** chance to assist on non-attack abilities per DEFENDER ally.\nIf Daredevil is an ally, when an enemy attacks him, attack that enemy for **160% -> 200%** damage + 10% Piercing.\nGain +10% Damage. Gain +50% Damage against VILLAIN targets.\nCITY allies gain +5% Damage. CITY HERO allies gain +10% Damage instead.\nCITY HERO allies gain an additional +30% Damage against VILLAIN targets.")
	.addFooter("Unlike most similar passives, Punisher's buff to himself stacks - he gains from the damage boost to himself as well as from the damage boost to City Heroes.")
	.setThumbnail('https://i.imgur.com/aNntBCv.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620>	**Punisher (Basic)** \n \n**M4 Carbine • T4 Upgrade** \n \nAttack primary target for **200% -> 240%** damage + 20% Piercing. 30% chance to Chain to up to 2 additional targets for **160% -> 200%** damage + 20% Piercing.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/8PAfiqv.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620>	**Punisher (Special)** \n \n**Grenade Launcher • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **180% -> 200%** damage + 10% Piercing. Attack all adjacent enemies for **140% -> 160%** damage + 10% Piercing.")
	.setThumbnail('https://i.imgur.com/mMHPY6h.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620>	**Punisher (Ultimate)** \n \n**Fully Loaded • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **170% -> 200%** damage + 20% Piercing.")
	.setThumbnail('https://i.imgur.com/VeCMPk9.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620>	**Punisher (Passive)** \n \n**Lock and Load • T4 Upgrade** \n \nIf at least one ally is a CITY HERO, gain **+10% -> +20%** chance to assist on non-attack abilities. Gain **+10% -> +20%** chance to assist on non-attack abilities per DEFENDER ally.\nIf Daredevil is an ally, when an enemy attacks him, attack that enemy for **160% -> 200%** damage + 10% Piercing.\nGain +10% Damage. Gain +50% Damage against VILLAIN targets.\nCITY allies gain +5% Damage. CITY HERO allies gain +10% Damage instead.\nCITY HERO allies gain an additional +30% Damage against VILLAIN targets.")
	.addFooter("Unlike most similar passives, Punisher's buff to himself stacks - he gains from the damage boost to himself as well as from the damage boost to City Heroes.")
	.setThumbnail('https://i.imgur.com/aNntBCv.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620> **Punisher** \nPunisher's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:punisher:663750495982190620> **Punisher** \nPunisher is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'pyro' || command === 'py' || command === 'pyr') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968>	**Pyro (Basic)** \n \n**Flame Thrower • T4 Upgrade** \n \nAttack primary target and adjacent targets for **120% -> 150%** damage. Apply Bleed to each target.")
	.setThumbnail('https://i.imgur.com/BcEngdw.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968>	**Pyro (Special)** \n \n**Pyrotechnics • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target and adjacent targets for **140% -> 180%** damage. Apply 2 Bleed for **1 -> 2** turns + Clear 2 positive effects from each target.\nIf Magneto is ally, clear all positive effects from each target.")
	.setThumbnail('https://i.imgur.com/TkAXYrx.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968>	**Pyro (Ultimate)** \n \n**Firecrafting • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target and adjacent targets for **190% -> 230%** damage + apply Disrupted for **1 -> 2** turns.\nIf Magneto is ally, each target has Bleed prolonged by a duration of 1.")
	.setThumbnail('https://i.imgur.com/gb3CZCg.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968>	**Pyro (Passive)** \n \n**Stoke the Flames • T4 Upgrade** \n \nGain **+20% -> +25%** Extra Focus.\nWhen Pyro is attacked, fill **+10% -> +15%** Speed Bar.\nIf Magneto is ally, when an enemy drops below 50% health, apply Heal Block.")
	.setThumbnail('https://i.imgur.com/4RtVp0p.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968>	**Pyro (Basic)** \n \n**Flame Thrower • T4 Upgrade** \n \nAttack primary target and adjacent targets for **120% -> 150%** damage. Apply Bleed to each target.")
	.setThumbnail('https://i.imgur.com/BcEngdw.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968>	**Pyro (Special)** \n \n**Pyrotechnics • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target and adjacent targets for **140% -> 180%** damage. Apply 2 Bleed for **1 -> 2** turns + Clear 2 positive effects from each target.\nIf Magneto is ally, clear all positive effects from each target.")
	.setThumbnail('https://i.imgur.com/TkAXYrx.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968>	**Pyro (Ultimate)** \n \n**Firecrafting • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target and adjacent targets for **190% -> 230%** damage + apply Disrupted for **1 -> 2** turns.\nIf Magneto is ally, each target has Bleed prolonged by a duration of 1.")
	.setThumbnail('https://i.imgur.com/gb3CZCg.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968>	**Pyro (Passive)** \n \n**Stoke the Flames • T4 Upgrade** \n \nGain **+20% -> +25%** Extra Focus.\nWhen Pyro is attacked, fill **+10% -> +15%** Speed Bar.\nIf Magneto is ally, when an enemy drops below 50% health, apply Heal Block.")
	.setThumbnail('https://i.imgur.com/4RtVp0p.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968> **Pyro** \nPyro's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:pyro:663750496346963968> **Pyro** \nPyro is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'quake' || command === 'qu' || command === 'qua' || command === 'quak') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632>	**Quake (Basic)** \n \n**Seismic Blast • T4 Upgrade** \n \nAttack primary target and adjacent targets for **125% -> 150%** damage. Apply Slow to primary target and adjacent targets for 2 turns.")
	.setThumbnail('https://i.imgur.com/dBYn6eD.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632>	**Quake (Special)** \n \n**Shockwave • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **185% -> 210%** damage + clear 2 positive effects. 40% chance to Chain up to 2 targets for **140% -> 160%** damage + clear 2 positive effects.\nCounterattack breaks this Chain. If Coulson or Black Bolt is an ally, apply Slow to primary target and secondary targets.")
	.setThumbnail('https://i.imgur.com/4LAMndt.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632>	**Quake (Ultimate)** \n \n**Earthquake • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **270% -> 320%** damage. Apply Offense Down on 5 enemies for 1 turn.")
	.setThumbnail('https://i.imgur.com/2HYqTmS.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632>	**Quake (Passive)** \n \n**Secret Warrior • T4 Upgrade** \n \nGain **+15% -> +20%** Extra Focus. S.H.I.E.L.D. allies gain +5% damage. INHUMAN allies gain +5% Extra Focus.")
	.setThumbnail('https://i.imgur.com/dankZLD.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632>	**Quake (Basic)** \n \n**Seismic Blast • T4 Upgrade** \n \nAttack primary target and adjacent targets for **125% -> 150%** damage. Apply Slow to primary target and adjacent targets for 2 turns.")
	.setThumbnail('https://i.imgur.com/dBYn6eD.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632>	**Quake (Special)** \n \n**Shockwave • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **185% -> 210%** damage + clear 2 positive effects. 40% chance to Chain up to 2 targets for **140% -> 160%** damage + clear 2 positive effects.\nCounterattack breaks this Chain. If Coulson or Black Bolt is an ally, apply Slow to primary target and secondary targets.")
	.setThumbnail('https://i.imgur.com/4LAMndt.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632>	**Quake (Ultimate)** \n \n**Earthquake • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **270% -> 320%** damage. Apply Offense Down on 5 enemies for 1 turn.")
	.setThumbnail('https://i.imgur.com/2HYqTmS.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632>	**Quake (Passive)** \n \n**Secret Warrior • T4 Upgrade** \n \nGain **+15% -> +20%** Extra Focus. S.H.I.E.L.D. allies gain +5% damage. INHUMAN allies gain +5% Extra Focus.")
	.setThumbnail('https://i.imgur.com/dankZLD.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632> **Quake** \nQuake's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:quake:663750496024133632> **Quake** \nQuake is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'ravagerboomer' || command === 'boomer') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerboomer:663750496099500032>	**Ravager Boomer (Basic)** \n \n**Plasma Blast • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/kFgllrE.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerboomer:663750496099500032>	**Ravager Boomer (Special)** \n \n**Full Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **230% -> 270%** damage and adjacent targets for **210% -> 220%** damage.")
	.setThumbnail('https://i.imgur.com/7OP10lg.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerboomer:663750496099500032>	**Ravager Boomer (Passive)** \n \n**Heavy Artillery • T4 Upgrade** \n \n15% chance to Assist RAVAGER allies. **5% -> 10%** chance to Assist non-RAVAGER allies.")
	.setThumbnail('https://i.imgur.com/QVhrInK.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerboomer:663750496099500032>	**Ravager Boomer (Basic)** \n \n**Plasma Blast • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/kFgllrE.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerboomer:663750496099500032>	**Ravager Boomer (Special)** \n \n**Full Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **230% -> 270%** damage and adjacent targets for **210% -> 220%** damage.")
	.setThumbnail('https://i.imgur.com/7OP10lg.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerboomer:663750496099500032>	**Ravager Boomer (Passive)** \n \n**Heavy Artillery • T4 Upgrade** \n \n15% chance to Assist RAVAGER allies. **5% -> 10%** chance to Assist non-RAVAGER allies.")
	.setThumbnail('https://i.imgur.com/QVhrInK.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerboomer:663750496099500032> **Ravager Boomer** \nRavager Boomer's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerboomer:663750496099500032> **Ravager Boomer** \nRavager Boomer is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'ravagerbruiser' || command === 'bruiser') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerbruiser:663750495839584267>	**Ravager Bruiser (Basic)** \n \n**Cutlazz • T4 Upgrade** \n \nAttack primary target for **230% -> 290%** damage. 70% chance to Taunt for 1 turn.")
	.setThumbnail('https://i.imgur.com/saKBSFC.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerbruiser:663750495839584267>	**Ravager Bruiser (Special)** \n \n**Avast! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Defense Up for 3 turns. Heal self for **1700 -> 2000** Health + 5% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/oYDake6.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerbruiser:663750495839584267>	**Ravager Bruiser (Passive)** \n \n**Seasoned Fighter • T4 Upgrade** \n \nGain **+20% -> +25%** Block chance.")
	.setThumbnail('https://i.imgur.com/0t0O3UT.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerbruiser:663750495839584267>	**Ravager Bruiser (Basic)** \n \n**Cutlazz • T4 Upgrade** \n \nAttack primary target for **230% -> 290%** damage. 70% chance to Taunt for 1 turn.")
	.setThumbnail('https://i.imgur.com/saKBSFC.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerbruiser:663750495839584267>	**Ravager Bruiser (Special)** \n \n**Avast! • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Defense Up for 3 turns. Heal self for **1700 -> 2000** Health + 5% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/oYDake6.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerbruiser:663750495839584267>	**Ravager Bruiser (Passive)** \n \n**Seasoned Fighter • T4 Upgrade** \n \nGain **+20% -> +25%** Block chance.")
	.setThumbnail('https://i.imgur.com/0t0O3UT.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerbruiser:663750495839584267> **Ravager Bruiser** \nRavager Bruiser's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerbruiser:663750495839584267> **Ravager Bruiser** \nRavager Bruiser is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'ravagerstitcher' || command === 'stitcher') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerstitcher:663750496338837504>	**Ravager Stitcher (Basic)** \n \n**Disintegrator • T4 Upgrade** \n \nAttack primary target for 160% damage + **70% -> 100%** chance to apply Bleed.")
	.setThumbnail('https://i.imgur.com/OUNGFAu.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerstitcher:663750496338837504>	**Ravager Stitcher (Special)** \n \n**Stitcher Kit • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal most injured ally for **2500 -> 3500** Health + 8% of this character's Max Health. Then Heal most injured ally for **2500 -> 3500** Health + 8% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/ZNrvcBp.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerstitcher:663750496338837504>	**Ravager Stitcher (Passive)** \n \n**Stimutox Treatment • T4 Upgrade** \n \nGain **+20% -> +25%** Max Health.")
	.setThumbnail('https://i.imgur.com/2nhSTDE.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerstitcher:663750496338837504>	**Ravager Stitcher (Basic)** \n \n**Disintegrator • T4 Upgrade** \n \nAttack primary target for 160% damage + **70% -> 100%** chance to apply Bleed.")
	.setThumbnail('https://i.imgur.com/OUNGFAu.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerstitcher:663750496338837504>	**Ravager Stitcher (Special)** \n \n**Stitcher Kit • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal most injured ally for **2500 -> 3500** Health + 8% of this character's Max Health. Then Heal most injured ally for **2500 -> 3500** Health + 8% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/ZNrvcBp.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerstitcher:663750496338837504>	**Ravager Stitcher (Passive)** \n \n**Stimutox Treatment • T4 Upgrade** \n \nGain **+20% -> +25%** Max Health.")
	.setThumbnail('https://i.imgur.com/2nhSTDE.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerstitcher:663750496338837504> **Ravager Stitcher** \nRavager Stitcher's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ravagerstitcher:663750496338837504> **Ravager Stitcher** \nRavager Stitcher is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'redskull' || command === 'red' || command === 'sku' || command === 'skull') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531>	**Red Skull (Basic)** \n \n**Hydra-99 Pistol • T4 Upgrade** \n \nAttack primary target for **170% -> 200%** Piercing + apply Defense Down. On WAR DEFENSE, apply Taunt.\n**80% -> 100%** chance to chain to 1 adjacent target for **150% -> 180%** Piercing + apply Defense Down.")
	.setThumbnail('https://i.imgur.com/3s01VHl.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531>	**Red Skull (Special)** \n \n**Elite Guard • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **2-3 -> 3** HYDRA MINIONS at **300% -> 340%** normal damage and 150% of normal Health.\nFill Speed Bar of self and all allies by +30%.\nOn WAR DEFENSE, generate 2 Ability Energy for self.")
	.setThumbnail('https://i.imgur.com/2gL6nXV.png')
	.addFooter("Possible Summons:\nHydra Scientist\nHydra Rifle Trooper")
	
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531>	**Red Skull (Ultimate)** \n \n**Storm Assault • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nApply Offense Up to **3 -> all** random allies or self.\nAttack primary target for **350% -> 400%** damage.\nGain assist at -50% Damage from **3-5 -> 5** HYDRA allies.")
	.setThumbnail('https://i.imgur.com/IPMDqMj.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531>	**Red Skull (Passive)** \n \n**Hail Hydra • T4 Upgrade** \n \nOn Spawn, if Health is full, this character has 1 or more HYDRA MINION allies, and no Charged, gain 8 Charged.\nOn non-Summoned HYDRA MINION ally death, if Charged, Revive that ally at 50% of Max Health + apply 2 Deathproof and lose 1 Charged.\nGain **+10% -> +15%** Speed and Damage. HYDRA MINION allies gain **+10% -> +15%** Speed and Damage.")
	.setThumbnail('https://i.imgur.com/n4s0NzM.png') 
	.addFooter("On WAR DEFENSE:\nGain +25% Damage Reduction per non-summoned HYDRA ally.\nGain +10,000% Resistance against Defense Down and Bleed.")
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531>	**Red Skull (Basic)** \n \n**Hydra-99 Pistol • T4 Upgrade** \n \nAttack primary target for **170% -> 200%** Piercing + apply Defense Down. On WAR DEFENSE, apply Taunt.\n**80% -> 100%** chance to chain to 1 adjacent target for **150% -> 180%** Piercing + apply Defense Down.")
	.setThumbnail('https://i.imgur.com/3s01VHl.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531>	**Red Skull (Special)** \n \n**Elite Guard • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **2-3 -> 3** HYDRA MINIONS at **300% -> 340%** normal damage and 150% of normal Health.\nFill Speed Bar of self and all allies by +30%.\nOn WAR DEFENSE, generate 2 Ability Energy for self.")
	.setThumbnail('https://i.imgur.com/2gL6nXV.png') 
	.addFooter("Possible Summons:\nHydra Scientist\nHydra Rifle Trooper")
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531>	**Red Skull (Ultimate)** \n \n**Storm Assault • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nApply Offense Up to **3 -> all** random allies or self.\nAttack primary target for **350% -> 400%** damage.\nGain assist at -50% Damage from **3-5 -> 5** HYDRA allies.")
	.setThumbnail('https://i.imgur.com/IPMDqMj.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531>	**Red Skull (Passive)** \n \n**Hail Hydra • T4 Upgrade** \n \nOn Spawn, if Health is full, this character has 1 or more HYDRA MINION allies, and no Charged, gain 8 Charged.\nOn non-Summoned HYDRA MINION ally death, if Charged, Revive that ally at 50% of Max Health + apply 2 Deathproof and lose 1 Charged.\nGain **+10% -> +15%** Speed and Damage. HYDRA MINION allies gain **+10% -> +15%** Speed and Damage.")
	.setThumbnail('https://i.imgur.com/n4s0NzM.png') 
	.addFooter("On WAR DEFENSE:\nGain +25% Damage Reduction per non-summoned HYDRA ally.\nGain +10,000% Resistance against Defense Down and Bleed.")
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531> **Red Skull** \nRed Skull's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:redskull:663750496959594531> **Red Skull** \nRed Skull is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'rescue' || command === 'res' || command === 'resc' || command === 'rescu') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147>	**Rescue (Basic)** \n \n**Sonic Repulsor • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage. Chain to an adjacent target for **120% -> 140%** damage. Always apply Slow to each target.")
	.setThumbnail('https://i.imgur.com/TMKyiFr.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147>	**Rescue (Special)** \n \n**Tech Shield • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nBarrier all allies for **2500 -> 3500** + 10% of this character's Max Health. Apply Regeneration to all allies. In WAR, apply 2 Regeneration to all allies instead.")
	.setThumbnail('https://i.imgur.com/UGC7VVq.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147>	**Rescue (Ultimate)** \n \n**Firewall • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nClear **4 -> all** negative effects from all allies. Apply Offense Up to self and POWER ARMOR allies for 2 turns.\nIn WAR, apply Immunity to self and all allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/ji3HOXi.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147>	**Rescue (Passive)** \n \n**Stark Upgrade • T4 Upgrade** \n \nIn WAR, on Spawn, Barrier POWER ARMOR allies for **1500 -> 2000** + **5% -> 10%** of this character's Max Health.\nWhen an ally drops below 50% Health, Barrier them for **1500 -> 2000** + 5% of this character's Max Health.\nGain **+10% -> +15%** Max Health.\nIn WAR, Barrier for an additional 5% of this character's Max Health.\nPOWER ARMOR allies gain **+10% -> +15%** Max Health.")
	.setThumbnail('https://i.imgur.com/Rf4o87u.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147>	**Rescue (Basic)** \n \n**Sonic Repulsor • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage. Chain to an adjacent target for **120% -> 140%** damage. Always apply Slow to each target.")
	.setThumbnail('https://i.imgur.com/TMKyiFr.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147>	**Rescue (Special)** \n \n**Tech Shield • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nBarrier all allies for **2500 -> 3500** + 10% of this character's Max Health. Apply Regeneration to all allies. In WAR, apply 2 Regeneration to all allies instead.")
	.setThumbnail('https://i.imgur.com/UGC7VVq.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147>	**Rescue (Ultimate)** \n \n**Firewall • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nClear **4 -> all** negative effects from all allies. Apply Offense Up to self and POWER ARMOR allies for 2 turns.\nIn WAR, apply Immunity to self and all allies for 2 turns.")
	.setThumbnail('https://i.imgur.com/ji3HOXi.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147>	**Rescue (Passive)** \n \n**Stark Upgrade • T4 Upgrade** \n \nIn WAR, on Spawn, Barrier POWER ARMOR allies for **1500 -> 2000** + **5% -> 10%** of this character's Max Health.\nWhen an ally drops below 50% Health, Barrier them for **1500 -> 2000** + 5% of this character's Max Health.\nGain **+10% -> +15%** Max Health.\nIn WAR, Barrier for an additional 5% of this character's Max Health.\nPOWER ARMOR allies gain **+10% -> +15%** Max Health.")
	.setThumbnail('https://i.imgur.com/Rf4o87u.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147> **Rescue** \nRescue's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rescue:663750496057819147> **Rescue** \nRescue is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'rhino' || command === 'rhi' || command === 'rhin') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261>	**Rhino (Basic)** \n \n**Pummel • T4 Upgrade** \n \nAttack primary target for **240% -> 290%** damage.")
	.setThumbnail('https://i.imgur.com/wd0GFZO.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261>	**Rhino (Special)** \n \n**Furious Charge • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt.\nClear 1 negative effect from self and each adjacent ally.\nAttack primary and all adjacent targets for **290% -> 350%** damage.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/GjNG9ou.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261>	**Rhino (Ultimate)** \n \n**Stampede • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and all adjacent targets for **320% -> 380%** damage.\nThis attack gains **+15 -> +20%** damage per CITY HERO enemy.")
	.setThumbnail('https://i.imgur.com/qsgThMp.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261>	**Rhino (Passive)** \n \n**Rhino Hide • T4 Upgrade** \n \nOn Spawn, gain Counter.\nGain **15% -> 25%** Max Health per SINISTER SIX ally.\nOn Blind, change Speed Bar by **75 -> 100%**.\nOn Blind, clear 1 negative effect from self and each ally.")
	.setThumbnail('https://i.imgur.com/35xOeXh.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261>	**Rhino (Basic)** \n \n**Pummel • T4 Upgrade** \n \nAttack primary target for **240% -> 290%** damage.")
	.setThumbnail('https://i.imgur.com/wd0GFZO.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261>	**Rhino (Special)** \n \n**Furious Charge • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain Taunt.\nClear 1 negative effect from self and each adjacent ally.\nAttack primary and all adjacent targets for **290% -> 350%** damage.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/GjNG9ou.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261>	**Rhino (Ultimate)** \n \n**Stampede • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and all adjacent targets for **320% -> 380%** damage.\nThis attack gains **+15 -> +20%** damage per CITY HERO enemy.")
	.setThumbnail('https://i.imgur.com/qsgThMp.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261>	**Rhino (Passive)** \n \n**Rhino Hide • T4 Upgrade** \n \nOn Spawn, gain Counter.\nGain **15% -> 25%** Max Health per SINISTER SIX ally.\nOn Blind, change Speed Bar by **75 -> 100%**.\nOn Blind, clear 1 negative effect from self and each ally.")
	.setThumbnail('https://i.imgur.com/35xOeXh.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261> **Rhino** \nRhino's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rhino:663750497328693261> **Rhino** \nRhino is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'rocketraccoon' || command === 'rocket' || command === 'raccoon') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851>	**Rocket Raccoon (Basic)** \n \n**Rocket Rifle • T4 Upgrade** \n \nAttack primary target for **160% -> 180%** damage + **+10% -> 15%** Crit Chance. Attack all adjacent targets for **110% -> 150%** damage + **10% -> 15%** Crit Chance.")
	.setThumbnail('https://i.imgur.com/Vimpxev.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851>	**Rocket Raccoon (Special)** \n \n**Pretty Good Plan • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **310% -> 340%** damage.\nIf Groot is an ally, gain an Assist from Groot and apply Taunt to Groot.\n**50% -> 70%** chance to gain an Assist from a random ally.")
	.setThumbnail('222') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851>	**Rocket Raccoon (Ultimate)** \n \n**Maximum Damage • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **270% -> 300%** damage. If Groot is an ally, attack all enemies for **320% -> 360%** damage instead.\nGain 2 Counter.")
	.setThumbnail('https://i.imgur.com/9lQhBi4.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851>	**Rocket Raccoon (Passive)** \n \n**Expert Tinker • T4 Upgrade** \n \nTech allies gain +5% Damage.\nOn Turn, 40% chance to apply Offense Up to **1-2 -> 2** random allies")
	.setThumbnail('https://i.imgur.com/Wq29n3O.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851>	**Rocket Raccoon (Basic)** \n \n**Rocket Rifle • T4 Upgrade** \n \nAttack primary target for **160% -> 180%** damage + **+10% -> 15%** Crit Chance. Attack all adjacent targets for **110% -> 150%** damage + **10% -> 15%** Crit Chance.")
	.setThumbnail('https://i.imgur.com/Vimpxev.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851>	**Rocket Raccoon (Special)** \n \n**Pretty Good Plan • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **310% -> 340%** damage.\nIf Groot is an ally, gain an Assist from Groot and apply Taunt to Groot.\n**50% -> 70%** chance to gain an Assist from a random ally.")
	.setThumbnail('222') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851>	**Rocket Raccoon (Ultimate)** \n \n**Maximum Damage • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **270% -> 300%** damage. If Groot is an ally, attack all enemies for **320% -> 360%** damage instead.\nGain 2 Counter.")
	.setThumbnail('https://i.imgur.com/9lQhBi4.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851>	**Rocket Raccoon (Passive)** \n \n**Expert Tinker • T4 Upgrade** \n \nTech allies gain +5% Damage.\nOn Turn, 40% chance to apply Offense Up to **1-2 -> 2** random allies")
	.setThumbnail('https://i.imgur.com/Wq29n3O.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851> **Rocket Raccoon** \nRocket Raccoon's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:rocketraccoon:663750494908579851> **Rocket Raccoon** \nRocket Raccoon is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'Ronan' || command === 'ron' || command === 'rona' || command === 'accuser') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014>	**Ronan (Basic)** \n \n**Hammer Smash • T4 Upgrade** \n \nClear 2 positive effects from primary target.\nAttack primary target for **140% -> 180%** damage + **20% -> 25%** Piercing.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/D3nBgDU.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014>	**Ronan (Special)** \n \n**Judgment • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **1-2 -> 2** KREE allies at **300% -> 340%** normal Damage and 100% of normal Health. Clear 2 negative effects from all allies.\nPossible Summons:\nKree Reaper\nKree Noble")
	.setThumbnail('https://i.imgur.com/UB2JLHC.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014>	**Ronan (Ultimate)** \n \n**Universal Weapon • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **230% -> 290%** damage. Apply Ability Block to the primary target for 2 turns. Apply Ability Block to 2 additional enemies.")
	.setThumbnail('https://i.imgur.com/sOs8BNO.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014>	**Ronan (Passive)** \n \n**Accuser • T4 Upgrade** \n \nWhenever this character or a KREE ally gains energy, they change Speed Bar by 20% and are healed for **3800 -> 4200** Health + 15% of this character's max Health. This effect may be triggered by another passive.\nGain **+15% -> +30%** Resist. Apply **+15% -> +30%** Resist to KREE allies.\nApply +20% Max Health and +20% Damage to non-summoned KREE MINION allies.")
	.setThumbnail('https://i.imgur.com/TkPWaF3.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014>	**Ronan (Basic)** \n \n**Hammer Smash • T4 Upgrade** \n \nClear 2 positive effects from primary target.\nAttack primary target for **140% -> 180%** damage + **20% -> 25%** Piercing.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/D3nBgDU.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014>	**Ronan (Special)** \n \n**Judgment • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **1-2 -> 2** KREE allies at **300% -> 340%** normal Damage and 100% of normal Health. Clear 2 negative effects from all allies.\nPossible Summons:\nKree Reaper\nKree Noble")
	.setThumbnail('https://i.imgur.com/UB2JLHC.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014>	**Ronan (Ultimate)** \n \n**Universal Weapon • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **230% -> 290%** damage. Apply Ability Block to the primary target for 2 turns. Apply Ability Block to 2 additional enemies.")
	.setThumbnail('https://i.imgur.com/sOs8BNO.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014>	**Ronan (Passive)** \n \n**Accuser • T4 Upgrade** \n \nWhenever this character or a KREE ally gains energy, they change Speed Bar by 20% and are healed for **3800 -> 4200** Health + 15% of this character's max Health. This effect may be triggered by another passive.\nGain **+15% -> +30%** Resist. Apply **+15% -> +30%** Resist to KREE allies.\nApply +20% Max Health and +20% Damage to non-summoned KREE MINION allies.")
	.setThumbnail('https://i.imgur.com/TkPWaF3.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014> **Ronan** \nRonan's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ronan:663752093135274014> **Ronan** \nRonan is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'sabretooth' || command === 'sabre' || command === 'tooth') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312>	**Sabretooth (Basic)** \n \n**Claw Rake • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/xU97pSU.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312>	**Sabretooth (Special)** \n \n**Thrash • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **390% -> 460%** damage. If target has Taunt, this ability deals an additional **60% -> 80%** Piercing damage.\nAttack all adjacent targets for **280% -> 320%** damage.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/Uu2hVBK.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312>	**Sabretooth (Ultimate)** \n \n**Blood Rush • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **330% -> 380%** damage + apply Bleed for 2 turns. Chain to **3-5 -> 4-5** targets for **300% -> 330%** damage + apply Bleed for 2 turns.\nCounterattack breaks this Chain.\nIf Magneto or Mr Sinister is an ally, this attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/k8tMsMT.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312>	**Sabretooth (Passive)** \n \n**Feral Healing • T4 Upgrade** \n \nGain +5% damage per BROTHERHOOD or MARAUDERS ally.\nIf Mr Sinister is an ally, gain +20% Crit chance.\nOn Turn, Heal for **10% -> 15%** of this character's Max Health. When this character drops below 50% Health, gain Deathproof.\nGain **+15% -> +25%** chance to assist on non-attack abilities.\nGain **+15% -> +25%** chance to assist on non-attack abilities per MARAUDERS ally.")
	.setThumbnail('https://i.imgur.com/WBJhIPA.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312>	**Sabretooth (Basic)** \n \n**Claw Rake • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/xU97pSU.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312>	**Sabretooth (Special)** \n \n**Thrash • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **390% -> 460%** damage. If target has Taunt, this ability deals an additional **60% -> 80%** Piercing damage.\nAttack all adjacent targets for **280% -> 320%** damage.\nThis attack cannot be blocked.")
	.setThumbnail('https://i.imgur.com/Uu2hVBK.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312>	**Sabretooth (Ultimate)** \n \n**Blood Rush • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **330% -> 380%** damage + apply Bleed for 2 turns. Chain to **3-5 -> 4-5** targets for **300% -> 330%** damage + apply Bleed for 2 turns.\nCounterattack breaks this Chain.\nIf Magneto or Mr Sinister is an ally, this attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/k8tMsMT.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312>	**Sabretooth (Passive)** \n \n**Feral Healing • T4 Upgrade** \n \nGain +5% damage per BROTHERHOOD or MARAUDERS ally.\nIf Mr Sinister is an ally, gain +20% Crit chance.\nOn Turn, Heal for **10% -> 15%** of this character's Max Health. When this character drops below 50% Health, gain Deathproof.\nGain **+15% -> +25%** chance to assist on non-attack abilities.\nGain **+15% -> +25%** chance to assist on non-attack abilities per MARAUDERS ally.")
	.setThumbnail('https://i.imgur.com/WBJhIPA.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312> **Sabretooth** \nSabretooth's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sabretooth:663752081659789312> **Sabretooth** \nSabretooth is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'scarlet' || command === 'witch') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707>	**Scarlet Witch (Basic)** \n \n**Hex Bolt • T4 Upgrade** \n \nAttack primary target for **140% -> 160%** Piercing damage + apply 1-2 random negative effects.")
	.setThumbnail('https://i.imgur.com/69GgBnf.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707>	**Scarlet Witch (Special)** \n \n**Warp Reality • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nRedistribute your total squad health evenly. Apply Deflect to all allies. **50% -> 100%** chance to apply Defense Up to all allies, plus always apply to Vision if he is an ally.")
	.setThumbnail('https://i.imgur.com/4wJ707q.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707>	**Scarlet Witch (Ultimate)** \n \n**Chaos Wave • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **85% -> 100%** Piercing damage + each target has all negative effects prolonged by duration of 1.\nIf this character has 4 or more SUPERNATURAL allies, **50% -> 100%** chance to apply Defense Down to all enemies.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/hw6zYcO.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707>	**Scarlet Witch (Passive)** \n \n**Power of Chthon • T4 Upgrade** \n \nOn Turn, **40% -> 50%** chance to spread a negative effect from an enemy with a negative effect to an adjacent target.\nThis will not spread Stun.")
	.setThumbnail('https://i.imgur.com/zSDynnF.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707>	**Scarlet Witch (Basic)** \n \n**Hex Bolt • T4 Upgrade** \n \nAttack primary target for **140% -> 160%** Piercing damage + apply 1-2 random negative effects.")
	.setThumbnail('https://i.imgur.com/69GgBnf.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707>	**Scarlet Witch (Special)** \n \n**Warp Reality • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nRedistribute your total squad health evenly. Apply Deflect to all allies. **50% -> 100%** chance to apply Defense Up to all allies, plus always apply to Vision if he is an ally.")
	.setThumbnail('https://i.imgur.com/4wJ707q.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707>	**Scarlet Witch (Ultimate)** \n \n**Chaos Wave • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all enemies for **85% -> 100%** Piercing damage + each target has all negative effects prolonged by duration of 1.\nIf this character has 4 or more SUPERNATURAL allies, **50% -> 100%** chance to apply Defense Down to all enemies.\nThis attack is Unavoidable.")
	.setThumbnail('https://i.imgur.com/hw6zYcO.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707>	**Scarlet Witch (Passive)** \n \n**Power of Chthon • T4 Upgrade** \n \nOn Turn, **40% -> 50%** chance to spread a negative effect from an enemy with a negative effect to an adjacent target.\nThis will not spread Stun.")
	.setThumbnail('https://i.imgur.com/zSDynnF.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707> **Scarlet Witch** \nScarlet Witch's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scarletwitch:663751626665885707> **Scarlet Witch** \nScarlet Witch is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'scientist' || command === 'supreme') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910>	**Scientist Supreme (Basic)** \n \n**Serum Pistol • T4 Upgrade** \n \nAttack primary target for **200% -> 240%** damage. Apply 2 random negative effects to primary target.")
	.setThumbnail('https://i.imgur.com/bpfvU56.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910>	**Scientist Supreme (Special)** \n \n**Field Trials • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nFlip **3 -> 4** negative effects into positive effects for all allies. Apply 1 Regeneration to self and all A.I.M. allies. Increase duration of positive effects on self and all A.I.M. allies by +1, up to a maximum of 3.")
	.setThumbnail('https://i.imgur.com/3YKx2tV.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910>	**Scientist Supreme (Ultimate)** \n \n**Retro Vaccination • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal all allies for **2000 -> 3500** Health + 15% of this character's Max Health. Apply 2-3 random negative effects to all non-A.I.M. allies and all enemies for 2 turns.\nGain **25% -> 50%** Extra Focus per each A.I.M. ally for this attack.")
	.setThumbnail('https://i.imgur.com/pzJ1S7v.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910>	**Scientist Supreme (Passive)** \n \n**Mad Science • T4 Upgrade** \n \nOn Spawn, change Speed Bar by +10% + 10% per A.I.M. ally. On Turn, 25% chance to Revive an ally with 20% Max Health, A.I.M. allies Revive with **25% -> 30%** of Max Health instead.\nOn Turn, grant **1 -> 1-2** Ability Energy to all A.I.M. allies with a negative effect.")
	.setThumbnail('https://i.imgur.com/DbNlPuC.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910>	**Scientist Supreme (Basic)** \n \n**Serum Pistol • T4 Upgrade** \n \nAttack primary target for **200% -> 240%** damage. Apply 2 random negative effects to primary target.")
	.setThumbnail('https://i.imgur.com/bpfvU56.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910>	**Scientist Supreme (Special)** \n \n**Field Trials • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nFlip **3 -> 4** negative effects into positive effects for all allies. Apply 1 Regeneration to self and all A.I.M. allies. Increase duration of positive effects on self and all A.I.M. allies by +1, up to a maximum of 3.")
	.setThumbnail('https://i.imgur.com/3YKx2tV.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910>	**Scientist Supreme (Ultimate)** \n \n**Retro Vaccination • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal all allies for **2000 -> 3500** Health + 15% of this character's Max Health. Apply 2-3 random negative effects to all non-A.I.M. allies and all enemies for 2 turns.\nGain **25% -> 50%** Extra Focus per each A.I.M. ally for this attack.")
	.setThumbnail('https://i.imgur.com/pzJ1S7v.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910>	**Scientist Supreme (Passive)** \n \n**Mad Science • T4 Upgrade** \n \nOn Spawn, change Speed Bar by +10% + 10% per A.I.M. ally. On Turn, 25% chance to Revive an ally with 20% Max Health, A.I.M. allies Revive with **25% -> 30%** of Max Health instead.\nOn Turn, grant **1 -> 1-2** Ability Energy to all A.I.M. allies with a negative effect.")
	.setThumbnail('https://i.imgur.com/DbNlPuC.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910> **Scientist Supreme** \nScientist Supreme's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:scientistsupreme:663751613256826910> **Scientist Supreme** \nScientist Supreme is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'shieldassault' || command === 'assault') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldassault:663750496670187521>	**S.H.I.E.L.D. Assault (Basic)** \n \n**Concussion Grenade • T4 Upgrade** \n \nAttack primary target for 110% damage + **25 -> 35%** Piercing. Attack adjacent targets for 100% damage + **25% -> 35%** Piercing.")
	.setThumbnail('https://i.imgur.com/IHaZoVl.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldassault:663750496670187521>	**S.H.I.E.L.D. Assault (Special)** \n \n**Barrage • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all targets for **200% -> 230%** damage + 50% chance to remove 1 positive effect from all targets.")
	.setThumbnail('https://i.imgur.com/OnkyDQb.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldassault:663750496670187521>	**S.H.I.E.L.D. Assault (Passive)** \n \n**Airborne • T4 Upgrade** \n \nGain **+40% -> +50%** Extra Crit chance. Nick Fury and S.H.I.E.L.D. MINION allies gain **+40% -> +50%** Crit chance.\nOn WAR DEFENSE Coulson gains **+40% -> +50%** Extra Crit chance.")
	.setThumbnail('https://i.imgur.com/eN0KoPE.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldassault:663750496670187521>	**S.H.I.E.L.D. Assault (Basic)** \n \n**Concussion Grenade • T4 Upgrade** \n \nAttack primary target for 110% damage + **25 -> 35%** Piercing. Attack adjacent targets for 100% damage + **25% -> 35%** Piercing.")
	.setThumbnail('https://i.imgur.com/IHaZoVl.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldassault:663750496670187521>	**S.H.I.E.L.D. Assault (Special)** \n \n**Barrage • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all targets for **200% -> 230%** damage + 50% chance to remove 1 positive effect from all targets.")
	.setThumbnail('https://i.imgur.com/OnkyDQb.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldassault:663750496670187521>	**S.H.I.E.L.D. Assault (Passive)** \n \n**Airborne • T4 Upgrade** \n \nGain **+40% -> +50%** Extra Crit chance. Nick Fury and S.H.I.E.L.D. MINION allies gain **+40% -> +50%** Crit chance.\nOn WAR DEFENSE Coulson gains **+40% -> +50%** Extra Crit chance.")
	.setThumbnail('https://i.imgur.com/eN0KoPE.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldassault:663750496670187521> **S.H.I.E.L.D. Assault** \nS.H.I.E.L.D. Assault's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldassault:663750496670187521> **S.H.I.E.L.D. Assault** \nS.H.I.E.L.D. Assault is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'shieldmedic' || command === 'medic') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldmedic:663750794700390421>	**S.H.I.E.L.D. Medic (Basic)** \n \n**I.C.E.R. Pistol • T4 Upgrade** \n \nAttack primary target for **200% -> 240%** damage + apply Offense Down for 1-2 turns. On Crit, change Speed Bar by -25%.")
	.setThumbnail('https://i.imgur.com/qEex9l2.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldmedic:663750794700390421>	**S.H.I.E.L.D. Medic (Special)** \n \n**Emergency Treatment • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nIf Coulson is an ally and dead, Revive him with 51% Health. 20% chance to Revive dead ally with 10% Health. Heal all allies for **1100 -> 1500** Health + 15% of this character's Max Health.\nIf allies are S.H.I.E.L.D., then heal for an additional 20% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/bI3AoNl.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldmedic:663750794700390421>	**S.H.I.E.L.D. Medic (Passive)** \n \n**Fighting Fit • T4 Upgrade** \n \nOn turn, **30% -> 50%** chance to heal most injured ally for 20% of this character's Max Health + apply Regeneration for 2 turns.\nIf ally is Nick Fury or S.H.I.E.L.D. MINION, then apply an additional Regeneration. On WAR DEFENSE If ally is Coulson, then apply an additional Regeneration.")
	.setThumbnail('https://i.imgur.com/TeDuXJD.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldmedic:663750794700390421>	**S.H.I.E.L.D. Medic (Basic)** \n \n**I.C.E.R. Pistol • T4 Upgrade** \n \nAttack primary target for **200% -> 240%** damage + apply Offense Down for 1-2 turns. On Crit, change Speed Bar by -25%.")
	.setThumbnail('https://i.imgur.com/qEex9l2.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldmedic:663750794700390421>	**S.H.I.E.L.D. Medic (Special)** \n \n**Emergency Treatment • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nIf Coulson is an ally and dead, Revive him with 51% Health. 20% chance to Revive dead ally with 10% Health. Heal all allies for **1100 -> 1500** Health + 15% of this character's Max Health.\nIf allies are S.H.I.E.L.D., then heal for an additional 20% of this character's Max Health.")
	.setThumbnail('https://i.imgur.com/bI3AoNl.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldmedic:663750794700390421>	**S.H.I.E.L.D. Medic (Passive)** \n \n**Fighting Fit • T4 Upgrade** \n \nOn turn, **30% -> 50%** chance to heal most injured ally for 20% of this character's Max Health + apply Regeneration for 2 turns.\nIf ally is Nick Fury or S.H.I.E.L.D. MINION, then apply an additional Regeneration. On WAR DEFENSE If ally is Coulson, then apply an additional Regeneration.")
	.setThumbnail('https://i.imgur.com/TeDuXJD.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldmedic:663750794700390421> **S.H.I.E.L.D. Medic** \nS.H.I.E.L.D. Medic's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldmedic:663750794700390421> **S.H.I.E.L.D. Medic** \nS.H.I.E.L.D. Medic is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'shieldoperative' || command === 'operative') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldoperative:663750789021564938>	**S.H.I.E.L.D. Operative (Basic)** \n \n**Snap Shot • T4 Upgrade** \n \nAttack primary target for **210% -> 250%** damage. On Crit, change Speed Bar by -25%. Clear a positive effect from target.\nIf Nick Fury is ally, he gains the cleared effect.")
	.setThumbnail('https://i.imgur.com/GeCMVcY.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldoperative:663750789021564938>	**S.H.I.E.L.D. Operative (Special)** \n \n**Extraction • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Stealth to most injured ally for 2 turns + heal for **900 -> 1200** Health + 10% of this character's Max Health. Apply 3 Regeneration.\nIf ally is Nick Fury or S.H.I.E.L.D. MINION, apply additional Regeneration. On WAR DEFENSE, if that ally is Coulson, also apply additional Regeneration.")
	.setThumbnail('https://i.imgur.com/WOxcCYS.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldoperative:663750789021564938>	**S.H.I.E.L.D. Operative (Passive)** \n \n**Special Agent • T4 Upgrade** \n \nGain **+10% -> +20%** Extra Focus. Nick Fury and S.H.I.E.L.D. MINION allies gain **+10% -> +20%** Extra Focus. On WAR DEFENSE, Coulson gains **+10% -> +20%** Extra Focus.\nOn Spawn, apply **1 -> 2** Counter to Nick Fury if ally.\nOn Turn, apply Counter to 2 allies **must be Nick Fury or S.H.I.E.L.D. MINION. In WAR DEFENSE, can also choose Coulson.**")
	.setThumbnail('https://i.imgur.com/nHC2o9u.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldoperative:663750789021564938>	**S.H.I.E.L.D. Operative (Basic)** \n \n**Snap Shot • T4 Upgrade** \n \nAttack primary target for **210% -> 250%** damage. On Crit, change Speed Bar by -25%. Clear a positive effect from target.\nIf Nick Fury is ally, he gains the cleared effect.")
	.setThumbnail('https://i.imgur.com/GeCMVcY.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldoperative:663750789021564938>	**S.H.I.E.L.D. Operative (Special)** \n \n**Extraction • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Stealth to most injured ally for 2 turns + heal for **900 -> 1200** Health + 10% of this character's Max Health. Apply 3 Regeneration.\nIf ally is Nick Fury or S.H.I.E.L.D. MINION, apply additional Regeneration. On WAR DEFENSE, if that ally is Coulson, also apply additional Regeneration.")
	.setThumbnail('https://i.imgur.com/WOxcCYS.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldoperative:663750789021564938>	**S.H.I.E.L.D. Operative (Passive)** \n \n**Special Agent • T4 Upgrade** \n \nGain **+10% -> +20%** Extra Focus. Nick Fury and S.H.I.E.L.D. MINION allies gain **+10% -> +20%** Extra Focus. On WAR DEFENSE, Coulson gains **+10% -> +20%** Extra Focus.\nOn Spawn, apply **1 -> 2** Counter to Nick Fury if ally.\nOn Turn, apply Counter to 2 allies **must be Nick Fury or S.H.I.E.L.D. MINION. In WAR DEFENSE, can also choose Coulson.**")
	.setThumbnail('https://i.imgur.com/nHC2o9u.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldoperative:663750789021564938> **S.H.I.E.L.D. Operative** \nS.H.I.E.L.D. Operative's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldoperative:663750789021564938> **S.H.I.E.L.D. Operative** \nS.H.I.E.L.D. Operative is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'shieldsecurity' || command === 'security') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldsecurity:663750788891541504>	**S.H.I.E.L.D. Security (Basic)** \n \n**Stun Baton • T4 Upgrade** \n \nAttack primary target for **230% -> 270%** damage + apply Slow.")
	.setThumbnail('https://i.imgur.com/ska8V3y.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldsecurity:663750788891541504>	**S.H.I.E.L.D. Security (Special)** \n \n**Crowd Control • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **320% -> 370%** damage + Bonus attack for **300% -> 350%** damage. If target has Slow, apply Stun.")
	.setThumbnail('https://i.imgur.com/mGLtHGV.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldsecurity:663750788891541504>	**S.H.I.E.L.D. Security (Passive)** \n \n**S.H.I.E.L.D. Agent • T4 Upgrade** \n \n**+15% -> +20%** Block chance. +10% Block amount.\nFor each ally that is Nick Fury or S.H.I.E.L.D. MINION, gain +10% Block chance. On WAR DEFENSE, if Coulson is an ally, gain +10% Block chance.\nWhen an ally drops below 50% Health, gain Taunt. If that ally is Nick Fury or a S.H.I.E.L.D. MINION, also gain Defense Up. On WAR DEFENSE, if that ally is Coulson, also gain Defense Up.")
	.setThumbnail('https://i.imgur.com/z5GUYbv.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldsecurity:663750788891541504>	**S.H.I.E.L.D. Security (Basic)** \n \n**Stun Baton • T4 Upgrade** \n \nAttack primary target for **230% -> 270%** damage + apply Slow.")
	.setThumbnail('https://i.imgur.com/ska8V3y.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldsecurity:663750788891541504>	**S.H.I.E.L.D. Security (Special)** \n \n**Crowd Control • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **320% -> 370%** damage + Bonus attack for **300% -> 350%** damage. If target has Slow, apply Stun.")
	.setThumbnail('https://i.imgur.com/mGLtHGV.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldsecurity:663750788891541504>	**S.H.I.E.L.D. Security (Passive)** \n \n**S.H.I.E.L.D. Agent • T4 Upgrade** \n \n**+15% -> +20%** Block chance. +10% Block amount.\nFor each ally that is Nick Fury or S.H.I.E.L.D. MINION, gain +10% Block chance. On WAR DEFENSE, if Coulson is an ally, gain +10% Block chance.\nWhen an ally drops below 50% Health, gain Taunt. If that ally is Nick Fury or a S.H.I.E.L.D. MINION, also gain Defense Up. On WAR DEFENSE, if that ally is Coulson, also gain Defense Up.")
	.setThumbnail('https://i.imgur.com/z5GUYbv.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldsecurity:663750788891541504> **S.H.I.E.L.D. Security** \nS.H.I.E.L.D. Security's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldsecurity:663750788891541504> **S.H.I.E.L.D. Security** \nS.H.I.E.L.D. Security is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'shieldtrooper' || command === 'trooper') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldtrooper:663750790791561219>	**S.H.I.E.L.D. Trooper (Basic)** \n \n**I.C.E.R. Rifle • T4 Upgrade** \n \nAttack primary target for **290% -> 330%** damage. On Crit, change Speed Bar by -25%.")
	.setThumbnail('https://i.imgur.com/FKrPijH.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldtrooper:663750790791561219>	**S.H.I.E.L.D. Trooper (Special)** \n \n**Overwatch • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **340% -> 370%** damage + **80% -> 100%** Piercing.")
	.setThumbnail('https://i.imgur.com/8UPTtFL.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldtrooper:663750790791561219>	**S.H.I.E.L.D. Trooper (Passive)** \n \n**Fire Support • T4 Upgrade** \n \nWhen an enemy attacks an adjacent ally, attack that enemy for **210% -> 250%** damage + on Crit, change Speed Bar by -25%.")
	.setThumbnail('https://i.imgur.com/EC9ad9u.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldtrooper:663750790791561219>	**S.H.I.E.L.D. Trooper (Basic)** \n \n**I.C.E.R. Rifle • T4 Upgrade** \n \nAttack primary target for **290% -> 330%** damage. On Crit, change Speed Bar by -25%.")
	.setThumbnail('https://i.imgur.com/FKrPijH.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldtrooper:663750790791561219>	**S.H.I.E.L.D. Trooper (Special)** \n \n**Overwatch • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **340% -> 370%** damage + **80% -> 100%** Piercing.")
	.setThumbnail('https://i.imgur.com/8UPTtFL.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldtrooper:663750790791561219>	**S.H.I.E.L.D. Trooper (Passive)** \n \n**Fire Support • T4 Upgrade** \n \nWhen an enemy attacks an adjacent ally, attack that enemy for **210% -> 250%** damage + on Crit, change Speed Bar by -25%.")
	.setThumbnail('https://i.imgur.com/EC9ad9u.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldtrooper:663750790791561219> **S.H.I.E.L.D. Trooper** \nS.H.I.E.L.D. Trooper's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shieldtrooper:663750790791561219> **S.H.I.E.L.D. Trooper** \nS.H.I.E.L.D. Trooper is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'shocker' || command === 'shock' || command === 'shocke') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041>	**Shocker (Basic)** \n \n**Concussion Bolt • T4 Upgrade** \n \nAttack primary target for **220% -> 280%** Piercing. On target Dodge, apply Assist Now to a random SINISTER SIX ally.")
	.setThumbnail('https://i.imgur.com/BxN86IV.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041>	**Shocker (Special)** \n \n**Sonic Dissonance • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGenerate 1 Ability Energy for self.\nApply Offense Up to self for **1-2 -> 2** turns.\nApply Offense Up to **2 -> all** SINISTER SIX allies.\nChange Speed Bar by 80%.")
	.setThumbnail('https://i.imgur.com/prHwuDf.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041>	**Shocker (Ultimate)** \n \n**Subsonic Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary and all adjacent targets for 120% Piercing.\nRepeat attack using a new primary target randomly chosen from the previous secondary targets.\nRepeat attack a third time using a new primary target randomly chosen from the previous secondary targets.")
	.setThumbnail('https://i.imgur.com/Oww2AN5.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041>	**Shocker (Passive)** \n \n**Vibro-Shock • T4 Upgrade** \n \nGain **15% -> 20%** Armor. Gain +5% Armor per SINISTER SIX ally.\nGain **10% -> 20%** Damage. Gain +5% Damage per CITY HERO enemy.")
	.setThumbnail('https://i.imgur.com/zdHELMf.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041>	**Shocker (Basic)** \n \n**Concussion Bolt • T4 Upgrade** \n \nAttack primary target for **220% -> 280%** Piercing. On target Dodge, apply Assist Now to a random SINISTER SIX ally.")
	.setThumbnail('https://i.imgur.com/BxN86IV.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041>	**Shocker (Special)** \n \n**Sonic Dissonance • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGenerate 1 Ability Energy for self.\nApply Offense Up to self for **1-2 -> 2** turns.\nApply Offense Up to **2 -> all** SINISTER SIX allies.\nChange Speed Bar by 80%.")
	.setThumbnail('https://i.imgur.com/prHwuDf.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041>	**Shocker (Ultimate)** \n \n**Subsonic Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary and all adjacent targets for 120% Piercing.\nRepeat attack using a new primary target randomly chosen from the previous secondary targets.\nRepeat attack a third time using a new primary target randomly chosen from the previous secondary targets.")
	.setThumbnail('https://i.imgur.com/Oww2AN5.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041>	**Shocker (Passive)** \n \n**Vibro-Shock • T4 Upgrade** \n \nGain **15% -> 20%** Armor. Gain +5% Armor per SINISTER SIX ally.\nGain **10% -> 20%** Damage. Gain +5% Damage per CITY HERO enemy.")
	.setThumbnail('https://i.imgur.com/zdHELMf.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041> **Shocker** \nShocker's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shocker:663750794142679041> **Shocker** \nShocker is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'shuri' || command === 'shu' || command === 'shur') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629>	**Shuri (Basic)** \n \n**Vibranium Gauntlets • T4 Upgrade** \n \nAttack primary target and all adjacent targets for **150% -> 200%** damage. Apply Heal Block to primary target for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/GDqP5dD.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629>	**Shuri (Special)** \n \n**Instant Upgrade • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Defense Up to self and all allies for 2 turns.\nApply +1 Charged, up to a maximum of 5, to self and all WAKANDAN allies.\nGenerate Ability Energy for 2 random allies. Generate Ability Energy for 1 random WAKANDAN ally.")
	.setThumbnail('https://i.imgur.com/JkKv1vJ.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629>	**Shuri (Ultimate)** \n \n**Kimoyo Healing • T4 Upgrade** \n<:abilityoff:663751832413405184> \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nHeal the most injured ally for **250 -> 500** Health + 15% of this character's Max Health. If that ally is WAKANDAN, clear 1 negative effect.\nThen, repeat the above **3 -> 4** additional times.")
	.setThumbnail('https://i.imgur.com/CV2S2IP.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629>	**Shuri (Passive)** \n \n**Wakanda Forever • T4 Upgrade** \n \nOn Spawn, apply Speed Up to self and **2 -> all** WAKANDAN allies.\nOn Turn, heal the most injured ally for 10% of this character's Max Health. While in Charged, heal an additional most injured ally for 10% of this character's Max Health and lose 1 Charged.\nOn Defense Up, generate Ability Energy for self.\nIn RAIDS, self and all WAKANDAN allies gain **+20% -> +40%** Max Health. In RAIDS, self and all WAKANDAN allies gain +20% Armor.\nIn RAIDS, when self or any WAKANDAN ally drops below 50% Max Health, gain 3 Deflect.")
	.setThumbnail('https://i.imgur.com/jq2JTKo.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629>	**Shuri (Basic)** \n \n**Vibranium Gauntlets • T4 Upgrade** \n \nAttack primary target and all adjacent targets for **150% -> 200%** damage. Apply Heal Block to primary target for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/GDqP5dD.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629>	**Shuri (Special)** \n \n**Instant Upgrade • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nApply Defense Up to self and all allies for 2 turns.\nApply +1 Charged, up to a maximum of 5, to self and all WAKANDAN allies.\nGenerate Ability Energy for 2 random allies. Generate Ability Energy for 1 random WAKANDAN ally.")
	.setThumbnail('https://i.imgur.com/JkKv1vJ.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629>	**Shuri (Ultimate)** \n \n**Kimoyo Healing • T4 Upgrade** \n<:abilityoff:663751832413405184> \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nHeal the most injured ally for **250 -> 500** Health + 15% of this character's Max Health. If that ally is WAKANDAN, clear 1 negative effect.\nThen, repeat the above **3 -> 4** additional times.")
	.setThumbnail('https://i.imgur.com/CV2S2IP.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629>	**Shuri (Passive)** \n \n**Wakanda Forever • T4 Upgrade** \n \nOn Spawn, apply Speed Up to self and **2 -> all** WAKANDAN allies.\nOn Turn, heal the most injured ally for 10% of this character's Max Health. While in Charged, heal an additional most injured ally for 10% of this character's Max Health and lose 1 Charged.\nOn Defense Up, generate Ability Energy for self.\nIn RAIDS, self and all WAKANDAN allies gain **+20% -> +40%** Max Health. In RAIDS, self and all WAKANDAN allies gain +20% Armor.\nIn RAIDS, when self or any WAKANDAN ally drops below 50% Max Health, gain 3 Deflect.")
	.setThumbnail('https://i.imgur.com/jq2JTKo.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629> **Shuri** \nShuri's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:shuri:663750793765060629> **Shuri** \nShuri is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'sif' || command === 'lady' || command === 'si' || command === 'lad') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299>	**Sif (Basic)** \n \n**Fending Strike • T4 Upgrade** \n \nAttack primary target for **240% -> 280%** damage.\nGain 2 Deflect.")
	.setThumbnail('https://i.imgur.com/13QMCmd.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299>	**Sif (Special)** \n \n**Shield Slam • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **290% -> 340%** damage.\nGain Taunt and 3 Counter.")
	.setThumbnail('https://i.imgur.com/vqiZAiN.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299>	**Sif (Ultimate)** \n \n**Whirling Blades • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **320% -> 360%** damage.\nRebound chain to **3-4 -> 4-5** additional targets for **290% -> 330%** damage.\nCounterattack breaks this Chain.\nIf Thor is an ally, this attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/BvXkq7j.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299>	**Sif (Passive)** \n \n**Defender of Asgard • T4 Upgrade** \n \nGain **+25% -> +35%** Block Chance. Gain **+10% -> +15%** Block Amount.\nGain +10% Block Chance for each ASGARDIAN ally.\nOn Spawn, gain Defense Up + 2 Deflect.\nOn Turn, heal self for 5% of Max Health + 5% of Max Health per non-minion ASGARDIAN ally.")
	.setThumbnail('https://i.imgur.com/NsmOSOX.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299>	**Sif (Basic)** \n \n**Fending Strike • T4 Upgrade** \n \nAttack primary target for **240% -> 280%** damage.\nGain 2 Deflect.")
	.setThumbnail('https://i.imgur.com/13QMCmd.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299>	**Sif (Special)** \n \n**Shield Slam • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **290% -> 340%** damage.\nGain Taunt and 3 Counter.")
	.setThumbnail('https://i.imgur.com/vqiZAiN.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299>	**Sif (Ultimate)** \n \n**Whirling Blades • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **320% -> 360%** damage.\nRebound chain to **3-4 -> 4-5** additional targets for **290% -> 330%** damage.\nCounterattack breaks this Chain.\nIf Thor is an ally, this attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/BvXkq7j.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299>	**Sif (Passive)** \n \n**Defender of Asgard • T4 Upgrade** \n \nGain **+25% -> +35%** Block Chance. Gain **+10% -> +15%** Block Amount.\nGain +10% Block Chance for each ASGARDIAN ally.\nOn Spawn, gain Defense Up + 2 Deflect.\nOn Turn, heal self for 5% of Max Health + 5% of Max Health per non-minion ASGARDIAN ally.")
	.setThumbnail('https://i.imgur.com/NsmOSOX.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299> **Sif** \nSif's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:sif:663750798311948299> **Sif** \nSif is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'spiderman' || command === 'spider' || command === 'spid' || command === 'spide') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361>	**Spider-Man (Basic)** \n \n**Agile Attack • T4 Upgrade** \n \nAttack primary target for **220% -> 270%** damage + 70% chance to Chain up to 1 adjacent target for **150% -> 200%** damage. **50% -> 60%** chance to gain Evade.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/6ZwHVyY.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361>	**Spider-Man (Special)** \n \n**Web Slinger • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **190% -> 200%** damage + Chain to **2-3 -> 3** adjacent targets for **150% -> 160%** damage. Apply Defense Down to each target for 2 turns.\nThis attack cannot be Countered.")
	.setThumbnail('https://i.imgur.com/pdhaJwJ.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361>	**Spider-Man (Ultimate)** \n \n**Tangled Web • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **440% -> 500%** damage + apply Stun and Slow.")
	.setThumbnail('https://i.imgur.com/b6ClHKl.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361>	**Spider-Man (Passive)** \n \n**Spidey-Sense • T4 Upgrade** \n \nGain **+20% -> +25%** Dodge chance.\nOn Dodge, fill Spider-Man **Miles** and this character's Speed Bar by +10%.")
	.setThumbnail('https://i.imgur.com/0KwaLAW.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361>	**Spider-Man (Basic)** \n \n**Agile Attack • T4 Upgrade** \n \nAttack primary target for **220% -> 270%** damage + 70% chance to Chain up to 1 adjacent target for **150% -> 200%** damage. **50% -> 60%** chance to gain Evade.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/6ZwHVyY.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361>	**Spider-Man (Special)** \n \n**Web Slinger • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **190% -> 200%** damage + Chain to **2-3 -> 3** adjacent targets for **150% -> 160%** damage. Apply Defense Down to each target for 2 turns.\nThis attack cannot be Countered.")
	.setThumbnail('https://i.imgur.com/pdhaJwJ.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361>	**Spider-Man (Ultimate)** \n \n**Tangled Web • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **440% -> 500%** damage + apply Stun and Slow.")
	.setThumbnail('https://i.imgur.com/b6ClHKl.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361>	**Spider-Man (Passive)** \n \n**Spidey-Sense • T4 Upgrade** \n \nGain **+20% -> +25%** Dodge chance.\nOn Dodge, fill Spider-Man **Miles** and this character's Speed Bar by +10%.")
	.setThumbnail('https://i.imgur.com/0KwaLAW.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361> **Spider-Man** \nSpider-Man's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:spiderman:663750794092216361> **Spider-Man** \nSpider-Man is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'starlord' || command === 'star' || command === 'lord') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705>	**Star Lord (Basic)** \n \n**Element Gun • T4 Upgrade** \n \nAttack primary target for **260% -> 310%** damage + Chain to 1-2 adjacent targets for **200 -> 250%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/pmSpMHG.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705>	**Star Lord (Special)** \n \n**Clever Distraction • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGrant 2 Ability Energy to random adjacent allies.\nApply Blind to primary target and an additional random target + 50% chance to apply to a third target.\nThis ability is Unavoidable.")
	.setThumbnail('https://i.imgur.com/rxFuTu0.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705>	**Star Lord (Ultimate)** \n \n**Elemental Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **480% -> 550%** damage. Gain an Assist from a GUARDIAN ally. Always gain an additional Assist from a random ally.")
	.setThumbnail('https://i.imgur.com/TiwGtf6.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705>	**Star Lord (Passive)** \n \n**Improvisation • T4 Upgrade** \n \nOn Turn, 50% chance to both generate **1 -> 1-2** Ability Energy for adjacent allies and generate 1-2 Ability Energy to GUARDIAN allies.\nGUARDIAN allies gain +30% Damage.\nGUARDIAN allies gain +20% Speed.")
	.setThumbnail('https://i.imgur.com/4j9jL7h.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705>	**Star Lord (Basic)** \n \n**Element Gun • T4 Upgrade** \n \nAttack primary target for **260% -> 310%** damage + Chain to 1-2 adjacent targets for **200 -> 250%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/pmSpMHG.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705>	**Star Lord (Special)** \n \n**Clever Distraction • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGrant 2 Ability Energy to random adjacent allies.\nApply Blind to primary target and an additional random target + 50% chance to apply to a third target.\nThis ability is Unavoidable.")
	.setThumbnail('https://i.imgur.com/rxFuTu0.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705>	**Star Lord (Ultimate)** \n \n**Elemental Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **480% -> 550%** damage. Gain an Assist from a GUARDIAN ally. Always gain an additional Assist from a random ally.")
	.setThumbnail('https://i.imgur.com/TiwGtf6.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705>	**Star Lord (Passive)** \n \n**Improvisation • T4 Upgrade** \n \nOn Turn, 50% chance to both generate **1 -> 1-2** Ability Energy for adjacent allies and generate 1-2 Ability Energy to GUARDIAN allies.\nGUARDIAN allies gain +30% Damage.\nGUARDIAN allies gain +20% Speed.")
	.setThumbnail('https://i.imgur.com/4j9jL7h.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705> **Star Lord** \nStar Lord's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:starlord:663750797447921705> **Star Lord** \nStar Lord is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'storm' || command === 'sto' || command === 'stor') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249>	**Storm (Basic)** \n \n**Shocking Blow • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage. If Charged, in addition, attack adjacent targets for **130% -> 150%** damage.\nGain +1 Charged, up to a maximum of **15 -> 20**.")
	.setThumbnail('https://i.imgur.com/9CTsQUW.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249>	**Storm (Special)** \n \n**Ice Storm • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all targets for **150% -> 180%** damage + 50% chance to apply Slow to each target.\nIf Charged, chance to apply Slow is increased by **+20% -> +25%** per Charged. Additionally, 10% chance to apply Stun to each target, and chance to apply is increased by +10% per Charged. Then lose Charged.\nThis attack has +100% Extra Focus and cannot be Dodged.")
	.setThumbnail('https://i.imgur.com/zKaLYAw.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249>	**Storm (Ultimate)** \n \n**Storm of the Century • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all targets for 110% damage. Damage is increased by **90% -> 100%** per Charged.\nThen lose Charged.")
	.setThumbnail('https://i.imgur.com/M3hsEey.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249>	**Storm (Passive)** \n \n**Ride the Wind • T4 Upgrade** \n \nOn Turn, **40% -> 50%** chance to apply Speed Up to X-MEN and X-FORCE allies.\n**40% -> 50%** chance to grant Assist Now to self or a random X-MEN or X-FORCE ally on each X-MEN or X-FORCE ally's turn.")
	.setThumbnail('https://i.imgur.com/AUCizS7.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249>	**Storm (Basic)** \n \n**Shocking Blow • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage. If Charged, in addition, attack adjacent targets for **130% -> 150%** damage.\nGain +1 Charged, up to a maximum of **15 -> 20**.")
	.setThumbnail('https://i.imgur.com/9CTsQUW.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249>	**Storm (Special)** \n \n**Ice Storm • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all targets for **150% -> 180%** damage + 50% chance to apply Slow to each target.\nIf Charged, chance to apply Slow is increased by **+20% -> +25%** per Charged. Additionally, 10% chance to apply Stun to each target, and chance to apply is increased by +10% per Charged. Then lose Charged.\nThis attack has +100% Extra Focus and cannot be Dodged.")
	.setThumbnail('https://i.imgur.com/zKaLYAw.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249>	**Storm (Ultimate)** \n \n**Storm of the Century • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack all targets for 110% damage. Damage is increased by **90% -> 100%** per Charged.\nThen lose Charged.")
	.setThumbnail('https://i.imgur.com/M3hsEey.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249>	**Storm (Passive)** \n \n**Ride the Wind • T4 Upgrade** \n \nOn Turn, **40% -> 50%** chance to apply Speed Up to X-MEN and X-FORCE allies.\n**40% -> 50%** chance to grant Assist Now to self or a random X-MEN or X-FORCE ally on each X-MEN or X-FORCE ally's turn.")
	.setThumbnail('https://i.imgur.com/AUCizS7.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249> **Storm** \nStorm's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:storm:66375079https://i.imgur.com/9CTsQUW.png0197249> **Storm** \nStorm is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'stryfe' || command === 'str' || command === 'stry' || command === 'stryf') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368>	**Stryfe (Basic)** \n \n**Psychic Strike • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage.\nIf the target has Taunt, Gain +1 Taunt, up to a maximum of 3. Clear Taunt from the target.\nIf Mister Sinister is an ally, transfer **4 -> all** positive effects from the primary target to Mister Sinister.")
	.setThumbnail('https://i.imgur.com/tFduypG.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368>	**Stryfe (Special)** \n \n**Superiority • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain +1 Taunt, up to a maximum of 3.\nGain 3 Deflect + Barrier self for **10% -> 15%** of this character's Max Health.\nGenerate 2 Ability Energy for 2 random Marauders allies.")
	.setThumbnail('https://i.imgur.com/wM1Hx5K.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368>	**Stryfe (Ultimate)** \n \n**Nullifying Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nApply Ability Block to primary target and adjacent targets.\nAttack primary and adjacent targets for **360% -> 420%** damage.")
	.setThumbnail('https://i.imgur.com/TJ4ARzY.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368>	**Stryfe (Passive)** \n \n**Grandeur • T4 Upgrade** \n \nOn Spawn, fill +10% Speed Bar + 10% Speed Bar per MUTANT VILLAIN ally.\nOn turn, if Taunting, gain +1 Deflect up to a maximum of 3.\nWhen an allied Mister Sinister drops below 50% Max Health, gain +1 Taunt, up to a maximum of 3 + gain Barrier for **10% -> 15%** of this character's Max Health.\nOn WAR DEFENSE:\nGain **+40% -> +50%** Resistance.\nMUTANT allies gain **+40% -> +50%** Resistance.\nGain **+40% -> +50%** Focus.\nVILLAIN allies gain **+40% -> +50%** Focus.")
	.setThumbnail('https://i.imgur.com/eo7gnTS.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368>	**Stryfe (Basic)** \n \n**Psychic Strike • T4 Upgrade** \n \nAttack primary target for **250% -> 300%** damage.\nIf the target has Taunt, Gain +1 Taunt, up to a maximum of 3. Clear Taunt from the target.\nIf Mister Sinister is an ally, transfer **4 -> all** positive effects from the primary target to Mister Sinister.")
	.setThumbnail('https://i.imgur.com/tFduypG.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368>	**Stryfe (Special)** \n \n**Superiority • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGain +1 Taunt, up to a maximum of 3.\nGain 3 Deflect + Barrier self for **10% -> 15%** of this character's Max Health.\nGenerate 2 Ability Energy for 2 random Marauders allies.")
	.setThumbnail('https://i.imgur.com/wM1Hx5K.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368>	**Stryfe (Ultimate)** \n \n**Nullifying Blast • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nApply Ability Block to primary target and adjacent targets.\nAttack primary and adjacent targets for **360% -> 420%** damage.")
	.setThumbnail('https://i.imgur.com/TJ4ARzY.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368>	**Stryfe (Passive)** \n \n**Grandeur • T4 Upgrade** \n \nOn Spawn, fill +10% Speed Bar + 10% Speed Bar per MUTANT VILLAIN ally.\nOn turn, if Taunting, gain +1 Deflect up to a maximum of 3.\nWhen an allied Mister Sinister drops below 50% Max Health, gain +1 Taunt, up to a maximum of 3 + gain Barrier for **10% -> 15%** of this character's Max Health.\nOn WAR DEFENSE:\nGain **+40% -> +50%** Resistance.\nMUTANT allies gain **+40% -> +50%** Resistance.\nGain **+40% -> +50%** Focus.\nVILLAIN allies gain **+40% -> +50%** Focus.")
	.setThumbnail('https://i.imgur.com/eo7gnTS.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368> **Stryfe** \nStryfe's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:stryfe:663750797871546368> **Stryfe** \nStryfe is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'thanos' || command === 'than' || command === 'thano' || command === 'titan') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128>	**Thanos (Basic)** \n \n**Power Punch • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage + **80% -> 100%** chance to gain Counter.")
	.setThumbnail('https://i.imgur.com/oWvz9Ly.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128>	**Thanos (Special)** \n \n**Brutal Assault • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **300% -> 350%** damage + apply Offense Down. Gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/9K0OnTU.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128>	**Thanos (Ultimate)** \n \n**Energy Bomb • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all targets for **230% -> 260%** damage + 100% Drain.\nThis attack cannot miss.")
	.setThumbnail('https://i.imgur.com/q75PEvT.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128>	**Thanos (Passive)** \n \n**Titan Eternal • T4 Upgrade** \n \nGain +1000% Extra Resistance while Taunting.\nOn Death of an enemy, **75% -> 100%** chance to generate 2 Ability Energy for self or any adjacent COSMIC ally.")
	.setThumbnail('https://i.imgur.com/NOi0Hlw.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128>	**Thanos (Basic)** \n \n**Power Punch • T4 Upgrade** \n \nAttack primary target for **180% -> 200%** damage + **80% -> 100%** chance to gain Counter.")
	.setThumbnail('https://i.imgur.com/oWvz9Ly.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128>	**Thanos (Special)** \n \n**Brutal Assault • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **300% -> 350%** damage + apply Offense Down. Gain Taunt for 2 turns.")
	.setThumbnail('https://i.imgur.com/9K0OnTU.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128>	**Thanos (Ultimate)** \n \n**Energy Bomb • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all targets for **230% -> 260%** damage + 100% Drain.\nThis attack cannot miss.")
	.setThumbnail('https://i.imgur.com/q75PEvT.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128>	**Thanos (Passive)** \n \n**Titan Eternal • T4 Upgrade** \n \nGain +1000% Extra Resistance while Taunting.\nOn Death of an enemy, **75% -> 100%** chance to generate 2 Ability Energy for self or any adjacent COSMIC ally.")
	.setThumbnail('https://i.imgur.com/NOi0Hlw.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128> **Thanos** \nThanos's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thanos:663750798324400128> **Thanos** \nThanos is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'thething' || command === 'thing' || command === 'ben' || command === 'grimm') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478>	**The Thing (Basic)** \n \n**Knuckle Sandwich • T4 Upgrade** \n \nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/BWmXdjZ.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478>	**The Thing (Special)** \n \n**Pummelling Stone • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **240% -> 280%** damage. Bonus Attack **1-2 -> 2** times for **180% -> 220%** damage.")
	.setThumbnail('https://i.imgur.com/loLFfJK.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478>	**The Thing (Ultimate)** \n \n**Haymaker • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **490% -> 550%** damage.")
	.setThumbnail('https://i.imgur.com/yCy3BiT.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478>	**The Thing (Passive)** \n \n**It's Clobberin' Time • T4 Upgrade** \n \nWhen attacked, attack that enemy for **125% -> 150%** damage.\nGain **+10% -> +20%** Armor. FANTASTIC FOUR and Namor allies gain **+10% -> +20%** Armor.")
	.setThumbnail('https://i.imgur.com/FymFitG.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478>	**The Thing (Basic)** \n \n**Knuckle Sandwich • T4 Upgrade** \n \nAttack primary target for **300% -> 350%** damage.")
	.setThumbnail('https://i.imgur.com/BWmXdjZ.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478>	**The Thing (Special)** \n \n**Pummelling Stone • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **240% -> 280%** damage. Bonus Attack **1-2 -> 2** times for **180% -> 220%** damage.")
	.setThumbnail('https://i.imgur.com/loLFfJK.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478>	**The Thing (Ultimate)** \n \n**Haymaker • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **490% -> 550%** damage.")
	.setThumbnail('https://i.imgur.com/yCy3BiT.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478>	**The Thing (Passive)** \n \n**It's Clobberin' Time • T4 Upgrade** \n \nWhen attacked, attack that enemy for **125% -> 150%** damage.\nGain **+10% -> +20%** Armor. FANTASTIC FOUR and Namor allies gain **+10% -> +20%** Armor.")
	.setThumbnail('https://i.imgur.com/FymFitG.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478> **The Thing** \nThe Thing's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thing:663750797791592478> **The Thing** \nThe Thing is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'thor' || command === 'th' || command === 'odinson') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632>	**Thor (Basic)** \n \n**Hammer Uppercut • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/Bywc7lW.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632>	**Thor (Special)** \n \n**Hammer Throw • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **260% -> 300%** damage. Chain to **2-3 -> 3** adjacent targets for **200% -> 230%** damage.\nDodge breaks this Chain.")
	.setThumbnail('https://i.imgur.com/KXmuYhe.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632>	**Thor (Ultimate)** \n \n**Lightning Storm • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **270% -> 320%** damage. Apply Stun to primary target + **40% -> 50%** chance to apply Stun to all additional targets.")
	.setThumbnail('https://i.imgur.com/b05t1jH.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632>	**Thor (Passive)** \n \n**God of Thunder • T4 Upgrade** \n \nGain **+10% -> +15%** damage. Gain +10% damage for each ASGARDIAN ally.\nOn Turn, heal self for 5% of Max Health + 5% of Max Health per non-minion ASGARDIAN ally.\nWhen an enemy attacks an ASGARDIAN ally:\nChange Speed Bar by 5%\nGain +1 Charged, up to a maximum of 5.\nOn maximum Charged:\nGenerate +1 Ability Energy for self\nAttack all enemies for **240% -> 260%** damage.\nRemove all Charged.")
	.setThumbnail('https://i.imgur.com/kDo0qJE.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632>	**Thor (Basic)** \n \n**Hammer Uppercut • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage.")
	.setThumbnail('https://i.imgur.com/Bywc7lW.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632>	**Thor (Special)** \n \n**Hammer Throw • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **260% -> 300%** damage. Chain to **2-3 -> 3** adjacent targets for **200% -> 230%** damage.\nDodge breaks this Chain.")
	.setThumbnail('https://i.imgur.com/KXmuYhe.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632>	**Thor (Ultimate)** \n \n**Lightning Storm • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **270% -> 320%** damage. Apply Stun to primary target + **40% -> 50%** chance to apply Stun to all additional targets.")
	.setThumbnail('https://i.imgur.com/b05t1jH.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632>	**Thor (Passive)** \n \n**God of Thunder • T4 Upgrade** \n \nGain **+10% -> +15%** damage. Gain +10% damage for each ASGARDIAN ally.\nOn Turn, heal self for 5% of Max Health + 5% of Max Health per non-minion ASGARDIAN ally.\nWhen an enemy attacks an ASGARDIAN ally:\nChange Speed Bar by 5%\nGain +1 Charged, up to a maximum of 5.\nOn maximum Charged:\nGenerate +1 Ability Energy for self\nAttack all enemies for **240% -> 260%** damage.\nRemove all Charged.")
	.setThumbnail('https://i.imgur.com/kDo0qJE.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632> **Thor** \nThor's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:thor:663750798014021632> **Thor** \nThor is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'toad') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556>	**Toad (Basic)** \n \n**Tongue Lash • T4 Upgrade** \n \nAttack the primary target for **210% -> 260%** damage. Apply Offense Down for 1 turn and Slow for 2 turns.")
	.setThumbnail('https://i.imgur.com/2b2j2X0.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556>	**Toad (Special)** \n \n**Acid Spray • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack the primary and all adjacent targets for **230% -> 280%** damage. Each target has all negative effects prolonged by a duration of 1.")
	.setThumbnail('https://i.imgur.com/aN5QmRN.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556>	**Toad (Ultimate)** \n \n**Leap Frog • T4 Upgrade** \n \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nClear **2 -> all** negative effects from self. Apply Taunt and Defense Up to an allied Blob. Attack the primary target for **210% -> 240%** damage and clear 2 positive effects. Chain to **3 -> 4-5** adjacent targets for **210% -> 240%** damage and clear 2 positive effects on each target. Counterattack breaks this chain.\nIf Blob is an ally:\nAttack the primary target and secondary target for **260% -> 290%** damage instead. This attack cannot be dodged or counterattacked.")
	.setThumbnail('https://i.imgur.com/8EWNRIU.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556>	**Toad (Passive)** \n \n**Amphibian Anatomy • T4 Upgrade** \n \nGain **20% -> 25%** Dodge chance. On Spawn, fill +15% Speed Bar. Fill +15% Speed Bar per BROTHERHOOD ally. 50% chance to gain Assist Now on each BROTHERHOOD ally's turn. On turn, if any BROTHERHOOD ally is Taunting, gain +1 Offense Up, up to a maximum of 3.\nIn WAR:\nGain **+50% -> +60%** Focus. BROTHERHOOD allies gain **+50% -> +60%** Focus")
	.setThumbnail('https://i.imgur.com/fZF9mmo.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556>	**Toad (Basic)** \n \n**Tongue Lash • T4 Upgrade** \n \nAttack the primary target for **210% -> 260%** damage. Apply Offense Down for 1 turn and Slow for 2 turns.")
	.setThumbnail('https://i.imgur.com/2b2j2X0.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556>	**Toad (Special)** \n \n**Acid Spray • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack the primary and all adjacent targets for **230% -> 280%** damage. Each target has all negative effects prolonged by a duration of 1.")
	.setThumbnail('https://i.imgur.com/aN5QmRN.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556>	**Toad (Ultimate)** \n \n**Leap Frog • T4 Upgrade** \n \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nClear **2 -> all** negative effects from self. Apply Taunt and Defense Up to an allied Blob. Attack the primary target for **210% -> 240%** damage and clear 2 positive effects. Chain to **3 -> 4-5** adjacent targets for **210% -> 240%** damage and clear 2 positive effects on each target. Counterattack breaks this chain.\nIf Blob is an ally:\nAttack the primary target and secondary target for **260% -> 290%** damage instead. This attack cannot be dodged or counterattacked.")
	.setThumbnail('https://i.imgur.com/8EWNRIU.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556>	**Toad (Passive)** \n \n**Amphibian Anatomy • T4 Upgrade** \n \nGain **20% -> 25%** Dodge chance. On Spawn, fill +15% Speed Bar. Fill +15% Speed Bar per BROTHERHOOD ally. 50% chance to gain Assist Now on each BROTHERHOOD ally's turn. On turn, if any BROTHERHOOD ally is Taunting, gain +1 Offense Up, up to a maximum of 3.\nIn WAR:\nGain **+50% -> +60%** Focus. BROTHERHOOD allies gain **+50% -> +60%** Focus")
	.setThumbnail('https://i.imgur.com/fZF9mmo.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556> **Toad** \nToad's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:toad:684029278425579556> **Toad** \nToad is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'ultimus' || command === 'ultimu' || command === 'ulti' || command === 'ult') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384>	**Ultimus (Basic)** \n \n**Overwhelming Assault • T4 Upgrade** \n \nAttack primary target for **240% -> 300%** damage + 30% Piercing. 30% chance to apply Ability Block, Defense Down, and Mind Control 1 enemy to attack the primary target.")
	.setThumbnail('https://i.imgur.com/qk8pk64.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384>	**Ultimus (Special)** \n \n**Energy Beam • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target and adjacent enemies for **230% -> 280%** Piercing.\nTransfer **2 -> all** positive effects, excluding Stealth and Taunt, from each target to self.\nApply Regeneration to self and adjacent allies.")
	.setThumbnail('https://i.imgur.com/tdi8pkw.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384>	**Ultimus (Ultimate)** \n \n**Domination • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nIf target has Taunt, gain Offense Up for 1 turn. Attack primary target for **310% -> 370%** damage + Bonus attack for **240% -> 290%** damage per positive effect on target. Flip each positive effect on target to a negative effect.")
	.setThumbnail('https://i.imgur.com/dYhw78D.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384>	**Ultimus (Passive)** \n \n**Kree Eternal • T4 Upgrade** \n \nOn enemy Taunt, change Speed Bar by +30%.\nOn Kill, change Speed Bar by +15% for all non-KREE allies + 20% for all KREE allies.\nGain **15% -> 20%** Block chance + 10% Block chance per non-MINION KREE ally. Non-MINION KREE allies gain **15% -> 20%** Block chance.\nGain 20% Max Health. Non-MINION KREE allies gain 20% Max Health.")
	.setThumbnail('https://i.imgur.com/Dec2AG8.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384>	**Ultimus (Basic)** \n \n**Overwhelming Assault • T4 Upgrade** \n \nAttack primary target for **240% -> 300%** damage + 30% Piercing. 30% chance to apply Ability Block, Defense Down, and Mind Control 1 enemy to attack the primary target.")
	.setThumbnail('https://i.imgur.com/qk8pk64.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384>	**Ultimus (Special)** \n \n**Energy Beam • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target and adjacent enemies for **230% -> 280%** Piercing.\nTransfer **2 -> all** positive effects, excluding Stealth and Taunt, from each target to self.\nApply Regeneration to self and adjacent allies.")
	.setThumbnail('https://i.imgur.com/tdi8pkw.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384>	**Ultimus (Ultimate)** \n \n**Domination • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nIf target has Taunt, gain Offense Up for 1 turn. Attack primary target for **310% -> 370%** damage + Bonus attack for **240% -> 290%** damage per positive effect on target. Flip each positive effect on target to a negative effect.")
	.setThumbnail('https://i.imgur.com/dYhw78D.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384>	**Ultimus (Passive)** \n \n**Kree Eternal • T4 Upgrade** \n \nOn enemy Taunt, change Speed Bar by +30%.\nOn Kill, change Speed Bar by +15% for all non-KREE allies + 20% for all KREE allies.\nGain **15% -> 20%** Block chance + 10% Block chance per non-MINION KREE ally. Non-MINION KREE allies gain **15% -> 20%** Block chance.\nGain 20% Max Health. Non-MINION KREE allies gain 20% Max Health.")
	.setThumbnail('https://i.imgur.com/Dec2AG8.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384> **Ultimus** \nUltimus's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultimus:663750798039056384> **Ultimus** \nUltimus is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'ultron' || command === 'ul' || command === 'ult' || command === 'ultro') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250>	**Ultron (Basic)** \n \n**Disintegration Beam • T4 Upgrade** \n \nAttack primary target for **270% -> 340%** damage + steal 2 positive effects + clear Taunt.")
	.setThumbnail('https://i.imgur.com/Y78BMF9.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250>	**Ultron (Special)** \n \n**Factory Upgrade • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **2-3 -> 3** Ultron Minions at **300% -> 340%** normal damage and 100% of normal Health. Apply Defense Up to self and all ULTRON MINION allies for 2 turns.\nPossible Summons:\nUltron Incinerator\nUltron Accelerator\nUltron Fabricator")
	.setThumbnail('https://i.imgur.com/HaIZygM.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250>	**Ultron (Ultimate)** \n \n**Purge System • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **620% -> 700%** Piercing damage. This ability deals double damage against targets with Defense Up. Gain 1 Ability Energy per positive effect on self.")
	.setThumbnail('https://i.imgur.com/8BbEwWt.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250>	**Ultron (Passive)** \n \n**Ultron Prime • T4 Upgrade** \n \nIf Health is full at the start of a match, Revive once with 50% of this character's Max Health.\nOn Kill, this character and all VILLAIN TECH allies have **4 -> all** positive effects prolonged by a duration of 1.")
	.setThumbnail('https://i.imgur.com/s2kLpjn.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250>	**Ultron (Basic)** \n \n**Disintegration Beam • T4 Upgrade** \n \nAttack primary target for **270% -> 340%** damage + steal 2 positive effects + clear Taunt.")
	.setThumbnail('https://i.imgur.com/Y78BMF9.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250>	**Ultron (Special)** \n \n**Factory Upgrade • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nSummon **2-3 -> 3** Ultron Minions at **300% -> 340%** normal damage and 100% of normal Health. Apply Defense Up to self and all ULTRON MINION allies for 2 turns.\nPossible Summons:\nUltron Incinerator\nUltron Accelerator\nUltron Fabricator")
	.setThumbnail('https://i.imgur.com/HaIZygM.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250>	**Ultron (Ultimate)** \n \n**Purge System • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **620% -> 700%** Piercing damage. This ability deals double damage against targets with Defense Up. Gain 1 Ability Energy per positive effect on self.")
	.setThumbnail('https://i.imgur.com/8BbEwWt.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250>	**Ultron (Passive)** \n \n**Ultron Prime • T4 Upgrade** \n \nIf Health is full at the start of a match, Revive once with 50% of this character's Max Health.\nOn Kill, this character and all VILLAIN TECH allies have **4 -> all** positive effects prolonged by a duration of 1.")
	.setThumbnail('https://i.imgur.com/s2kLpjn.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250> **Ultron** \nUltron's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultron:663750798202634250> **Ultron** \nUltron is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'accelerator' || command === 'accel' || command === 'acc' || command === 'acceler') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronaccelerator:663753510210240525>	**Deadpool (Basic)** \n \n**Rail Gun • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage + change Speed Bar by **-25% -> -30%**.")
	.setThumbnail('https://i.imgur.com/RmV7cfr.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronaccelerator:663753510210240525>	**Deadpool (Special)** \n \n**Overdrive • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGrant Speed Up to self, 4 allies, and Ultron for 2 turns + Fill Ultron's Speed Bar by 25%. If Ultron already had Speed Up, fill Ultron's Speed Bar by 40% instead of 25%.\n**No changes**")
	.setThumbnail('https://i.imgur.com/7ZuQVM4.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronaccelerator:663753510210240525>	**Deadpool (Passive)** \n \n**Hypermagnetics • T4 Upgrade** \n \nOn Death, fill Ultron's Speed Bar by 25%.\n**No changes**")
	.setThumbnail('https://i.imgur.com/Y5w0vTq.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronaccelerator:663753510210240525>	**Deadpool (Basic)** \n \n**Rail Gun • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage + change Speed Bar by **-25% -> -30%**.")
	.setThumbnail('https://i.imgur.com/RmV7cfr.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronaccelerator:663753510210240525>	**Deadpool (Special)** \n \n**Overdrive • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGrant Speed Up to self, 4 allies, and Ultron for 2 turns + Fill Ultron's Speed Bar by 25%. If Ultron already had Speed Up, fill Ultron's Speed Bar by 40% instead of 25%.\n**No changes**")
	.setThumbnail('https://i.imgur.com/7ZuQVM4.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronaccelerator:663753510210240525>	**Deadpool (Passive)** \n \n**Hypermagnetics • T4 Upgrade** \n \nOn Death, fill Ultron's Speed Bar by 25%.\n**No changes**")
	.setThumbnail('https://i.imgur.com/Y5w0vTq.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronaccelerator:663753510210240525> **Deadpool** \nDeadpool's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronaccelerator:663753510210240525> **Deadpool** \nDeadpool is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'fabricator' || command === 'fab' || command === 'fabri' || command === 'fabrica') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronfabricator:663753510268960788>	**Fabricator (Basic)** \n \n**Weld • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage and grant 1 Ability Energy to Ultron.")
	.setThumbnail('https://i.imgur.com/gphO8My.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronfabricator:663753510268960788>	**Fabricator (Special)** \n \n**Fusion • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal the 4 most injured allies, except Ultron, for **6000 -> 7000** Health + 15% of this character's Max Health.\nHeal Ultron for **12000 -> 14000** Health + 25% of this character's Max Health + Clear **3 -> 4** negative effects from Ultron. Grant Ultron Regeneration for 2 turns + fill Ultron's Speed Bar by 25%.")
	.setThumbnail('https://i.imgur.com/Yq1MPQR.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronfabricator:663753510268960788>	**Fabricator (Passive)** \n \n**Nanobot Hive • T4 Upgrade** \n \nOn Death, grant Ultron Deathproof.\n**No changes**")
	.setThumbnail('https://i.imgur.com/yFSBhZ3.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronfabricator:663753510268960788>	**Fabricator (Basic)** \n \n**Weld • T4 Upgrade** \n \nAttack primary target for **300% -> 340%** damage and grant 1 Ability Energy to Ultron.")
	.setThumbnail('https://i.imgur.com/gphO8My.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronfabricator:663753510268960788>	**Fabricator (Special)** \n \n**Fusion • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nHeal the 4 most injured allies, except Ultron, for **6000 -> 7000** Health + 15% of this character's Max Health.\nHeal Ultron for **12000 -> 14000** Health + 25% of this character's Max Health + Clear **3 -> 4** negative effects from Ultron. Grant Ultron Regeneration for 2 turns + fill Ultron's Speed Bar by 25%.")
	.setThumbnail('https://i.imgur.com/Yq1MPQR.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronfabricator:663753510268960788>	**Fabricator (Passive)** \n \n**Nanobot Hive • T4 Upgrade** \n \nOn Death, grant Ultron Deathproof.\n**No changes**")
	.setThumbnail('https://i.imgur.com/yFSBhZ3.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronfabricator:663753510268960788> **Fabricator** \nFabricator's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronfabricator:663753510268960788> **Fabricator** \nFabricator is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'incinerator' || command === 'inciner' || command === 'inci' || command === 'incin') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronincinerator:663753510080217119>	**Incinerator (Basic)** \n \n**Scorch • T4 Upgrade** \n \nAttack primary target for **330% -> 370%** damage + clear 1 positive effect from target. If Ultron is an ally, he gains the cleared effect.\nThis attack will not clear Taunt.")
	.setThumbnail('https://i.imgur.com/Y1nrSTE.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronincinerator:663753510080217119>	**Incinerator (Special)** \n \n**Ignition • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGrant Offense Up to self, 4 allies, and Ultron for 2 turns + Fill Ultron's Speed Bar by 25%. If Ultron already had Offense Up, grant Ultron 1 Ability Energy.\n**No changes**")
	.setThumbnail('https://i.imgur.com/Fq5ohWt.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronincinerator:663753510080217119>	**Incinerator (Passive)** \n \n**Plasma Reactor • T4 Upgrade** \n \nOn Death, grant Ultron Counter.\n**No changes**")
	.setThumbnail('https://i.imgur.com/1cgfqY9.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronincinerator:663753510080217119>	**Incinerator (Basic)** \n \n**Scorch • T4 Upgrade** \n \nAttack primary target for **330% -> 370%** damage + clear 1 positive effect from target. If Ultron is an ally, he gains the cleared effect.\nThis attack will not clear Taunt.")
	.setThumbnail('https://i.imgur.com/Y1nrSTE.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronincinerator:663753510080217119>	**Incinerator (Special)** \n \n**Ignition • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nGrant Offense Up to self, 4 allies, and Ultron for 2 turns + Fill Ultron's Speed Bar by 25%. If Ultron already had Offense Up, grant Ultron 1 Ability Energy.\n**No changes**")
	.setThumbnail('https://i.imgur.com/Fq5ohWt.png') 
	message.channel.send(exampleEmbed2);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronincinerator:663753510080217119>	**Incinerator (Passive)** \n \n**Plasma Reactor • T4 Upgrade** \n \nOn Death, grant Ultron Counter.\n**No changes**")
	.setThumbnail('https://i.imgur.com/1cgfqY9.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronincinerator:663753510080217119> **Incinerator** \nIncinerator's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:ultronincinerator:663753510080217119> **Incinerator** \nIncinerator is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'venom' || command === 'ven' || command === 'veno') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710>	**Venom (Basic)** \n \n**Maul • T4 Upgrade** \n \nAttack primary target for **180% -> 230%** damage + apply Bleed for 1 turn. Flip 2 positive effects to negative effects.\nThis attack cannot be dodged.")
	.setThumbnail('https://i.imgur.com/JcAjmJx.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710>	**Venom (Special)** \n \n**Violate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **330% -> 380%** damage. Apply Ability Block and 3 Bleed for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/NpOqsZt.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710>	**Venom (Ultimate)** \n \n**Corruption • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **180% -> 230%** damage and adjacent targets for **140% -> 180%** damage. Apply Heal Block for 2 turns to primary and adjacent targets. Spread all negative effects from the primary target to all adjacent targets.\nThis will not spread Stun.")
	.setThumbnail('https://i.imgur.com/Uqrlsmb.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710>	**Venom (Passive)** \n \n**Symbiosis • T4 Upgrade** \n \nOn Turn, Heal for **10% -> 15%** of this character's Max Health. If Health is greater than 95%, apply Defense Up for 2 turns to self and all SYMBIOTE allies.\nGain +100% Focus if any SPIDER-VERSE character is present.")
	.setThumbnail('https://i.imgur.com/JRO0e7V.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710>	**Venom (Basic)** \n \n**Maul • T4 Upgrade** \n \nAttack primary target for **180% -> 230%** damage + apply Bleed for 1 turn. Flip 2 positive effects to negative effects.\nThis attack cannot be dodged.")
	.setThumbnail('https://i.imgur.com/JcAjmJx.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710>	**Venom (Special)** \n \n**Violate • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **330% -> 380%** damage. Apply Ability Block and 3 Bleed for **1 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/NpOqsZt.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710>	**Venom (Ultimate)** \n \n**Corruption • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **180% -> 230%** damage and adjacent targets for **140% -> 180%** damage. Apply Heal Block for 2 turns to primary and adjacent targets. Spread all negative effects from the primary target to all adjacent targets.\nThis will not spread Stun.")
	.setThumbnail('https://i.imgur.com/Uqrlsmb.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710>	**Venom (Passive)** \n \n**Symbiosis • T4 Upgrade** \n \nOn Turn, Heal for **10% -> 15%** of this character's Max Health. If Health is greater than 95%, apply Defense Up for 2 turns to self and all SYMBIOTE allies.\nGain +100% Focus if any SPIDER-VERSE character is present.")
	.setThumbnail('https://i.imgur.com/JRO0e7V.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710> **Venom** \nVenom's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:venom:663750908668018710> **Venom** \nVenom is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'vision' || command === 'vis' || command === 'visi' || command === 'visio') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110>	**Vision (Basic)** \n \n**Heavy Hitter • T4 Upgrade** \n \nAttack primary target for **210% -> 260%** damage + Chain to **1 -> 1-2** additional targets for **170% -> 220%** damage. Apply Offense Down to each target + apply Bleed against each TECH enemy.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/JKtThE0.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110>	**Vision (Special)** \n \n**Dive Bomb • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **210% -> 230%** damage + adjacent targets for **140% -> 160%** damage. Apply Ability Block to primary target + 1 additional target.")
	.setThumbnail('https://i.imgur.com/B4HEL5v.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110>	**Vision (Ultimate)** \n \n**Solar Beam • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all targets for **200% -> 250%** damage + clear 2 positive effects on each target.\nIf Scarlet Witch is your ally, apply Bleed to each target in addition.")
	.setThumbnail('https://i.imgur.com/jy5J07o.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110>	**Vision (Passive)** \n \n**Density Manipulation • T4 Upgrade** \n \nGain **+20% -> +25%** Extra Dodge chance. Gain Defense Up for 2 turns. On Spawn, all TECH allies gain Defense Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/mpv0Gtm.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110>	**Vision (Basic)** \n \n**Heavy Hitter • T4 Upgrade** \n \nAttack primary target for **210% -> 260%** damage + Chain to **1 -> 1-2** additional targets for **170% -> 220%** damage. Apply Offense Down to each target + apply Bleed against each TECH enemy.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/JKtThE0.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110>	**Vision (Special)** \n \n**Dive Bomb • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **210% -> 230%** damage + adjacent targets for **140% -> 160%** damage. Apply Ability Block to primary target + 1 additional target.")
	.setThumbnail('https://i.imgur.com/B4HEL5v.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110>	**Vision (Ultimate)** \n \n**Solar Beam • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all targets for **200% -> 250%** damage + clear 2 positive effects on each target.\nIf Scarlet Witch is your ally, apply Bleed to each target in addition.")
	.setThumbnail('https://i.imgur.com/jy5J07o.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110>	**Vision (Passive)** \n \n**Density Manipulation • T4 Upgrade** \n \nGain **+20% -> +25%** Extra Dodge chance. Gain Defense Up for 2 turns. On Spawn, all TECH allies gain Defense Up for 2 turns.")
	.setThumbnail('https://i.imgur.com/mpv0Gtm.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110> **Vision** \nVision's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vision:663750896835887110> **Vision** \nVision is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'vulture' || command === 'vul' || command === 'vult' || command === 'vultu') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221>	**Vulture (Basic)** \n \n**Liftoff • T4 Upgrade** \n \nAttack primary target for **210% -> 250%** damage + **30% -> 40%** additional damage per negative effect.")
	.setThumbnail('https://i.imgur.com/WcrnhEU.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221>	**Vulture (Special)** \n \n**Fight and Flight • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and all adjacent targets for **240% -> 300%** damage + **70% -> 100%** chance to apply Slow.\nIf target is a CITY HERO, apply Offense Down for **1-2 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/bBEz2D0.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221>	**Vulture (Ultimate)** \n \n**Super Sonic • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **260% -> 320%** damage + change Speed Bar by **-20% -> -25%**.")
	.setThumbnail('https://i.imgur.com/idWJYZN.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221>	**Vulture (Passive)** \n \n**Scavenger • T4 Upgrade** \n \nOn Spawn, fill 10% Speed Bar. Fill 10% Speed Bar per CITY HERO enemy.\nOn ally Death, **70% -> 100%** chance to gain Deflect.\nOn enemy Death, change Speed Bar by **10% -> 25%**.\nGain **+5% -> +10%** Block Chance for each CITY HERO enemy.")
	.setThumbnail('https://i.imgur.com/9ORPaBQ.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221>	**Vulture (Basic)** \n \n**Liftoff • T4 Upgrade** \n \nAttack primary target for **210% -> 250%** damage + **30% -> 40%** additional damage per negative effect.")
	.setThumbnail('https://i.imgur.com/WcrnhEU.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221>	**Vulture (Special)** \n \n**Fight and Flight • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and all adjacent targets for **240% -> 300%** damage + **70% -> 100%** chance to apply Slow.\nIf target is a CITY HERO, apply Offense Down for **1-2 -> 2** turns.")
	.setThumbnail('https://i.imgur.com/bBEz2D0.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221>	**Vulture (Ultimate)** \n \n**Super Sonic • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **260% -> 320%** damage + change Speed Bar by **-20% -> -25%**.")
	.setThumbnail('https://i.imgur.com/idWJYZN.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221>	**Vulture (Passive)** \n \n**Scavenger • T4 Upgrade** \n \nOn Spawn, fill 10% Speed Bar. Fill 10% Speed Bar per CITY HERO enemy.\nOn ally Death, **70% -> 100%** chance to gain Deflect.\nOn enemy Death, change Speed Bar by **10% -> 25%**.\nGain **+5% -> +10%** Block Chance for each CITY HERO enemy.")
	.setThumbnail('https://i.imgur.com/9ORPaBQ.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221> **Vulture** \nVulture's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:vulture:663750909653811221> **Vulture** \nVulture is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'warmachine' || command === 'war' || command === 'machine') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<<warmachine:663750909146300441>	**War Machine (Basic)** \n \n**Railgun • T4 Upgrade** \n \nAttack primary target and adjacent targets for **120% -> 140%** damage. Apply Offense Down to primary target.")
	.setThumbnail('https://i.imgur.com/Z18csvE.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<warmachine:663750909146300441>	**War Machine (Special)** \n \n**Missile System • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and adjacent targets **2-3 -> 3** times for **80% -> 90%** Piercing.\nIf Iron Man is an ally, attack 1 additional time.")
	.setThumbnail('https://i.imgur.com/bWO3Hs8.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<warmachine:663750909146300441>	**War Machine (Ultimate)** \n \n**Cluster Bombs • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **310% -> 340%** damage.\nDamage is increased by 30% per HERO ally.\nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('https://i.imgur.com/Rqo2wuz.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<warmachine:663750909146300441>	**War Machine (Passive)** \n \n**Integrated Targeting • T4 Upgrade** \n \nGain +10% Damage. Gain 5% Piercing. When an enemy drops below 50% Health, **50% -> 100%** chance they gain Taunt.\nIf Iron Man is an ally, gain **20% -> 30%** Crit Damage, gain Deathproof, and grant Deathproof to Iron Man.\nIn WAR, War Machine gains **20% -> 30%** Damage.")
	.setThumbnail('https://i.imgur.com/v7t2Otw.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<warmachine:663750909146300441>	**War Machine (Basic)** \n \n**Railgun • T4 Upgrade** \n \nAttack primary target and adjacent targets for **120% -> 140%** damage. Apply Offense Down to primary target.")
	.setThumbnail('https://i.imgur.com/Z18csvE.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<warmachine:663750909146300441>	**War Machine (Special)** \n \n**Missile System • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary and adjacent targets **2-3 -> 3** times for **80% -> 90%** Piercing.\nIf Iron Man is an ally, attack 1 additional time.")
	.setThumbnail('https://i.imgur.com/bWO3Hs8.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<warmachine:663750909146300441>	**War Machine (Ultimate)** \n \n**Cluster Bombs • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **310% -> 340%** damage.\nDamage is increased by 30% per HERO ally.\nThis attack cannot miss **though it can be dodged**.")
	.setThumbnail('https://i.imgur.com/Rqo2wuz.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<warmachine:663750909146300441>	**War Machine (Passive)** \n \n**Integrated Targeting • T4 Upgrade** \n \nGain +10% Damage. Gain 5% Piercing. When an enemy drops below 50% Health, **50% -> 100%** chance they gain Taunt.\nIf Iron Man is an ally, gain **20% -> 30%** Crit Damage, gain Deathproof, and grant Deathproof to Iron Man.\nIn WAR, War Machine gains **20% -> 30%** Damage.")
	.setThumbnail('https://i.imgur.com/v7t2Otw.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<warmachine:663750909146300441> **War Machine** \nWar Machine's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<warmachine:663750909146300441> **War Machine** \nWar Machine is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'wasp') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280>	**Wasp (Basic)** \n \n**Sting and Move • T4 Upgrade** \n \nAttack primary target for **260% -> 290%** damage + 30% chance to Chain to 1 adjacent target for **210% -> 240%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/0M7fsSn.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280>	**Wasp (Special)** \n \n**Blasters • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **220% -> 250%** damage + Bonus attack 1-2 times for **170% -> 200%** damage.\nIf Charged, then in addition, Stun the target. Then lose Charged.")
	.setThumbnail('https://i.imgur.com/gXYDKvV.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280>	**Wasp (Ultimate)** \n \n**Flight of the Wasp • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all for **270% -> 300%** damage, including Stealthed targets.\nThis attack cannot be Countered.")
	.setThumbnail('https://i.imgur.com/eZZgBuo.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280>	**Wasp (Passive)** \n \n**Shrink • T4 Upgrade** \n \nOn Dodge, gain Charged.\nGain **+20% -> +25%** Dodge chance.")
	.setThumbnail('https://i.imgur.com/ffY0C7I.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280>	**Wasp (Basic)** \n \n**Sting and Move • T4 Upgrade** \n \nAttack primary target for **260% -> 290%** damage + 30% chance to Chain to 1 adjacent target for **210% -> 240%** damage.\nCounterattack breaks this Chain.")
	.setThumbnail('https://i.imgur.com/0M7fsSn.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280>	**Wasp (Special)** \n \n**Blasters • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **220% -> 250%** damage + Bonus attack 1-2 times for **170% -> 200%** damage.\nIf Charged, then in addition, Stun the target. Then lose Charged.")
	.setThumbnail('https://i.imgur.com/gXYDKvV.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280>	**Wasp (Ultimate)** \n \n**Flight of the Wasp • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all for **270% -> 300%** damage, including Stealthed targets.\nThis attack cannot be Countered.")
	.setThumbnail('https://i.imgur.com/eZZgBuo.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280>	**Wasp (Passive)** \n \n**Shrink • T4 Upgrade** \n \nOn Dodge, gain Charged.\nGain **+20% -> +25%** Dodge chance.")
	.setThumbnail('https://i.imgur.com/ffY0C7I.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280> **Wasp** \nWasp's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wasp:663750911088394280> **Wasp** \nWasp is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'wintersoldier' || command === 'winter' || command === 'soldier') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560>	**Winter Soldier (Basic)** \n \n**Winter Assault • T4 Upgrade** \n \nAttack primary target for 290% damage and **20% -> 25%** Piercing.")
	.setThumbnail('https://i.imgur.com/5lm73Dm.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560>	**Winter Soldier (Special)** \n \n**Relentless Assassin • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for 200% damage + apply Bleed. 70% chance to Bonus attack up to 2 times for **100% -> 150%** damage + 50% chance to apply Bleed.")
	.setThumbnail('https://i.imgur.com/c2KCL7J.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560>	**Winter Soldier (Ultimate)** \n \n**Mechanical Arm • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **550% -> 630%** damage + apply Heal Block for 2 turns. Cannot be Blocked.")
	.setThumbnail('https://i.imgur.com/xNoNdFQ.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560>	**Winter Soldier (Passive)** \n \n**Expert Assassin • T4 Upgrade** \n \nGain +15% Crit chance. Apply **+5% -> +10%** Crit chance to HYDRA allies.")
	.setThumbnail('https://i.imgur.com/WVh6uOn.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560>	**Winter Soldier (Basic)** \n \n**Winter Assault • T4 Upgrade** \n \nAttack primary target for 290% damage and **20% -> 25%** Piercing.")
	.setThumbnail('https://i.imgur.com/5lm73Dm.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560>	**Winter Soldier (Special)** \n \n**Relentless Assassin • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for 200% damage + apply Bleed. 70% chance to Bonus attack up to 2 times for **100% -> 150%** damage + 50% chance to apply Bleed.")
	.setThumbnail('https://i.imgur.com/c2KCL7J.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560>	**Winter Soldier (Ultimate)** \n \n**Mechanical Arm • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **550% -> 630%** damage + apply Heal Block for 2 turns. Cannot be Blocked.")
	.setThumbnail('https://i.imgur.com/xNoNdFQ.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560>	**Winter Soldier (Passive)** \n \n**Expert Assassin • T4 Upgrade** \n \nGain +15% Crit chance. Apply **+5% -> +10%** Crit chance to HYDRA allies.")
	.setThumbnail('https://i.imgur.com/WVh6uOn.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560> **Winter Soldier** \nWinter Soldier's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wintersoldier:663750908940779560> **Winter Soldier** \nWinter Soldier is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'wolverine' || command === 'wolver' || command === 'wolv' || command === 'wol') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356>	**Wolverine (Basic)** \n \n**Adamantium Claws • T4 Upgrade** \n \nAttack primary target for **230% -> 240%** Piercing + apply Bleed on Crit.")
	.setThumbnail('https://i.imgur.com/S2sEpSN.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356>	**Wolverine (Special)** \n \n**Slice and Dice • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **120% -> 150%** Piercing + apply Bleed on Crit. Chain to **3-4 -> 4** targets for **90% -> 120%** Piercing + apply Bleed on Crit.\nIf Phoenix is an ally, the primary target takes **250% -> 350%** Piercing instead.\nIf Cyclops is an ally, all secondary attacks have 100% chance to Crit.\nCounterattack breaks this Chain.\nIf Psylocke is an ally, this attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/lnBM9mV.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356>	**Wolverine (Ultimate)** \n \n**Primal Berserker • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **610% -> 700%** Piercing damage. If Colossus is an ally, attack primary target for **710% -> 800%** Piercing damage instead.\nOn Crit, apply Bleed.\nIf this character's Max Health is below 50%:\nGain Offense Up for 2 turns\nThis attack is Unavoidable")
	.setThumbnail('https://i.imgur.com/o9UvMOM.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356>	**Wolverine (Passive)** \n \n**Healing Factor • T4 Upgrade** \n \nOn Turn, Heal for **15% -> 20%** of this character's Max Health.\nOn Death, 5% chance to Revive with 20% of this character's Max Health. If at least one ally is X-MEN, gain an additional 5% chance to Revive.\nGain +5% Speed per X-MEN ally. This is applied after any character has taken an action.")
	.setThumbnail('https://i.imgur.com/XX8H0v7.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356>	**Wolverine (Basic)** \n \n**Adamantium Claws • T4 Upgrade** \n \nAttack primary target for **230% -> 240%** Piercing + apply Bleed on Crit.")
	.setThumbnail('https://i.imgur.com/S2sEpSN.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356>	**Wolverine (Special)** \n \n**Slice and Dice • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **120% -> 150%** Piercing + apply Bleed on Crit. Chain to **3-4 -> 4** targets for **90% -> 120%** Piercing + apply Bleed on Crit.\nIf Phoenix is an ally, the primary target takes **250% -> 350%** Piercing instead.\nIf Cyclops is an ally, all secondary attacks have 100% chance to Crit.\nCounterattack breaks this Chain.\nIf Psylocke is an ally, this attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/lnBM9mV.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356>	**Wolverine (Ultimate)** \n \n**Primal Berserker • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack primary target for **610% -> 700%** Piercing damage. If Colossus is an ally, attack primary target for **710% -> 800%** Piercing damage instead.\nOn Crit, apply Bleed.\nIf this character's Max Health is below 50%:\nGain Offense Up for 2 turns\nThis attack is Unavoidable")
	.setThumbnail('https://i.imgur.com/o9UvMOM.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356>	**Wolverine (Passive)** \n \n**Healing Factor • T4 Upgrade** \n \nOn Turn, Heal for **15% -> 20%** of this character's Max Health.\nOn Death, 5% chance to Revive with 20% of this character's Max Health. If at least one ally is X-MEN, gain an additional 5% chance to Revive.\nGain +5% Speed per X-MEN ally. This is applied after any character has taken an action.")
	.setThumbnail('https://i.imgur.com/XX8H0v7.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356> **Wolverine** \nWolverine's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:wolverine:663750909062414356> **Wolverine** \nWolverine is farmable in:**")
	message.channel.send(speedEmbed); 
}

}


if(command === 'Yondu' || command === 'dp' || command === 'dead' || command === 'pool') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785>	**Yondu (Basic)** \n \n**Jagged Edge • T4 Upgrade** \n \nAttack primary target for **160% -> 200%** damage and **20% -> 25%** Piercing. Clear 2 positive effects from target.")
	.setThumbnail('https://i.imgur.com/LcpLltL.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785>	**Yondu (Special)** \n \n**Boarding Party • T4 Upgrade** \n<:abilityon:663751832690229278> \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nSummon 1-2 RAVAGER allies at **300% -> 340%** normal damage and 100% of normal Health. Apply Offense Up to all RAVAGER allies for 1 turn.")
	.setThumbnail('https://i.imgur.com/LhWetee.png') 
	.addFooter("For each summon, 66.6% chance to get Ravager Boomer, 33.3% chance to get Ravager Stitcher.")
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785>	**Yondu (Ultimate)** \n \n**Yaka Arrow • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nChain to all enemies who aren't Stealth for **220% -> 250%** Undodgeable Piercing.")
	.setThumbnail('https://i.imgur.com/CYt8VyV.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785>	**Yondu (Passive)** \n \n**Centauri Hunter • T4 Upgrade** \n \nOn Turn, choose **1 -> 2** random enemies. If they have a positive effect, copy the positive effect to self. Clear the positive effect from the enemy.\nRAVAGER allies gain +5% damage.")
	.setThumbnail('https://i.imgur.com/6zXqfPj.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785>	**Yondu (Basic)** \n \n**Jagged Edge • T4 Upgrade** \n \nAttack primary target for **160% -> 200%** damage and **20% -> 25%** Piercing. Clear 2 positive effects from target.")
	.setThumbnail('https://i.imgur.com/LcpLltL.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785>	**Yondu (Special)** \n \n**Boarding Party • T4 Upgrade** \n<:abilityon:663751832690229278> \n<:abilityoff:663751832413405184><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nSummon 1-2 RAVAGER allies at **300% -> 340%** normal damage and 100% of normal Health. Apply Offense Up to all RAVAGER allies for 1 turn.")
	.setThumbnail('https://i.imgur.com/LhWetee.png')
	.addFooter("For each summon, 66.6% chance to get Ravager Boomer, 33.3% chance to get Ravager Stitcher.")
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785>	**Yondu (Ultimate)** \n \n**Yaka Arrow • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nChain to all enemies who aren't Stealth for **220% -> 250%** Undodgeable Piercing.")
	.setThumbnail('https://i.imgur.com/CYt8VyV.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785>	**Yondu (Passive)** \n \n**Centauri Hunter • T4 Upgrade** \n \nOn Turn, choose **1 -> 2** random enemies. If they have a positive effect, copy the positive effect to self. Clear the positive effect from the enemy.\nRAVAGER allies gain +5% damage.")
	.setThumbnail('https://i.imgur.com/6zXqfPj.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785> **Yondu** \nYondu's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:yondu:663750908957556785> **Yondu** \nYondu is farmable in:**")
	message.channel.send(speedEmbed); 
}

}

if(command === 'yo-yo' || command === 'yoyo' || command === 'yo') {
if(akit === "kit" || akit === "k" || kit === "kit" || kit === "k") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Basic)** \n \n**Rapid Strikes • T4 Upgrade** \n \nAttack primary target for **200% -> 230%** damage + clear Counter.\n**70% -> 100%** chance to gain an Assist from a random INHUMAN ally.\nThis attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/6qzPGoI.png') 
	message.channel.send(exampleEmbed);
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Special)** \n \n**Flurry • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **150% -> 170%** damage + Bonus attack 2 times for **150% -> 170%** damage.\nRepeat this attack on **2 -> 3** additional random targets.\nThis attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/XSiALFR.png') 
	message.channel.send(exampleEmbed2);
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Ultimate)** \n \n**Run the Gauntlet • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **220% -> 270%** damage. Grant 1 ability energy to all INHUMAN allies.")
	.setThumbnail('https://i.imgur.com/FW7RfYR.png') 
	message.channel.send(exampleEmbed3);
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Passive)** \n \n**Swift Protector • T4 Upgrade** \n \nOn enemy turn, if this character has no other PROTECTOR allies, apply Offense Down to that enemy. This cannot be dodged.\nOn ally non-MINION S.H.I.E.L.D. or INHUMAN turn, 50% chance to apply Evade to that ally.\nOn Spawn, apply Defense Up to self and all non-MINION S.H.I.E.L.D. or INHUMAN allies.\nWhen a non-MINION S.H.I.E.L.D. or INHUMAN ally drops below 50% Health, apply Defense Up to that ally.\nGain **+15% -> +25%** Dodge chance.\nGain +10% Focus per non-MINION S.H.I.E.L.D. and INHUMAN ally.")
	.setThumbnail('https://i.imgur.com/hCaEsPN.png') 
	message.channel.send(exampleEmbed4);
} else if(abasic === "basic" || abasic === "bas" || abasic === "b" || basic === "basic" || basic === "bas" || basic === "b") {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Basic)** \n \n**Rapid Strikes • T4 Upgrade** \n \nAttack primary target for **200% -> 230%** damage + clear Counter.\n**70% -> 100%** chance to gain an Assist from a random INHUMAN ally.\nThis attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/6qzPGoI.png') 
	message.channel.send(exampleEmbed);
} else if(aspecial === "special" || aspecial === "spec" || aspecial === "spe" || special === "special" || special === "spec" || special === "spe" || special === "s") {
	const exampleEmbed2 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Special)** \n \n**Flurry • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278>\nAttack primary target for **150% -> 170%** damage + Bonus attack 2 times for **150% -> 170%** damage.\nRepeat this attack on **2 -> 3** additional random targets.\nThis attack cannot be counterattacked.")
	.setThumbnail('https://i.imgur.com/XSiALFR.png') 
	message.channel.send(exampleEmbed2);
} else if(aultimate === "ultimate" || aultimate === "ultimat" || aultimate === "ulti" || aultimate === "ult" || ultimate === "ultimate" || ultimate === "ultimat" || ultimate === "ulti" || ultimate === "ult") {
	const exampleEmbed3 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Ultimate)** \n \n**Run the Gauntlet • T4 Upgrade** \n<:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityon:663751832690229278><:abilityoff:663751832413405184><:abilityoff:663751832413405184>\nAttack all enemies for **220% -> 270%** damage. Grant 1 ability energy to all INHUMAN allies.")
	.setThumbnail('https://i.imgur.com/FW7RfYR.png') 
	message.channel.send(exampleEmbed3);
} else if(apassive === "passive" || apassive === "pass" || apassive === "p" || apassive === "passi" || passive === "passive" || passive === "pass" || passive === "p" || passive === "passi") {
	const exampleEmbed4 = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053>	**Yo-Yo (Passive)** \n \n**Swift Protector • T4 Upgrade** \n \nOn enemy turn, if this character has no other PROTECTOR allies, apply Offense Down to that enemy. This cannot be dodged.\nOn ally non-MINION S.H.I.E.L.D. or INHUMAN turn, 50% chance to apply Evade to that ally.\nOn Spawn, apply Defense Up to self and all non-MINION S.H.I.E.L.D. or INHUMAN allies.\nWhen a non-MINION S.H.I.E.L.D. or INHUMAN ally drops below 50% Health, apply Defense Up to that ally.\nGain **+15% -> +25%** Dodge chance.\nGain +10% Focus per non-MINION S.H.I.E.L.D. and INHUMAN ally.")
	.setThumbnail('https://i.imgur.com/hCaEsPN.png') 
	message.channel.send(exampleEmbed4);
} else if(aspeed === "speed" || aspeed === "spee" || aspeed === "spe" || speed === "speed" || speed === "spee" || speed === "spe") {
const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053> **Yo-Yo** \nYo-Yo's speed is: **")
	message.channel.send(speedEmbed);
} else if(aunlock === "unlock" || aunlock === "unlo" || aunlock === "u" || aunlock === "unl" || afarm === "farm" || afarm === "far" || afarm === "f" || unlock === "unlock" || unlock === "unlo" || unlock === "u" || unlock === "unl" || farm === "farm" || farm === "far" || farm === "f") {
	const speedEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription("<:YOYO:663750909582508053> **Yo-Yo** \nYo-Yo is farmable in:**")
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


//------------------
client.on("message", message => {
const args = message.content.toLowerCase().slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const { google } = require("googleapis");
const auth = require("./credentials-load");
async function run() {
  //create sheets client
  const sheets = google.sheets({ version: "v4", auth });
if (command === 'updatea'){
  message.channel.send("A updated.")
  const thistext = args.join(" ");
  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: "1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw",
    range: "Sheet1!A:A",
    valueInputOption: "RAW",
    resource: {
      values: [
        [thistext],
      ]
    }/
  });
  }

if (command === 'updatea1'){
  message.channel.send("A1 updated.")
  const thistext = args.join(" ");
  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: "1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw",
    range: "Sheet1!A1",
    valueInputOption: "RAW",
    resource: {
      values: [
        [thistext],
      ]
    }
  });
  }
if (command === 'updatea2'){
  message.channel.send("A2 updated.")
  const thistext = args.join(" ");
  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: "1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw",
    range: "Sheet1!A2",
    valueInputOption: "RAW",
    resource: {
      values: [
        [thistext],
      ]
    }
  });
  }
if (command === 'updatea3'){
  message.channel.send("A2 updated.")
  const thistext = args.join(" ");
  const res = await sheets.spreadsheets.values.update({
    spreadsheetId: "1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw",
    range: "Sheet1!A3",
    valueInputOption: "RAW",
    resource: {
      values: [
        [thistext],
      ]
    }
  });
  }


if (command === 'geta'){
  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "Sheet1!A1:A",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n'))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
if (command === 'geta1'){
  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "Sheet1!A1",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n'))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
if (command === 'geta2'){
  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "Sheet1!A2",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n'))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}
if (command === 'geta3'){
  sheets.spreadsheets.values.get({
    spreadsheetId: '1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw',
    range: "Sheet1!A3",
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
	const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription(rows.join('\n'))
	message.channel.send(exampleEmbed); 
    } else {
      console.log('No data found.');
    }
  });
}


if (command === 'updatetest'){
const thistext = args.join(" ");
sheets.spreadsheets.values.get(
  {
	spreadsheetId: "1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw",
    range: "Sheet1!A:A",
  },
  (err, res) => {
    if (err) {
      console.error(err);
      return;
    }
    const data = res.data.values;
    let i = 0;
    for (i = 0; i < data.length; i++) {
      if (!data[i][0]) break;
    }
    sheets.spreadsheets.values.update(
	const thistext = args.join(" ");
      {
		 spreadsheetId: "1NrS1Uw3cg_UkYul5bYHiYAjKeopBU_aYXh2NRuLIXGw",
        range: "Sheet1!A:A{i + 1}",
        valueInputOption: "USER_ENTERED",
        resource: {
          majorDimension: "ROWS",
          values: [thistext],
        }
      },
      (err, resp) => {
        if (err) {
          console.log("Data Error :", err);
          reject(err);
        }
        resolve(resp);
      }
    );
  }
);
}




}




run().catch(err => console.error("ERR", err));
});


client.login(process.env.TOKEN);
