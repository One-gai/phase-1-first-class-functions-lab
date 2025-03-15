// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
    
}



// console.log(returnFirstTwoDrivers(drivers));
const returnLastTwoDrivers= function(drivers) {
    return drivers.slice(2);
    
}
// console.log(returnLastTwoDrivers(drivers));
let selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]
     

const createFareMultiplier = function(){
    return function fareDoubler(fare){
        return fare=(fare **2)
    }
    
}
const fareDoubler= function (fare) {
    return fare = (fare*2)
}
const fareTripler = function(fare){
    return fare = (fare * 3)
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
}



