import * as types from './actionTypes';
import treatmentApi from'../api/mockTreatmentApi';

export function loadTreatmentsSuccess(treatments) {
  return { type: types.LOAD_TREATMENTS_SUCCESS, treatments };
}

export function loadTreatments() {
  return function(dispatch) {
    return treatmentApi.getAllTreatments().then(treatments => {
      dispatch(loadTreatmentsSuccess(treatments));
    }).catch(error => {
      throw(error);
    });
  };
}
