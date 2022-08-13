import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-size: ${(prop) =>
    prop?.large
      ? '25px'
      : prop?.medium
      ? '20px'
      : prop?.small
      ? '18px'
      : prop?.fz
      ? prop.fz
      : '15px'};
  font-weight: ${(prop) => (prop?.bold ? 'bold' : 'lighter')};
`;

const Label = ({ children, ...prop }) => (
  <StyledLabel {...prop}>{children}</StyledLabel>
);

export default Label;
