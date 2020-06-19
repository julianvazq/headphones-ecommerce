import React, { useContext } from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { CartContext } from '../context/CartContext';
import { IoIosArrowBack } from 'react-icons/io';

const Container = styled.section`
  width: 100%;
  padding: 4rem;
  color: var(--dark);

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const InnerContainer = styled.div`
  max-width: 750px;

  @media (min-width: 1000px) {
    margin-left: auto;
  }
`;

const GridForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0.5rem;
  grid-column-gap: 1rem;

  @media (min-width: 800px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Heading = styled.h2`
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.25rem;
  grid-column: 1 / -1;
  margin-top: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #cbcbcb;

  &:first-of-type {
    margin-top: 0;
  }
`;

const formStyles = css`
  display: flex;
  flex-direction: column;
  text-transform: none;

  label {
    margin-bottom: 0.25rem;
  }

  input {
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid #cbcbcb;
  }
`;

const LongForm = styled.div`
  ${formStyles}
  grid-column: 1 / -1;
`;

const MediumForm = styled.div`
  ${formStyles}
  grid-column: 1 / -1;

  @media (min-width: 800px) {
    grid-column: span 3;
  }
`;

const ShortForm = styled.div`
  ${formStyles}
  grid-column: 1 / -1;

  @media (min-width: 800px) {
    grid-column: span 2;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const OrderButton = styled.a`
  font-family: 'Oswald', sans-serif;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--light);
  background: var(--primary);
  border-radius: 0.3rem;

  &:visited {
    color: var(--light);
  }
`;

const GoBackButton = styled.a`
  font-weight: 500;
  letter-spacing: 1px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.25rem;
  }
`;

const PaymentForm = ({ cart }) => {
  const { getCartTotal } = useContext(CartContext);

  return (
    <Container>
      <InnerContainer>
        <GridForm>
          <Heading>Contact Information</Heading>
          <LongForm>
            <label>Email</label>
            <input
              type='email'
              placeholder='johndoe@email.com'
              defaultValue=''
            />
          </LongForm>
          <Heading>Shipping address</Heading>
          <MediumForm>
            <label>First name</label>
            <input type='text' placeholder='John' defaultValue='' />
          </MediumForm>
          <MediumForm>
            <label>Last name</label>
            <input type='text' placeholder='Doe' defaultValue='' />
          </MediumForm>
          <LongForm>
            <label>Address</label>
            <input
              type='text'
              placeholder='1375 E Buena Vista Dr'
              defaultValue=''
            />
          </LongForm>
          <LongForm>
            <label>City</label>
            <input type='text' placeholder='Orlando' defaultValue='' />
          </LongForm>
          <ShortForm>
            <label>Country</label>
            <input type='text' placeholder='United States' defaultValue='' />
          </ShortForm>
          <ShortForm>
            <label>State/Province</label>
            <input type='text' placeholder='Florida' defaultValue='' />
          </ShortForm>
          <ShortForm>
            <label>ZIP Code</label>
            <input type='text' placeholder='32830' defaultValue='' />
          </ShortForm>
        </GridForm>
        <ButtonContainer>
          <Link href='/checkout' passHref>
            <GoBackButton>
              <IoIosArrowBack />
              <span>Back to cart</span>
            </GoBackButton>
          </Link>
          <Link href='/checkout/confirmation' passHref>
            <OrderButton>Place Order</OrderButton>
          </Link>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
};

export default PaymentForm;
