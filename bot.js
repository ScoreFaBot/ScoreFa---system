const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "%";



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Brodcast Bot`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Brodcast Bot ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity(`scorefa.net`,"")
client.user.setStatus("dnd")
});

client.on('message', message => {
  if (message.content === "هلا") {
message.reply('اهلاً);
              }
              
});



client.login(process.env.BOT_TOKEN);
