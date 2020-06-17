import React from 'react';
import { FaHeadphones } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  color: var(--dark);
  text-align: center;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;

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

const EmptyCart = () => {
  return (
    <Container>
      <Message>Your cart is currently empty</Message>
      <HeadphoneIcon />
    </Container>
  );
};

export default EmptyCart;
