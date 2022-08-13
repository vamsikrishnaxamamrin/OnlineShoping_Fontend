import React from 'react';
import styled from 'styled-components';
import { MdDehaze } from 'react-icons/md';
import Label from '../../../../lib/Label';

const Wrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0px;
  margin: 0px;
  background-color: #e1e1e1;
  padding-right: 50px;
  height: 80px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40%;
  left: 0;
  width: 35%;
  height: 80px;
  transform: skew(20deg);
  background: #000;
  margin-left: -25px;
`;

const StyledLabel = styled(Label)`
  transform: skew(340deg);
  color: #fff;
  font-size: 40px;
  letter-spacing: 10px;
  font-weight: bold;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  font-family: sans-serif;
  font-size: 22px;
  display: flex;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StyledLi = styled.li`
  padding: 5px 10px;
  margin: 0px 10px;
  transition: border 1s;
  &:hover {
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-bottom: 2px;
    border-style: solid;
    border-color: #000;
    padding-bottom: 3px;
  }
`;

const StyledMenuIcon = styled(MdDehaze)`
  margin: 10px;
  padding: 10px;
  vertical-align: middle;
  width: 30px;
  height: 30px;
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;

const NavBar = () => {
  const items = ['Home', 'About Us', 'Typography', 'Contacts'];
  return (
    <Wrapper>
      <LogoWrapper>
        <StyledLabel>VTH</StyledLabel>
      </LogoWrapper>
      <StyledUl>
        {items.map((x) => (
          <StyledLi>{x}</StyledLi>
        ))}
      </StyledUl>

      <StyledMenuIcon />
    </Wrapper>
  );
};

export default NavBar;
