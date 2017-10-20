/*
6. RETURN II

functions return their value,
we can use them together and inside one another.

*/

const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');
// Output: The temperature is 59°F



// --- On Codecademy ---

/*

1. create getTax(), takes orderCount as
parameter

2. inside getTax(), getSubTotal() * 6%, return it
return getSubTotal(orderCount) * 0.06;

3. create getTotal(), no parameters,
add subtotal + tax, return it

4. call getTotal() on last line, console.log it
console.log(getTotal());

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

const getTax = (orderCount) => {
	return getSubTotal(orderCount) * 0.06;
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
};

takeOrder('ham', 'thin');
takeOrder('pineapple', 'regular');
takeOrder('mushrooms', 'crunchy');
console.log(getSubTotal(orderCount));
console.log(getTotal());
