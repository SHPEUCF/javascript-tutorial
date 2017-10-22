/*
3. .map() METHOD

 if we want to change the contents
 of the array we can use .map()

 .map() does return a value, contrary to
 .forEach() which does not.

 We have to define a new array using the
 let keyword because .map() it's returning
 values that we now need to store.


*/


// --- On Codecademy ---

/*

1. On line 4, use .map() to create a
new array called secretMessage that
returns the first character of each
string in the animals array.

Create the variable using let and
write out the method call using
function; you'll refactor to arrow f
unction syntax in a later step.

2. Use .map() to divide all the
 numbers in bigNumbers by 100.

Save the returned values to a new
array called smallNumbers, declared
with let.

3. Refactor the method call from Step 1
using arrow function syntax.


 */

// Example

let animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
let secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

let bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
let smallNumbers = bigNumbers.map(function(number) {
  return number / 100;
});
