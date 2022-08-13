import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ShopTemplate from '../ShopTemplate';
import Options from './Options.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';

const Wrapper = styled.div`
  margin: 20px 0px;
`;
const TitleStyle = styled.span`
  display: flex;
  font-size: 30px;
  font-weight: bold;
  justify-content: center;
`;

const Account = () => {
  const { showLogin = false, showRegister = false } =
    useSelector((x) => x.appData?.account) || {};
  return (
    <ShopTemplate>
      <Wrapper>
        <TitleStyle>ACCOUNT</TitleStyle>
        {showLogin || showRegister ? null : <Options />}
        {showLogin && <Login />}
        {showRegister && <Register />}
      </Wrapper>
    </ShopTemplate>
  );
};

export default Account;
