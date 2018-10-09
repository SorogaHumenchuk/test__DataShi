import React from 'react';
import {connect} from 'react-redux';
import PBdataTable from '../PBdataTable/PBdataTable';
import './PBdata.css';

const PBdata = (props) => {
    return (
        <table className='table'>            
            <thead>
                <tr className='table__thead'>
                    <th className='currency'>Валюта</th>
                    <th className='currency'>Покупка</th>
                    <th className='currency'>Продажа</th>
                </tr>
            </thead>
            <tbody>{
                    props.currency.map(el => 
                    <PBdataTable
                        ccy={el.ccy}
                        buy={el.buy}
                        sale={el.sale}
                        key={el.ccy}
                    />
                    )
                }
            </tbody>
        </table>
    );
};


function MSTP (state){
    return {
        currency: state.currency,
    }
}
export default connect(MSTP, null)(PBdata);