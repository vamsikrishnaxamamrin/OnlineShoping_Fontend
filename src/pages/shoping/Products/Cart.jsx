import React from 'react';
import styled from 'styled-components';
import Rating from '../../../lib/Rating';

const Wraper = styled.div`
  width: 300px;
  height: 400px;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  transition: all ease-in 0.3s;
  transform: scale(1);
  font-family: sans-serif;
  :hover {
    transition: all ease-out 0.3s;
    transform: scale(1.03);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 200px;
  margin: 10px;
`;

const TitleText = styled.span`
  height: 50px;
  font-size: 18px;
  text-align: left;
  margin: 5px;
  :hover {
    text-decoration: underline;
    color: blue;
    cursor: pointer;
  }
`;

const PriceText = styled.span`
  margin-top: 20px;
  font-size: 18px;
  text-align: left;
  span {
    font-size: 15px;
    vertical-align: top;
  }
`;
const Cart = ({ id, image, title, rate, price }) => {
  const rating = (Number(rate) / 5) * 100;
  console.log(rating, rate);
  return (
    <Wraper>
      <ImageWrapper>
        <StyledImage src={image} />
      </ImageWrapper>
      <TitleText>{title}</TitleText>
      <Rating percentage={rating} />
      <PriceText>
        <span>{'₹  '}</span>
        {price}
      </PriceText>
    </Wraper>
  );
};

export default Cart;
