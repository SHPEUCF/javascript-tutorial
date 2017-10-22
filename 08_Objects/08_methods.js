/*
8. METHODS

Pair keys with functions.

When objects have key-function pairs,
we call the function a method.


*/
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant: () => {
    return 'Unlock the door, flip the open sign. We are open for business!';
  },
  closeRestaurant: () => {
    return 'Lock the door, flip the open sign. We are closed.'
  }
};

console.log(restaurant.openRestaurant());

console.log(restaurant.closeRestaurant());


// --- On Codecademy ---

/*

1. Create a method in the person object
named sayHello, takes not parameters
returns the string 'Hello, there!'

sayHello: () => {
 return 'Hello, there!';
 }
};

2. console.log(person.sayHello())


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
