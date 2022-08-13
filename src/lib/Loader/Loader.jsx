import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  width: 100%;
  height: 100%;
`;

const StyledDiv = styled.div`
  border: 5px solid rgb(211, 211, 211);
  border-top: 5px solid #000;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => (
  <Container>
    <StyledDiv />
  </Container>
);

export default Loader;
