// Const, main vars, bot.login
const Discord = require ('discord.js');
const config = require('./config.json');
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
  "Mississippi elected the first African American to serve in the U.S. Congress already in 1870.",
  "Quebec banned ads for toys and fast food aimed at children under 13, resulting in lowered childhood obesity rates.",
  "Fibrodysplasia ossificans progressiva is a rare genetic disease which causes damaged soft tissue to regrow as bone.",
  "In Northern Ireland, women earn 3.4% more than men on average.",
  "Stan, from the Eminem song with the same name, was added to the Oxford English Dictionary, defining it as an overzealous or obsessive fan of a particular celebrity",
  "At the current rate, by 2020, Bitcoin will consume more power than the world does today.",
  "Today's human population is descended from twice as many women as men. About 80% of women reproduced, whereas only 40% of men did.",
  "4.6 million Americans were severely behind on payments on student loans in 2017.",
  "In 2008, the Municipality of Florence officially apologized for expelling Dante Alighieri 700 years earlier.",
  "Corporatocracy is a term used to refer to an economic and political system controlled by corporate interests.",
  "Communist leader Vladimir Lenin spoke English with a strong Irish accent because his tutor was an Irishman."
]

var ball = [
  "Yes",
  "No",
  "Quack, what did you say?"
]

// On ready
bot.on('ready', () => {
  console.log("[X] Quacker said quack!");
  bot.user.setGame(config.VERSION + " | >help");
  bot.user.setStatus("dnb");
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
    case "server":
      const rolesList = message.guild.roles.map(e=>e.toString()).join(" - ");
      var server = new Discord.RichEmbed()
        .setTitle("📑 About this server")
        .addField("Name: ", message.guild.name, true)
        .addField("Owner: ", message.guild.owner.user.tag, true)
        .addField("Total users: ", message.guild.memberCount, true)
        .addField("ID: ", message.guild.id, true)
        .addField("Region: ", message.guild.region, true)
        .addField("All roles:", rolesList, true)
        .addField("Date of creation: ",  message.guild.createdAt, true)
        .setThumbnail(message.guild.iconURL)
        .setFooter(message.author.username, message.author.avatarURL)
        .setColor(0x00AE86)
      message.channel.sendEmbed(server);
      break;
      case "guide":
        if (!args[1]) {
          var guide = new Discord.RichEmbed()
            .setTitle("🔖 Guide")
            .setDescription("Please define what guide are you looking for.\n\n**>guide skript**\n**>guide tuskegui**\n**>guide functions**\n**>guide skelletproxy**\n**>guide other**")
            .setFooter(message.author.username, message.author.avatarURL)
            .setColor(0x00AE86)
          message.channel.sendEmbed(guide);
        }
        if (args[1] == "skript" || args[1] == "sk") {
          var guide = new Discord.RichEmbed()
            .setTitle("🔖 Guide | Skript")
            .setDescription("Let me see, I found something. The bold one is recommended.\n\n[**General Skript tutorial by LimeGlass**](https://forums.skunity.com/threads/general-skript-tutorial.5174/#post-19939)\n[Basic of Skript by LulKeith](https://www.spigotmc.org/threads/basics-of-skript-tutorial.168745/)\n[Skript tutorial by Peter Güttinger](http://en.njol.ch/projects/skript/tutorial)")
            .setFooter(message.author.username, message.author.avatarURL)
            .setColor(0x00AE86)
          message.channel.sendEmbed(guide);
        }
        if (args[1] == "tuskegui" || args[1] == "guituske" || args[1] == "gui") {
          var guide = new Discord.RichEmbed()
            .setTitle("🔖 Guide | GUI from TuSKe")
            .setDescription("Let me see, I found something. The bold one is recommended.\n\n[GitHub tutorial](https://github.com/Tuke-Nuke/TuSKe/wiki/GUI-Manager)\n[**SkUnity board tutorial**](https://forums.skunity.com/threads/gui-manager-tutorial.2349/)")
            .setFooter(message.author.username, message.author.avatarURL)
            .setColor(0x00AE86)
          message.channel.sendEmbed(guide);
        }
        if (args[1] == "skelletproxy")  {
          var guide = new Discord.RichEmbed()
            .setTitle("🔖 Guide | SkelletProxy")
            .setDescription("Let me see, I found something. The bold one is recommended.\n\n[**SkUnity board tutorial by YoshYz**](https://forums.skunity.com/threads/skellettproxy.3595/)")
            .setFooter(message.author.username, message.author.avatarURL)
            .setColor(0x00AE86)
          message.channel.sendEmbed(guide);
        }
        if (args[1] == "functions")  {
          var guide = new Discord.RichEmbed()
            .setTitle("🔖 Guide | Functions")
            .setDescription("Let me see, I found something. The bold one is recommended.\n\n[**SkUnity wiki page**](https://forums.skunity.com/wiki/functions/)")
            .setFooter(message.author.username, message.author.avatarURL)
            .setColor(0x00AE86)
          message.channel.sendEmbed(guide);
        }
        if (args[1] == "other")  {
          var guide = new Discord.RichEmbed()
            .setTitle("🔖 Guide | Other")
            .setDescription("Quack!\n\n[Arrow effects tutorial by winterwolf007](https://forums.skunity.com/threads/arrow-effects-tutorial.2418/)\n[YAML tutorial by TonyMaster21](https://forums.skunity.com/threads/reading-writing-and-deleting-yaml.33/)\n[Info about packets by Tlatoani](https://forums.skunity.com/threads/packets.320/)")
            .setFooter(message.author.username, message.author.avatarURL)
            .setColor(0x00AE86)
          message.channel.sendEmbed(guide);
        }

        break;
    case "download":
      var download = new Discord.RichEmbed()
        .setTitle("📑 Download Skript")
        .addField("1.12+", "[Github releases (latest version)](https://github.com/bensku/skript/releases)\n[Recommended version](https://drive.google.com/file/d/0B8FRm4qNtysab3VNbzJIZXFiT3M/view)")
        .addField("1.9-1.11", "[Recommended version](https://drive.google.com/file/d/0B8FRm4qNtysaU1NlUllQWHlTem8/view)")
        .addField("1.8", "[Recommended version](https://drive.google.com/file/d/0B8FRm4qNtysaUlFZekxIY3UwZGc/view)")
        .addField("1.7", "[Recommended version](https://drive.google.com/file/d/0B8FRm4qNtysaZXJVMVFDU1VCVnM/view)")
      message.channel.sendEmbed(download);
    case "say":
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You don't have enough permissions to do that.");
      if(args[1])
        message.delete();
        message.channel.sendMessage(args.slice(1).join(" "))
      break;
    case "poll":
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("You don't have enough permissions to do that.");
      if (args[1])
        var pool = new Discord.RichEmbed()
          .setTitle("Community poll")
          .setDescription(args.slice(1).join(" "))
          .setFooter(message.author.username, message.author.avatarURL)
          .setColor(0x00AE86)
        message.channel.sendEmbed(pool).then(m => m.react('👍')).then(r => r.message.react('👎'))
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
        .setTitle("🏆 Random fact")
        .setDescription(fact[Math.floor(Math.random() * fact.length)])
        .setColor(0xD6B329)
        .setFooter(message.author.username, message.author.avatarURL)
      message.channel.sendEmbed(fakt);
      break;
    case "help":
      var help = new Discord.RichEmbed()
        .setTitle("📢 Help")
        .setDescription("Prefix for normal commands is `>`\nAll normal commands: `about` `say` `poll` `guide` `download` `fact` shrug` `tableflip` `lenny` `unflip` ")
        .setColor(0xD6B329)
        .setFooter(message.author.username, message.author.avatarURL)
      message.channel.sendEmbed(help);
      break;
    default:
      break;

  }
  });
