import React, {Component} from 'react';
import Checkbox from '../checkbox';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class Filters extends Component {
    state = {
        filteredSize: []
    }
    
    toggleCheckbox = (label) => {
        console.log('change in filters',label);
        let index = this.state.filteredSize.indexOf(label);
        if(this.state.filteredSize.indexOf(label) > -1) {
            this.state.filteredSize.splice(index, 1);
        } else {
            this.state.filteredSize.push(label);
        }
        console.log(this.state.filteredSize);
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
    
    render = () => {
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
export default Filters;