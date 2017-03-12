import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

//Here we will import and combine all the reducers we define 
export default combineReducers({
	form: formReducer
});