//Code your solution in this file!
const scuberHQ = 42;
const blockFt = 264;

//returns number of blocks given a value
function distanceFromHqInBlocks(pickupLocation) {
    if (pickupLocation > scuberHQ) {
        return pickupLocation - scuberHQ;
    } else if (pickupLocation < scuberHQ) {
        return scuberHQ - pickupLocation
    }
}

//call distanceFromHqInBlocks function, passing argument from distanceFromHqInFeet into distanceFromHqInBlocks
//return value of distanceFromHqInBlocks can be used to calculate feet
function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * blockFt;
}

//returns the number of feet traveled
function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * blockFt;
    } else if (start < destination) {
        return (destination - start) * blockFt;
    }
}
//returns the fare for the customer
//0.02 per foot
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start,destination) <= 400) {
        return 0; //first 400 ft are free
    } else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet(start,destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02; 
    } else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) <= 2500) {
        return 25; //flat fare $25 for rides between 2000 and 2500 ft
    } else if (distanceTravelledInFeet(start,destination) > 2500) {
        return `cannot travel that far`; // no rides over 2500 ft
    }

}