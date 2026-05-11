import React from "react";


function SelectLimits(props) {

    return (
        <select className="form-select" onChange={(e) => props.onLimitChange(e.target.value)} >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    )
}


export default SelectLimits;