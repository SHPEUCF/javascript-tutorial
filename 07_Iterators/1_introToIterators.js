/*
1. INTRO TO ITERATORS

Developers loop over the contents of
an array very frequently.

Programmers often accomplish this with a
for loop.

Because this is repetive and many
developers us it JavaScript now
provides methods that simplify this task.


*/


// --- On Codecademy ---

/*

 1. if you want, try to understand the
 code or proceed to next page to learn
 more about it

 */

// Example

let artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(function(artist) {
  console.log(artist + ' is one of my favorite artists.');
});

let numbers = [1, 2, 3, 4, 5];

let squareNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squareNumbers);

let things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

let onlyNumbers = things.filter(function(thing) {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
