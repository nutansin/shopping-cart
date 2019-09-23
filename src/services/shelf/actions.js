import {FETCH_PRODUCT} from './actionTypes';


export const fetchProduct=(filters, sort)=> dispatch => {
  fetch('https://react-shopping-cart-67954.firebaseio.com/products.json')
  .then(res => res.json())
  .then(products=> {
        let product = products.products;

        if(filters && filters.length>0) {

            product = product.filter(
                function(e) {
                    let flag=0;
                    for(var i=0; i< e.availableSizes.length; i++) {
                        if(this.indexOf(e.availableSizes[i]) > -1){
                            flag=1;
                        }
                    }
                    if(flag) {
                        return e;
                    }
                },
                filters
            );
        }
        if(sort) {
            if(sort == 'HL') {
                product.sort(function(a, b){
                    return (b.price - a.price);
                });
            } else {
                product.sort(function(a, b){
                    return (a.price - b.price);
                });
            }
           
        }
        return dispatch({
            type: FETCH_PRODUCT,
            payload: product
        });
  })
};