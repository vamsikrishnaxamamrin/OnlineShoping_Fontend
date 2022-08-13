import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
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
  @media screen and (max-width: 768px) {
    margin: 20px 120px;
  }

  @media screen and (max-width: 480px) {
    margin: 20px 20px;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm('onChange');

  console.log('isvaid', isValid);

  const onCloseHandle = () => {
    dispatch(resetAccount());
  };

  const onSigninHandle = (data) => {
    console.log('data', data);
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <HeaderText>ALREADY REGISTERED?</HeaderText>
        <IconIIoCloseSharp onClick={onCloseHandle} />
      </HeaderWrapper>
      <Space h="10px" />
      <Form onSubmit={handleSubmit(onSigninHandle)}>
        <Input
          label={'Email address'}
          validations={register('email', {
            required: {
              value: true,
              message: 'Please enter email address',
            },
            minLength: {
              value: 6,
              message: 'Please enter email address',
            },
          })}
          error={errors?.email}
        />
        <Space h="15px" />
        <Input
          label={'Password'}
          validations={register('password', {
            required: {
              value: true,
              message: 'Please enter password',
            },
            minLength: {
              value: 6,
              message: 'Minimum password length is 6',
            },
          })}
          error={errors?.password}
        />
        <Space h="15px" />

        <Button
          width={'100px'}
          height={'40px'}
          type="submit"
          disabled={!isValid}
        >
          {'Sign in'}
        </Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
