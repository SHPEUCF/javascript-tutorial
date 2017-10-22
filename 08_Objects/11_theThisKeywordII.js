/*
11. THE this KEYWORD II

this is a great way to make objects
more flexible.

It has a lot to do with scope and how
objects share properties
*/

let myObj = {
  name: 'Miti',
  sayHello() {
    return `${this.name} says hello!`;
  }
};

let yourObj = {
  name: 'Timer'
};

yourObj.sayHello = myObj.sayHello;
/* Sets the sayHello method on yourObj
to be the sayHello method on yourObj

If you call yourObj.sayHello(), it will
return 'Timer says hello!'

*/

// --- On Codecademy ---

/*

1. under person object create a new object

let friend = {
  name: 'your friend's name'
}

2. set friend.sayHello = person.sayHello;

3. console.log(friend.sayHello()); at the
bottom on main.js

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

let friend = {
  name: 'David'
}

friend.sayHello = person.sayHello;

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
console.log(friend.sayHello());
