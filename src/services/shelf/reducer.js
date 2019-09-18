import { FETCH_PRODUCT } from './actionTypes';
console.log(FETCH_PRODUCT, 'reducer')
const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
