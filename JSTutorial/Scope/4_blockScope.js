/*
4. BLOCK SCOPTE

 Block scope means that a variable defined
 in the block is only accessible within the curly
 braces.

*/

const colorOfSky = () => {
  let color = 'blue';
  console.log(color); // blue
};

colorOfSky(); // blue
console.log(color); // undefined


// --- On Codecademy ---

/*

1. define visibleLightWaves();
const visibleLightWaves = () => {};

2. inside do
 let lightWaves = 'Moonlight';

3. log it right below it
console.log(lightWaves);

4. Call the function
visibleLightWaves();

5. console.log(lightWaves);
notice error, calling outsite of scope

 */

// Example

const visibleLightWaves = () => {
  let lightWaves = 'Moonlight';
  console.log(lightWaves);
};
visibleLightWaves();
console.log(lightWaves);
