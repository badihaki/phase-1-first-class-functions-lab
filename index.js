// Code your solution in this file!
// anonymous functions
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length-2, drivers.length);
};

// my array

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

// create fare multiplier
function createFareMultiplier(a){
    const fareMultiplier = function(b){
        return a*b;
    };
    return fareMultiplier;
}

// fare doubler
const fareDoubler = function(fare){
    // return fare * 2;
    return createFareMultiplier(fare)(2);
};

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, funct){
    /*
    if(funct === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else if (funct === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    }
    */
   return funct(drivers);
}