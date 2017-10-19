/*
3. GLOBAL SCOPE II

While it's important to know what global scope is,
it's better to avoid defining variables in the
global scope. Globally scoped variables can collide
with variables that are more locally scoped,
causing unexpected behavior in our code.

*/


// --- On Codecademy ---

/*

 1. change stars = 'Sirius'; on first line of
  myNightSky

 2. console.log(stars);

 Lesson: it changes global value,
 maybe unintentionally


 */

// Example

const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
}

console.log(myNightSky());
console.log(stars);
