const discord = require('../../../helpers/discord').getConnection('inpoin-notification-discord');
const command = require('./command');
const Command = new command(discord);
class Domain{
  constructor(InMemDB) {
    this.database = InMemDB;
  }
  async bugCatcher(serviceName, errorMessage, fileLocation, functionName, bugAppeared){
    return Command.sendBug(serviceName, errorMessage, fileLocation, functionName, bugAppeared)
  }

  async hoursPatroly( serviceName, errorMessage, fileLocation, functionName, bugAppeared, level){
   return Command.sendLog(serviceName, errorMessage, fileLocation, functionName, bugAppeared, level)
  }

}

module.exports = Domain
