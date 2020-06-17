import React from 'react';
import { motion } from 'framer-motion';
import { parseCookies } from '../components/context/cookieUtils';
import ContainerMaxWidth from '../components/utils/ContainerMaxWidth';

const Checkout = ({ cart }) => {
  return (
    <ContainerMaxWidth>
      <h1>Checkout</h1>
      {JSON.parse(cart).map((product) => (
        <p>{product.model}</p>
      ))}
    </ContainerMaxWidth>
  );
};

export async function getServerSideProps({ req }) {
  const cookies = parseCookies(req);

  return {
    props: {
      cart: cookies.cart,
    },
  };
}

export default Checkout;
