const commandHandler = require('../repository/command_handler');
class handlers {

  bugCatcher(idBug, serviceName, errorMessage, fileLocation, functionName, codeError) {
    const data = {idBug, serviceName, errorMessage, fileLocation, functionName, codeError};
    let isEmpty = false;
    for(var key in data){
      if(data[key] === "" || data[key] === undefined || data[key] === null){
        console.log(key + " is empty.")
        isEmpty = true;
      }
    }
    return ((!isEmpty) ?
        commandHandler.bugCatcher(idBug, serviceName, errorMessage, fileLocation, functionName, codeError) :
        "Please completed all field"
    )
  }

  hoursPatroly(idLog, serviceName, responseMessage, fileLocation, functionName, level, codeResponse) {
    const data = {idLog, serviceName, responseMessage, fileLocation, functionName, level, codeResponse};
    let isEmpty = false;
    for(var key in data){
      if(data[key] === "" || data[key] === undefined || data[key] === null){
        console.log(key + " is empty.")
        isEmpty = true;
      }
    }
    return ((!isEmpty) ?
      commandHandler.hoursPatroly(idLog, serviceName, responseMessage, fileLocation, functionName, level, codeResponse) :
      "Please completed all field"
    )

  }

}

module.exports = handlers;
