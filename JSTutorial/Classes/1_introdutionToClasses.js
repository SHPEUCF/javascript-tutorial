/*
1. INTRODUCTION TO CLASSES

JavaScript is an object-oriented programming (OOP)
language we can use to model real-world items.

Classes are a tool that developers use to quickly
produce similar objects.

*/

let halley = {
  _name: 'Halley',
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  }
}


// --- On Codecademy ---

/*

 1. Compare code in main.js and the example.

 2. Copy the class instantiation, method call,
    and console.log() statements below:
 const halley = new Dog('Halley');
console.log(halley.name);
// Print name value to console
console.log(halley.behavior);
// Print behavior value to console
halley.incrementBehavior();
// Add one to behavior
console.log(halley.name);
// Print name value to console
console.log(halley.behavior);
// Print behavior value to console


 */

// Example

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name);
// Print name value to console
console.log(halley.behavior);
// Print behavior value to console
halley.incrementBehavior();
// Add one to behavior
console.log(halley.name);
// Print name value to console
console.log(halley.behavior);
// Print behavior value to console
