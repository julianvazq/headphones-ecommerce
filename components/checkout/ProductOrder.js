import React from 'react';
import styled from 'styled-components';

const OrderContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  margin: 2rem 0;
  align-items: center;

  & > * {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  img {
    display: block;
    max-width: 300px;
  }

  @media (min-width: 700px) {
    grid-template-columns: 60% 1fr 1fr;
  }
`;

const Information = styled.div`
  display: flex;
`;

const Quantity = styled.p`
  text-align: center;
`;

const Subtotal = styled.p`
  text-align: right;
`;

const ProductOrder = ({ product }) => {
  return (
    <OrderContainer>
      <Information>
        <img src={product.image} alt={product.model} />
        <h3>{product.model}</h3>
      </Information>
      <Quantity>{product.quantity}</Quantity>
      <Subtotal>${product.price * product.quantity}</Subtotal>
    </OrderContainer>
  );
};

export default ProductOrder;
