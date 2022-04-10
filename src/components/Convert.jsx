import React, { useState, useEffect } from 'react'
import axios from 'axios';


import Button from './Button'
import Container from './Container'
import store from '../store/store';


export default function Convert() {
  const [startCurrency, setStartCurrency] = useState('RUB');
  const [endCurrency, setEndCurrency] = useState('USD');
  const [output, setOutput] = useState(0);

  function convertCurrency() {
    console.log('Convertered');
     axios.get('https://api.exchangerate.host/latest/')
    .then((response) => {
       store.convertState(response.data.rates[startCurrency], response.data.rates[endCurrency]);
       setOutput(store.convertedState);
    })
    .catch((error) => {
      console.log(error);
    })
    

  }

  return <>
    <Container current={startCurrency} changeCurrent={setStartCurrency} input={true}/>
    <Container current={endCurrency} changeCurrent={setEndCurrency} output={output}/>
    <Button text='Convert' func={convertCurrency}/>
  </>
}
