import React from 'react'

import Button from './Button'
import Container from './Container'


export default function Convert() {

  function convertCurrency() {
    console.log('Convertered');
  }

  return <>
    <Container initialState='RUB' input={true}/>
    <Container initialState='USD' />
    <Button text='Convert' func={convertCurrency}/>
  </>
}
