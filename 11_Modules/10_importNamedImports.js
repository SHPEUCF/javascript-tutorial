/*
10. IMPORT NAMED IMPORTS

To import variables that are declared,
we simply use the original syntax that
describes the variable name.
*/
import { specialty, isVegetarian } from 'menu';

// --- On Codecademy ---

/*

1. Add meetsSpeedRangeRequirements to
the the import statement at the top of
the file.

2. declared
function displaySpeedRangeStatus() {};

3.  in body do:
availableAirplanes.forEach(function(element) {});

4. in the body of the forEach do:
console.log(element.name);

5. modify console.log to be:
console.log(element.name +
 ' meets speed range requirements: ' +
  meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });

6. Call the displaySpeedRangeStatus()
function.

*/

// ANSWER
import { availableAirplanes, flightRequirements, meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

function displayFuelCapacity() {
  availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
};

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });
};

function displaySpeedRangeStatus() {
  availableAirplanes.forEach(function(element) {
    console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
};

displayFuelCapacity();
displayStaffStatus();
displaySpeedRangeStatus();
