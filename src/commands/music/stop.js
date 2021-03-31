
    module.exports = {
    name: 'leave',
    aliases: ['dc'],
    category: ['Music'],
    inVoiceChannel: true,
    utilisation: '{prefix}leave',

  
async execute(client, message, args) {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        client.distube.stop(message)
        message.channel.send(`${client.emotes.success} | Stopped!`)
    }
}
