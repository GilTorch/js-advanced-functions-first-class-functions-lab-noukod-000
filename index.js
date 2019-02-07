// Code your solution in this file!
const returnFirstTwoDrivers=function(array){
  return [array[0],array[1]]
}

const returnLastTwoDrivers=function(array){
  return array.slice(-2);
}

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
