/*
5. NESTED FOR LOOPS

The big idea is that we can run a for loop i
nside another for loop to compare the items
in two arrays.

Every time the outer for loop runs once,
the inner for loop will run completely.

in the example below, n
ote that in the example above, we used i and j
as the iterator variables to make the
structure of the code easier to see, but it is
a better practice to use descriptive variable
names.

*/

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    //Code To Run
   }
 }

// --- On Codecademy ---

/*

 1. create array using myPlaces using let,
 and set equal to 3 places you'd like to visit
 let myPlaces = ['China', 'Russia', 'Nigeria'];

 2. Create friendPlaces arrays
 let friendPlaces =
 ['Russia', 'Colombia', 'Laos'];

 3.  for loop that iterates through each
 item in myPlaces and logs out each place.

 for (let myPlacesIndex = 0;
 myPlacesIndex < myPlaces.length;
 myPlacesIndex++) {
   console.log(myPlaces[myPlacesIndex]);
 }

  4. Inside that loop, create another for loop
  below the console.log() statement to iterate
  over friendPlaces arrays

  for (let friendPlacesIndex = 0;
  friendPlacesIndex < friendPlaces.length;
  friendPlacesIndex++) {
     console.log(friendPlaces[friendPlacesIndex]);
   }

   5. Not very useful this way, lets compare
   places

   - delete console.logs
   - in the 2nd for loop write an if statement
   to check when myPlaces[x] is equal to
   friendPlaces[x].
   if it is, console.log that place

   if (myPlaces[myPlacesIndex] ===
    friendPlaces[friendPlacesIndex]) {
console.log(friendPlaces[friendPlacesIndex]);

 */

// Example

let myPlaces = ['China', 'Russia', 'Nigeria'];

let friendPlaces = ['Russia', 'Colombia', 'Laos'];

for (let myPlacesIndex = 0; myPlacesIndex < myPlaces.length; myPlacesIndex++) {
  for (let friendPlacesIndex = 0; friendPlacesIndex < friendPlaces.length; friendPlacesIndex++) {
    if (myPlaces[myPlacesIndex] === friendPlaces[friendPlacesIndex]) {
console.log(friendPlaces[friendPlacesIndex]);
    }
  }
}
