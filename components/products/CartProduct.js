import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Stars from './Stars';
import { motion } from 'framer-motion';
import { slideOutVariant } from '../../styles/animations';

const ProductContainer = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  padding-bottom: 4.75rem;
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
  margin-bottom: 1rem;

  img {
    display: block;
    width: 100%;
    max-height: 300px;
    object-fit: contain;
  }

  @media (min-width: 1100px) {
    width: 50%;
    margin-bottom: 1rem;
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
  width: 90%;
  max-width: 280px;

  & > * {
    margin-bottom: 0.5rem;
  }

  & *:last-child {
    margin-bottom: 0;
  }

  h2 {
    font-family: 'Oswald', sans-serif;
    font-size: 2rem;
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
  margin-top: 1rem;
  width: 100%;
`;

const Button = styled.button`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 50%;
  max-width: 400px;
  margin: auto;
  color: var(--light);
  background: var(--dark);
  letter-spacing: 1px;
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
    <ProductContainer
      key={model}
      variants={slideOutVariant}
      initial='initial'
      animate='final'
      exit='exit'
    >
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
