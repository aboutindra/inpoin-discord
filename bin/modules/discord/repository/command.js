require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
let loaded = 0;
let discord;

if(!loaded){
  setTimeout(() => {
    discord = require('../../../../bin/helpers/discord').getConnection(process.env.DISCORD_INDEX)
    loaded++
  }, 3500)
}

const rootProjectDir = process.cwd();
const readProjectNameFromPackage = JSON.parse(fs.readFileSync(rootProjectDir+'/package.json')).name+'-'+process.env.NODE_ENV;

class Command{

  async sendBug(idBug, errorMessage, fileLocation, functionName, bugAppeared ,codeError){
    errorMessage = (typeof errorMessage === 'object') ? JSON.stringify(errorMessage) : errorMessage;
    let exampleEmbed;
    let channel;
    if(process.env.NODE_ENV === 'dev'){
      channel = discord.channels.find(x => x.id == "799496432784244746")
    } else if(process.env.NODE_ENV === 'prod'){
      channel = discord.channels.find(x => x.id == "818324094352359445")
    } else {
      channel = discord.channels.find(x => x.id == "799496432784244746")
    }// Kirim ke ID Channel bugCatcher
    exampleEmbed = new Discord.RichEmbed()
      .setColor('#ff1d1d')
      .setTitle(`${readProjectNameFromPackage}`)
      .setAuthor('BUG!', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png', 'https://discord.js.org')
      .setDescription("`" + "`" + "`" + `${errorMessage}` + "`" + "`" + "`" + ` | Happened at ${idBug}` + '\n<@&800991071655952384>' )
      .setThumbnail('https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/f7/20/bd/f720bdc2-e744-6eb7-ccfc-6b9c98377386/source/512x512bb.jpg')
      .addField('File Location', `${fileLocation}`, true)
      .addField('Function Name', `${functionName}`, true)
      .addField('Code Response', `${codeError}`, true)
      .addField('Bug Appeared in 10 Minutes', bugAppeared, true)
      .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4b-FqY5I7lzm6QyMlhCvlP89JYs2RncxjcA&usqp=CAU')
      .setTimestamp()
      .setFooter('IMOET - Inpoin Manager Operation Bot', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png');

    return await channel.send(exampleEmbed)
  }
  async sendLog(idLog, errorMessage, fileLocation, functionName, bugAppeared, level, codeResponse){
    errorMessage = (typeof errorMessage === 'object') ? JSON.stringify(errorMessage) : errorMessage;
    let exampleEmbed;
    let channel;
    if(process.env.NODE_ENV === 'dev'){
      channel = discord.channels.find(x => x.id == "799498228693205003")
    } else if(process.env.NODE_ENV === 'prod'){
      channel = discord.channels.find(x => x.id == "844759302510215179")
    } else {
      channel = discord.channels.find(x => x.id == "799498228693205003")
    }// Kirim ke ID Channel bugCatcher
    if(level === 0){
      exampleEmbed = new Discord.RichEmbed()
        .setColor('#c1c1c1')
        .setTitle(`${readProjectNameFromPackage}`)
        .setAuthor('LOG!', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png', 'https://discord.js.org')
        .setDescription("`" + "`" + "`" + `${errorMessage}` + "`" + "`" + "`" + ` | Happened at ${idLog}` +'\n<@&800991071655952384>' )
        .setThumbnail('https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/f7/20/bd/f720bdc2-e744-6eb7-ccfc-6b9c98377386/source/512x512bb.jpg')
        .addField('File Location', `${fileLocation}`, true)
        .addField('Function Name', `${functionName}`, true)
        .addField('Code Response', `${codeResponse}`, true)
        .addField('Log Appeared in 10 Minutes', bugAppeared, true)
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4b-FqY5I7lzm6QyMlhCvlP89JYs2RncxjcA&usqp=CAU')
        .setTimestamp()
        .setFooter('IMOET - Inpoin Manager Operation Bot', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png');

    } else {
      exampleEmbed = new Discord.RichEmbed()
        .setColor('#c1c1c1')
        .setTitle(`${readProjectNameFromPackage}`)
        .setAuthor('LOG!', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png', 'https://discord.js.org')
        .setDescription("`" + "`" + "`" + `${errorMessage}` + "`" + "`" + "`"  + ` | Happened at ${idLog}` + '\n<@&800991071655952384>' )
        .setThumbnail('https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/f7/20/bd/f720bdc2-e744-6eb7-ccfc-6b9c98377386/source/512x512bb.jpg')
        .addField('File Location', `${fileLocation}`, true)
        .addField('Function Name', `${functionName}`, true)
        .addField('Code Response', `${codeResponse}`, true)
        .addField('Log Appeared in 10 Minutes', bugAppeared, true)
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4b-FqY5I7lzm6QyMlhCvlP89JYs2RncxjcA&usqp=CAU')
        .setTimestamp()
        .setFooter('IMOET - Inpoin Manager Operation Bot', 'https://cdn.mee6.xyz/guild-images/799492009206611978/90ab6c96ad5535175bbf1a585d5fb55accd63d3e47a49afd4523fa43484e784e.png');
    }
    return await channel.send(exampleEmbed)
  }
}

module.exports = Command
