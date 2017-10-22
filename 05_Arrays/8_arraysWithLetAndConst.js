/*
8. ARRAYS WITH LET AND CONST

you can reassign arrays with 'let'

you cannot do the same thing with 'const'

you can always update/change const arrays
though, the are still mutable.



*/


// --- On Codecademy ---

/*

 1. Add your favorite condiment to the
 condiments array using .push()

 Log updated array to console

 2. Reassign condiments to be an
  array that contains a single string.

  Log the result to the console.

 */

// Example

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments.push('Garlic');
console.log(condiments = ['only string']);

console.log(utensils.pop('Spark'));

utensils = ['fork'];
