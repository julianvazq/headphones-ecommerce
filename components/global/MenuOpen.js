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

  a:last-child {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
  }
`;

const MenuHeading = styled.h2`
  color: var(--dark);
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 0.75rem;
  border-bottom: 2px solid var(--dark);
`;

const MenuOpen = ({ showingCartOrMenu, handleShowSidebar }) => {
  return (
    <AnimatedSidebar
      showSidebar={showingCartOrMenu}
      handleShowSidebar={handleShowSidebar}
    >
      <Menu>
        <MenuHeading>Menu</MenuHeading>
        <a>Checkout</a>
        <Link href='/products/headphones'>
          <a>Headphones</a>
        </Link>
        <Link href='/products/earbuds'>
          <a>Earbuds</a>
        </Link>
        <Link href='/products/accessories'>
          <a>Accessories</a>
        </Link>
        <a>Contact Us</a>
      </Menu>
    </AnimatedSidebar>
  );
};

export default MenuOpen;
