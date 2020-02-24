import React from 'react';
import styled from 'styled-components'
import './App.css'
import Products from './components/Profiles/Profiles';



const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;



const App = () => {
  return (
    <Container>
      <Products />
    </Container>
  );
}

export default App;
