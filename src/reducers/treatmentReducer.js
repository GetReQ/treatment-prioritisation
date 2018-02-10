import * as types from '../actions/actionTypes';

export default function treatmentReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_TREATMENTS_SUCCESS:
      return action.treatments;

    default:
      return state;
  }
}
