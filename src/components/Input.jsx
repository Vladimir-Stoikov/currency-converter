import React, {useState} from 'react'
import styled from 'styled-components'

const InputField = styled.input`
width: 75%;
height: 100%;
font-size: 2rem;
font-family: inherit;
color: #333;
caret-color: ${({caret}) => caret ? '#333' : 'transparent'};
border: none;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
text-align: center;
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
&[type=number] {
  -moz-appearance: textfield;
}
&:focus {
  outline: none;
}
`

export default function Input({input}) {

  const [inputField, setInputField] = useState('')

  function changeValue(e) {
    if(e.target.value.length < 15 && input) {
      setInputField(e.target.value);
    }  
  }

  return <InputField type='number' caret={input} value={inputField} onChange={changeValue}></InputField>
}
