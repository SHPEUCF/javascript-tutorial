/*
2. FUNCTIONS

let calculatorIsOn = false;

const pressPowerButton = () => {
  if (calculatorIsOn) {
    console.log('Calculator turning off.');
    calculatorIsOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorIsOn = true;
  }
};

pressPowerButton();
// Output: Calculator turning on.

pressPowerButton();
// Output: Calculator turning off.


We call the function by writing its name followed
by a semi-colon pressPowerButton();

Function code is reusable.

*/


// --- On Codecademy ---

/*
Pizza restaurant
Write a JavaScript program to take orders
so you don't have to write orders by hand.

 1. create function takeOrder that logs
 'Order: pizza'

ES5
 function takeOrder() {
  console.log('Order: pizza');
 };
OR ES6
const takeOrder = () => {
  console.log('Order: pizza');
};

 2. call function takeOrder();

 */

// Example

const takeOrder = () => {
  console.log('Order: pizza');
};

takeOrder();
