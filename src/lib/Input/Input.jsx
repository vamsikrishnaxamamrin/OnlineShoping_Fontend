import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../shared/constant';

const Inputwrapper = styled.div`
  display: flex;
  flex-direction: ${(porps) => (porps?.horizontal ? 'row' : 'column')};
`;

const Label = styled.label`
  font-size: 15px;
  text-align: start;
  font-weight: bold;
  margin: 0px 0px 5px 0px;
`;

const Textbox = styled.input`
  font-size: 15px;
  padding: 10px;
  border: ${(props) =>
    props.showWarning
      ? `1px solid ${COLORS.orange}`
      : `1px solid ${COLORS.black}`};
  :focus {
    outline: ${(props) =>
      props.showWarning
        ? `1px solid ${COLORS.orange}`
        : `1px solid ${COLORS.black}`};
  }
`;

const WarnText = styled.div`
  font-size: 15px;
  color: ${COLORS.orange};
  margin-top: 2px;
`;

const Input = ({ label, horizontal, validations, error }) => {
  return (
    <Inputwrapper horizontal={horizontal}>
      <Label>{label}</Label>
      <Textbox
        {...validations}
        showWarning={error?.message ? true : false}
      ></Textbox>
      <WarnText>{error?.message}</WarnText>
    </Inputwrapper>
  );
};

export default Input;
