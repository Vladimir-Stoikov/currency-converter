import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const NoticeText = styled.div`
  width: 400px;
  padding: 0.4rem;
  margin: 3% 50% 0;
  transform: translateX(-50%);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.7);
  font-size: 1rem;
  text-align: center;
  color: #ddd;
  z-index: 1;
  @media (max-width: 400px) {
    width: 100vw;
    margin: 3% auto 0;
    transform: translateX(0);
  }
`

export default function Notice() {

  const [data, setData] = useState('')

  axios.get('https://api.exchangerate.host/latest?rates')
    .then((response) => {
      setData(response.data.date.split('-').reverse().join('.'));
    })
    .catch((error) => {
      console.log(error);
    })
    

  return (
    <NoticeText>The last date of exchange rate update is {data}</NoticeText>
  )
}
