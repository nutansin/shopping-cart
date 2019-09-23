import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSort} from '../../services/sort/actions'
import SelectBox from '../selectBox';

class Header extends Component {
    updateSort = (value) => {
        this.props.updateSort(value);
    }
    
    render = () => {
        return (
            <React.Fragment>
                <div className="shelf-container-header">
                <div className="products-found">{this.props.totalItems} Product(s) found.</div>
                <SelectBox  handleOnChange={(value)=>{this.updateSort(value)}}/>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps=(state)=>({
    sort: state.sort.sort
});
export default connect(mapStateToProps, {updateSort})(Header);