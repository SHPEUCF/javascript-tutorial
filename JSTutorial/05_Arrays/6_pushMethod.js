/*
6. PUSH METHOD

.push() allows us to add items
to the end of an array.

ALSO

.pop(), is similar to .push().
This method removes the last item of an array.


*/

let newYearsResolutions = ['item 0', 'item 1', 'item 2'];

newYearsResolutions.pop();

console.log(newYearsResolutions);
// Output: [ 'item 0', 'item 1' ]



// --- On Codecademy ---

/*

 1. Add 2 items to current array
newYearsResolutions.push('item1', 'item2');

2. console.log(newYearsResolutions);

3. Use the .pop() method to remove the last
element from your array.
console.log it again

newYearsResolutions.pop('Read 52 books');
  console.log(newYearsResolutions);
 */

// Example

let newYearsResolutions = ['Run a marathon', 'Learn a new language', 'Read 52 books'];

console.log(newYearsResolutions.length);

newYearsResolutions.push('item1', 'item2');

console.log(newYearsResolutions);

newYearsResolutions.pop('Read 52 books');
onsole.log(newYearsResolutions);
