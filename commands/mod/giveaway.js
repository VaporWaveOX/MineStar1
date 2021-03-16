const {MessageEmbed} = require('discord.js')
const ms = require('ms');
module.exports={
    name: 'giveaway',
    description: 'Create a simple giveaway',
    usage: '<time> <prize>',
    category: 'fun',
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
       .setFooter(`Minestar`, bot.user.displayAvatarURL())
        .setTimestamp()
      
      if(!message.member.roles.cache.some(r => r.name === "staff")) return message.channel.send(Err2Embed);
      
        if(!message.member.permissions.has("ADMINISTRATOR")) return message.reply("You do not have admin!")
        let timev = message.content.slice(bot.prefix.length+9)
        if(!timev) return message.channel.send('You did not specify your time in MS!')
        let time = parseInt(timev,10)
      if(time< 15000)   return message.channel.send('Your time in MS has to be longer then 15 seconds! (15000 MS)')
    
        let prize = message.content.split(`${time}`).join("").split(`${bot.prefix}giveaway `).join("")
        if(!prize) return message.channel.send("No prize was specified!")
        const Embed = new MessageEmbed()
        .setTitle('New giveaway!')
        .setDescription(prize)
        .setColor("#000101")
        .setFooter(`This giveaway is ${ms(time)} long!`)
        let msg = await message.channel.send(Embed)
        await msg.react('🎉')
        function winner(msg){
            
          let winner =   msg.reactions.cache.get('🎉').users.cache.random().id
          return winner
        };
        function rawWinner(msg){
            let winner =   msg.reactions.cache.get('🎉').users.cache.random()
        }

        function reactions(msg){
            return msg.reactions.cache.size
        }
        function reroll(msg){
            return winner(msg)
        }
        setTimeout(() => {
        if(reactions(msg) < 5)return message.channel.send('I can not host a giveaway if less then 5 people have reacted!')
           let win=winner(msg)
               return message.channel.send(`The winner for the giveaway of **${prize}** is <@${win}> !`)
           
        }, time);
    }
}