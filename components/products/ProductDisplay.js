import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Stars from './Stars';

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

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.125rem;
  }
`;

const ProductDisplay = ({ model, type, price, image, rating }) => {
  return (
    <Link href='/products/[model]' as={`/products/${model}`}>
      <a>
        <ProductCard>
          <img src={image} alt={model} />
          <Model>{model}</Model>
          <Stars rating={rating} />
          <Price>{price}</Price>
        </ProductCard>
      </a>
    </Link>
  );
};

export default ProductDisplay;
