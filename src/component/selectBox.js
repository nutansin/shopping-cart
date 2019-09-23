import React from 'react';

const SelectBox = (handleSelectBoxChange) => {
    const handleOnChange = handleSelectBoxChange.handleOnChange;

    return (
        <div className="sort">
            <span>Order by: </span>
            <select onChange={e => {handleOnChange(e.target.value)}}>
                <option value="LH">Lowest to Highest</option>
                <option value="HL">Highest to Lowest</option>
            </select>
        </div>
    )
}
export default SelectBox;