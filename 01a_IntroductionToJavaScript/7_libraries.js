/*
7. Libraries

Libraries contain methods that you can call without
creating an instance.

Like the Math library:

Math.random();
random number between 0 and 1

Math.random() * 50;
a random number between 0 and 50

Math.floor(Math.random() * 50);
Math.floor() takes a decimal number, and rounds down
to the nearest whole number.

*/

// --- On Codecademy ---

/*
console.log()

 1. Create a random number with Math.random,
 then multiply it by 100

 2. Utilize Math.floor to make the output
 a whole number.

 3. Use Math.ceil() to return the smallest integer
 greater than or equal to a decimal number.
 use 43.8

*/

 // Example
 console.log(Math.random() * 100);
 console.log(Math.floor(Math.random() * 100));
 console.log(Math.ceil(43.8));
