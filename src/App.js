import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
          <h2>Welcome to React</h2>
      </Container>
    );
  }
}

export default App;
