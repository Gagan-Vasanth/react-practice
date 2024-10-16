import React from 'react'
import '../styles/InputContainer.css';

const InputContainer = ({inputHeading, type, placeholder, error, data, onChangeOfValue}) => {
  return (
    <div className='input-container'>
        <div className='input-container-label'>{inputHeading}</div>
        <input 
            placeholder={placeholder}
            type={type}
            className='input-container-input'
            value={data.value}
            onChange={(e) => onChangeOfValue({
                ...data,
                value: e.target.value,
                touched: true
            })}
        />
        {error && <div className='input-error'>{error}</div>}  
    </div>
  )
}

export default InputContainer