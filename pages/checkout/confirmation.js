import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { SectionContainer } from '../../styles/shared-styles';
import { FaShippingFast } from 'react-icons/fa';
import { CartContext } from '../../components/context/CartContext';
import EmptyCart from '../../components/products/EmptyCart';

const CenteredContainer = styled.div`
  height: calc(50vh - 114px);
  position: relative;
  margin: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--light);

  svg {
    font-size: 3rem;
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url('/images/headphones/headphone-1.png') no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0.4;
    filter: contrast(90%);
    z-index: 1;
  }
`;

const InnerContainer = styled.div`
  background: hsla(176, 100%, 39%, 0.5);
  color: var(--dark);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Message = styled.p`
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  margin: 0 1rem 1rem;
`;

const SubMessage = styled.p`
  font-family: 'Oswald', sans-serif;
  font-size: 1.25rem;
  text-transform: none;
  text-align: center;
  margin: 0 1rem 1rem;
`;

const ConfirmationPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <>
      <Head>
        <title>Headphones | Order Confirmation</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <SectionContainer>
        <CenteredContainer>
          <InnerContainer>
            <Message>Thank you for placing a fake order.</Message>
            <SubMessage>Your product(s) will be delivered never!</SubMessage>
            <FaShippingFast />
          </InnerContainer>
        </CenteredContainer>
      </SectionContainer>
    </>
  );
};

export default ConfirmationPage;
