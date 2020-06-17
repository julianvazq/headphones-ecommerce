import React from 'react';
import Link from 'next/link';
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
  flex: 1;
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

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;

  @media (min-width: 1000px) {
    width: 80%;
  }
`;

const Button = styled.button`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  width: 50%;
  max-width: 400px;
  margin: auto;
  color: var(--light);
  background: var(--dark);
`;

const SecondaryButton = styled(Button)`
  background: none;
  color: var(--dark);
  border: 1px solid;
`;

const CartProduct = ({
  closeSidebar,
  removeFromCart,
  model,
  type,
  image,
  price,
  rating,
  quantity,
  color = 'Default',
}) => {
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
        <ButtonContainer>
          <Link href='/products/[model]' as={`/products/${model}`}>
            <Button onClick={closeSidebar}>Edit</Button>
          </Link>
          <SecondaryButton onClick={removeFromCart}>Remove</SecondaryButton>
        </ButtonContainer>
      </InfoContainer>
    </ProductContainer>
  );
};

export default CartProduct;
