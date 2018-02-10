import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const treatments = [
  {
    id: 1,
    name: 'treatment1',
    description: 'test treatment 1',
    author: 'unknown'
  },
  {
    id: 2,
    name: 'treatment2',
    description: 'test treatment 2',
    author: 'unknown'
  },
  {
    id: 3,
    name: 'treatment3',
    description: 'test treatment 3',
    author: 'unknown'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (treatment) => {
  return Math.random().toString(16).slice(2); //TODO: consider using static int id??
};

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

        if (treatment.id) {
          const existingTreatmentIndex = treatments.findIndex(a => a.id == treatment.id);
          treatments.splice(existingTreatmentIndex, 1, treatment);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          treatment.id = generateId(treatment);
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
