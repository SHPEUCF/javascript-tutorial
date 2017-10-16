// The Very Basics
/* Can print to console by using
console.log(); */



// Single-line comments start with two slashes,
/* and multiline comments start with slash-star
   and end with star-slash */

// output will be shown with // =
console.log(1+1)  // = 2

// Statements can be terminated by ;
//doStuff();

// ... but they don't have to be, as semicolons are automatically inserted
// wherever there's a newline, except in certain cases.
//doStuff()

// Because those cases can cause unexpected results,
// we'll keep on using semicolons



// NUMBERS
3; // = 3
1.5; // = 1.5

// All the basic arithmetic works as you'd expect.
1 + 1; // = 2
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7
4 % 3 // = 1  //Modulus or remainder

// Including uneven division.
console.log(5 / 2); // = 2.5


// Standard order of operations with parentheses first.
(1 + 3) * 2; // = 8

// Use the Math object¹ for more advanced math:
Math.pow(2, 5);  // = 32
Math.sin(Math.PI / 2); // = 1

// There are three special not-a-real-number values:
Infinity; // result of e.g. 1/0
-Infinity; // result of e.g. -1/0
NaN; // result of e.g. 0/0

// Challenge

 2 + 3 / (1 + 1) // What does this return?

 // EQUALITY AND COMPARISON

 // boolean type.
true  // = true
false // = false

// Negation uses the ! symbol
!true; // = false
!false; // = true

// Comparisons
1 < 10; // = true
1 > 10; // = false
2 <=5  2; // = true
2 >= 2; // = true

// Equality (recommended form)
1 === 1; // = true
2 === 1; // = false

// Inequality (recommended)
1 !== 1; // = false
2 !== 1; // = true

// With just two characters, == and != will do automatic type coercion:
"5" == 5; // = true
6 != "6" // = false
false == 0; // = true

// Which can lead to some unexpected results, so its use is discouraged:
'' == '0';  // = false
0 == '';   // = true  //??

// null and undefined
null; // used to indicate a deliberate non-value
undefined; // used to indicate a value is not currently present

// false, null, undefined, NaN, 0 and "" are falsy; everything else is truthy.
// Note that 0 is falsy and "0" is truthy, even though 0 == "0".
!null // = true
!undefined // = true
!"0" // = false
!5 // = false

//Logical Operators: && (And), || (Or)
3>2 && 2>1; // true
2>3 && 2>1; // false
2>3 || 2>1; // true


// Challenge
3 > 2 && 5 != "5"

// Varibles

var myName = 'Luis';

let myAddress = 5353;

const myAddress = 17700;

myAddress = 353;


// Arrays

let myArray = ['Luis', 'Benavides', '727-353'];

let person = {'myname': 'Luis', 'lastName': 'Ben'}

person.myname
