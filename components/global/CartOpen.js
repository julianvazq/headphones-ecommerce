import React from 'react';
import Link from 'next/link';
import AnimatedSidebar from './AnimatedSidebar';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CartOpen = ({ showingCartOrMenu, handleShowSidebar }) => {
  return (
    <AnimatedSidebar
      showSidebar={showingCartOrMenu}
      handleShowSidebar={handleShowSidebar}
    >
      <h1 style={{ color: 'black' }}>Go to checkout</h1>
    </AnimatedSidebar>
  );
};

export default CartOpen;
