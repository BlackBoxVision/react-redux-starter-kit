import createStore from 'redux/lib/createStore';
import applyMiddleware from 'redux/lib/applyMiddleware';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/combined.reducers';

//TODO JS: Add dev dependencies
export default function configureStore(initialState = {}) {
    const enhancer = applyMiddleware(thunk);

    return createStore(rootReducer, initialState, enhancer);
}