import React from 'react';
import styled from 'styled-components';
import ProductDisplay from './ProductDisplay';
import { AnimatePresence } from 'framer-motion';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 4rem 0;
  align-items: end;

  @media (min-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProductGrid = ({ products, fourOnly }) => {
  const visibleProducts = fourOnly ? products.slice(0, 4) : products;

  return (
    <Grid>
      <AnimatePresence exitBeforeEnter>
        {visibleProducts.map((product) => (
          <ProductDisplay key={product.model} product={product} />
        ))}
      </AnimatePresence>
    </Grid>
  );
};

export default ProductGrid;
