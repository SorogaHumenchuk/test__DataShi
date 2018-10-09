import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { email, password, name, inputCleaner} from '../../redux/actions/inputAction';
import './Form.css';

const Form = (props) => {

    const {email, password, name} = props.inputs

    const submitForm = (e) => {
        e.preventDefault()

        const registrUser = {
            email: email,
            password: password,
            name: name,
        }
        if(email !== '' && password !== '' && name !== '') {
            axios.post('http://localhost:8000/registration', registrUser)
                .then(({data, status}) => status === 200 ? alert(`Hello ${data.name}`) : console.log('Error'))
                .catch(error => error)
                props.inputCleaner()
        } else {
            alert('Please, fill all the fields')
        }
    }
    return (
            <form className='form' onSubmit={submitForm}>
                <div className='form__inputs'>
                    <input onChange={props.emailHandler} value={email} className='form__input' type="email"  placeholder="Enter your email..."/>
                    <input onChange={props.passwordHandler} value={password} className='form__input' type="password" placeholder='Enter your password...'/>
                    <input onChange={props.nameHandler} value={name} className='form__input' type="text" placeholder='Enter your name...'/>
                </div>
                <div className='btn__container'>
                    <button type='submit' className='form__btn'>Log up</button>
                </div>
            </form>
    );
};

function MSTP (state) {
    return {
      inputs: state.inputs,
    };
};

function MDTP (dispatch) {
    return {
        emailHandler: function(e) {
            dispatch(email(e.target.value))
        },
        passwordHandler: function(e) {
            dispatch(password(e.target.value))
        },
        nameHandler: function(e) {
            dispatch(name(e.target.value))
        },
        inputCleaner: function() {
            dispatch(inputCleaner())
        },
    };
};

export default connect(MSTP, MDTP)(Form);