/*
13. GETTER AND SETTER II

How do we use these methods?

 We call setter methods the same way we
 edited properties.

 We use the same syntax we would
 use to set a property that doesn't have
 a setter method.

*/
let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
      console.log(`${newCapacity} is valid input.`);
    } else {
        console.log(`Change ${newCapacity} to a number.`);
    }
}

restaurant.seatingCapacity = 150;


// --- On Codecademy ---

/*

1. set person.age = 'Thirty-nine';

2. set person.age = 39;


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
}

person.age = 'Thirty-nine';
person.age = 39;
