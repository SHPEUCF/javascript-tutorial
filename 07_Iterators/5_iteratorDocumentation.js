/*
5. ITERATOR DOCUMENTATION

There are many additional built-in array
methods, a complete list of which is
on the Mozilla Developer Network.





*/


// --- On Codecademy ---

/*

1.  There is something missing in the
words.some() method call.
Fix this method so that true is
printed to the console.

2. Use the .filter() method to save
any words longer than 5 characters to
a new array called interestingWords,
 declared with let.

3. Change the words to be the name
of the array you created in the
previous step, interestingWords. Then,
complete the code between the
parentheses so that true is logged to
the console.

 */

// Example

let words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(function(word) {
  return word.length < 6;
}));

// Use filter to create a new array

let interestingWords = words.filter(word => word.length > 5);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every(word => word.length > 5 ));
