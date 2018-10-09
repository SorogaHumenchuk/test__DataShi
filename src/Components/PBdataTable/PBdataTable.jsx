import React from 'react';
import './PBdataTable.css';

const PBdataTable = (props) => {
    return (
            <tr scope="row">
                <td className='currency'>
                    {props.ccy}
                </td>
                <td className='currency'>
                    {Number(props.buy).toFixed(2)}
                </td>
                <td className='currency'>
                    {Number(props.sale).toFixed(2)}
                </td>
            </tr>
    );
};

export default PBdataTable;