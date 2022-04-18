import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import store from '../store/store'

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
box-shadow: 0 0 15px rgba(0,0,0,0.2);
z-index: 3;
overflow-y: auto;
overflow-x: hidden;
height: 170px;
width: 106px;
outline: none;
li {
  border-top: 2px solid #888;
  color: #333;
  width: 106px;
  font-size: 1.25rem;
  list-style: none;
  text-align: center;
  background: #efefef;
  padding: 15px;
  user-select: none;
  &:hover {
  background: #dedede;
  }
  &:active {
  background: #cdcdcd;
  }
}
 @media (max-width: 400px) {
   width: 100%;
   text-align: center;
  }
 @media (max-width: 340px) {
  li {
     text-align: start;
   }
  }
`

export default function DropMenu({current, changeCurrent}) {

  const [active, setActive] = useState(false);
  const currencyArray = ['RUB', 'USD', 'EUR', 'BTC', 'GBP', 'BYN', 'UAH', 'ILS', 'KZT'];
  
  useEffect(() => {
    function closeMenu(e) {
      if(active === true && e.target.id !== 'currencyButton') {
        setActive(false)
        store.switchMenuFlag(false);
      };
    }
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [active]);

  function menuAction() { 
  if((store.menuFlag === true && active === true) || (store.menuFlag === false && active === false)) {
    store.switchMenuFlag();
    setActive(prev => !prev);
    
  }
  }
  function chooseCurrency(e) { 
  changeCurrent(e.target.textContent);
  menuAction();
  }

  return (
    <Menu>
      <button onClick={menuAction} id='currencyButton'>{current}</button>
      <MenuSection className={active ? 'active' : 'deactive'}>
       {currencyArray.map((el, id) => el !== current ? (<li key={id} onClick={chooseCurrency}>{el}</li>) : null)}
      </MenuSection>
    </Menu>
  )
}
