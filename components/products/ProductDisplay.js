import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Stars from './Stars';
import { CartContext } from '../context/CartContext';
import { motion } from 'framer-motion';
import { slideOutVariant } from '../../styles/animations';

const ProductCard = styled(motion.article)`
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

const Model = styled.h3`
  letter-spacing: 1px;

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
  padding: 0.75rem;
  text-align: center;
  width: 75%;
  color: #fff;
  background: ${(props) => (props.inCart ? 'var(--added)' : 'var(--primary)')};
`;

const SecondaryButton = styled(Button)`
  color: var(--primary);
  background: var(--light);
  border: 1.5px solid var(--primary);
`;

const ProductDisplay = ({ product }) => {
  const { cart, handleCartChange, checkIfInCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(product.inCart);

  const handleClick = (e) => {
    e.preventDefault();
    handleCartChange(product);
  };

  useEffect(() => {
    setInCart(checkIfInCart(product));
  }, [cart]);

  return (
    <div>
      <ProductCard
        variants={slideOutVariant}
        initial='initial'
        animate='final'
        exit='exit'
      >
        <Link href='/products/[model]' as={`/products/${product.model}`}>
          <a>
            <img src={product.image} alt={product.model} />
          </a>
        </Link>
        <Link href='/products/[model]' as={`/products/${product.model}`}>
          <a>
            <Model>{product.model}</Model>{' '}
          </a>
        </Link>
        <Stars rating={product.rating} />
        <Price>${product.price}</Price>
        <Link
          href='/products/[model]'
          as={`/products/${product.model}`}
          passHref
        >
          <SecondaryButton>More info</SecondaryButton>
        </Link>
        <Button onClick={handleClick} inCart={inCart}>
          {inCart ? 'Remove from cart' : 'Add to cart'}
        </Button>
      </ProductCard>
    </div>
  );
};

export default ProductDisplay;
