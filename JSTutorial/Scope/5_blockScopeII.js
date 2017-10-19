/*
5. BLOCK SCOPE II

Just another Example

A WORD FROM THEM:
Block scope is a powerful tool in JavaScript,
since it allows us to define variables with
precision, and not pollute the global namespace.

*/
const colorOfSky = () => {
  const dusk = true;
  let color = 'blue';
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue
};

colorOfSky(); // blue
console.log(color); // undefined



// --- On Codecademy ---

/*

 1. remove console.log(lightWaves);

 2. create   let region = 'The Artic';
 below lightWaves

 3. below region create if statement
 if (region === 'The Arctic') {}

 4. define new lightWaves inside if statement
 let lightWaves = 'Northern Lights';

5. use console.log below lightWaves to log it
console.log(lightWaves);

SEE THE OUTPUT AND DIFFERENCES FOR lightWaves

 */

// Example
