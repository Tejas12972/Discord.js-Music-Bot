
    module.exports = {
    name: 'resume',
    aliases: ['start'],
    category: ['Music'],
    inVoiceChannel: true,
    utilisation: '{prefix}resume',

  
async execute(client, message, args) {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        client.distube.resume(message)
        message.channel.send("Resumed the song for you :)")
    }
}
