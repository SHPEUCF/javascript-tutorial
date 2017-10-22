/*
4. ACCESSING OBJECT PROPERTIES II

Another way to access a key's value is
with bracket notation.

Just like with dot notation, we can
use opening ([) and closing (]) brackets
to access a key.

*/
let restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
};

console.log(restaurant['entrees']);

// --- On Codecademy ---

/*

1. console.log(person['name']);

2. console.log(person['age']);

*/

// Example

let person = {
  name: 'Luis',
  age : 100
};

console.log(person['name']);
console.log(person['age']);
