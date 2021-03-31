const db = require('quick.db');

module.exports = {
    name: 'setprefix',
    aliases: ["prefix", "set-prefix"],
    category: ['core'],
    utilisation: '{prefix}prefix [prefix]',

  
async execute(client, message, args) {

        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send(':x: You don\'t have permission to use that.');

        if(!args[0]) return message.channel.send(':x: Please provide a new prefix');

        if(args[1]) return message.channel.send(':x: The prefix can\'t have two spaces');
        
        db.set(`prefix_${message.guild.id}`, args[0])

        message.channel.send(`${client.emotes.success} - Succesffully set new prefix to **${args[0]}**`)
    }
}