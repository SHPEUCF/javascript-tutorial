/*
7. INSTALL NODE PACKAGES

We use the npm install command to install
new Node packages locally. The install
command creates a folder called node_modules
and copies the package files to it.
The install command also installs all
of the dependencies for the given package.

To install Babel, we need to npm install two
packages, babel-cli and babel-preset-env.
However, npm installs over one hundred other
packages that are dependencies for Babel to run
properly.

We install Babel with the following
two commands:

$ npm install babel-cli -D
$ npm install babel-preset-env -D

-D flags means this packages are only
development dependencies and are store in
package.json under devDependencies for other
developers to use. This makes it easier to
install packages for other developers getting
started on the proeject



*/


// --- On Codecademy ---

/*

1. enter ls in terminal to view current
file structure

2. use npm with -D flag to install Babel command
line package: babel-cli

3. use npm with -D flag to install
babel-preset-env

*/

// ANSWER

ls
npm install babel-cli -D
npm install babel-preset-env -D
