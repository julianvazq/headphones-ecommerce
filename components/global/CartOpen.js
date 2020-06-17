import React, { useContext } from 'react';
import Link from 'next/link';
import AnimatedSidebar from './AnimatedSidebar';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import CartProduct from '../products/CartProduct';
import EmptyCart from '../products/EmptyCart';

const CartContainer = styled.div`
  text-align: center;
  color: var(--dark);
`;

const Total = styled.p`
  font-size: 2rem;
  color: var(--dark);
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 600;
  letter-spacing: 1px;

  span {
    font-weight: 700;
  }

  span span {
    color: var(--primary);
    margin-right: 0.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 4rem;
  border-bottom: 1px solid var(--dark);
`;

const Button = styled.button`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: auto;
  color: var(--light);
  background: var(--dark);
`;

const CartOpen = ({ showingCartOrMenu, handleShowSidebar }) => {
  const { cart, getCartTotal } = useContext(CartContext);
  const closeSidebar = () => {
    handleShowSidebar(null);
  };

  if (!cart.length) {
    return (
      <AnimatedSidebar
        showSidebar={showingCartOrMenu}
        handleShowSidebar={handleShowSidebar}
        cart
      >
        <EmptyCart />
      </AnimatedSidebar>
    );
  }

  return (
    <AnimatedSidebar
      showSidebar={showingCartOrMenu}
      handleShowSidebar={handleShowSidebar}
      cart
    >
      <Total>
        Total:{' '}
        <span>
          <span>$</span>
          {getCartTotal()}
        </span>
      </Total>
      <ButtonContainer>
        <Link href='/checkout'>
          <Button onClick={closeSidebar}>Checkout</Button>
        </Link>
      </ButtonContainer>
      <CartContainer>
        {cart.map((product) => (
          <CartProduct key={product.model} {...product} />
        ))}
      </CartContainer>
    </AnimatedSidebar>
  );
};

export default CartOpen;
