/*
4. FOR LOOPS, BACKWARDS

We can make our loop run backward by
modifying the start, stop, and iterator
conditions.

 - The start condition should set
 vacationSpotIndex to the length of the array.

 - The loop should stop running when
 vacationSpotIndex is less than 0.

 - The iterator should subtract 1 each time,
 which is the purpose of vacationSpotIndex--.

*/


// --- On Codecademy ---

/*

 1. Change conditions on for loop
 start at array.length
 set stop condition when index >= 0
 subract 1 from index every cycle

 2. vacationSpots.length - 1
 vacationSpots[3] is undefined, arrays start
 counting at 0 so length - 1 must be used.

 */

// Example

let vacationSpots = ['China', 'Italy', 'India'];

for (let vacationSpotIndex = vacationSpots.length - 1; vacationSpotIndex >= 0; vacationSpotIndex--) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
};
