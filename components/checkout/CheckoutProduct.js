import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import QuantityPicker from '../products/QuantityPicker';
import Stars from '../products/Stars';
import { motion } from 'framer-motion';
import { slideOutVariant } from '../../styles/animations';

const OrderContainer = styled(motion.article)`
  /* display: grid;
  grid-template-columns: 1fr; */
  padding: 2rem 0;
  border-bottom: 2px solid var(--primary);
  text-transform: none;

  & > * {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 60% 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
`;

const Information = styled.div`
  display: flex;
  margin: 0 auto 2rem auto;

  & > a {
    margin-left: 1rem;
    font-weight: 400;

    @media (min-width: 375px) {
      margin-left: 2rem;
    }

    @media (min-width: 900px) {
      margin-left: 4rem;
    }
  }

  h3 {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  img {
    display: block;
    /* max-width: 40%; */
    max-width: 100px;
    object-fit: contain;
    cursor: pointer;

    @media (min-width: 450px) {
      max-width: 40%;
    }

    @media (min-width: 800px) {
      max-width: 30%;
    }
  }

  @media (min-width: 550px) {
    margin: 0;
    align-items: center;
  }
`;

const Type = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Color = styled.p`
  text-transform: capitalize;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
`;

const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    margin: auto;
  }
`;

const RemoveButton = styled.button`
  font-size: 1rem;
  text-align: center;
  margin: 1rem auto 0 auto;
  display: inline-block;
`;

const Subtotal = styled.p`
  display: none;

  @media (min-width: 700px) {
    display: block;
    text-align: right;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const CheckoutProduct = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [quantity, setQuantity] = useState(product.quantity);
  const { cart, handleCartChange, checkIfInCart, updateProduct } = useContext(
    CartContext
  );

  const removeProduct = () => {
    handleCartChange(product);
  };

  useEffect(() => {
    updateProduct({ ...product, quantity: quantity });
  }, [quantity]);

  return (
    <OrderContainer
      variants={slideOutVariant}
      initial='initial'
      animate='final'
      exit='exit'
    >
      <Information>
        <Link
          href='/products/[model]'
          as={`/products/${product.model}`}
          passHref
        >
          <img src={product.image} alt={product.model} />
        </Link>
        <Link
          href='/products/[model]'
          as={`/products/${product.model}`}
          passHref
        >
          <a>
            <h3>{product.model}</h3>
            <Stars rating={product.rating} />
            <Type>{product.type}</Type>
            <Color>Color: {product.color}</Color>
            <Price>${product.price}</Price>
          </a>
        </Link>
      </Information>
      <Quantity>
        <QuantityPicker quantity={quantity} setQuantity={setQuantity} />
        <RemoveButton onClick={removeProduct}>Remove item</RemoveButton>
      </Quantity>
      <Subtotal>${(product.price * quantity).toFixed(2)}</Subtotal>
    </OrderContainer>
  );
};

export default CheckoutProduct;
