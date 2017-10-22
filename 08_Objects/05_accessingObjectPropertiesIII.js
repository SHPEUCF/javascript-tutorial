/*
5. ACCESSING OBJECT PROPERTIES III

One advantage that bracket notation has
over dot notation is that you can use
variables inside the brackets to select
the keys of an object.

*/

let meal = 'none';
let time = 12;
// We'll use military time for this example, counting hours 0-23.

const restaurantSpecials = {
 breakfast: 'The breakfast special is 20% off freshly squeezed orange juice',
 lunch: 'The lunch special is 10% off appetizers',
 none: 'There are no specials currently'
};

if (time < 11) { // 11 am
  meal = 'breakfast';
} else if (time < 17) { // 5 pm
  meal = 'lunch';
}

console.log(restaurantSpecials[meal]);
// prints
// The lunch special is 10% off appetizers

// --- On Codecademy ---

/*

1. Add two more keys to person object
weekendAlarm: 'No alarms needed',
weekAlarm: 'Alarm set to 7AM'

2. Create these variables at the top
let day = 'Sunday';
let alarm;

3.  write an if/else statement
If day is 'Saturday' or day is 'Sunday',
then set alarm to 'weekendAlarm'.

If day is anything else, then set
alarm to 'weekAlarm'.

4. Use bracket notation to log the value
of alarm within the person object.
Log to console

*/

// Example

let day = 'Sunday';
let alarm;

let person = {
  name: 'Luis',
  age : 100,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};

if (day === 'Saturday' || day === 'Sunday') {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
