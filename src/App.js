import React, { Component } from 'react';
import {connect} from 'react-redux';
import {currencyRequest} from './redux/actions/PBactions';
import PBdata from './Components/PBdata/PBdata';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.currencyFetch();
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
  }
}

export default connect (MSTP, MDTP) (App);
