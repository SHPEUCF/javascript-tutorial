/*
4. METHODS

Learn about getter and setter methods.

Class method and getter syntax is the same
as it is for objects except you can not
include commas between methods.

Property names with underscores indicate these
properties should not be accessed directly.


*/


// --- On Codecademy ---

/*

 1. Prepend the name and department
    properties with an
    underscore (_).

 2. Add a propety named
    _remainingVacationDays and set it equal
    to 20.

 3. Create a getter called name that returns
    the value saved to _name.

 4. Create a getter called department that returns
    the value saved to _department.

 5. Create a getter called remainingVacationDays
    that returns the value saved to
    _remainingVacationDays.

 6. Create a method called takeVacationDays that
    accepts one argument named daysOff.

    Inside the method, subtract daysOff from the
    number saved to _remainingVacationDays.
    Set _remainingVacationDays to the result.

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

const surgeonCurry = new
Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new
Surgeon('Durant', 'Orthopedics');
