/*
3. FOR LOOPS

With for loops we can loop through an array
over and over to do repetitive tasks for us

*/

let animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (let animalIndex = 0;
  animalIndex < animals.length;
  animalIndex++) {
  console.log(animals[animalIndex]);
}

/*
  - start condition is let animalIndex = 0,
  which means the loop will start counting at 0

  - The stop condition is
  animalIndex < animals.length,
  which means the loop will run as long
  as animalIndex is less than the length of
  the animals array

  - The iterator is animalIndex++.
  This means that after each loop,
  animalIndex will increase by 1.


// --- On Codecademy ---

/*

 1. Replace your current code with a loop.
    Delete the three console.log()

    Loop through vacationSpots array

    Use vacationSpotIndex

    Inside the block use console.log to
    print each item in vacationSpots array

  2. Add text to the console.log
  console.log('I would love to visit ' +
  vacationSpots[vacationSpotIndex]);
};


 */

// Example

let vacationSpots = ['China', 'Italy', 'India'];

for (let vacationSpotIndex = 0; vacationSpotIndex < vacationSpots.length; vacationSpotIndex++) {
  console.log('I would love to visit ' + vacationSpots[vacationSpotIndex]);
};
