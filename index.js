// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers= (drivers) => {
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    const fareMultiplier = () => fare * 5;
    return fareMultiplier;
}

const fareDoubler = createFareMultiplier(5);

function fareTripler(x){
    return x * 3;
}

function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(arrayOfDrivers);
}