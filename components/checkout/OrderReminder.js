import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import PaymentProductDisplay from './PaymentProductDisplay';

const Container = styled.section`
  width: 100%;
  background: var(--body);
  padding: 4rem 2rem;
  order: -1;
  color: var(--dark);
  text-transform: none;

  @media (min-width: 1000px) {
    width: 50%;
    order: 1;
  }
`;

const InnerContainer = styled.div`
  max-width: 750px;
  margin-right: auto;
`;

const SubtotalContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #cbcbcb;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &:first-of-type {
    margin-bottom: 1rem;
  }

  p:first-of-type {
    margin-right: 1rem;
  }

  p:nth-of-type(2) {
    font-weight: 600;
  }
`;

const Total = styled.p`
  font-size: 1.5rem;
`;

const OrderReminder = ({ cart }) => {
  //   const { getCartTotal } = useContext(CartContext);

  const getCartTotal = () => {
    if (!cart.length) return 0;

    const INITIAL_VALUE = 0;

    const total = cart.reduce(
      (accumulator, currValue) =>
        accumulator + currValue.price * currValue.quantity,
      INITIAL_VALUE
    );
    return total.toFixed(2);
  };

  return (
    <Container>
      <InnerContainer>
        {cart.map((product) => (
          <PaymentProductDisplay key={product.model} {...product} />
        ))}
        <SubtotalContainer>
          <FlexContainer>
            <p>Subtotal</p>
            <p>${getCartTotal()}</p>
          </FlexContainer>
          <FlexContainer>
            <p>Shipping</p>
            <p style={{ letterSpacing: '1px' }}>FREE</p>
          </FlexContainer>
        </SubtotalContainer>
        <FlexContainer style={{ margin: '2rem 0' }}>
          <p style={{ fontSize: '1.25rem' }}>Total</p>
          <Total>${getCartTotal()}</Total>
        </FlexContainer>
      </InnerContainer>
    </Container>
  );
};

export default OrderReminder;
