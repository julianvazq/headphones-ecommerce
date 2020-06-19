import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import ContainerFluid from '../../components/utils/ContainerFluid';
import OrderReminder from '../../components/checkout/OrderReminder';
import { CartContext } from '../../components/context/CartContext';
import { getCartCookie } from '../../components/context/cookieUtils';
import EmptyCart from '../../components/products/EmptyCart';
import PaymentForm from '../../components/checkout/PaymentForm';

const PaymentSectionContainer = styled.section`
  min-height: 100vh;
  background: var(--light);
  width: 100%;
  margin: auto;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

const PaymentPage = ({ initialCart }) => {
  /*State used exclusively to check if cart is empty (from server and client) */
  const { cart: cartContext, getCartTotal } = useContext(CartContext);

  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    setCart(cartContext);
  }, [cartContext]);

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <ContainerFluid background='var(--light)'>
      <PaymentSectionContainer>
        <FlexContainer>
          <PaymentForm cart={cart} />
          <OrderReminder cart={cart} />
        </FlexContainer>
      </PaymentSectionContainer>
    </ContainerFluid>
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

export default PaymentPage;
