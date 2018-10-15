import React from 'react';
import {connect} from 'react-redux';
import { getValue } from '../../redux/actions/inputAction';

const Input = (props) => {

    const getInputValue = (e) => {
        const value = e.target.value
        props.getValue(value);
    }   
    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (
       <form onSubmit={onSubmit}>
           <input placeholder='Enter your money' type="text" onChange={getInputValue}/>
           <button>Click</button>
       </form>
    );
};

function MSTP (state) {
    return {
        value: state.value
    }
}
function MDTP (dispatch) {
    return {
        getValue: function(value) { 
            dispatch(getValue(value))
        }
    }
}

export default connect (MSTP, MDTP) (Input);