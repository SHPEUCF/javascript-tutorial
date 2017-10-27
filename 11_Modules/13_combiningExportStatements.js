/*
13. COMBINING EXPORT STATEMENTS

We can also use named exports and
default exports together

While it's better to avoid combining
two methods of exporting, it is useful on
occasion. For example, if you suspect
developers may only be interested in
importing a specific function and won't
need to import the entire default export.

*/
let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;

// ALSO VALID:

export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
};
export let isLowSodium = function() {
};
let isGlutenFree = function() {
};

export default isGlutenFree;


// --- On Codecademy ---

/*

1. se the export keyword to export
availableAirplanes, flightRequirements,
and meetsStaffRequirements

2. use export default for:
export default meetsSpeedRangeRequirements;

*/

// ANSWER
export let availableAirplanes = [
{name: 'AeroJet',
 fuelCapacity: 800,
 availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 maxSpeed: 1200,
 minSpeed: 300
},
{name: 'SkyJet',
 fuelCapacity: 500,
 availableStaff: ['pilots', 'flightAttendants'],
 maxSpeed: 800,
 minSpeed: 200
}
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
    } else {
    return false;
  }
};

export default meetsSpeedRangeRequirements;
