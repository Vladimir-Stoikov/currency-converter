import React from 'react'
import styled from 'styled-components'

import Input from './Input'
import DropMenu from './DropMenu'

const CurrencySection = styled.section`
width: 100%;
height: 90px;
background: #fff;
border-radius: 15px;
margin: ${({margin}) => margin ? margin : '0 0 15px 0'};
display: flex;
`

export default function Container({margin, initialState, input}) {

  return <CurrencySection margin={margin}>
    <Input input={input}/>
    <DropMenu initialState={initialState}/>
  </CurrencySection>
}
