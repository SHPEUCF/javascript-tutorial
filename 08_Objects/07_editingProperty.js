/*
1. EDITING A PROPERTY

In the same way that we added a property
to an object, we can modify a key's value.

*/


// --- On Codecademy ---

/*

1. Using dot notation, edit the value
of your hobbies key to be an array with
only one item.
person.hobbies = ['paintballing'];


*/

// Example

let person = {
  name: 'Luis',
  age: 100,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

person.hobbies = ['coding', 'electronics'];
person.hobbies = ['paintballing'];
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
