import React, {Component} from 'react';
import SelectBox from '../selectBox';

class Header extends Component {
    updateSort = (value) => {
        console.log(value);
    }
    
    render = () => {
        return (
            <React.Fragment>
                <div>{this.props.totalProducts}</div>
                <SelectBox handleOnChange={(value)=>{this.updateSort(value)}}/>
            </React.Fragment>
        )
    }
}
export default Header;