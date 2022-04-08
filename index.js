// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (){
   return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (){
        return integer * integer;
    }
}
let fareDoubler = fare => fare * 2; 
let fareTripler = fare => fare * 3; 

const selectDifferentDrivers = function (returnLastTwoDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers();
    }

