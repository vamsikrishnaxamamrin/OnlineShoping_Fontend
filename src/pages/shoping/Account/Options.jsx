import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { COLORS } from '../../../shared/constant';
import { account } from '../../../shared/feature/applicationSlice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px auto;
  align-items: center;
  width: 120px;
  height: 120px;
  border: 2px solid ${COLORS.black};
`;

const Text = styled.span`
  font: 20px;
  color: ${COLORS.black};
  text-align: center;
`;

const Options = () => {
  const dispatch = useDispatch();

  const onLoginHandle = () => {
    const payload = {
      showLogin: true,
    };
    dispatch(account(payload));
  };

  const onRegisterHandle = () => {
    const payload = {
      showRegister: true,
    };
    dispatch(account(payload));
  };

  const onForgotHandle = () => {
    const payload = {
      showLogin: true,
    };
    dispatch(account(payload));
  };

  return (
    <Wrapper>
      <Container onClick={onLoginHandle}>
        <Text>Login</Text>
      </Container>
      <Container onClick={onRegisterHandle}>
        <Text>Register</Text>
      </Container>
      <Container onClick={onForgotHandle}>
        <Text>Forgot Password</Text>
      </Container>
    </Wrapper>
  );
};

export default Options;
