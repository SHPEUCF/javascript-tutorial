/*
3. PARAMETERS

It's a way to input data into a function.

Functions can take data, process it, the do
something with it

Arguments are provided when you call a function,
and parameters receive arguments as their value.

*/

const multiplyByThirteen = (inputNumber) => {
  console.log(inputNumber * 13);
};

multiplyByThirteen(9);
// Output: 117

// --- On Codecademy ---

/*

 1. Add a parameter named topping to takeOrder

 2. use the parameter to log
 Order: pizza topped with ${topping}

 3. call takeOrder(), pass an argument
 has to be a string ''

 */

// Example

const takeOrder = (topping) => {
  console.log(`Order: pizza topped with ${topping}`);
};

takeOrder('ham');
