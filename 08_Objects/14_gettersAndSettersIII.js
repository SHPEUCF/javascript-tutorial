/*
14. GETTERS AND SETTERS III

  Now let's see GETTERS

  Getters are used to get the property
  values inside of an object.

  Getters are preferred to setters
  because you can do additional
  processing inside the method.

  That is, setters just set a new value,
  while getters grab a value and allows
  processing on it.

*/

let restaurant = {
  _name: 'Italian Bistro',
  _seatingCapacity: 120,
  _hasDineInSpecial: true,
  _entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  set seatingCapacity(seatingCapacity) {
      if (typeOf newCapacity === 'number') {
        this._seatingCapacity = newCapacity;
    } else {
        console.log(`Change ${newCapacity} to a number.`)
    }
  },

  get seatingCapacity() {
      console.log(`There are ${this._seatingCapacity} seats at Italian Bistro.`);
      return this._seatingCapacity;
  }
}

// --- On Codecademy ---

/*

1. get age() {
    console.log
    (`${this.name} is ${this.age} old.`);
    return this.age;
  }

  2. console.log(person.age); at the bottom
  to get age from person object

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
  get age() {
    console.log(`${this.name} is ${this.age} old.`);
    return this.age;
  }
}

person.age = 'Thirty-nine';
person.age = 39;
console.log(person.age);
