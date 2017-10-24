/*
7. NAMED EXPORTS

ES6 introduced a second common approach
to export modules. In addition to default
export, named exports allow us to export
data through the use of variables.

*/
// Example
let specialty = '';
function isVegetarian() {
};
function isLowSodium() {
};

export { specialty, isVegetarian };


// --- On Codecademy ---

/*

1. remove export default Airplane; and
set let Airplane; to remove empty object

2. Modify availableAirplanes to
let availableAirplanes and no longer a property
of Airplane object

3. Add another property to availableAirplanes
for AeroJet:
availableStaff: ['pilots', 'flightAttendants',
'engineers', 'medicalAssistance',
'sensorOperators']

for SkyJet:
 availableStaff: ['pilots', 'flightAttendants']

 4. Create let flightRequirements = {};

 5. To this object add property:
  requiredStaff: 4

6. create function:
let meetsStaffRequirements = function(availableStaff, requiredStaff) {};

7. in body of function create conditional
if (availableStaff.length >= requiredStaff) {
  return true;
} else {
  return false;
}

8. export:
export {availableAirplanes, flightRequirements, meetsStaffRequirements};

*/

// ANSWER

let Airplane;

let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
 }
];

let flightRequirements = {
  requiredStaff: 4
};

let meetsStaffRequirements = function(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
};

export {availableAirplanes, flightRequirements, meetsStaffRequirements};
