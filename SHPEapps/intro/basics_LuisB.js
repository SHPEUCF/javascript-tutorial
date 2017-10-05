// Comments in JavaScript

// these type for single line
/*
This type for multi-line
*/


/* Console.log and Data Types */

console.log('JavaScript');
console.log(33.7);
console.log(true);
console.log(null);

/* Math operators */

/* operators
Add: +
Subtract: -
Multiply: *
Divide: /
*/

console.log(15 + 3.5);
console.log(2017 - 1969);
console.log(65/240);
console.log(0.2708 * 100);


/* Object properties/methods - string length */

console.log('Hello'.length);
console.log('Teaching the world how to code'.length);

/* Some Built-In methods */
console.log('Luis'.toUpperCase());
console.log('Hey'.startsWith('H'));
console.log('   home   '.trim());


/* Libraries */

console.log(Math.random()); // random number btw 0 and 1

// randomg number btw 0 and 50
console.log(Math.random() * 50);

// random integer btw 0 and 50 - using floor() to round down
console.log(Math.floor(Math.random() * 50));

// random number btw 0 and 100
console.log(Math.floor(Math.random() * 100));

// smallest integer greater than or equal to a decimal number
console.log(Math.ceil(43.8));

// check if number is an integer
console.log(Number.isInteger(2017));

/*

Review Types and Operators

Let's take one more glance at the concepts we just learned:

    - Four essential data types in JavaScript include strings, numbers, booleans, and null.

    - Data is printed, or logged, to the console with console.log().
    - Four built-in mathematical operators include +, -, *, and /.
    - JavaScript associates certain properties with different data types.
    - JavaScript has built-in methods for different data types.
    - Libraries are collections of methods that can be called without an instance.

    - You can write single-line comments with //
    and multi-line comments between /* and */.

*/
