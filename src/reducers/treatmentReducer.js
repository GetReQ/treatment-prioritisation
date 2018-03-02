import * as types from '../actions/actionTypes';

export default function treatmentReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_TREATMENTS_SUCCESS:
      return action.treatments;

    case types.CREATE_TREATMENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.treatment)
      ];

    case types.UPDATE_TREATMENT_SUCCESS:
      return [
        ...state.filter(treatment => treatment.id !== action.treatment.id),
        Object.assign({}, action.treatment)
      ];

    default:
      return state;
  }
}
