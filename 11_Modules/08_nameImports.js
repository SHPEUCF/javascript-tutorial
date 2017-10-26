/*
8. NAMED IMPORTS

To import objects stored in a variable,
we use the import keyword and include
the variables in a set of {}.
*/

import { specialty, isVegetarian } from './menu';

console.log(specialty);

// --- On Codecademy ---

/*

1. any reference to Airplane object in our code

2. now import the variables needed
 import { availableAirplanes,
 flightRequirements, meetsStaffRequirements }
  from './airplane';

3. define fucntion
function displayStaffStatus() {};

4. in the body, do a forEach
availableAirplanes.forEach(function(element) {});

5. in the fuction for the forEach:
console.log(element.name);

6. in the console.log:

availableAirplanes.forEach(function(element) {
    console.log(element.name +
    ' meets staff requirements: ' +
     meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff));
  });

7. call the displayStaffStatus()

*/

// ANSWER
import { availableAirplanes, flightRequirements, meetsStaffRequirements } from './airplane';

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

displayFuelCapacity();
displayStaffStatus();
