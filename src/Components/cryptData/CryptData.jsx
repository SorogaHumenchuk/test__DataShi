import React from 'react';
import { connect } from 'react-redux';

const CryptData = (props) => {
    return (
        <tr scope="row">
            <td className='currency'>
                {props.name}
            </td>
            <td className='currency'>
                {props.price}
            </td>
            <td className='currency'>
                {props.value / props.price}
            </td>
        </tr>
    );
};

function MSTP (state){
    return {
        value: state.value,
    }
}

export default connect (MSTP, null) (CryptData);