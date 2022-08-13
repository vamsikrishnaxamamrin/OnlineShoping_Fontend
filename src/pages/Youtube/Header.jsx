import React from 'react';
import { ImYoutube2 } from 'react-icons/im';
import { MdOutlineMenu } from 'react-icons/md';
import styled from 'styled-components';
import SearchBox from '../../lib/SearchBox';

const Container = styled.div`
  background-color: #e4e4e4;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
`;

const Children = styled.div`
  padding: 0.25em;
  margin: 0.25em;
  @media only screen and (min-width: 768px) {
    padding: 0.5em;
    margin: 0.5em;
  }
`;

const YoutubeLogoFlex = styled(Children)`
  flex: 1 1 5%;
  @media only screen and (min-width: 768px) {
    flex: 1 1 10%;
  }
`;

const SearchFlex = styled(Children)`
  flex: 3 3 60%;
  @media only screen and (min-width: 768px) {
    flex: 2 2 40%;
  }
`;

const MenuFlex = styled(Children)`
  display: flex;
  justify-content: end;
  flex: 1 1 5%;
  @media only screen and (min-width: 768px) {
    flex-basis: 1 1 10%;
  }
`;

const YoutubeLogo = styled(ImYoutube2)`
  width: 50px;
  height: 25px;
  margin: auto;
  vertical-align: middle;
  @media only screen and (min-width: 480px) {
    width: 60px;
    height: 30px;
  }
  @media only screen and (min-width: 768px) {
    width: 80px;
    height: 40px;
  }
`;

const MenuLogo = styled(MdOutlineMenu)`
  width: 25px;
  height: 25px;
  @media only screen and (min-width: 480px) {
    width: 35px;
    height: 35px;
  }
  @media only screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Header = ({ onSearchTextChange }) => {
  return (
    <Container>
      <YoutubeLogoFlex>
        <YoutubeLogo />
      </YoutubeLogoFlex>
      <SearchFlex>
        <SearchBox onSearchTextChange={onSearchTextChange}></SearchBox>
      </SearchFlex>
      <MenuFlex>
        <MenuLogo />
      </MenuFlex>
    </Container>
  );
};

export default Header;
