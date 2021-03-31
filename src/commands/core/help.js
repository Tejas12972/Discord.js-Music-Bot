const Discord = require("discord.js")


module.exports = {
    name: 'help',
    aliases: ["h", "cmd", "command"],
    category: ['core'],
    utilisation: '{prefix}help',

  
async execute(client, message, args) {

   

            const infos = message.client.commands.filter(x => x.category == 'Info').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');
            const core = message.client.commands.filter(x => x.category == 'core').map((x) => '`' + x.name + '`').join(', ');

            const embed = new Discord.MessageEmbed()
            .setAuthor('Help Panel')
            .setColor('BLACK')
            .setDescription(`[Support Server](https://discord.gg/DbUBqyMtPe) | [Invite me](https://discord.com/api/oauth2/authorize?client_id=798927186580340766&permissions=8&scope=bot) | [Web](https://amusic.rf.gd/)`)
            .addFields(
            { name: 'Core', value:`${core}`, inline: true },
            { name: 'Infos', value: `${infos}`, incline: true},
            { name: 'Music', value: `${music}`, incline: true},
            { name: 'Filters', value:'`bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`, `flanger`'}
             )
            .setFooter(`Filter usage: !filter <filter> | For a full list of filters visit the web`)

            message.channel.send(embed)
  }
}
