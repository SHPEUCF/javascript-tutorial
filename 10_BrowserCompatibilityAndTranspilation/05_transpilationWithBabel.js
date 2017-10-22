/*
5. TRANSPILATION WITH BABEL

Transpilation is the process of converting
one programming language to another.

Because ES6 is predictably backwards compatible,
a collection of JavaScript programmers
developed a JavaScript library called
Babel that transpiles ES6 JavaScript to ES5.

*/


// --- On Codecademy ---

/*

1. on the terminal window type:
npm install babel-cli

2. on ther terminal type:
npm install babel-preset-env

3. on the terminal type:
npm run build

that just used the tools install and
created a file with new ES5 code

the file is in /lib/main.js
(might need to refresh)

*/

// ANSWER

"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", and a sauce made with " + sauce + ".";
