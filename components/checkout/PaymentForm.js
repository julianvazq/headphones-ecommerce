import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';

const Container = styled.section`
  width: 100%;
  padding: 4rem 2rem;

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const InnerContainer = styled.div`
  max-width: 750px;
  margin-left: auto;
`;

const PaymentForm = ({ cart }) => {
  const { getCartTotal } = useContext(CartContext);

  return (
    <Container>
      <InnerContainer>PaymentForm</InnerContainer>
    </Container>
  );
};

export default PaymentForm;
