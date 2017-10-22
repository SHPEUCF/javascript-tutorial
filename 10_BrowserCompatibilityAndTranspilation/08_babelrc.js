/*
8. BABELRC

When using babel you need to specify which
version of JavaScript you want to transpile,
usually is from ES6 or newer, or simple ES6+
to ES5.

You tell babel that in this file .babelrc.
In your root directory,
you can run touch .babelrc to create this file.

inside the file you use:

{
  "presets": ["env"]
}

When you run Babel, it looks in .babelrc to
determine the version of the initial
JavaScript file. In this case, ["env"]
instructs Babel to transpile any code
from versions ES6 and later.

*/


// --- On Codecademy ---

/*

1. in root directory use touch to create
.babelrc file:
touch .babelrc

2. edit the file and add
{
"presets": ["env"]
}

*/

// ANSWER
{
"presets": ["env"]
}
