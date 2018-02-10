import {combineReducers} from 'redux';
import treatments from './treatmentReducer';

const rootReducer = combineReducers({
  treatments
});

export default rootReducer;
