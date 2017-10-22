/*
7. INFINITE LOOPS

Both for loops and while loops need
explicit instructions on when to terminate.

Infinite loops are more common in
while loops because they don't have
an iterator built into their syntax.

When writing a while loop, be sure to
write the code that will guarantee
the condition will eventually be met.


*/
// This runs forever, always decreasing
for (let i = 0; i < array.length; i--) {
   //some code
}

// --- On Codecademy ---

/*

1. In the for loop, one of the three
conditions is incorrect. (infinite loop)
Change one of these three conditions to eliminate this infinite loop.

2. fix the while loop
use a array method either .pop() or
.shift() to remove an item each
iteration soe eventually the array
is < 3 items long.
 */

// Example

let thingsToDo = ['do laundry', 'take out the garbage', 'make dinner', 'walk the dog', 'go to the bank'];

for (let thingsToDoIndex = thingsToDo.length - 1; thingsToDoIndex >= 0; thingsToDoIndex--) {
  console.log('I need to ' + thingsToDo[thingsToDoIndex] + '.');
}

while (thingsToDo.length > 3) {
   console.log('I have too many things to do!');
  	thingsToDo.shift();
}
