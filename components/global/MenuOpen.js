import React from 'react';
import Link from 'next/link';
import AnimatedSidebar from './AnimatedSidebar';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Menu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: center;

  a {
    display: block;
    font-size: 2rem;
    color: var(--light);
    margin: 0.5rem 0;
  }
`;

const MenuHeading = styled.h2`
  color: var(--dark);
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 0.75rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 25%;
    width: 50%;
    background: black;
    height: 2px;
  }
`;

const MenuOpen = ({ showingCartOrMenu, handleShowSidebar }) => {
  const closeSidebar = () => {
    handleShowSidebar(null);
  };
  return (
    <AnimatedSidebar
      showSidebar={showingCartOrMenu}
      handleShowSidebar={handleShowSidebar}
    >
      <Menu>
        <MenuHeading>Menu</MenuHeading>
        <Link href='/'>
          <a onClick={closeSidebar}>Home</a>
        </Link>
        <Link href='/checkout'>
          <a onClick={closeSidebar}>Checkout</a>
        </Link>
        <Link href='/products?type=headphones'>
          <a onClick={closeSidebar}>Headphones</a>
        </Link>
        <Link href='/products?type=earbuds'>
          <a onClick={closeSidebar}>Earbuds</a>
        </Link>
        <a>Contact Us</a>
      </Menu>
    </AnimatedSidebar>
  );
};

export default MenuOpen;
