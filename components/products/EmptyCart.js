import React from 'react';
import { FaHeadphones } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  color: var(--dark);
  text-align: center;

  & > * {
    margin-bottom: 1rem;
  }
`;
const Message = styled.p`
  font-size: 1.5rem;
  font-family: 'Oswald', sans-serif;
`;

const HeadphoneIcon = styled(FaHeadphones)`
  font-size: 3rem;
`;

const Action = styled.p``;

const EmptyCart = () => {
  return (
    <Container>
      <Message>Your cart is currently empty</Message>
      <HeadphoneIcon />
    </Container>
  );
};

export default EmptyCart;
