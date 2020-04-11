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

Client.on('message', message => {
  if (message.content === "%test") {
message.channel.send(""+   **

السلام عليكم ورحمة الله وبركاته
**);
    }
});



client.login(process.env.BOT_TOKEN);
