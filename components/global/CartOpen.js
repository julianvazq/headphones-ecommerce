import React, { useContext } from 'react';
import Link from 'next/link';
import AnimatedSidebar from './AnimatedSidebar';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const CartOpen = ({ showingCartOrMenu, handleShowSidebar }) => {
  const { cart } = useContext(CartContext);
  return (
    <AnimatedSidebar
      showSidebar={showingCartOrMenu}
      handleShowSidebar={handleShowSidebar}
    >
      <h1 style={{ color: 'white' }}>Go to checkout</h1>
      {cart.map((product) => (
        <p style={{ color: 'white' }}>{product.model}</p>
      ))}
    </AnimatedSidebar>
  );
};

export default CartOpen;
