/*
7. INHERITANCE II



*/


// --- On Codecademy ---

/*

 1. Create parent class HospitalEmployee.
  Add a constructor with name as an argument

 2. Set the instance's _name
  to name and _remainingVacationDays to 20.

 3. Create getters for your _name and _remainingVacationDays
    properties.

    Inside the getter, return the property's value.

 4. Aadd a method called takeVacationDays.
    This method should accept one argument, called daysOff.

    Inside the method, subtract daysOff from
    _remainingVacationDays.

    Save the result to _remainingVacationDays.

 */

// Example

class HospitalEmployee{
  constructor(name) {
    this._name=name;
    this._remainingVacationDays=20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
   this._remainingVacationDays-=daysOff;
  }


}
