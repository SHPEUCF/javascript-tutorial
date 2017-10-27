/*
14. COMBINING IMPORT STATEMENTS

We can import the collection of objects and
functions with the same data.

*/

// EXAMPLE
import { specialty, isVegetarian, isLowSodium } from './menu';

import GlutenFree from './menu';

// --- On Codecademy ---

/*

1. Now change it back to:
import { availableAirplanes,
flightRequirements,
meetsStaffRequirements,
meetsSpeedRangeRequirements }
from './airplane';

2. Just copy/paste the code below on the ANSWER
  section

*/

// ANSWER
import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';


function displayFuelCapacity() {
  availableAirplanes.forEach(function(element) {
    console.log('Fuel Capacity of ' + element['name'] + ': ' + element['fuelCapacity']);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element['name'] + ' meets staff requirements: ' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']) );
  });
}

displayStaffStatus();

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element['name'] + ' meets speed range requirements:' + meetsSpeedRangeRequirements(element['maxSpeed'], element['minSpeed'], flightRequirements['requiredSpeedRange']));
  });
}

displaySpeedRangeStatus();
