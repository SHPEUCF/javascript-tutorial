/*
10. THE this KEYWORD I

 The this keyword refers to the current
 object, which we use to grab the value
 saved. It's a way to access properties of
 given object.

 The this keyword addresses scope issues,
 we can use the this keyword to access
 properties inside of the same object.

*/
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto'],
  openRestaurant: function() {
    if (this.hasDineInSpecial) {
      return 'Unlock the door, post the special on the board, then flip the open sign.'
    } else {
      return 'Unlock the door, then flip the open sign.'
    }
  }
}

console.log(restaurant.openRestaurant());

/*

this.hasDineInSpecial inside the object
is the same as accessing
restaurant.hasDineInSpecial outside
the object.

*/


// --- On Codecademy ---

/*

1. in .sayHello() Use this to return a
string that says:

`Hello, my name is ${this.name}`


*/

// Example

let person = {
  name: 'Luis',
  age: 100,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',

  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },

  sayGoodbye() {
    return 'Goodbye!';
  }

};

console.log(person.sayHello());

person.hobbies = ['Hiking', 'Coding'];
person.hobbies = ['Reading'];
console.log(person.hobbies);


console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
