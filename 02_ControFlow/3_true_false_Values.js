/*
3. TRUE OR FALSE VALUES

In JavaScript, all variables and conditions
have a truthy or falsy value.

All variables that have been created and set
are truthy (and will evaluate to true if they
are the condition of a control flow statement)
unless they contain one of the seven values
listed below:

    - false
    - 0 and -0
    - "" and '' (empty strings)
    - null
    - undefined
    - NaN (Not a Number)
    - document.all (something you will rarely
    encounter)
*/

// --- On Codecademy ---

/*

 1. Change the value of wordCount so that
 Great! You've started your work! is logged

 2. Change the value of favoritePhrase so that
 This string doesn't seem to be empty is logged

 */

// Example

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'A beautiful day';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
