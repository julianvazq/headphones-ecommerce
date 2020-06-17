import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  padding-bottom: 4rem;
  border-bottom: 1px solid;
  color: var(--dark);
  text-transform: capitalize;

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
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--dark);
`;

const Quantity = styled.p`
  color: var(--dark);
`;

const Type = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
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
        <Stars rating={rating} />
        <Type>{type}</Type>
        <p>Color: {color}</p>
        <Quantity>Quantity: {quantity}</Quantity>
        <Price>${price}</Price>
      </InfoContainer>
    </ProductContainer>
  );
};

export default CartProduct;
