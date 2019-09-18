import {FETCH_PRODUCT} from './actionTypes';
console.log(FETCH_PRODUCT);
export const fetchProduct=()=> dispatch => {
  fetch('https://react-shopping-cart-67954.firebaseio.com/products.json')
  .then(res => res.json())
  .then(products => 
      dispatch({
          type: FETCH_PRODUCT,
          payload: products
      })
  );
};