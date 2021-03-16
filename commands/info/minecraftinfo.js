const util = require('minecraft-server-util');
const Discord = require("discord.js");

module.exports = {
    name: 'mcserver',
    description: 'get information about a minecraft server',
    run: async (client, message, args) => {
        
      
 
        util.status('play.minestarmc.com').then((response) =>{
            console.log(response);
            const embed = new Discord.MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Mc server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version},
               
            )
            .setFooter(`Minestar`, message.author.avatarURL())
        .setTimestamp()
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })

        
            
            
    }

    }
