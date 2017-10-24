/*
6. IMPORT

ES6 module syntax also introduces the import
keyword for importing objects. In our order.js
example, we import an object like this:

import Menu from './menu';

- The import keyword begins the statement.

- The keyword Menu here specifies the name
of the variable to store the default export in.

- from specifies where to load the module from.

- './menu' is the name of the module to load.
When dealing with local files,
it specifically refers to the name of the
file without the extension of the file.




*/


// --- On Codecademy ---

/*

1. import Airplane from './airplane.js';

2. create function
function displayFuelCapacity() {};

3. add to body of function to display:
'Fuel Capacity of + (element name) : + (element fuelCapacity)'

4. just follow answer below

*/

// ANSWER

import Airplane from './airplane.js';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element) {
    console.log(`Fuel Capacity of ${element.name}: ${element.fuelCapacity}`);
  });
};

displayFuelCapacity();
