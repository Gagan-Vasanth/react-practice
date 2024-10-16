import React from 'react'
import '../styles/SignupWrapper.css';
import InputContainer from './InputContainer';

const SignupWrapper = ({ heading, type}) => {
  return (
    <div className='signup-wrapper'>
        <div className='signup-left'>
            <h1 className='signup-heading'>{heading}</h1>
            {type === 'Signup' && <InputContainer inputHeading={'Name'} type={'text'} placeholder={'Enter your name'}/>}
            <InputContainer inputHeading={type === 'Signup' ? 'Email address' : 'Email'} type={'text'} placeholder={'Enter your email'}/>
            <InputContainer inputHeading={'Password'} type={'password'} placeholder={'Enter 8-10 characters password'}/>
            {type === 'Signup' && <InputContainer inputHeading={'Confirm Password'} type={'password'} placeholder={'Re-enter your password'}/>}
            <div className='signup-button'>{type}</div>
        </div>
        <div className='signup-right'>
        </div>
    </div>
  )
}

export default SignupWrapper