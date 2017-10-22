/*
4. PARAMETERS II

We can set as many parameters as we'd like
by adding them when we declare the function,
separated by commas,

*/

const getAverage = (numberOne, numberTwo) => {
  const average = (numberOne + numberTwo) / 2 ;
  console.log(average);
};

getAverage(365, 27);
// Output: 196



// --- On Codecademy ---

/*

 1. Add crustType parameter to takeOrder()

 2. interpolate the crustType parameter to log
 Order: thin crust pizza topped with bacon

 3. call takeOrder() three times and do this:
 takeOrder('ham', 'thin');
 takeOrder('pineapple', 'regular');
 takeOrder('mushrooms', 'crunchy');


 */

// Example

const takeOrder = (topping, crustType) => {
  console.log(`Order: ${crustType} crust pizza topped with ${topping}`);
};

takeOrder('ham', 'thin');
takeOrder('pineapple', 'regular');
takeOrder('mushrooms', 'crunchy');
