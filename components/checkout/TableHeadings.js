import React from 'react';
import styled, { css } from 'styled-components';

const HeadingsContainer = styled.div`
  display: none;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 60% 1fr 1fr;
    padding-bottom: 1.5rem;
    border-bottom: 2px solid var(--primary);
  }
`;

const sharedStyle = css`
  font-size: 1.125rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

const Product = styled.h2`
  ${sharedStyle}
`;

const Quantity = styled(Product)`
  text-align: center;
`;

const Subtotal = styled(Product)`
  text-align: right;
`;

const TableHeadings = () => {
  return (
    <HeadingsContainer>
      <Product>Product</Product>
      <Quantity>Quantity</Quantity>
      <Subtotal>Subtotal</Subtotal>
    </HeadingsContainer>
  );
};

export default TableHeadings;
