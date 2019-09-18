import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Product from './product';
import Header from '../header';
import {fetchProduct} from '../../../services/shelf/actions';
import '../../../style.css';

class ProductList extends Component {
    static propTypes = {
        fetchProduct: PropTypes.func.isRequired,
      };
    render() {
        const {products} = this.props;
        return (
            <React.Fragment>
                <div className="shelf-container">
                    <Header/>
                    {
                        // props.product.map((item) =>
                        //     <Product product={item}/>
                        // )
                        console.log(this.props)
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=> ({
    products: state.products.products
})
export default connect(mapStateToProps, {fetchProduct})(ProductList);