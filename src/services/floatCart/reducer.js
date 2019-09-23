import {ADD_TO_CART} from './actionTypes';

const initialState = {
    item: []
};

function addToCart (state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: 
            return {
                item: Object.assign({}, action.payload)
            }
        default:
            return state
    }
}
export default addToCart;