const {MessageEmbed} = require('discord.js')
module.exports={
    name: "announce",
    description: "Get the bot to say what ever you want in a specific channel.",
    usage: "<channel id> <msg>",
    run: async(bot,message,args)=>{
      
      const discord = require("discord.js")
      
       var Aerr1Embed = new discord.MessageEmbed()
       .setColor("#000101")
       .setTitle("Anouncement err Page")
       .addField("**The Error was:**", "You did not specify your channel to send the announcement too!")
       .setFooter(`Minestar`, bot.user.displayAvatarURL())
        .setTimestamp()
      
       var Aerr2Embed = new discord.MessageEmbed()
       .setColor("#000101")
       .setTitle("Anouncement err Page")
       .addField("**The Error was:**", "You did not specify a message!")
      
       .setFooter(`Minestar`, bot.user.displayAvatarURL())
        .setTimestamp()
       
        let rChannel = message.guild.channels.cache.get(args[0])
        if(!rChannel)return message.channel.send(Aerr1Embed)
        console.log(rChannel)
        let MSG = message.content.split(`${bot.prefix}announce ${rChannel.id} `).join("")
        if(!MSG)return message.channel.send(`You did not specify your message to send!`)
      
      var Err2Embed = new discord.MessageEmbed()
       .setColor("#000101")
       .setTitle("Error page")
       .addField("**Error was:**", "You do not have perms to do that!. please contact staff with issues.")
       .setFooter(`Minestar`, bot.user.displayAvatarURL())
        .setTimestamp()
      
      if(!message.member.roles.cache.some(r => r.name === "staff")) return message.channel.send(Err2Embed);
        const _ = new MessageEmbed()
        .setTitle(`New announcement!`)
        .setDescription(`${MSG}`)
        .setColor("#000101")
        rChannel.send(_)
        message.delete()
    }
}