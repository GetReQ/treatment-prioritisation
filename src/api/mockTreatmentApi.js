import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const treatments = [
  {
    id: 1,
    name: 'treatment1',
    description: 'test treatment 1',
    author: 'unknown',
    unitCost: 2,
    life: 5
  },
  {
    id: 2,
    name: 'treatment2',
    description: 'test treatment 2',
    author: 'unknown',
    unitCost: 4,
    life: 7
  },
  {
    id: 3,
    name: 'treatment3',
    description: 'test treatment 3',
    author: 'unknown',
    unitCost: 12,
    life: 11
  }
];

//This would be performed on the server in a real app. Just stubbing in.
function getMaxId() {
  return Math.max.apply(Math, treatments.map(function(o) {return o.id;})) + 1;
}

class TreatmentApi {

  static getAllTreatments() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], treatments));
      }, delay);
    });
  }

  static saveTreatment(treatment) {
	treatment = Object.assign({}, treatment); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTreatmentNameLength = 3;
        if (treatment.name.length < minTreatmentNameLength) {
          reject(`Name must be at least ${minTreatmentNameLength} characters.`);
        }

        if (isNaN(parseFloat(treatment.unitCost)) || !isFinite(treatment.unitCost) || treatment.unitCost<= 0) {
          reject('Unit cost must be a positive number');
        }

        if (treatment.life != parseInt(treatment.life) || !isFinite(treatment.life) || treatment.life <= 0) {
          reject('Life must be a positive whole number');
        }

        if (treatment.id && treatment.id > 0) {
          const existingTreatmentIndex = treatments.findIndex(a => a.id == treatment.id);
          treatments.splice(existingTreatmentIndex, 1, treatment);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          treatment.id = getMaxId();
          treatments.push(treatment);
        }
        resolve(treatment);
      }, delay);
    });
  }

  static deleteTreatment(treatmentId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfTreatmentToDelete = treatments.findIndex(treatment => {
          treatment.id == treatmentId;
        });
        treatments.splice(indexOfTreatmentToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default TreatmentApi;
