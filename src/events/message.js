const { default_prefix } = require('../config.json')
const db = require('quick.db')
const config = require('../config.json')
module.exports = async (client, message) => {
  
    if (message.author.bot || message.channel.type === 'dm') return;



     let prefix = await db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) try {
        cmd.execute(client, message, args)
    } catch (e) {
        console.error(e)
        message.reply(`Error: ${e}`)
} else {
  return 
}
};