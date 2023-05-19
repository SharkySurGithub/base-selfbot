const { Client, MessageEmbed, Collection, WebhookClient } = require('discord.js-selfbot-v13');

const backup = require('discord-backup')
const config = require('./settings.json'); // dossier avec votre token d'utilisateur discord
const prefix = `${config.prefix}`;
/*
Made by https://github.com/SharkySurGithub

npm i 
node .


https://discordjs-self-v13.netlify.app/#/docs/docs/main/general/welcome <=
*/



const client = new Client({
checkUpdate: false,
});


client.on('ready', () => {
console.log(`Connecté en tant que ${client.user.tag}`)

console.log('Selfbot created by Sharky')
console.log("https://discord.gg/greenhall")

});




client.on('messageCreate', async (message) => {
if (message.author.id !== message.client.user.id) return;
if(!message.content.startsWith(prefix)) return;
const args = message.content.slice(prefix.length).trim().split(" ")
const command = args[0]
args.shift()
  if(command === "ping") {


 await message.edit({content:
`**ˏˋ°•⁀➷ [ Sharky - Turbo ] .ೃ࿐***

*\`Pong! 🏓\`*

Ping : ${client.ws.ping}ms`})
}
  
  process.on('unhandledRejection', err => {
console.log(`[ERROR] Unhandled promise rejection: ${err.message}.`);
console.log(err);
})

})

client.login(config.token)

  
