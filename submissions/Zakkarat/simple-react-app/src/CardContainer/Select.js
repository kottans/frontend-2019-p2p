import React from 'react'
import {options} from "./SelectOptions"

const Select = (props) => {
    return(
        <select name={props.id} className="select">
            {options[`${props.id}`].map(option => {
                return (<option key={option}>{option}</option>)
            })}
        </select>
    );
}

export default Select;
