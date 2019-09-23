import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../../services/floatCart/actions';

class Product extends Component {
    
    addNewProduct = (product) => {
        this.props.addToCart(product);
    }
    
    render() {
        const {product} = this.props;
        return (
            <div className="shelf-item">
                {
                    product.isFreeShipping && (<div className="shelf-stopper">Free Shipping</div>)
                }
                <div className="shelf-item__thumb">
                    <img src="https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg" alt="Cat Tee Black T-Shirt"/>
                </div>
                <p className="shelf-item__title">{product.title}</p>
                <div className="shelf-item__price">
                    <div className="val">
                        <small>$</small><b>{product.price}</b>
                    </div>
                    <div className="installment">
                        <span>or {product.installments} x</span><b>${parseInt(product.price/product.installments)}</b>
                    </div>
                </div>
                <div className="shelf-item__buy-btn" onClick={() => this.addNewProduct(product)}>Add to cart</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    addedProduct: state.addedProduct.item
});
export default connect(mapStateToProps, {addToCart})(Product);