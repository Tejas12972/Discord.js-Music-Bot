const Discord = require("discord.js")


module.exports = {
    name: 'debug',
    aliases: ['Info'],
    category: ['Info'],
    utilisation: '{prefix}debug',

  
async execute(client, message, args) {
    message.channel.send(`${client.emotes.success} - ${client.user.username} connected in **${client.voice.connections.size}** channels !`);

  }
}
