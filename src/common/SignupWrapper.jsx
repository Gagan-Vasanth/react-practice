import React, { useState } from 'react'
import '../styles/SignupWrapper.css';
import InputContainer from './InputContainer';
import { useNavigate } from 'react-router-dom';

const SignupWrapper = ({ heading, type}) => {
  const [name, setName] = useState({
    value: '',
    touched: false,
    error: '',
  });
  const [email, setEmail] = useState({
    value: '',
    touched: false,
    error: '',
  });
  const [password, setPassword] = useState({
    value: '',
    touched: false,
    error: '',
  });
  const [confirmPassword, setConfirmPassword] = useState({
    value: '',
    touched: false,
    error: '',
  });
  const navigate = useNavigate()

  const callSignup = () => {
    console.log(name, email, password, confirmPassword)
    if(name.value.length <= 3) {
        setName({
            ...name,
            error: 'Please enter more than 3 characters',
        })
    } else {
        setName({
            ...name,
            error: ''
        })
    } 

    if(!email.value.includes('@') || !email.value.includes('.com')) {
        setEmail({
            ...email,
            error: 'Please enter a valid email'
        })
    } else {
        setEmail({
            ...email,
            error: ''
        })
    }

    if(password.value.length < 8) {
        setPassword({
            ...password,
            error: "Please enter atleast 8 characters"
        })
    } else if (password.value.length > 10) {
        setPassword({
            ...password,
            error: "Please enter less than 10 characters"
        })
    } else {
        setPassword({
            ...password,
            error: ""
        })
    }

    if(password.value !== confirmPassword.value) {
        setConfirmPassword({
            ...confirmPassword,
            error: "Please enter the same password"
        })
    } else  {
        setConfirmPassword({
            ...confirmPassword,
            error: ""
        })
    }
    
    if(name.error === '' && email.error === '' && password.error === '' && confirmPassword.error === '') {
        return navigate('/login')
    }

  }

  const callLogin = () => {
    let isError = false;
    if(!email.value.includes('@') || !email.value.includes('.com')) {
        isError = true;
        setEmail({
            ...email,
            error: 'Please enter a valid email'
        })
    } else {
        setEmail({
            ...email,
            error: ''
        })
    }

    if(password.value.length < 8) {
        isError = true;
        console.log('it is coming there');
        setPassword({
            ...password,
            error: "Please enter atleast 8 characters"
        })
    } else if (password.value.length > 10) {
        isError = true;
        setPassword({
            ...password,
            error: "Please enter less than 10 characters"
        })
    } else {
        setPassword({
            ...password,
            error: ""
        })
    }

    if(!isError && email.error === '' && password.error === '') {
        return navigate('/home')
    }
  }
 
  const onSubmit = () => {
    console.log('Submit button clicked')
    if(type === 'Signup') {
        return callSignup();
    } else {
        return callLogin();
    }
  }
  return (
    <div className='signup-wrapper'>
        <div className='signup-left'>
            <h1 className='signup-heading'>{heading}</h1>
            {type === 'Signup' && <InputContainer inputHeading={'Name'} type={'text'} placeholder={'Enter your name'} data={name} error={name.error} onChangeOfValue={setName}/>}
            <InputContainer inputHeading={type === 'Signup' ? 'Email address' : 'Email'} type={'text'} placeholder={'Enter your email'} data={email} error={email.error} onChangeOfValue={setEmail}/>
            <InputContainer inputHeading={'Password'} type={'password'} placeholder={'Enter 8-10 characters password'} data={password} error={password.error} onChangeOfValue={setPassword}/>
            {type === 'Signup' && <InputContainer inputHeading={'Confirm Password'} type={'password'} placeholder={'Re-enter your password'} data={confirmPassword} error={confirmPassword.error} onChangeOfValue={setConfirmPassword}/>}
            <div className='signup-button' onClick={() => onSubmit()}>{type}</div>
        </div>
        <div className='signup-right'>
        </div>
    </div>
  )
}

export default SignupWrapper