import React from 'react';
import styled from 'styled-components';
// import { headphones, earbuds } from '../../public/products';
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
    .slice(0, 5)
    .filter((product) => product.model !== model);

  return (
    <>
      <Heading>Similar Products</Heading>
      <ProductGrid products={similarProducts} />
    </>
  );
};

export default SimilarProducts;
