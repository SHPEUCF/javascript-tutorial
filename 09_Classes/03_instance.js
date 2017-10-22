/*
3. INSTANCE

An instance is an object that contains
the property names and methods of a class,
but with unique property values.

Use the "new" keyword to generate a new instance
 of the class.




*/


// --- On Codecademy ---

/*

 1. Create an instance of the Surgeon class.
    Set the name to 'Curry' and department to
    'Cardiovascular'.

    Save the instance to a constant variable called
    surgeonCurry.

 2. Create an instance of the Surgeon class.
    Set the name to 'Durant' and department
    to 'Orthopedics'.

    Save the instance to a constant variable called
    surgeonDurant.

 */

// Example

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

}

const surgeonCurry = new
Surgeon('Curry', 'Cardiovascular');

const surgeonDurant = new
Surgeon('Durant', 'Orthopedics');
