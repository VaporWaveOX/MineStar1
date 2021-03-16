module.exports={
    name: "say",
    description: "Get the bot to say what ever you want!",
    usage: "<msg>",
    run: async(bot,message,args)=>{
      const discord = require("discord.js")
       const client = new discord.Client({
  disableEveryone: true
}); 
      var Err2Embed = new discord.MessageEmbed()
       .setColor("#000101")
       .setTitle("Error page")
       .addField("**Error was:**", "You do not have perms to do that!. please contact staff with issues.")
       .setThumbnail("https://i.pinimg.com/originals/0b/25/b9/0b25b9f0ac2dddfb1f0a75f9a9a004aa.gif")
       .setFooter(`Minestar`, message.author.avatarURL())
        .setTimestamp()
      
      if(!message.member.roles.cache.some(r => r.name === "staff")) return message.channel.send(Err2Embed);
        let MSG = message.content.split(`${bot.prefix}say `).join("")
        if(!MSG)return message.channel.send(`You did not specify your message to send!`)
        message.channel.send(MSG)
        message.delete()
    }
}