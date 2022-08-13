import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;
const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 5px 10px;
`;

const StyledUl = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 200px;
  background-color: aqua;
`;

const StyledLi = styled.li``;
const SearchBoxV2 = ({ onSearchTextChange }) => {
  const onSearchChange = ({ target }) => {
    onSearchTextChange(target?.value);
  };
  return (
    <Container>
      <StyledInput
        placeholder="Search here..."
        onChange={(e) => onSearchChange(e)}
      />
      <StyledUl>
        <StyledLi>One</StyledLi>
        <StyledLi>Two</StyledLi>
        <StyledLi>Three</StyledLi>
        <StyledLi>Four</StyledLi>
        <StyledLi>Five</StyledLi>
      </StyledUl>
    </Container>
  );
};

export default SearchBoxV2;
