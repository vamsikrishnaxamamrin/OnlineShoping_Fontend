import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../shared/constant';

const ButtonWrapper = styled.button`
  background-color: ${(props) =>
    props?.bgColor ? props?.bgColor : `${COLORS.black}`};
  color: ${(props) =>
    props?.textColor ? props?.textColor : `${COLORS.white}`};
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '30px')};
  :disabled {
    opacity: 0.5;
  }
  font-size: 15px;
  border-radius: 2px;
  border: none;
`;
const Button = ({ children, bgColor, textColor, height, width, disabled }) => {
  return (
    <ButtonWrapper
      bgColor={bgColor}
      textColor={textColor}
      height={height}
      width={width}
      disabled={disabled}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
