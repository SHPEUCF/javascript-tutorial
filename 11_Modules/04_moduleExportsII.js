/*
4. MODULE EXPORTS II

We can also wrap any collection of data and
functions in an object, and export the object
using module.exports.

In menu.js, we could write:
*/
let Menu = {};

module.exports = {
  specialty: "Roasted Beet Burger with Mint Sauce",
  getSpecialty: function() {
    return this.specialty;
  }
};

// --- On Codecademy ---

/*

1. create object Airplane
let Airplane = {};

2. set module.exports = to empty object
module.exports = {};

3. inside object create key
myAirplane: "CloudJet"

4. create another key in object
displayAirplane: function() {
   return this.myAirplane;

5. in 2-missionControls.js use require()
const Airplane = require('./2-airplane.js');

6. in 2-missionControls.js displayAirplane
console.log(Airplane.displayAirplane());


*/

// ANSWER

let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());
