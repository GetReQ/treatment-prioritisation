import * as types from './actionTypes';
import treatmentApi from'../api/mockTreatmentApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

/* Action Creators */
export function loadTreatmentsSuccess(treatments) {
  return { type: types.LOAD_TREATMENTS_SUCCESS, treatments };
}

export function createTreatmentSuccess(treatment) {
  return { type: types.CREATE_TREATMENT_SUCCESS, treatment };
}

export function updateTreatmentSuccess(treatment) {
  return { type: types.UPDATE_TREATMENT_SUCCESS, treatment };
}

/* Thunks */
export function loadTreatments() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return treatmentApi.getAllTreatments().then(treatments => {
      dispatch(loadTreatmentsSuccess(treatments));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveTreatment(treatment) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return treatmentApi.saveTreatment(treatment).then(savedTreatment => {
      (treatment.id > 0) ? dispatch(updateTreatmentSuccess(savedTreatment)) : dispatch(createTreatmentSuccess(savedTreatment));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
