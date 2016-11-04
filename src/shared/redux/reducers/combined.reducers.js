import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

const reducers = {
    form: formReducer
};

//Here we will import and combine all the reducers we define 
export default combineReducers(reducers);