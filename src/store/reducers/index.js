import { combineReducers } from 'redux';
import classifiedReducer from './classified';
import overallReducers from './overall';


export default combineReducers({
  classified: classifiedReducer,
  overall:overallReducers
});
