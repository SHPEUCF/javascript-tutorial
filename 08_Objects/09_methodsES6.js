/*
9. Methods ES^

In 2015, a new version of JavaScript (ES6)
was introduced with additional methods
and new syntax. One of the syntax
changes impacted how you can create
methods. The new version of JavaScript
supports the old method syntax
because many JavaScript developers
still use it.

The new method syntax (see below)
doesn't require arrow syntax or
a colon (:) with the function keyword.

*/
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],

  openRestaurant() {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurant() {
    return 'Lock the door, flip the open sign. We are closed.'
  }

// --- On Codecademy ---

/*

1. create  sayGoodbye() using ES6 method
sayGoodbye() {
  return 'Goodbye!';
},

*/

// Example
let person = {
  name: 'Luis',
  age: 100,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {
  return 'Hello, there!';
	},
  sayGoodbye() {
    return 'Goodbye!';
  },
};

person.hobbies = ['coding', 'electronics'];
person.hobbies = ['paintballing'];
console.log(person.hobbies);

console.log(person['name']);
console.log(person['age']);
console.log(person.sayHello())

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
