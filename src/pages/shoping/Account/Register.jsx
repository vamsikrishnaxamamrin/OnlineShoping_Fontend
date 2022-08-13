import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { COLORS } from '../../../shared/constant';
import Input from '../../../lib/Input';
import Space from '../../../lib/Space';
import Button from '../../../lib/Button';
import { resetAccount } from '../../../shared/feature/applicationSlice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 240px;
  @media screen and (max-width: 480px) {
    margin: 20px 20px;
  }
  @media screen and (max-width: 768px) {
    margin: 20px 120px;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.span`
  font-size: 18px;
  font-weight: bold;
  vertical-align: middle;
`;

const IconIIoCloseSharp = styled(IoCloseSharp)`
  width: 30px;
  height: 30px;
  vertical-align: middle;
  color: ${COLORS.black};
`;

const DivStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
const Register = () => {
  const dispatch = useDispatch();

  const onCloseHandle = () => {
    dispatch(resetAccount());
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderText>CREATE AN ACCOUNT</HeaderText>
        <IconIIoCloseSharp onClick={onCloseHandle} />
      </HeaderWrapper>
      <Space h="10px" />
      <DivStyle>
        <Input label={'First name'} />
        <Space h="15px" />
        <Input label={'Last name'} />
        <Space h="15px" />
        <Input label={'Email address'} />
        <Space h="15px" />
        <Input label={'Password'} />
        <Space h="15px" />
        <Input label={'Confirm password'} />
        <Space h="15px" />
        <Button width={'100px'} height={'40px'}>
          {'Sign in'}
        </Button>
      </DivStyle>
    </Wrapper>
  );
};

export default Register;
