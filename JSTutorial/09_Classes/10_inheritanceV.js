/*
10. INHERITANCE V

child classes can contain their own properties,
getters, setters, and methods

The benefits (time saved, readability, efficiency)
of inheritance grow as the number and size of your
subclasses increase.

One benefit is that when you need to change a
method or property that multiple classes share, you
can change the parent class, instead of each subclass.


*/


// --- On Codecademy ---

/*

 1. Under the Nurse constructor(), add a getter that
    returns the value saved to the Nurse
    instance's _certifications.

 2. Add a method called addCertification under the
    certifications getter.

    The method accepts 1 input, newCertification.

    Add newCeritification to the nurse's certifications
    array by using the push method.

 3. Call the .addCertification() method on nurseOlynyk
    with a parameter of 'Genetics'.

 4. Log the value saved to the certifications property
  of nurseOlynyk.

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

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);

  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
