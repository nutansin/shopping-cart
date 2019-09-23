import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from './product';
import Header from '../header';
import {fetchProduct} from '../../../services/shelf/actions';
import '../../../style.css';

class ProductList extends Component {
    state = {
        isLoading: false
    };
    componentDidMount() {
        this.props.fetchProduct();
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { filters: nextFilters, sort: nextSort } = nextProps;
    
        if (nextFilters !== this.props.filters) {
            this.props.fetchProduct(nextFilters, undefined);
        }
        if (nextSort !== this.props.sort) {
            this.props.fetchProduct(undefined, nextSort);
        }
    }

    render() {
        const products = this.props.products;
        let totalItem = null;
        if(products && products.length) {
            totalItem = products.length;
        }
        
        return (
            <React.Fragment>
                <div className="shelf-container">
                    <Header totalItems={totalItem}/>
                    {
                        products && products.map && products.map((item) => {
                            return (
                                <Product product={item} key={item.id}/>
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    products: state.shelf.products,
    filters: state.filters.item,
    sort: state.sort.sort
});
export default connect(mapStateToProps, {fetchProduct})(ProductList);