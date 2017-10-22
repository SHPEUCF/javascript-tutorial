/*
12. GETTERS AND SETTERS I

A common object design paradigm is to
include getter and setter methods as
attributes.

Use _ to prepend the property that should
only be changed using getters and setters
like _name: 'Luis',

Getter and setter methods get and set
the properties inside of an object.
There are a couple of advantages to
using these methods for getting and
setting properties directly:

  - You can check if new data is valid
  before setting a property.

  - You can perform an action on the
  data while you are getting or setting
  a property.

  - You can control which properties
  can be set and retrieved.

  create getter and setter methods using
  set nameOfMethod() {} or
  get nameOfMethod() {}




*/


// --- On Codecademy ---

/*

1. & 2. 
  set age(age) {
    if (typeof age === 'number') {
      this._age = age;
    } else {
      return 'Invalid input';
    };
  },
};


*/

// Example

let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(age) {
    if (typeof age === 'number') {
      this._age = age;
    } else {
      return 'Invalid input';
    };
  },
};
