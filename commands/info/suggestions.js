const {MessageEmbed} = require('discord.js')


module.exports = {
    name: "suggest",
    category: "info",
    description: "sends user suggestion",
    run: async (client, message, args) => {
      
        var  content = message.content.replace('m!suggest',' ')
        let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    

        const embed = new MessageEmbed()
        .setTitle('New Suggestion!')
        .addField(`Sent by: ${message.author.username}`, `${content}`)
        .setColor("RED")
        
        .setFooter(`Minestar`, message.author.avatarURL())
        .setTimestamp()
        channel.send(embed)

    }



    }
