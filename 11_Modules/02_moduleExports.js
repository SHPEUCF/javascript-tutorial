/*
1. MODULE.EXPORTS

Modules is code that can be reused, it can be
shared from file to file.

There are certain things that must be done for
a block of code to become a module like,
enabling exporting, or using import to use in
another file.

Below is an example of how to define a module,
and how to export it using the statement
module.exports.
*/
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu;

/*
module.exports = Menu; exports the Menu
object as a module. module is a variable
that represents the module, and exports
exposes the module as an object.

The pattern we use to export modules is thus:

    - Define an object to represent the module.

    - Add data or behavior to the module.

    - Export the module.

*/

// --- On Codecademy ---

/*

1. create empty Airplane object

2. Add property to Airplane object:
Airplane.myAirplane = 'StarJet';

3. export the module
module.exports = Airplane;

*/

// ANSWER

let Airplane = {};

Airplane.myAirplane = 'StarJet';

module.exports = Airplane;
