import React, {Component} from 'react';

class Checkbox extends Component {
    state = {
        isChecked: false
    }
    toggleCheckbox=()=> {
        const {handleCheckboxChange, label} = this.props;
        // console.log(this.props);
        this.setState((state) => ({
            isChecked: !state.isChecked
        }));
        handleCheckboxChange(label);
    }
    render() {
        return (
            <React.Fragment>
                <label>
                    <input type="checkbox"
                        value={this.props.label} 
                        checked={this.state.isChecked} 
                        onChange={this.toggleCheckbox}
                        />
                    <span className="checkmark">{this.props.label}</span>
                </label>
            </React.Fragment>
        )
    }
}
export default Checkbox;