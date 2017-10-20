/*
1. INTRO TO CONTROL FLOW

It's all about making decisions in your program

Control flow statements enable JavaScript
programs to make decisions by executing code
based on a condition.

If a given condition is true,
we execute one block of code.

If the statement is false,
we execute another block of code


*/


// --- On Codecademy ---

/*

 1. set userName equal to your name

 2. can also change knowsJavaScript to true
 if desires

 */

// Example

let userName = 'Luis';
let knowsJavaScript = true;

if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}
