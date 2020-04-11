const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Brodcast Bot`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Brodcast Bot ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(scorefa.net,'scorefa.net');
client.user.setStatus("dnd")
});
const antispam = JSON.parse(fs.readFileSync("./antispam.json", "utf8"));

client.on("message", async message => {
  if (antispam[message.author.id] == undefined) {
    antispam[message.author.id] = {
    lastmessage: "none"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }else  if (antispam[message.guild.id] == undefined) {
    antispam[message.guild.id] = {
    onoff: "off"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }
  let args = message.content.split(" ");
  let command = args[0]
  if(command === prefix + "antispam"){
      if(!args[1])return message.channel.send("**Error | Use `antispam on/off`**");
    if(args[1] === "on"){
            message.channel.send("**Done Sir Anti Spam Changed To ON**")
      antispam[message.guild.id].onoff = "on";
      fs.writeFile("./antispam.json", JSON.stringify(antispam), function(
        err
      ) {
        if (err) throw err;
      });
    }else if(args[1] === "off"){
      antispam[message.guild.id].onoff = "off";
      fs.writeFile("./antispam.json", JSON.stringify(antispam), function(
        err
      ) {
        if (err) throw err;
      });
      message.channel.send("**Done Sir Anti Spam Changed To OFF**")
    }
  }
});

client.on("message", async message => {
  if (antispam[message.author.id] == undefined) {
    antispam[message.author.id] = {
    lastmessage: "none"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }else  if (antispam[message.guild.id] == undefined) {
    antispam[message.guild.id] = {
    onoff: "off"
    };
    fs.writeFile("./antispam.json", JSON.stringify(antispam), function(err) {
      if (err) throw err;
    });
  }else if(antispam[message.author.id].lastmessage === "none") {
    return;
  }else if(antispam[message.guild.id].onoff === "off"){
    return;
  }else if(antispam[message.author.id].lastmessage === message.content){
    return message.delete();
  }

  antispam[message.author.id].lastmessage = message.content;
  fs.writeFile("./antispam.json", JSON.stringify(antispam), function(
    err
  ) {
    if (err) throw err;
  });

});

client.login(process.env.BOT_TOKEN);
