import { createStore, applyMiddleware } from 'redux';
import rootReducer  from '../reducers';
import initialState from '../reducers/initialState';
import {composeWithDevTools} from 'redux-devtools-extension';

function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}

export default configureStore;