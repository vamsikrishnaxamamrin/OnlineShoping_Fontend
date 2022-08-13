import React from 'react';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import Space from '../Space';

const Container = styled.div`
  position: relative;
`;

const SearchContainer = styled.div`
  outline: 1px solid #000;
  background-color: #e4e4e4;
  display: flex;
`;
const SearchInputContainer = styled.div`
  flex: 5 5 70%;
  display: flex;
`;
const Input = styled.input`
  font-size: 15px;
  border: 0px;
  outline: 0px;
  padding: 10px;
  width: 100%;

  @media screen and (min-width: 480px) {
    font-size: 18px;
  }
  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
`;

const SearchImageContainer = styled.div`
  flex: 1 1 10%;
  min-width: 40px;
  text-align: center;
  margin: auto;
`;

const SearchImage = styled(ImSearch)`
  text-align: center;
  margin: auto;
  height: 18px;
  width: 18px;
  @media screen and (min-width: 600px) {
    height: 20px;
    width: 20px;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  padding-top: 10px;
  background-color: #fff;
  position: absolute;
  width: 100%;
  margin-top: 1px;
  z-index: 2;
`;

const StyledLi = styled.li`
  padding: 10px 15px;
  font-size: 18px;
  opacity: 0.6;
  &:hover {
    cursor: pointer;
    opacity: 1;
    background-color: #e1e1e1;
    font-weight: bold;
  }
`;

const SearchBox = ({ onSearchTextChange }) => {
  const onSearchChange = ({ target }) => {
    onSearchTextChange(target?.value);
  };

  return (
    <Container>
      <SearchContainer>
        <SearchInputContainer style={{}}>
          <Input placeholder="Search" onChange={(e) => onSearchChange(e)} />
        </SearchInputContainer>
        <Space w="1px" colorBg="#000" />
        <SearchImageContainer>
          <SearchImage />
        </SearchImageContainer>
      </SearchContainer>

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

export default SearchBox;
