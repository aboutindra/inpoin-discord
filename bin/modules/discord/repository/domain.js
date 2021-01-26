const discord = require('../../../helpers/discord').getConnection('inpoin-notification-discord');
const command = require('./command');
const Command = new command(discord);
class Domain{
  constructor(InMemDB) {
    this.database = InMemDB;
  }
  async bugCatcher(serviceName, errorMessage, fileLocation, functionName, bugAppeared, codeError){
    return Command.sendBug(serviceName, errorMessage, fileLocation, functionName, bugAppeared, codeError)
  }

  async hoursPatroly( serviceName, errorMessage, fileLocation, functionName, bugAppeared, level, codeResponse){
   return Command.sendLog(serviceName, errorMessage, fileLocation, functionName, bugAppeared, level, codeResponse)
  }

}

module.exports = Domain
