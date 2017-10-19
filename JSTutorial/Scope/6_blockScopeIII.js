/*
6. BLOCK SCOPE III


*/

Another example using for loops

const cloudCount = () => {
  let i = 2;
  console.log(i); // 2
  for (let i = 0; i < 10; i++) {
    console.log(i); // All numbers from 0 to 9
  }
};

cloudCount();
console.log(i); // undefined


// --- On Codecademy ---

/*

1. create starCount() using const

2. let i = 5; inside function

3. console.log i

4. create following for loops
for (let i = 0; i < 12; i++) {
console.log(i);
};

5. call starCount();

6. console.log(i); at the end, notice
scope error

 */

// Example

const starCount = () => {
  let i = 5;
  console.log(i);
  for (let i = 0; i < 12; i++) {
    console.log(i);
  };
}

starCount();
console.log(i);
