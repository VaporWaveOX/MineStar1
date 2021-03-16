const Discord = require("discord.js");


module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    run: async (client, message, args) => {
        const channel = '810000646324748327';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Giveways");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "Updates");
        const redTeamRole = message.guild.roles.cache.find(role => role.name === "Polls");
        const greenTeamRole = message.guild.roles.cache.find(role => role.name === "Announcements");
        const orangeTeamRole = message.guild.roles.cache.find(role => role.name === "Factions");
        const purpleTeamRole = message.guild.roles.cache.find(role => role.name === "Skyblock");
        const pinkTeamRole = message.guild.roles.cache.find(role => role.name === "Events");
 
        const yellowTeamEmoji = '🎉';
        const blueTeamEmoji = '📈' ;
        const redTeamEmoji = '📊' ;
        const greenTeamEmoji = '📢' ;
        const orangeTeamEmoji = '🧨' ;
        const purpleTeamEmoji = '⭐' ; 
        const pinkTeamEmoji = '🎊' ;
 
        const embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('What announcements do you want to get?')
            .setDescription('By selecting the emoji that corisponds to the role, you will get updates for that role!\n\n'
                + `${yellowTeamEmoji} for Giveaways\n`
                + `${blueTeamEmoji} for Updates\n`
                + `${redTeamEmoji} for Polls\n`
                + `${greenTeamEmoji} for Announcements\n`
                + `${orangeTeamEmoji} for Factions\n`
                + `${purpleTeamEmoji} for Skyblock\n`
                + `${pinkTeamEmoji} for Events\n`
                
                );
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(redTeamEmoji);
        messageEmbed.react(greenTeamEmoji);
        messageEmbed.react(orangeTeamEmoji);
        messageEmbed.react(purpleTeamEmoji);
        messageEmbed.react(pinkTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(redTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenTeamRole);
                }
                if (reaction.emoji.name === orangeTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(orangeTeamRole);
                }
                if (reaction.emoji.name === purpleTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purpleTeamRole);
                }
                if (reaction.emoji.name === pinkTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(pinkTeamRole);
                }

            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenTeamRole);
                }
                if (reaction.emoji.name === orangeTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(orangeTeamRole);
                }
                if (reaction.emoji.name === purpleTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purpleTeamRole);
                }
                if (reaction.emoji.name === pinkTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(pinkTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   