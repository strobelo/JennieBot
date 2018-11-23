const Discord = require("discord.js");
const bot = new Discord.Client();
const authToken = "NTE0NjUxODkxMTYzMjAxNTQ2.DtZwAQ.1DyOksmpbNILGripT5ECi87I3vo";

bot.on("message", async message => {
  if (!message.guild) return;

  // HENTAI BAIT
  if (message.content == "$hentai") {
    let permission = message.guild.roles.find("name", "BOT Manager");
    let timeoutChannel = bot.channels.find("name", "Timeout Zone");
    if (message.member.roles.has(permission.id)) {
      message.reply("Can you not?");
    } else {
      message.reply("Dumbass used $hentai");
      // This puts them in a timeout channel
      message.member.setVoiceChannel(timeoutChannel);
    }
  }

  // PERIUN's TWITTER
  if (message.content == "$Periun") {
    let Periun = message.guild.roles.find("name", "Periun");
    if (message.member.roles.has(Periun.id)) {
      message.channel.send("Follow Periun on Twitter: ");
      message.channel.send("https://www.Twitter.com/Periun56");
    } else {
      message.reply("You're not Periun!");
    }
  }

  // BOT JOIN CHANNEL
  if (message.content == "$join") {
    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then(connection => {
          message.reply("It's me, Jennie!");
        })
        .catch(console.log);
    }
  }

  // KICK BOT FROM SERVER
  if (message.content == "$kill") {
    let permission = message.guild.roles.find("name", "BOT Manager");
    if (message.member.roles.has(permission.id)) {
      if (message.member.voiceChannel) {
        message.reply(`Thanks a lot dickbag!`);
        message.guild.leave();
      }
    } else {
      message.reply("You have no authorisation to kill me!");
    }
  }

  // BOT LEAVE CHANNEL
  if (message.content == "$leave") {
    var voiceChannel = message.member.voiceChannel;
    message.reply("See ya later, maybe never!");
    voiceChannel.leave();
  }

  // LISA'S UHHH
  if (message.content == "$uhh") {
    isReady = false;
    var voiceChannel = message.member.voiceChannel;
    message.reply("UNNHHH");
    voiceChannel.join().then(connection => {
      const dispatcher = connection.playFile("Audio/UHHH.mp3", {});
      dispatcher.on("end", end => {
        setTimeout(function() {
          voiceChannel.leave();
        }, 5000);
        isReady = true;
      });
    });
  }

  // BLACKPINK - BOOMBAYAH
  if (message.content == "$boombayah") {
    isReady = false;
    var voiceChannel = message.member.voiceChannel;
    let permission = message.guild.roles.find("name", "BOT Manager");
    if (message.member.roles.has(permission.id)) {
      voiceChannel.join().then(connection => {
        message.channel.send("OPPA!");
        const dispatcher = connection.playFile("Audio/boombayah.mp3", {});
        dispatcher.on("end", end => {
          voiceChannel.leave();
          isReady = true;
        });
      });
    } else {
      message.reply("You don't even like K-pop!");
    }
  }

  // BLACKPINK = DDU-DU-DDU-DU
  if (message.content == "$ddudu") {
    isReady = false;
    var voiceChannel = message.member.voiceChannel;
    let permission = message.guild.roles.find("name", "BOT Manager");
    if (message.member.roles.has(permission.id)) {
      voiceChannel.join().then(connection => {
        message.channel.send("HIT YOU WITH DAT DDU-DU DDU-DU DU!");
        const dispatcher = connection.playFile("Audio/ddudu.mp3", {});
        dispatcher.on("end", end => {
          voiceChannel.leave();
          isReady = true;
        });
      });
    } else {
      message.reply("You don't even like K-pop!");
    }
  }

  // TWICE - TWICE!
  if (message.content == "$TWICE") {
    isReady = false;
    var voiceChannel = message.member.voiceChannel;
    let permission = message.guild.roles.find("name", "BOT Manager");
    if (message.member.roles.has(permission.id)) {
      voiceChannel.join().then(connection => {
        message.channel.send("TWICE!");
        const dispatcher = connection.playFile("Audio/TWICE.mp3", {});
        dispatcher.on("end", end => {
          setTimeout(function() {
            voiceChannel.leave();
          }, 1000);
          isReady = true;
        });
      });
    } else {
      message.reply("You don't even like K-pop!");
    }
  }

  // TWICE - WHAT IS LOVE
  if (message.content == "$whatislove") {
    isReady = false;
    var voiceChannel = message.member.voiceChannel;
    let permission = message.guild.roles.find("name", "BOT Manager");
    if (message.member.roles.has(permission.id)) {
      voiceChannel.join().then(connection => {
        message.channel.send("I WANNA KNOW!");
        const dispatcher = connection.playFile("Audio/whatIsLove.mp3", {});
        dispatcher.on("end", end => {
          voiceChannel.leave();
          isReady = true;
        });
      });
    } else {
      message.reply("You don't even like K-pop!");
    }
  }
});

bot.on("ready", function() {
  bot.user.setPresence({
    game: {
      name: "Twitch.tv/dorrai \n Twitter.com/periun56",
      type: "STREAMING",
      url: "https://www.twitch.tv/dorrai"
    }
  });

  console.log("Ready Freddy");
});

bot.login(authToken);
