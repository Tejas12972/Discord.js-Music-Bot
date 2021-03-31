const Discord = require('discord.js');
const os = require('os');
const cpuStat = require('cpu-stat');

function formatBytes (a, b) {
  
    if (0 == a) return "0 Bytes";
    let c = 1024,
        d = b || 2,
        e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        f = Math.floor(Math.log(a) / Math.log(c));
        return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f]
    } // Create MB, KB, TB or something in the back of your memory counters.
    
    function parseDur(ms) {
      let seconds = ms / 1000,
          days = parseInt(seconds / 86400);
      seconds = seconds % 86400
      
      let hours = parseInt(seconds / 3600);
      seconds = seconds % 3600
      
      let minutes = parseInt(seconds / 60);
      seconds = parseInt(seconds % 60)
      
      if (days) {
        return `${days} day, ${hours} hours, ${minutes} minutes`
      } else if (hours) {
        return `${hours} hours, ${minutes} minutes, ${seconds} seconds`
      } else if (minutes) {
        return `${minutes} minutes, ${seconds} seconds`
      }
      
      return `${seconds} second(s)`
    }

module.exports = {
    name: 'stats',
    aliases: ["uptime", "bot", "info"],
    category: ['core'],
    utilisation: '{prefix}uptime',

  
async execute(client, message, args) {   
    cpuStat.usagePercent(function (error, percent, seconds) {
        if (error) {
          return console.error(error)
        } 
    
        const totalmem = formatBytes(os.totalmem())
        const cores = os.cpus().length 
        const cpuModel = os.cpus()[0].model 
        const guild = client.guilds.cache.size.toLocaleString()
        const user = client.users.cache.size.toLocaleString()
        const channel = client.channels.cache.size.toLocaleString() 
        const usage = formatBytes(process.memoryUsage().heapUsed) 
        const Node = process.version 
        const CPU = percent.toFixed(2) 
        
        const embed = new Discord.MessageEmbed()

        embed.addField('Bot Statistics:', `Server: ${guild} \nUser: ${user} \nChannel: ${channel} \nUsage: ${usage} / ${totalmem} GB \nNode: ${Node} \nCPU Usage: ${CPU}%`) // Use Grave accent or `` 
        // (its on your keyboard, besides on number 1.)
        // Use \n to make a new line.
        embed.addField('Physical Statistics:', `CPU: ${cpuModel} \n Cores: ${cores} \nUptime: **${parseDur(client.uptime)}**`)
        // Let's test it!
        // Use ** turn the text into bold.
        // Let's test again.
        embed.setColor('BLACK')
        message.channel.send(embed)
      })
    }

}