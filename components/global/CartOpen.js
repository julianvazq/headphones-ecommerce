import React, { useContext } from 'react';
import Link from 'next/link';
import AnimatedSidebar from './AnimatedSidebar';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import CartProduct from '../products/CartProduct';

const CartContainer = styled.div`
  text-align: center;
  color: var(--dark);
`;

const Total = styled.p`
  font-size: 2rem;

  span {
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--dark);
`;

const Button = styled.button`
  font-family: 'Oswald', sans-serif;
  font-size: 1.125rem;
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

const SecondaryButton = styled(Button)`
  background: none;
  color: var(--dark);
  width: 25%;
`;

const CartOpen = ({ showingCartOrMenu, handleShowSidebar }) => {
  const { cart } = useContext(CartContext);
  const closeSidebar = () => {
    handleShowSidebar(null);
  };

  return (
    <AnimatedSidebar
      showSidebar={showingCartOrMenu}
      handleShowSidebar={handleShowSidebar}
      cart
    >
      <ButtonContainer>
        <Button>Checkout</Button>
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
