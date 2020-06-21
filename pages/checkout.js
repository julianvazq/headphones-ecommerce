import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import ContainerMaxWidth from '../components/utils/ContainerMaxWidth';
import styled from 'styled-components';
import { SectionContainer, Heading } from '../styles/shared-styles';
import SummaryTable from '../components/checkout/SummaryTable';
import EmptyCart from '../components/products/EmptyCart';
import { CartContext } from '../components/context/CartContext';
import { getCartCookie } from '../components/context/cookieUtils';

const EmptyCartContainer = styled.section`
  height: 100vh;
  background: var(--light);
  position: relative;
`;

const CheckoutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  margin-top: 4rem;

  @media (min-width: 650px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const CheckoutButton = styled.a`
  font-family: 'Oswald', sans-serif;
  padding: 1rem 2rem;
  background: var(--dark);
  color: var(--light);
  margin-top: 2rem;

  &:visited {
    color: var(--light);
  }

  @media (min-width: 650px) {
    order: 1;
    margin-top: 0;
    margin-right: 2rem;
  }
`;

const Total = styled.p`
  font-size: 2rem;
  color: var(--dark);
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;

  span {
    font-weight: 700;
  }

  span span {
    color: var(--primary);
    margin-right: 0.25rem;
  }

  @media (min-width: 650px) {
    order: 2;
  }
`;

const Checkout = ({ initialCart }) => {
  /*State used exclusively to check if cart is empty (from server and client) */
  const { cart: cartContext, getCartTotal } = useContext(CartContext);

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
    <>
      <Head>
        <title>Headphones | Order Summary</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <SectionContainer>
        <ContainerMaxWidth>
          <Heading>Your Cart</Heading>
          <SummaryTable />
          <CheckoutContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Total>
              Total:{' '}
              <span>
                <span>$</span>
                {getCartTotal()}
              </span>
            </Total>
            <Link href='/checkout/payment' passHref>
              <CheckoutButton>Checkout</CheckoutButton>
            </Link>
          </CheckoutContainer>
        </ContainerMaxWidth>
      </SectionContainer>
    </>
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
