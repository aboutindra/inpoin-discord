require('dotenv').config()
const Discord = require('discord.js');
const loaded = 0;
let discord;
setTimeout(() => {
  discord = require('../../../../bin/helpers/in-memory-databases/database').get(process.env.DISCORD_INDEX)
}, 3500)

class Command{

  async sendBug(idBug, serviceName, errorMessage, fileLocation, functionName, bugAppeared ,codeError){
    let exampleEmbed;
    const channel = discord.channels.cache.find(x => x.id == "799496432784244746") // Kirim ke ID Channel bugCatcher
    exampleEmbed = new Discord.MessageEmbed()
      .setColor('#ff1d1d')
      .setTitle(`${serviceName}`)
      .setAuthor('BUG!', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png', 'https://discord.js.org')
      .setDescription(``` ${errorMessage} ``` + ` | Happened at ${idBug}` + '\n<@&800991071655952384>' )
      .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4b-FqY5I7lzm6QyMlhCvlP89JYs2RncxjcA&usqp=CAU')
      .addFields(
        { name: 'File Location', value: `${fileLocation}`, inline: true },
        { name: 'Function Name', value: `${functionName}`, inline: true },
        { name: 'Code Response', value: `${codeError}`, inline: true }
      )
      .addField('Bug Appeared in 10 Minutes', bugAppeared, true)
      .setImage('https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/f7/20/bd/f720bdc2-e744-6eb7-ccfc-6b9c98377386/source/512x512bb.jpg')
      .setTimestamp()
      .setFooter('IMOET - Inpoin Manager Operation Bot', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png');

    return await channel.send(exampleEmbed)
  }
  async sendLog(idLog, serviceName, errorMessage, fileLocation, functionName, bugAppeared, level, codeResponse){
    let exampleEmbed;
    const channel = discord.channels.cache.find(x => x.id == "799498228693205003") // Kirim ke ID Channel bugCatcher
    if(level === 0){
      exampleEmbed = new Discord.MessageEmbed()
        .setColor('#c1c1c1')
        .setTitle(`${serviceName}`)
        .setAuthor('LOG!', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png', 'https://discord.js.org')
        .setDescription(``` ${errorMessage} ``` + ` | Happened at ${idLog}` +'\n<@&800991071655952384>' )
        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4b-FqY5I7lzm6QyMlhCvlP89JYs2RncxjcA&usqp=CAU')
        .addFields(
          { name: 'File Location', value: `${fileLocation}`, inline: true },
          { name: 'Function Name', value: `${functionName}`, inline: true },
          { name: 'Code Response', value: `${codeResponse}`, inline: true }
        )
        .addField('Log Appeared in 10 Minutes', bugAppeared, true)
        .setImage('https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/f7/20/bd/f720bdc2-e744-6eb7-ccfc-6b9c98377386/source/512x512bb.jpg')
        .setTimestamp()
        .setFooter('IMOET - Inpoin Manager Operation Bot', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png');

    } else {
      exampleEmbed = new Discord.MessageEmbed()
        .setColor('#c1c1c1')
        .setTitle(`${serviceName}`)
        .setAuthor('LOG!', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png', 'https://discord.js.org')
        .setDescription(``` ${errorMessage} ``` + ` | Happened at ${idLog}` + '\n<@&800991071655952384>' )
        .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4b-FqY5I7lzm6QyMlhCvlP89JYs2RncxjcA&usqp=CAU')
        .addFields(
          { name: 'File Location', value: `${fileLocation}`, inline: true },
          { name: 'Function Name', value: `${functionName}`, inline: true },
          { name: 'Code Response', value: `${codeResponse}`, inline: true }
        )
        .addField('Log Appeared in 10 Minutes', bugAppeared, true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('IMOET - Inpoin Manager Operation Bot', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png');
    }
    return await channel.send(exampleEmbed)
  }
}

module.exports = Command
