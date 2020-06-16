import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Stars from './Stars';
import { CartContext } from '../context/CartContext';

const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  color: var(--dark);

  & > * {
    margin-bottom: 1rem;
  }

  img {
    display: block;
    width: 100%;
    transition: transform 500ms ease-in;
  }
  &:hover img,
  &:focus img {
    transform: translateY(-10px);
  }

  &:last-child {
    margin-bottom: 0rem;
  }
`;

const Model = styled.h2`
  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.125rem;
  }
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.125rem;
  }
`;

const Button = styled.button`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 0.5rem 0;
  text-align: center;
  width: 75%;
  color: #fff;
  background: ${(props) =>
    props.inCart ? 'var(--confirmed)' : 'var(--primary)'};
`;

const SecondaryButton = styled(Button)`
  color: var(--primary);
  background: var(--light);
  border: 1.5px solid var(--primary);
`;

const ProductDisplay = ({ product }) => {
  const { cart, handleCartChange, checkIfInCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(product.inCart);

  const handleButtonClick = (e) => {
    e.preventDefault();
    handleCartChange(product);
  };

  useEffect(() => {
    setInCart(checkIfInCart(product));
  }, [cart]);

  return (
    <Link href='/products/[model]' as={`/products/${product.model}`}>
      <a>
        <ProductCard>
          <img src={product.image} alt={product.model} />
          <Model>{product.model}</Model>
          <Stars rating={product.rating} />
          <Price>${product.price}</Price>
          <SecondaryButton>More info</SecondaryButton>
          <Button onClick={handleButtonClick} inCart={inCart}>
            {inCart ? 'Added to cart' : 'Add to cart'}
          </Button>
        </ProductCard>
      </a>
    </Link>
  );
};

export default ProductDisplay;
