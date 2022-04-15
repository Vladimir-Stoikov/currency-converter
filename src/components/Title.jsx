import React from 'react'
import styled from 'styled-components'

const TextHeader = styled.h1`
  margin: ${({margin}) => margin ? margin : '0 0 7% 50%'};
  text-align: center;
  transform: translateX(-50%);
  padding: 0 0 8px 0;
  width: 400px;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 2px;
  box-shadow: 0 25px 19px -19px rgba(0,0,0,0.9);
  text-shadow: 0 0 12px black;
  @media (max-width: 370px) {
    font-size: 1.5rem;
    width: 300px;
    box-shadow: 0 18px 15px -15px rgba(0,0,0,0.9);
  }
  @media (max-width: 290px) {
    font-size: 1.2rem;
    width: 250px;
    box-shadow: 0 15px 12px -12px rgba(0,0,0,0.9);
  }
`

export default function Title({text, margin}) {
  return <TextHeader margin={margin}>{text}</TextHeader>
}
