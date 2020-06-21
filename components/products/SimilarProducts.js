import React from 'react';
import styled from 'styled-components';
import ProductGrid from './ProductGrid';

const Heading = styled.h2`
  font-size: 2rem;
  font-family: 'Oswald', sans-serif;
  color: var(--dark);
  margin-bottom: 0.5rem;
  padding-bottom: 1.125rem;
  border-bottom: 2px solid var(--primary);
`;

const SimilarProducts = ({ model, products }) => {
  //   Filter out product on display
  const similarProducts = products
    .filter((product) => product.model !== model)
    .slice(0, 4);

  return (
    <>
      <Heading>You may also like</Heading>
      <ProductGrid products={similarProducts} />
    </>
  );
};

export default SimilarProducts;
