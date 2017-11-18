// Const, main vars, bot.login
const Discord = require ("discord.js");
const config = require("./config.json");
var bot = new Discord.Client();


bot.login(config.TOKEN);

// Other variables

var fact = [
  "The state of South Carolina gave Marilyn Manson US$40,000 not to play there, and schools in Florida threatened to expel students who attended his shows.",
  "he last civil war casualty was Joshua Chamberlain, who died in 1914 from wounds he received at the Siege of Petersberg in 1864.",
  "The real Rich Dad in the best-selling finance book Rich Dad, Poor Dad was a Hawaiian hotelier named Richard Wassman Kimi.",
  "Some Orthodox Jewish married women wear a wig of natural or synthetic hair to cover their real hair in order to conform with a modesty requirement of Jewish law.",
  "The U.S. Secret Service has its own flag.",
  "Frogs find their way back to their breeding grounds by following the smell of the pond's algae.",
  "Astronauts don't snore in space.",
  "Led Zeppelin was refused entry into Singapore in 1972 because the band members had long hair.",
  "The first recorded speculative economic bubble was the Tulip Mania, in the Dutch Republic. At its peak in 1637, a single tulip bulb sold for more than 10 times the annual income of a skilled craftsworker.",
  "Bart Simpson's prank calls to Moe were actually based on real calls two guys did to bar owner and heavyweight boxer Louis Red Deutsch. The calls have been recorded.",
  "In 1986, Ronald Reagan vetoed an anti-apartheid legislation enacted by the U.S. congress to impose sanctions against South Africa and stop apartheid.",
  "Migrating to another country increases the amount of dopamine in the brain, putting immigrants at higher risk for developing schizophrenia.",
  "In a study, people from Ohio cursed the most, as compared to every other state in the U.S.",
  "Mississippi elected the first African American to serve in the U.S. Congress already in 1870." ]

var ball = [
  "Yes",
  "No",
  "Quack, what did you say?" ]

// On ready
bot.on("ready", () => {
  console.log("[X] Quacker said quack!");
  bot.user.setGame(config.VERSION + " | >help");
});

// commands
bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(config.PREFIX)) return;

  var args = message.content.substring(config.PREFIX.length).split(" ");
  var sender = message.author;


  switch (args[0].toLowerCase()) {
    case "about":
      var about = new Discord.RichEmbed()
        .setTitle("Quacker Jack")
        .setDescription("Quack! I'm private discord bot for Skript community! Let's try out my fun commands. If you have any questions please ask developer.")
        .addField("Version", config.VERSION, true)
        .addField("Source code", config.SOURCECODE, true)
        .addField("Developer", "@igniss.#4853", true)
        .setFooter(message.author.username, message.author.avatarURL)
        .setColor(0x00AE86)
      message.channel.sendEmbed(about);
      break;
    case "say":
      if(message.author.id !== config.ownerID) return message.channel.sendMessage("Bot is still not in beta version, you can't use commands in development.");
      if(args[1])
        message.delete();
        message.channel.sendMessage(args.slice(1).join(" "))
      break;
    case "pool":
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You don't have enough permissions to do that.");
      if (args[1])
        var pool = new Discord.RichEmbed()
          .setTitle("Community pool")
          .setDescription(args.slice(1).join(" "))
          .setFooter(message.author.username, message.author.avatarURL)
          .setColor(0x00AE86)
        message.channel.sendEmbed(pool).then(m => m.react('✅')).then(r => r.message.react('❌'))
        message.delete();
        break;
    // Fun
    case "emojilist":
      const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
      message.channel.send(emojiList);
      break;
    case "shrug":
      message.channel.sendMessage(config.SHRUG);
      break;
    case "tableflip":
      message.channel.sendMessage(config.TABLEFLIP);
      break;
    case "lenny":
      message.channel.sendMessage(config.LENNY);
      break;
    case "unflip":
      message.channel.sendMessage(config.UNFLIP);
      break;
    case "fact":
      var fakt = new Discord.RichEmbed()
        .setTitle(":trophy: Random fact")
        .setDescription(fact[Math.floor(Math.random() * fact.length)])
        .setColor(0xD6B329)
        .setFooter(message.author.username, message.author.avatarURL)
      message.channel.sendEmbed(fakt);
      break;
    default:
      message.react("❌");
      break;

  }
  });
