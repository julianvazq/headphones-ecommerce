import React from 'react';
import styled from 'styled-components';
import ProductDisplay from './ProductDisplay';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 4rem 0 2rem;
  align-items: end;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductGrid = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => (
        <ProductDisplay key={product.model} product={product} />
      ))}
    </Grid>
  );
};

export default ProductGrid;
