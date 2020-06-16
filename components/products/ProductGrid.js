import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductDisplay from './ProductDisplay';
import { CartContext } from '../context/CartContext';

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
  const { handleCartChange, checkIfInCart } = useContext(CartContext);

  const handleCart = (e, product) => {
    e.preventDefault();
    handleCartChange(product);
  };

  return (
    <Grid>
      {products.slice(0, 4).map((product, index) => (
        <ProductDisplay
          key={index}
          {...product}
          product={product}
          handleCart={(e) => handleCart(e, product)}
          inCart={checkIfInCart(product)}
        />
      ))}
    </Grid>
  );
};

export default ProductGrid;
