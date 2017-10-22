/*
8. LOGICAL OPERATORS

In English, sometimes we say "both of these things"
or "either one of these things."

In JavaScript we do this
with special operators called logical operators.

    To say "both must be true," we use &&
    To say "either can be true," we use ||

these logical operators will return
either true or false.

*/

if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}

// --- On Codecademy ---

/*

1. create
let isFoggyNight = true;

2. set moonPhase to 'full' again

In the first condition of the if/else statement,
check that moonPhase === 'full' and
isFoggyNight is true, using &&.

3. Now, change the isFoggyNight variable
to equal false and run it again.

4. Replace the && that you wrote in the
previous steps with ||. See the difference?

 */

// Example

let moonPhase = 'full';
let isFoggyNight = false;

if (moonPhase === 'full' || isFoggyNight) {
  console.log('Howl!');
} else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
};
