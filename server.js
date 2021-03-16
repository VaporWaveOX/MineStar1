
const {prefix, token} = require("./config.json")
const { config } = require("dotenv");
const discord = require("discord.js")
const client = new discord.Client({
  disableEveryone: true
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

client.prefix = "m!";

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client)
})



client.on("ready", () => {
  console.log("Im ready to go! check me out")
  client.user.setActivity("m!")
})







client.on("message", async message => {
   

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});







const { Canvas } = require("canvas-constructor")
const fetch = require("node-fetch")

client.on('ready', () => {
    client.user.setActivity("to m!cmds", {
  type: "LISTENING",
});
});

//NOw check bot





client.on("message", async message => {
  if(message.content === "m!profile") {
  const avatar = await fetch(message.author.avatarURL({format: 'jpg'}))
    
    
    
let mage = new Canvas(500, 250)
.setColor("#ffffff")
.addRect(0, 0, 500, 250) //we gonna replace it with image
.setColor("#000101")
.addRect(0, 0, 500, 80)
.setColor("#ffffff")
.setTextFont('bold 40px Impact') //you can make it bold
.addText("PROFILE CARD", 110, 55)
.setColor("#000101")
.setTextFont('bold 20px Impact') 
.addText(`ID - ${message.author.id}`, 30, 140)
.addText(`TAG - ${message.author.tag}`, 30, 170)
.addText(`GUILD NAME - ${message.guild.name}`, 30, 200)
.setColor("#000101")
.addCircle(60, 40, 33)
.addCircularImage(await avatar.buffer(), 60, 40, 30)
.toBuffer();
    
    message.channel.send({files: [mage]}) //lol i forget again
    
  } //THESE CODE WILL BE PUBLISHED ON GITHUB
})







client.login(token)