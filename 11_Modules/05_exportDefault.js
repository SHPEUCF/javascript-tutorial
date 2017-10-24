/*
5. EXPORT DEFAULT

ES6 implemted a better way
for exporting modules.

These are usually broken down into one of two
techniques, default export and named exports.

When using ES6 syntax, we use export default
in place of module.exports.

*/
let Menu = {};

export default Menu;

// --- On Codecademy ---

/*

1. create Airplane object again
the new way

let Airplane = {};


2. create property
Airplane.availableAirplanes = [];

3. Airplane.availableAirplanes = [
  {name: 'AeroJet', fuelCapacity: 80

4. export default Airplane;

*/

// ANSWER
let Airplane = {};

Airplane.availableAirplanes = [
  {name: 'AeroJet', fuelCapacity: 800},
  {name: 'SkyJet', fuelCapacity: 500}];

export default Airplane;
