import React from 'react';
import styled from 'styled-components';

const RatingWrapper = styled.div`
  display: inline-block;
  font-size: 30px;
  font-family: Times;
  line-height: 1;
  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: ${(props) =>
      `linear-gradient(90deg, 
      #fc0 ${props.percentage}%, 
      #ccc ${props.percentage}%)`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Rating = (props) => {
  return <RatingWrapper {...props} />;
};

export default Rating;
