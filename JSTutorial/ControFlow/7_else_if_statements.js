/*
7. ELSE IF STATEMENTS

What can we do if we have a question that
has multiple yes conditions, or multiple
no conditions?

We can add more conditions to our if/else
statement with else if

else if allows us to check multiple values
of a variable and output different
things based on value.

else would catch it all other options


*/

let stopLight = 'green';

if (stopLight === 'red') {
  console.log('Stop');
} else if (stopLight === 'yellow') {
  console.log('Slow down');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

// --- On Codecademy ---

/*

 1. Add else if statements
 If the moon is 'mostly full',
 log Arms and legs are getting hairier.
 If the moon is 'mostly new',
 log Back on two feet.

 If someone enters in an invalid moon phase,
 make sure to log Invalid moon phase
 in the else code block.

 2. Set moonPhase to mostly full and run your code.

 3. Set moonPhase to mostly new and run your code.

 4. Now set moonPhase to solar eclipse and
 run your code.
 */

// Example

let moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
};
