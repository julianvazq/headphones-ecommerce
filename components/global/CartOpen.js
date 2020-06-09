import React from 'react';
import Link from 'next/link';
import AnimatedSidebar from './AnimatedSidebar';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CartOpen = ({ showingCartOrMenu, handleShowSidebar }) => {
  return (
    <AnimatedSidebar
      showSidebar={showingCartOrMenu}
      handleShowSidebar={handleShowSidebar}
    >
      <h1 style={{ color: 'white' }}>Go to checkout</h1>
    </AnimatedSidebar>
  );
};

export default CartOpen;
