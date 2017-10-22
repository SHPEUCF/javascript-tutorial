/*
4. .filter() METHOD

.filter() returns a new array.

However, .filter() returns certain
elements from the original array
that evaluate to truthy based on
conditions written in the block
of the method.



*/


// --- On Codecademy ---

/*

1. Use the .filter() function to
return values that are less than 250.

Save them to a new array called
smallNumbers, declared with let.

2. Refactor the .filter() method
called on the favoriteWords array
to use arrow function syntax. 

 */

// Example

let randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

let smallNumbers = randomNumbers.filter(function(randomNumber) {
  return randomNumber < 250;
});

let favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Refactor the code above using arrow function syntax

let longFavoriteWords = favoriteWords.filter(word => word.length > 7)
