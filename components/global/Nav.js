import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ContainerMaxWidth from '../utils/ContainerMaxWidth';
import { MdShoppingCart, MdMenu } from 'react-icons/md';
import MenuOpen from './MenuOpen';
import CartOpen from './CartOpen';
import { CartContext } from '../context/CartContext';

const navVariant = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

const NavContainer = styled(motion.div)`
  display: ${(props) => props.hide && 'none'};
  position: relative;
  z-index: 1;
`;

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

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  svg {
    font-size: 2.25rem;
    cursor: pointer;
    color: ${(props) => (props.greenLinks ? 'var(--primary)' : 'var(--light)')};
  }

  a {
    color: ${(props) => (props.greenLinks ? 'var(--primary)' : 'var(--light)')};
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

const CartCounter = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => (props.reverse ? 'var(--primary)' : 'var(--light)')};
  color: ${(props) => (props.reverse ? 'var(--light)' : 'var(--dark)')};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -6px;
  right: -6px;
  font-weight: 600;

  span {
    font-size: 0.8rem;
    line-height: 1;
    vertical-align: middle;
    text-align: center;
  }
`;

const Nav = ({ showingCartOrMenu, handleShowSidebar, hide }) => {
  const { cart } = useContext(CartContext);
  const router = useRouter();
  return (
    <NavContainer
      variants={navVariant}
      initial='initial'
      animate='final'
      hide={hide}
    >
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
          <LinkContainer greenLinks={router.pathname !== '/'}>
            <Link href='/products?type=headphones'>
              <a>Headphones</a>
            </Link>
            <Link href='/products?type=earbuds'>
              <a>Earbuds</a>
            </Link>
            <button
              onClick={() => handleShowSidebar('cart')}
              aria-label='Toggle Cart'
            >
              <CartIcon />
              <CartCounter reverse={router.pathname !== '/'}>
                <span>{cart.length}</span>
              </CartCounter>
            </button>
            <button
              onClick={() => handleShowSidebar('menu')}
              aria-label='Toggle Menu'
            >
              <MdMenu />
            </button>
          </LinkContainer>
        </Navigation>
      </ContainerMaxWidth>
    </NavContainer>
  );
};

export default Nav;
