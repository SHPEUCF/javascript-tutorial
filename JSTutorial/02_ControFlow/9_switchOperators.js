/*
9. SWITCH STATEMENTS

else if is limited, however.
If we want to write a program with 25 different
conditions, like a JavaScript cash register,
we'd have to write a lot of code,
and it can be difficult to read and understand.

To deal with times when you need many else if
conditions, we can turn to a switch statement
to write more concise and readable code.

switch statements look like this:
*/

let groceryItem = 'papaya';

switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');

/*
BREAK
The program stops with the break keyword.
This keyword will prevent the switch statement
from executing any more of its code.
Without adding break at the end of each case,
the program will execute the code for all matching
cases and the default code as well.
This behavior is different from if/else conditional
statements which execute only one block of code.

DEFAULT
At the end of each switch statement,
there is a default condition.
If none of the cases are true, then this code
will run.

 */


// --- On Codecademy ---

/*

1. Delete isFoggyNight variable
- convert program to switch statement
- moonPhase is the condition of the switch
- each moon phase is a case
- so write the switch statement with moonPhase
as its condition

2. Then, write each else if condition as a case.

If moonPhase is 'full', use console.log()
to print Howl!.

If moonPhase is 'mostly full', use console.log()
to print Arms and legs are getting hairier.

If moonPhase is 'mostly new', use console.log()
to print Back on two feet.

Remember to add a break after each console.log()
like in the example in the instructions.

 3. Add a default at the end of the switch that
  uses console.log() to print Invalid moon phase

  Don't forget to break at the end

 */

// Example

let moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
  }
