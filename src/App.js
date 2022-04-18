import React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import Convert from './components/Convert';
import Title from './components/Title';
import Notice from './components/Notice';

const MainSection = styled.main`
  position: relative;
  margin: 220px auto 0;
  padding: 15px 15px 80px;
  width: 400px;
  background: transparent;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(11px);
  z-index: 3;

  @media (max-width: 400px) {
    width: 100vw;
    margin-top: 150px;
  }
`;

const App = observer(() => {
  return (
    <>
      <MainSection>
        <Title text='Currency Converter' />
        <Convert />
      </MainSection>
      <Notice />
    </>
  );
});

export default App;
