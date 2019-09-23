import {applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import combineReducer from './reducers';

const initialState = {};
// const middleware = [thunk];
// const loggerMiddleware = createLogger()

const store = createStore(
    combineReducer,
    initialState,
    compose(
        applyMiddleware(thunkMiddleware)
    )
);

export default store;