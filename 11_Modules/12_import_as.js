/*
12. IMPORT AS

To import named export aliases with the
as keyword, we add the aliased variable in
our import statement.

*/
import { chefsSpecial, isVeg } from './menu';


// --- On Codecademy ---

/*

1. Update the import variables from the update
performed previous on export as

In the body, change:

    availableAirplanes to aircrafts
    flightRequirements to flightReqs
    meetsStaffRequirements to meetsStaffReqs
    meetsSpeedRangeRequirements to meetsSpeedRangeReqs


*/

// ANSWER

import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  aircrafts.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffReqs(element['availableStaff'], flightReqs['requiredStaff']) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element) {
   console.log(element['name'] + ' meets speed range requirements:' + meetsSpeedRangeReqs(element['maxSpeed'], element['minSpeed'], flightReqs['requiredSpeedRange']));
  });
}

displaySpeedRangeStatus();
