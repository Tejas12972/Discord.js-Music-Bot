const { getData, getPreview, getTracks } = require("spotify-url-info");

    module.exports = {
    name: 'play',
    aliases: ['p'],
    category: ['Music'],
    inVoiceChannel: true,
    utilisation: '{prefix}play <song>',

  
async execute(client, message, args) { 
        const string = args.join(" ")
        if (!string) return message.channel.send(`${client.emotes.error} | Please enter a song url or query to search.`)
        try {
            client.distube.play(message, string)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
        } try {
          await getTracks(args.join(" "))
          client.distube.play(getTracks)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
    }
}
    };
