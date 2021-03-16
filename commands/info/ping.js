module.exports = {
    name: "ping",
    category: "info",
    description: "sends ping",
    run: async (client, message, args) => {
       message.channel.send(`Pong - ${client.ws.ping}ms`)
    }
}