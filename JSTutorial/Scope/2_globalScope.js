/*
2. GLOBAL SCOPE

Variables defined in the global scope are
declared outside of a set of curly braces {}



*/

const color = 'blue'

const colorOfSky = () => {
  return color; // blue
};

console.log(colorOfSky()); // blue



// --- On Codecademy ---

/*

 1. create const satellite = 'The Moon'; and
 const galaxy = 'The Milky Way';

 2. let stars = 'North Star';

 3. create function myNightSky
 inside of it return
'Night Sky: ' + satellite + ', ' + stars + ', ' +
 galaxy;

 4. console.log(myNightSky());
 notice it accesses global variable w/no problem


 */

// Example

const satellite = 'The Moon';
const galaxy = 'The Milky Way';

let stars = 'North Star';

const myNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
}

console.log(myNightSky());
