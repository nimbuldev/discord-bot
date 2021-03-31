
//Discord bot init
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.DISCORD_LOGIN);

client.once("ready", () => {
    console.log('I am ready!');
});

client.on('message', msg => {
    console.log(msg.content);
});