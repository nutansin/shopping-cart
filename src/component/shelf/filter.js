import React, {Component} from 'react';
import Checkbox from '../checkbox';
import {updateFilters} from '../../services/filters/actions';
import { connect } from 'react-redux';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class Filters extends Component {
    state = {
        filteredSize: []
    }
    
    toggleCheckbox = (label) => {
        let index = this.state.filteredSize.indexOf(label);

        if(this.state.filteredSize.indexOf(label) > -1) {
            this.state.filteredSize.splice(index, 1);
        } else {
            this.state.filteredSize.push(label);
        }
        this.props.updateFilters(Array.from(this.state.filteredSize));
    }
    checkbox = (label) => {
       return ( 
        <Checkbox 
            classes="filter-size"
            label={label}
            key={label}
            onChange={this.toggleCheckbox}
            handleCheckboxChange={this.toggleCheckbox}
        />)
    }
    createCheckbox = () => availableSizes.map(this.checkbox);

    componentDidMount = () => {
        this.props.updateFilters(Array.from(this.state.filteredSize));
    }
    
    render = () => {
        console.log(this.props.filters);
        return (
            <React.Fragment>
                <div className="filters">
                    <h2>Sizes:</h2>
                    {this.createCheckbox()}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
        filters: state.filters.item
});
export default connect(
    mapStateToProps, 
    {updateFilters}
)(Filters);