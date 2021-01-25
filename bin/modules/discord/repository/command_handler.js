const InMemDB = require('../../../helpers/in-memory-databases/database');
const domain = require('./domain');
const Domain = new domain();

const bugCatcher = (idBug, serviceName, errorMessage, fileLocation, functionName) => {
  const theBug = InMemDB.get(idBug)
  if(theBug){
    const now = (new Date().getTime()) / 1000
    const past = (new Date(theBug.firstAppeared) / 1000)
    if (now - past >= 600) { //Cek apakah kelewat 10 menit
      const formatData = { "idBug" : idBug, "appeared" : 0, "firstAppeared" : new Date() }
      this.database.set(idBug, formatData)
      return Domain.bugCatcher(serviceName, errorMessage, fileLocation, functionName, 0)
    } else {
      const formatData = { "idBug" : idBug, "appeared" : theBug.appeared + 1, "firstAppeared" : theBug.firstAppeared }
      this.database.set(idBug, formatData)
      return Domain.bugCatcher(serviceName, errorMessage, fileLocation, functionName, theBug.appeared + 1)
    }
  } else {
    const formatData = { "idBug" : idBug, "appeared" : theBug.appeared + 1, "firstAppeared" : theBug.firstAppeared }
    this.database.set(idBug, formatData)
    return Domain.bugCatcher(serviceName, errorMessage, fileLocation, functionName, theBug.appeared + 1)
  }
}

const hoursPatroly = (idBug, serviceName, errorMessage, fileLocation, functionName, level) => {
  const theBug = InMemDB.get(idBug)
  if(theBug){
    const now = (new Date().getTime()) / 1000
    const past = (new Date(theBug.firstAppeared) / 1000)
    if (now - past >= 600) { //kalo kelewat 10 menit
      const formatData = { "idBug" : idBug, "appeared" : 0, "firstAppeared" : new Date() }
      this.database.set(idBug, formatData)
      return Domain.hoursPatroly(serviceName, errorMessage, fileLocation, functionName, 0, level)
    } else { //kalo belum kelewat 10 menit
      const formatData = { "idBug" : idBug, "appeared" : theBug.appeared + 1, "firstAppeared" : theBug.firstAppeared }
      this.database.set(idBug, formatData)
      return Domain.hoursPatroly(serviceName, errorMessage, fileLocation, functionName, theBug.appeared + 1, level)
    }
  } else { //kalo bug nya belum ada
    const formatData = { "idBug" : idBug, "appeared" : 0, "firstAppeared" : new Date() }
    this.database.set(idBug, formatData)
    return Domain.hoursPatroly(serviceName, errorMessage, fileLocation, functionName, 0, level)
  }
}

module.exports = {
  bugCatcher,
  hoursPatroly
}
//
// const arr = [{"idBug":"test","appeared":0,"firstAppeared":"2021-01-22T03:55:03.609Z"}];
// function addArr(){
//   const data = {"idBug" : "test", "serviceName" : "testService", "errorMessage" : "error", "fileLocation" : "/test/test.js"}
//   const checkIfIDAlreadyListed = () => {
//     return (arr.find((x) => x.idBug === data.idBug) ? true : false)
//   }
//
//   if(!checkIfIDAlreadyListed()){ //Untuk insert ke array jika idBug belum ditemukan
//     console.log("true")
//     const date = new Date()
//     arr.push({"idBug" : data.idBug, appeared : 0, firstAppeared : date})
//   } else {
//     console.log("false")
//     const checkIfThisBugAppearedInLast10Minutes = () => {
//       var tenMinutes = 1000 * 60 * 10;
//       var findSameBugWithIn10Minutes = arr.find((x) => ((new Date().getTime() - new Date(x.firstAppeared).getTime()) < tenMinutes) ? true : false)
//       console.log(findSameBugWithIn10Minutes)
//       return findSameBugWithIn10Minutes
//     }
//   }
//
// }
// addArr()

