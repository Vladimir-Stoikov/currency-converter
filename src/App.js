import React from 'react';
import styled from 'styled-components';
import Convert from './components/Convert';

import Title from './components/Title';

const MainSection = styled.main`
  margin: 220px auto 0;
  padding: 15px 15px 80px;
  width: 400px;
  background: transparent;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(11px);
`;

export default function App() {
  return (
    <MainSection>
      <Title text='Currency Converter' />
      <Convert />
    </MainSection>
  );
}
