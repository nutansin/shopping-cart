import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../services/floatCart/actions';

let productToCart = [];
const obj = {};

class FloatCart extends Component {


    UNSAFE_componentWillReceiveProps(nextProps) {
        const {addedProduct} = nextProps;
   
        if(!obj[addedProduct.id]) {
            obj[addedProduct.id] = 1;
            obj['product'] = addedProduct;
            productToCart.push(addedProduct);
        } else {
            obj[addedProduct.id] += 1;
        }
        this.mapQuantityWithProduct(addedProduct);
        
    }

    mapQuantityWithProduct = (addedProduct) => {
        productToCart = productToCart.map(function(item){
            if(item.id === addedProduct.id && item.quantity) {
                item['quantity'] += 1
            } else if(item.id === addedProduct.id && !item.quantity){
                item['quantity'] = 1;
            }
            return item;
        });
    }
    render() {
        return (
            <div className="float-cart float-cart--open">
                <div className="float-cart__close-btn">X</div>
                <div className="float-cart__content">
                    <div className="float-cart__shelf-container">
                       {
                           productToCart && productToCart.map((item) => {
                                return (
                                    <div className="shelf-item" key={item.id}>
                                        <div className="shelf-item__del">X</div>
                                        <div className="shelf-item__thumb">
                                            <img src="https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg" alt={item.title}/>
                                        </div>
                                        <div className="shelf-item__details">
                                            <p className="title">{item.title}</p>
                                            <p className="desc">{item.availableSizes[0]} | {item.style} <b>Quantity: {item.quantity}</b></p>
                                        </div>
                                        <div className="shelf-item__price">
                                            <p>$  {item.price}</p>
                                        </div>
                                    </div>
                                )
                           })
                       }
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    addedProduct: state.addedProduct.item
});
export default connect(mapStateToProps, {addToCart})(FloatCart);