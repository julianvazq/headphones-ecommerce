import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 1100px) {
    flex-direction: row;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    max-height: 300px;
    object-fit: contain;
  }

  @media (min-width: 1100px) {
    width: 50%;
    margin-right: 2rem;
  }

  @media (min-width: 1500px) {
    width: 50%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;

  & > * {
    margin-bottom: 0.5rem;
  }

  & *:last-child {
    margin-bottom: 0;
  }

  h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;
    margin-top: 1rem;
    color: var(--dark);
  }
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
`;

const CartProduct = ({
  model,
  type,
  image,
  price,
  rating,
  quantity,
  color = 'Default',
}) => {
  const getColor = () => {
    switch (color) {
      case 'white':
        return '#fff';
      case 'black':
        return '#222';
      case 'red':
        return '#d83030';
      case 'pink':
        return '#ffcfd7';
      case 'green':
        return '#68bb68';
      case 'blue':
        return '#4343f3';
    }
  };

  return (
    <ProductContainer>
      <ImgContainer>
        <img src={image} alt={model} />
      </ImgContainer>
      <InfoContainer>
        <h2>{model}</h2>
        <Stars rating={rating} cart />
        <p>{type}</p>
        <p>Color: {color}</p>
        <Price>${price}</Price>
        <p>Qty: {quantity}</p>
      </InfoContainer>
    </ProductContainer>
  );
};

export default CartProduct;
