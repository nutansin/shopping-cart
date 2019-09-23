import { FETCH_PRODUCT } from './actionTypes';
const initialState = {
  products: []
};

function shelfReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, products: action.payload};
    default:
      return state;
  }
}

export default shelfReducer;