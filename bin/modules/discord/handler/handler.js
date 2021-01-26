const commandHandler = require('../repository/command_handler');
class handlers {

  bugCatcher(idBug, serviceName, errorMessage, fileLocation, functionName) {
    const data = {idBug, serviceName, errorMessage, fileLocation, functionName};
    let isEmpty = false;
    for(var key in data){
      if(data[key] === "" || data[key] === undefined || data[key] === null){
        console.log(key + " is empty.")
        isEmpty = true;
      }
    }
    return ((!isEmpty) ?
        commandHandler.bugCatcher(idBug, serviceName, errorMessage, fileLocation, functionName) :
        "Please completed all field"
    )
  }

  hoursPatroly(idBug, serviceName, errorMessage, fileLocation, functionName, level) {
    const data = {idBug, serviceName, errorMessage, fileLocation, functionName, level};
    let isEmpty = false;
    for(var key in data){
      if(data[key] === "" || data[key] === undefined || data[key] === null){
        console.log(key + " is empty.")
        isEmpty = true;
      }
    }
    return ((!isEmpty) ?
      commandHandler.hoursPatroly(idBug, serviceName, errorMessage, fileLocation, functionName, level) :
      "Please completed all field"
    )

  }

}

module.exports = handlers;
