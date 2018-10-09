import React, { Component } from 'react';
import {connect} from 'react-redux';
import {currencyRequest} from './redux/actions/PBactions';
import {registr} from './redux/actions/inputAction'
import PBdata from './Components/PBdata/PBdata';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.currencyFetch();
    this.props.registration();
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='noise-img'></div>
        <div className='noise-sm-img'></div>
        <div className='container'>
          <PBdata/>
          <Form/>
        </div>
      </div>

    );
  }
}

function MSTP(state) {
  return {
    currency: state.currency,
  }
}
function MDTP(dispatch) {
  return {
    currencyFetch: function() {
      dispatch(currencyRequest())
    },
    registration: function() {
      dispatch(registr())
    }
  }
}

export default connect (MSTP, MDTP) (App);
