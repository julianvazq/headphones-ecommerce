import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductDisplay from './ProductDisplay';
import { AnimatePresence } from 'framer-motion';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 4rem 0;
  align-items: center;

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
      <AnimatePresence exitBeforeEnter>
        {products.slice(0, 4).map((product) => (
          <ProductDisplay key={product.model} product={product} />
        ))}
      </AnimatePresence>
    </Grid>
  );
};

export default ProductGrid;
