/*
5. RETURN

The purpose of a function is to take some input,
perform some task on that input, then return a
result.

To return a result, we can use the return keyword.

*/

const getAverage = (numberOne, numberTwo) => {
  const average = (numberOne + numberTwo) / 2;
  return average;
}

console.log(getAverage(365, 27));
// Output: 14



// --- On Codecademy ---

/*

1. create orderCount = 0 at top of program

2. inside takeOrder() increase orderCount by 1
orderCount++;

3. declare a new function named getSubTotal
that has one parameter named itemCount.

4. Inside the getSubTotal() function's block,
use return to output the itemCount
multiplied by 7.5

5. call getSubTotal() pass, orderCount, console.log
console.log(getSubTotal(orderCount));

 */

// Example

let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log(`Order: ${crustType} crust pizza topped with ${topping}`);
};

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}

takeOrder('ham', 'thin');
takeOrder('pineapple', 'regular');
takeOrder('mushrooms', 'crunchy');
console.log(getSubTotal(orderCount));
