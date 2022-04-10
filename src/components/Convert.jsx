import React, { useState } from 'react'


import Button from './Button'
import Container from './Container'
import store from '../store/store';


export default function Convert() {

  const [startCurrency, setStartCurrency] = useState('RUB');
  const [endCurrency, setEndCurrency] = useState('USD');
  const [output, setOutput] = useState(0);

  function convertCurrency() {
    console.log('Convertered');
    store.convertState(startCurrency, endCurrency);
    setOutput(store.convertedState);
  }

  return <>
    <Container current={startCurrency} changeCurrent={setStartCurrency} input={true}/>
    <Container current={endCurrency} changeCurrent={setEndCurrency} output={output}/>
    <Button text='Convert' func={convertCurrency}/>
  </>
}
