import React from 'react';
import { motion } from 'framer-motion';
import ContainerMaxWidth from '../components/utils/ContainerMaxWidth';
import styled from 'styled-components';
import { SectionContainer } from '../styles/shared-styles';
import OrderSummary from '../components/checkout/OrderSummary';

const Heading = styled.h1`
  font-size: 2rem;
  font-family: 'Oswald', sans-serif;
  color: var(--dark);
  margin-bottom: 0.5rem;
  padding-bottom: 1.5rem;
  /* padding-bottom: 1.125rem;
  border-bottom: 2px solid var(--primary); */
`;

const Checkout = () => {
  return (
    <SectionContainer>
      <ContainerMaxWidth>
        <Heading>Order Summary</Heading>
        <OrderSummary />
      </ContainerMaxWidth>
    </SectionContainer>
  );
};

export default Checkout;
