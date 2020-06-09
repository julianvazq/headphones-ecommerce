import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ContainerMaxWidth from '../utils/ContainerMaxWidth';
import { MdShoppingCart, MdMenu } from 'react-icons/md';
import MenuOpen from './MenuOpen';
import CartOpen from './CartOpen';

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--primary);

  p {
    color: var(--light);
    font-size: 2.25rem;
    font-weight: 700;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;

  svg {
    font-size: 2.25rem;
    cursor: pointer;
    color: white;
  }

  a {
    color: var(--light);
    letter-spacing: 0.5px;
    display: none;
  }

  @media (min-width: 700px) {
    width: 350px;

    a {
      display: inline-block;
    }
  }
`;

const CartIcon = styled(MdShoppingCart)`
  color: var(--dark) !important;
`;

const Nav = ({ showingCartOrMenu, handleShowSidebar }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showingCartOrMenu === 'cart' && (
          <CartOpen
            showingCartOrMenu={showingCartOrMenu}
            handleShowSidebar={handleShowSidebar}
          />
        )}
        {showingCartOrMenu === 'menu' && (
          <MenuOpen
            showingCartOrMenu={showingCartOrMenu}
            handleShowSidebar={handleShowSidebar}
          />
        )}
      </AnimatePresence>
      <ContainerMaxWidth>
        <Navigation>
          <Link href='/'>
            <a>
              <LogoContainer>
                <p>H</p>
              </LogoContainer>
            </a>
          </Link>
          <LinkContainer>
            <Link href='/products/headphones'>
              <a>Headphones</a>
            </Link>
            <Link href='/products/earbuds'>
              <a>Earbuds</a>
            </Link>
            <CartIcon onClick={() => handleShowSidebar('cart')} />
            <MdMenu onClick={() => handleShowSidebar('menu')} />
          </LinkContainer>
        </Navigation>
      </ContainerMaxWidth>
    </>
  );
};

export default Nav;
