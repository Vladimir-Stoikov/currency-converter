import React from 'react'
import styled from 'styled-components'

const ConvertButton = styled.button`
  padding: 15px 0;
  font-family: inherit;
  font-size: 1.7rem;
  color: #eee;
  border: none;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  box-shadow: 0 -25px 22px -22px rgba(0, 0, 0, 0.9);
  &:hover {
    background-color: rgba(256, 256, 256, 0.1);
  }
  &:active {
    background-color: rgba(256, 256, 256, 0.15);
  }
`;

export default function Button({text, func}) {
  return (
    <ConvertButton onClick={func}>{text}</ConvertButton>
  )
}
