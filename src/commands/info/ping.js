const Discord = require("discord.js")


     module.exports = {
    name: 'ping',
    aliases: [],
    category: ['Info'],
    utilisation: '{prefix}ping',

  
async execute(client, message, args) {

    message.channel.send(`${client.emotes.success} - Ping : **${client.ws.ping}ms** !`);
  }
}
