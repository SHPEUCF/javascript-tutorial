/*
1. STRING INTERPOLATION II

the newest version of JavaScript (ES6)
we can insert variables into strings with ease,
by doing two things:

1. Instead of using quotes around the string,
use backticks (this key is usually located on
the top of your keyboard, left of the 1 key).

2. Wrap your variable with ${myVariable},
followed by a sentence.
No +s necessary.

let myPet = 'armadillo'
`I own a pet ${myPet}.`
// Output: 'I own a pet armadillo.'


*/


// --- On Codecademy ---

/*

1. create variable myName
set to your name

2. create variable myCity
 et to your city

3. use interpolation `` and ${} to console.log
My name is NAME. My favorite city is CITY

 */

// Example

let myName = 'Luis';
let myCity = 'Orlando';
console.log(`My name is ${myName}.
  My favorite food is ${myCity}.`);
