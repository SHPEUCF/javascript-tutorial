/*
9. BABEL SOURCE LIB

There's one last step before we can
transpile our code.

We need to specify a
script in package.json that initiates
the ES6+ to ES5 transpilation.

Inside of the package.json file, there is a
property named "scripts" that holds an
object for specifying command line shortcuts.
You can add your own shortcuts as you please

"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}

the "build" shortcut will help us to transpile
the code without having to type all 4 word
babel src -d lib. Here's what that does anyway:

  - babel — The Babel command call responsible
  for transpiling code.

  - src — Instructs Babel to transpile all
  JavaScript code inside the src directory.

  - -d — Instructs Babel to write the
  transpiled code to a directory.

  - lib — Babel writes the transpiled code
  to a directory called lib.

*/


// --- On Codecademy ---

/*

1. in package.json add
"build": "babel src -d lib" under scripts


*/

// ANSWER

{
  "name": "learning-babel",
  "version": "1.0.0",
  "description": "Use Babel to transpile JavaScript ES6 to ES5",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d lib"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.6.1"
  }
}
