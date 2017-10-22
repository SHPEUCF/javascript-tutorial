/*
8. FUNCTION EXPRESSIONS

the identifier can be omitted, creating an anonymous
function.

function expressions end with a semi-colon since
they are stored in a variable.



*/

const square = function (number) {
  return number * number;
};

// --- On Codecademy ---

/*

 1. refactor previous function using arrow function
 

 */

// Example

const isGreaterThan = (numberOne, numberTwo) => {
  if (numberOne > numberTwo) {
    return true;
  } else {
    return false;
  };
};

isGreaterThan(5, 6);
