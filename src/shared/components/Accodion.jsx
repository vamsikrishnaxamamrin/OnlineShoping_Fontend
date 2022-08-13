import React, { useState } from 'react';
import styled from 'styled-components';
import { IoCaretForward, IoCaretDown } from 'react-icons/io5';

const StyledDiv = styled.div`
  outline: 1px solid #000000;
  width: 50%;
  margin: 10px 0px;
`;

const ContentDiv = styled.div`
  padding: 10px 15px;
  display: block;
`;

const HeaderDiv = styled.div`
  align-items: center;
  opacity: 0.5;
  :hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const Description = styled.span`
  font-size: 15px;
`;

const Separator = styled.div`
  background-color: #000000;
  height: 1px;
`;

const Accodion = ({ items }) => {
  const [active, setActive] = useState(null);

  const titleClick = (index) => {
    if (index === active) {
      setActive(null);
    } else {
      setActive(index);
    }
  };
  return (
    <StyledDiv>
      {items.map((x, index) => (
        <div key={index}>
          <ContentDiv>
            <HeaderDiv onClick={() => titleClick(index)}>
              <span style={{ verticalAlign: 'middle' }}>
                <IoCaretForward />
              </span>
              <Title>{x.title}</Title>
            </HeaderDiv>

            {index === active && <Description>{x.description}</Description>}
          </ContentDiv>

          {items?.length - 1 !== index ? <Separator /> : null}
        </div>
      ))}
    </StyledDiv>
  );
};

export default Accodion;
