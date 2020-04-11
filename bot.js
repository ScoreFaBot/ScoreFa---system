const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Brodcast Bot`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Brodcast Bot ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(``,"")
client.user.setStatus("dnd")
   
});

client.login(process.env.BOT_TOKEN);
