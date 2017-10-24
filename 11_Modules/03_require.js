/*
3. REQUIRE

require()

To make use of the exported module and
the behavior we define within it,
we import the module. A common way to
do this is with the require() function.

the pattern to import a module is:

    - Import the module

    - Use the module and its properties
    within a program.

*/
const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();


// --- On Codecademy ---

/*

1. require 1-airplane.js
const Airplane = require('./1-airplane.js');

2. function displayAirplane() {
  console.log(Airplane.myAirplane);
};

3. displayAirplane();

*/

// ANSWER

const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
};

displayAirplane();
