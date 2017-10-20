/*
5. METHOD CALLS

Use new methods to access and manipulate data from our
instance variables.

*/


// --- On Codecademy ---

/*

 1. Use console.log() to print the value saved to the name
    property of the surgeonCurry object.

 2. Call .takeVacationDays() on surgeonCurry,
    with an input of 3.

 3. After the call to .takeVacationDays(), use console.log()
    to print the value saved to the remainingVacationDays
    property of the surgeonCurry instance.
 */

// Example

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays=20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
   this._remainingVacationDays-=daysOff;
  }

}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);
