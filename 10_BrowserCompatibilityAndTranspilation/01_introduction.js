/*
1. INTRODUCTION

What's this about?

Ecma International, the organization responsible
for standardizing JavaScript, released a new
version of it in 2015, called ECMAScript2015,
commonly referred to as ES6. Note, the 6
refers to the version of JavaScript and is
not related to the year it was released
(the previous version was ES5).

Upon release, web developers quickly adopted
the new ES6 syntax, as it improved readability
and efficiency. However, ES6 was not supported
by most web browsers, so developers ran into
browser compatibility issues.

In this lesson, you will learn about two
important tools for addressing browser
compatibility issues.

- caniuse.com — A website that provides data
on web browser compatibility for HTML, CSS,
and JavaScript features. You will learn how to
use it to look up ES6 feature support.

- Babel — A Javascript library that you
can use to convert new, unsupported
JavaScript (ES6), into an older version
(ES5) that is recognized by most modern
browsers.

*/


// --- On Codecademy ---

/*
Copy paste the following code to see the
error due to unsupported syntax in the old
browser
*/

// ANSWER
var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;
