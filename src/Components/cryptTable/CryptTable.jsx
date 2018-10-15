import React from 'react';
import {connect} from 'react-redux';
import CryptData from '../cryptData/CryptData';

const CryptTable = (props) => {
    return (
        <table className='table'>            
            <thead>
                <tr className='table__thead'>
                    <th>Cryptology</th>
                    <th>Price</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>{
                 props.cryptology.map(el =>
                    <CryptData
                        name={el.name}
                        price={el.quotes.USD.price}
                        key={el.name}
                    />
                 )}
            </tbody>
        </table>
    );
};

function MSTP (state){
    return {
        cryptology: state.cryptology,
    }
}
export default connect(MSTP, null)(CryptTable);