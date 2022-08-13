import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../shared/constant';

const Wrapper = styled.div`
  display: flex;
  flex: 'auto';
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: ${COLORS.black};
  color: ${COLORS.white};
  font-family: sans-serif;
  padding: 40px 40px 60px 40px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
  min-width: 200px;
  align-content: center;
`;

const TitleText = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubTitleText = styled.span`
  font-size: 15px;
  font-weight: 50;
  margin-bottom: 5px;
  opacity: 0.7;
`;
const Footer = () => {
  const prepareTemplate = [
    {
      key: 'account',
      value: 'Your account',
      details: [
        {
          key: 'personalInfo',
          value: 'Personal Info',
        },
        {
          key: 'orders',
          values: 'Orders',
        },
      ],
    },
    {
      key: 'service',
      value: 'Customer Service',
      details: [
        {
          key: 'day',
          value: 'Monday to Friday',
        },
        {
          key: 'time',
          value: '9AM to 9PM (Indian Time)',
        },
        {
          key: 'supportNumber',
          value: '+91 9494898052',
        },
        {
          key: 'supportEmail',
          value: 'vth.support@gmail.com',
        },
      ],
    },
    {
      key: 'guarantees',
      value: 'Our Guarantees',
      details: [
        {
          key: 'shippingInfo',
          value: 'Shipping in 7 days',
        },
        {
          key: 'returnInfo',
          value: 'Free returns within 14 days',
        },
        {
          key: 'paymentInfo',
          value: 'Secure payments',
        },
      ],
    },
    {
      key: 'company',
      value: 'Our company',
      details: [
        {
          key: 'deliveryInfo',
          value: 'Delivery',
        },
        {
          key: 'legalInfo',
          value: 'Legal Notice',
        },
        {
          key: 'aboutUsInfo',
          value: 'About us',
        },
        {
          key: 'contactInfo',
          value: 'Contact us',
        },
        {
          key: 'termsInfo',
          value: 'Terms and conditions of use',
        },
      ],
    },
  ];

  return (
    <Wrapper>
      {prepareTemplate.map((x) => {
        return (
          <StyledDiv>
            <TitleText>{x.value}</TitleText>
            {x.details.map((y) => {
              return <SubTitleText>{y.value}</SubTitleText>;
            })}
          </StyledDiv>
        );
      })}
    </Wrapper>
  );
};

export default Footer;
