import {ADD_TO_CART} from './actionTypes';

export const addToCart = (addedProduct) => ({
    type: ADD_TO_CART,
    payload: addedProduct
});