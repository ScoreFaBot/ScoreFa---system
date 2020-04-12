const Discord = require("discord.js");
const Client = new Discord.Client();




client.on('ready',  () => {
  console.log('=================');
  console.log('AUTHOR : S7_');
client.user.setStatus("dnd");
});

// Playing
client.on('ready', () => {
client.user.setActivity(`scorefa.net`,'');
});

client.on('message', msg => {   if (msg.content === 'السلام عليكم') {     msg.reply('وعليكم السلام');   } });

//BOT TOKEN
client.login(process.env.BOT_TOKEN);



