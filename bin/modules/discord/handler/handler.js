const commandHandler = require('../repository/command_handler');
class handlers {

  bugCatcher(data) {
    const {idBug, serviceName, errorMessage, fileLocation, functionName} = data;
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

  hoursPatroly(data) {
    const {idBug, serviceName, errorMessage, fileLocation, functionName, level} = data;
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
