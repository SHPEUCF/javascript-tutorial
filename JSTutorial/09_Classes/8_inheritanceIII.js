/*
8. INHERITANCE III

The extends keyword makes the methods of the parent class
available inside the class

The super keyword calls the constructor of the parent class.

We call super on the first line of our constructor before
the use of this keyword- if you do not, it will throw a
reference error


*/

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

// --- On Codecademy ---

/*

 1. Under HospitalEmployee, create an empty class named
  Nurse that extends HospitalEmployee.

 2. Inside the Nurse class, create a constructor() that
  accepts two arguments. (name, ceritifications)

 3. In the Nurse constructor, call the parent's
    constructor method and pass the appropiate value(s).

 4. Inside of the Nurse constructor, and under super,
    set _certifications.

 5. Under the Nurse class, create a new instance of Nurse
  and save it to a constant variable named nurseOlynyk.
  Pass in the following values for each property:

    name: 'Olynyk'
    certifications: ['Trauma', 'Pediatrics']

 */

// Example

class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications=certifications;

  }
}

const nurseOlynyk= new Nurse('Olynyk',
['Trauma', 'Pediatrics']);
