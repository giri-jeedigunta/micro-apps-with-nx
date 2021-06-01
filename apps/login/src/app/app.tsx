import React from 'react';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  main {
    padding: 0 36px;
  }

  h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }
`;

export function App() {
  return (
    <StyledApp>
      <header>
        <h1>Welcome to login app!</h1>
      </header>
    </StyledApp>
  );
}

export default App;
