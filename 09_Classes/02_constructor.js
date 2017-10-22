/*
2. CONSTRUCTOR

Although you may see similarities between
class and object syntax, there is one
important method that sets them apart.
It's called the constructor method.
JavaScript calls the constructor() method
every time it creates a new instance of a class.

"this" keyword refers to an instance of that class

*/


// --- On Codecademy ---

/*

 1. Create an empty class named Surgeon

 2. Create a constructor() method that accepts
  two parameters: name and department

 3. Create name and department properties
    and set them equal to your input parameters

 */

// Example

class Surgeon
  {
    constructor(name, department)
    {
      this.name=name;
			this.department=department;
    }
 }
