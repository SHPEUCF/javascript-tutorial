/*
9. EXPORT NAMED EXPORTS

Named exports allow objetcs to be
exported as soon as they are
declared, by placing the keyword export
in front of variable declarations.

The export keyword allows us to export objects
upon declaration

*/
export let specialty = '';
export function isVegetarian() {
};

// --- On Codecademy ---

/*

1. to availableAirplanes add two more properties
to each object/airplane

for AeroJet:
maxSpeed: 1200,
minSpeed: 300

for SkyJet:
maxSpeed: 800,
minSpeed: 200

2. add property requiredSpeedRange: 700
to flightRequirements objects

3. declared new function
function meetsSpeedRangeRequirements(maxSpeed,
minSpeed, requiredSpeedRange) {}

4. in that function do:
 let range = maxSpeed - minSpeed;

5. to see if the range is greater than
the requiredSpeedRange, in the body do:

if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }

6. Use export to export the variables
as soon as they are declared, removing
the export statement at the bottom of the file.

*/

// ANSWER
export let availableAirplanes = [{
 name: 'AeroJet',
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
}];

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

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true;
  } else {
    return false;
  }
}
