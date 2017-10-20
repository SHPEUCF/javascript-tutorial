/*
9. ARROW FUNCTIONS

JavaScript also provides several ways to
refactor arrow function syntax.

Some rules:

1. Functions that take a single parameter
should not use parentheses.

2. However, if a function takes zero or
multiple parameters, parentheses are required.

3. A function composed of a sole single-line block
is automatically returned.

The contents of the block should immediately
follow the arrow =>

This is referred to as implicit return.

4. function composed of a sole single-line
block does not need brackets.


*/
// FROM THIS

const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');

// TO THIS

const multiplyByNineFifths = celsius => celsius * (9/5);

const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;

console.log('The temperature is ' + getFahrenheit(15) + '°F');


// --- On Codecademy ---

/*

 1. Refactor volumeOfSphere using this principles
 
 */

// Example

const volumeOfSphere = diameter =>  (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
