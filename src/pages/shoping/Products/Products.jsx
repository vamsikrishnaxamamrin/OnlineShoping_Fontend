import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Template from '../ShopTemplate';
import { getAllProducts } from '../../../shared/services/shopServiceCalls';
import ProductTemplate from './Cart.jsx';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((x) => x.shop.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Template>
      <Container>
        {products?.map((product) => {
          return (
            <ProductTemplate
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              rate={product.rating.rate}
              price={product.price}
            />
          );
        })}
      </Container>
    </Template>
  );
};

export default Products;
