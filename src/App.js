import React, { Component } from 'react';
import {connect} from 'react-redux';
import {cryptRequest} from './redux/actions/cryptologyActions';
import CryptTable from './Components/cryptTable/CryptTable';
import Input from './Components/Input/Input';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.cryptRequest();
  }

  
  render() {
    return (
      <div>
        <Input/>
        <CryptTable/>
      </div>
    )
  }
}



function MSTP(state) {
  return {
    cryptology: state.cryptology,
  }
}
function MDTP(dispatch) {
  return {
      cryptRequest: function() {
        dispatch(cryptRequest())
      }
  }
}

export default connect (MSTP, MDTP) (App);

