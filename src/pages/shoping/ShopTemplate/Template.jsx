import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { COLORS } from '../../../shared/constant/index.js';
import Loader from '../../../lib/Loader/Loader.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${COLORS.white};
`;

const Content = styled.div`
  background-color: ${COLORS.white};
  flex: auto;
`;

const Template = ({ children }) => {
  const { isFetching } = useSelector((x) => x.shop);
  return (
    <Wrapper>
      <Header />
      <Content>{isFetching ? <Loader /> : children}</Content>
      <Footer />
    </Wrapper>
  );
};

export default Template;
