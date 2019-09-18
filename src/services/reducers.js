import {combineReducers} from 'redux';
import shelfReducer from './shelf/reducer';

export default combineReducers({
    products: shelfReducer
});