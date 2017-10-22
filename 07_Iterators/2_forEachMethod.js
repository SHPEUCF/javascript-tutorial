/*
2. .forEach() METHOD

.forEach() will execute the same code
on each element of an array.

There are three important things to know about the .forEach() method.

    - It is an array method. It must be
     called upon an array.

    - Any changes to the iterated array
    value won't be updated in the
    original array.

    - The return value is undefined.



*/

let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem) {
  console.log(' - ' + groceryItem);
});

// Can simpligy using arrow function
// Does same thign as above
groceries.forEach(groceryItem => console.log(' - ' + groceryItem));

// --- On Codecademy ---

/*

1. Iterate over the fruits array to
log I want to eat a plus the name of
each fruit to the console.
For example, I want to eat a mango.

Use function(parameter) syntax for
this step (not arrow function => syntax)

2. Refactor the .forEach() using arrow
function syntax instead.

 */

// Example

let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`));
