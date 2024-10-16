import React from 'react'
import '../styles/InputContainer.css';

const InputContainer = ({inputHeading, type, placeholder}) => {
  return (
    <div className='input-container'>
        <div className='input-container-label'>{inputHeading}</div>
        <input 
            placeholder={placeholder}
            type={type}
            className='input-container-input'
        />  
    </div>
  )
}

export default InputContainer