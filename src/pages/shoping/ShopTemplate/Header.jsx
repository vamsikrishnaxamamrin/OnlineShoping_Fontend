import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  IoPersonSharp,
  IoHeartSharp,
  IoCartSharp,
  IoMenuSharp,
  IoCloseSharp,
} from 'react-icons/io5';
import { COLORS } from '../../../shared/constant';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 'auto';
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.black};
  padding: 5px 30px;
  @media only screen and (max-width: 480px) {
    padding: 5px 10px;
  }
`;

const LogoText = styled.span`
  font-size: 25px;
  font-family: ui-sans-serif;
  font-weight: bold;
  color: ${COLORS.white};
  vertical-align: middle;
`;

const NavWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    background-color: ${COLORS.white};
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    transition: ${({ openDrawer }) => (openDrawer ? `0.3s` : `0s`)};
    transform: ${({ openDrawer }) =>
      openDrawer ? `translateX(0%)` : `translateX(-100%)`};
    z-index: 1;
  }
`;

const Nav = styled.ul`
  display: flex;
  list-style-type: none;
  color: ${COLORS.white};
  font-size: 20px;
  font-family: sans-serif;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    background-color: ${COLORS.white};
    color: ${COLORS.black};
    width: 100%;
    height: 100%;
    margin: 0px;
    padding-top: 30px;
  }
`;

const NavItem = styled.li`
  padding: 5px 10px;
  @media only screen and (max-width: 768px) {
    padding: 10px 10px;
    :hover {
      background-color: ${COLORS.black};
      color: ${COLORS.white};
      cursor: pointer;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
`;
const IconBaseStyle = css`
  color: ${COLORS.white};
  margin: 10px;
  width: 25px;
  height: 25px;
  vertical-align: middle;
`;

const IconIoMenuSharp = styled(IoMenuSharp)`
  ${IconBaseStyle};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const IconIIoCloseSharp = styled(IoCloseSharp)`
  margin: 10px;
  width: 35px;
  height: 35px;
  vertical-align: middle;
  color: ${COLORS.black};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const IconIoPerson = styled(IoPersonSharp)`
  ${IconBaseStyle}
`;

const IconIoHeart = styled(IoHeartSharp)`
  ${IconBaseStyle}
`;

const IconIoCart = styled(IoCartSharp)`
  ${IconBaseStyle}
`;

const Header = () => {
  const navigate = useNavigate();

  const [openDrawer, setOpenDrawer] = useState(false);

  const onMenuHandle = () => {
    setOpenDrawer(true);
  };
  const onCloseHandle = () => {
    setOpenDrawer(false);
  };

  const onAccountHandle = () => {
    navigate('/account');
  };
  const onHomeHandle = () => {};

  const onProductsHandle = () => {
    navigate('/products');
  };
  return (
    <Wrapper>
      <div>
        <IconIoMenuSharp onClick={onMenuHandle} />
        <LogoText>VTH</LogoText>
      </div>

      <NavWrapper openDrawer={openDrawer}>
        <Nav>
          <NavItem onClick={onHomeHandle}>Home</NavItem>
          <NavItem onClick={onProductsHandle}>Products</NavItem>
          <NavItem>Contact Us</NavItem>
        </Nav>
        <IconIIoCloseSharp onClick={onCloseHandle} />
      </NavWrapper>

      <IconWrapper>
        <IconIoPerson onClick={onAccountHandle} />
        <IconIoHeart />
        <IconIoCart />
      </IconWrapper>
    </Wrapper>
  );
};

export default Header;
