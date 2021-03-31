module.exports = async (client) => {
    console.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`);

    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: `amusic.rf.gd | !help`,
            type: `WATCHING`
        }
      })
}