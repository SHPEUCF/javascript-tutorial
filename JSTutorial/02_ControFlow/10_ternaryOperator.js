/*
10. TERNARY OPERATOR

Just to simplify if / else statements

The ternary operator can be used for any condition
that can be evaluated to true or false

Basically,

condition? output if true : output if false

*/

// OLD WAY
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// TERNARY WAY
isNightTime ? console.log('Turn on the lights!') :
console.log('Turn off the lights!');


// --- On Codecademy ---

/*

 1. refactor main.js first if/else to use ternary
 operator

 2. refactor the second if/else statement

 3. refactor third if/else statement

 */

// Example
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') :
console.log('You will not need a key to open the door.');


let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
