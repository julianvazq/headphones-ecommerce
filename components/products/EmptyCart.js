import React from 'react';
import Link from 'next/link';
import { FaHeadphones } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: block;
`;

const ActionButton = styled.a`
  padding: 1rem 2rem;
  background: var(--dark);
  color: var(--light);
  margin-top: 2rem;

  &:visited {
    color: var(--light);
  }
`;

const EmptyCart = ({ closeSidebar, message }) => {
  return (
    <Container>
      <Message>{message ? message : 'Your cart is currently empty'}</Message>
      <HeadphoneIcon />
      <Link href='/products?type=headphones' passHref>
        <ActionButton onClick={closeSidebar}>Browse products</ActionButton>
      </Link>
    </Container>
  );
};

export default EmptyCart;
