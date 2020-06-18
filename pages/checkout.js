import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import ContainerMaxWidth from '../components/utils/ContainerMaxWidth';
import styled from 'styled-components';
import { SectionContainer } from '../styles/shared-styles';
import OrderSummary from '../components/checkout/OrderSummary';
import EmptyCart from '../components/products/EmptyCart';
import { CartContext } from '../components/context/CartContext';
import { getCartCookie } from '../components/context/cookieUtils';

const Heading = styled.h1`
  font-size: 2rem;
  font-family: 'Oswald', sans-serif;
  color: var(--dark);
  margin-bottom: 0.5rem;
  padding-bottom: 1.5rem;
`;

const EmptyCartContainer = styled.section`
  height: 100vh;
  background: var(--light);
  position: relative;
`;

const Checkout = ({ initialCart }) => {
  /*State used exclusively to check if cart is empty (from server and client) */
  const { cart: cartContext } = useContext(CartContext);

  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    setCart(cartContext);
  }, [cartContext]);

  if (!cart.length) {
    return (
      <EmptyCartContainer>
        <EmptyCart />
      </EmptyCartContainer>
    );
  }

  return (
    <SectionContainer>
      <ContainerMaxWidth>
        <Heading>Order Summary</Heading>
        <OrderSummary />
      </ContainerMaxWidth>
    </SectionContainer>
  );
};

export async function getServerSideProps({ req }) {
  const initialCart = getCartCookie(req);

  return {
    props: {
      initialCart,
    },
  };
}

export default Checkout;
