/*
9. INHERITANCE IV

When we call extends in a class declaration,
all of the parent methods are available to
the child class.



To acess methods in child class from parent classes
we do instanceOfTheChildClass.methodNameInParentClass

*/



// --- On Codecademy ---

/*

 1. Call .takeVacationDays() with an input of 5 on your
    nurseOlynyk instance.

 2. Under the method call, log the value saved to the
    remainingVacationDays property in nurseOlynyk.

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
   this._certifications = certifications;
 }
}

const nurseOlynyk = new Nurse('Olynyk',
['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
