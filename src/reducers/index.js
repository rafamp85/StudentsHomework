import { combineReducers } from 'redux';
import studentsReducer from './studentsReducer';

export default combineReducers({
  students: studentsReducer
});
