import {combineReducers} from 'redux';
import treatments from './treatmentReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  treatments,
  ajaxCallsInProgress
});

export default rootReducer;
