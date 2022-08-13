import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex1 = styled.div`
  border: 1px solid red;
  margin: 20px;
  padding: 20px;
`;
const VideoList = () => {
  return (
    <Container>
      <Flex1>Hello</Flex1>
      <Flex1>Hello</Flex1>
      <Flex1>Hello</Flex1>
      <Flex1>Hello</Flex1>
      <Flex1>Hello</Flex1>
      <Flex1>Hello</Flex1>
      <Flex1>Hello</Flex1>
      <Flex1>Hello</Flex1>
      <Flex1>Hello</Flex1>
    </Container>
  );
};

export default VideoList;
