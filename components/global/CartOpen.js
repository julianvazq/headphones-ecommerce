import React, { useContext } from 'react';
import Link from 'next/link';
import AnimatedSidebar from './AnimatedSidebar';
import { AnimatePresence } from 'framer-motion';
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
  font-weight: 500;
  letter-spacing: 1px;

  span {
    font-weight: 700;
  }

  span span {
    color: var(--primary);
    margin-right: 0.25rem;
  }
`;

const CheckoutContainer = styled.div`
  text-align: center;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--dark);

  p {
    font-family: 'Open Sans', sans-serif;
    margin: 2rem 0;
    color: var(--dark);
    font-weight: 600;
  }
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
  const { cart, handleCartChange, getCartTotal } = useContext(CartContext);
  const closeSidebar = () => {
    handleShowSidebar(null);
  };

  const removeFromCart = (product) => {
    handleCartChange(product);
  };

  const getNumberOfItems = () => {
    if (cart.length === 1) {
      return '1 item in the cart';
    }
    return `${cart.length} items in the cart`;
  };

  if (!cart.length) {
    return (
      <AnimatedSidebar
        showSidebar={showingCartOrMenu}
        handleShowSidebar={handleShowSidebar}
        cart
      >
        <EmptyCart closeSidebar={closeSidebar} />
      </AnimatedSidebar>
    );
  }

  return (
    <AnimatedSidebar
      showSidebar={showingCartOrMenu}
      handleShowSidebar={handleShowSidebar}
      cart='true'
    >
      <Total>
        Total:{' '}
        <span>
          <span>$</span>
          {getCartTotal()}
        </span>
      </Total>
      <CheckoutContainer>
        <Link href='/checkout'>
          <Button onClick={closeSidebar}>Checkout</Button>
        </Link>
        <p>{getNumberOfItems()}</p>
      </CheckoutContainer>
      <CartContainer>
        <AnimatePresence>
          {cart.map((product) => (
            <CartProduct
              key={product.model}
              product={product}
              {...product}
              closeSidebar={closeSidebar}
              removeFromCart={() => removeFromCart(product)}
            />
          ))}
        </AnimatePresence>
      </CartContainer>
    </AnimatedSidebar>
  );
};

export default CartOpen;
