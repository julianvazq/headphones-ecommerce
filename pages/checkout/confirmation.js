import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { SectionContainer } from '../../styles/shared-styles';
import { FaShippingFast } from 'react-icons/fa';
import { CartContext } from '../../components/context/CartContext';

const CenteredContainer = styled.div`
  height: calc(50vh - 114px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 4rem 0;

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
  }
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
  const { clearCart } = useContext(CartContext);

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
          <Message>Thank you for placing a fake order.</Message>
          <SubMessage>Your product(s) will be delivered never!</SubMessage>
          <FaShippingFast />
        </CenteredContainer>
      </SectionContainer>
    </>
  );
};

export default ConfirmationPage;
