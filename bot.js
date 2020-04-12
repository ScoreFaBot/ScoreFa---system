const Discord = require("discord.js");
const client = new Discord.Client();



Client.on('ready',  () => {
  console.log('=================');
  console.log('AUTHOR : S7_');
Client.user.setStatus("dnd");
});

// Playing
Client.on('ready', () => {
Client.user.setActivity(`scorefa.net`,'');
});
});



//BOT TOKEN
Client.login(process.env.BOT_TOKEN);
