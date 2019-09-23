import {combineReducers} from 'redux';
import shelfReducer from './shelf/reducer';
import updateFilters from './filters/reducer';
import updateSort from './sort/reducer';
import addToCart from './floatCart/reducer'

export default combineReducers({
    shelf: shelfReducer,
    filters: updateFilters,
    sort: updateSort,
    addedProduct: addToCart
});