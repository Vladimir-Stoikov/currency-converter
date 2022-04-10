import React, { useState } from 'react'
import styled from 'styled-components'

const Menu = styled.nav`
position: relative;
width: 30%;
button {
height: 100%;
width: 100%;
background: radial-gradient(#fff 0%, #fefefe 50%, #eee 100%);
font-size: 1.5rem;
font-family: inherit;
border: none;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
}
button:hover {
  background: radial-gradient(#fff 0%, #fefefe 30%, #ddd 100%);
}
button:active {
  background: radial-gradient(#eee 0%, #ccc 100%);
}

ul.deactive {
  display: none;
}
`

const MenuSection = styled.ul`
position: absolute;
top: 85%;
z-index: 3;
li {
  border-top: 2px solid #888;
  color: #333;
  width: 106px;
  font-size: 1.25rem;
  list-style: none;
  text-align: center;
  background: #efefef;
  padding: 15px;
  &:hover {
  background: #dedede;
  }
  &:active {
  background: #cdcdcd;
  }
}
`

export default function DropMenu({current, changeCurrent}) {

  const [active, setActive] = useState(false);
  const [currencyArray, setCurrencyArray] = useState(['RUB','USD','EUR','BTC']);

  function menuAction() { 
  setActive(prev => !prev);
  }
  function chooseCurrency(e) { 
  changeCurrent(e.target.textContent);
  menuAction();
  }

  return (
    <Menu>
      <button onClick={menuAction}>{current}</button>
      <MenuSection className={active ? 'active' : 'deactive'}>
       {currencyArray.map((el, id) => el !== current ? (<li key={id} onClick={chooseCurrency}>{el}</li>) : null)}
      </MenuSection>
    </Menu>
  )
}
