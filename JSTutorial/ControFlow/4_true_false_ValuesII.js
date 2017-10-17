/*
4. TRUE AND FALSE VALUES II

In programming, we often evaluate whether
or not an expression is true or truthy

JavaScript provides an operator for swapping
the truthiness and falsiness of values -
the exclamation point (!).

We can use this in conditional statements
as shorthand to check if the value of a variable
evaluates to false rather than true
*/

let isPhoneCharged = true;
if (!isPhoneCharged) {
  console.log('Plug in your phone!');
} else {
  console.log('No need to charge!');
}

// --- On Codecademy ---

/*

 1. Use the ! operator to cause This string is
 definitely empty to log to the console

 */

// Example

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = 'A beautiful day';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
