module.exports = {
    name: "close",
    category: "info",
    description: "closes ticket",
    run: async (client, message, args) => {
        
        if(!message.member.roles.cache.some(r => r.name === "staff")) return message.channel.send("Please ask for a staff member to close your ticket if you no longer need help. Thank you");
        
        if(message.member.roles.cache.some(r => r.name === "staff")) message.channel.delete()



    }
}