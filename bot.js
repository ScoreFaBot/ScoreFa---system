const Discord = require("discord.js");
const Client = new Discord.Client();




Client.on('ready',  () => {
  console.log('=================');
  console.log('AUTHOR : S7_');
Client.user.setStatus("dnd");
});

// Playing
Client.on('ready', () => {
Client.user.setActivity(`scorefa.net`,'');
});

Client.on('message', msg => {   if (msg.content === 'السلام عليكم') {     msg.reply('وعليكم السلام');   } });

//BOT TOKEN

client.login(process.env.BOT_TOKEN);
