/*
6. ADDING A PROPERTY

Objects are considered mutable,
which means you can change them
after they're created.

Even if you save an object to a const
variable, you can still add to and
edit the key-value pairs inside of it
without causing an error.

We can attach a new key to our object
using dot or bracket notation.



*/
const restaurant = {
  name: 'Italian Bistro',
  seatingCapacity: 120,
  hasDineInSpecial: true,
  entrees: ['Penne alla Bolognese', 'Chicken Cacciatore', 'Linguine pesto']
}
restaurant['appetizers'] = ['Fried Calamari', 'Bruschetta'];
restaurant.desserts = ['Homemade Tiramisu', 'Cannoli'];

// --- On Codecademy ---

/*

1. add a hobbies array to your person
object using dot notation
person.hobbies = ['item one', 'item two'];

2. Write a console.log to log the
hobbies property to the console.

*/

// Example
let person = {
  name: 'Luis',
  age: 100,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['coding', 'electronics'];
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
