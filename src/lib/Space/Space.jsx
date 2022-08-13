import React from 'react';
import styled from 'styled-components';

const SpaceContainer = styled.div`
  height: ${(prop) => (prop?.h ? prop.h : 'auto')};
  width: ${(prop) => (prop?.w ? prop.w : 'auto')};
  margin: ${(prop) => (prop?.m ? prop.m : '0px')};
  background-color: ${(prop) => (prop?.colorBg ? prop.colorBg : 'transparent')};
  display: ${(prop) => (prop?.d ? prop?.d : 'block')};
`;
const Space = ({ ...prop }) => {
  return <SpaceContainer {...prop} />;
};

export default Space;
