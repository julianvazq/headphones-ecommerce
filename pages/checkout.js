import React from 'react';
import { motion } from 'framer-motion';
import { parseCookies } from '../components/context/cookieUtils';

const Checkout = ({ cart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Checkout</h1>
      {JSON.parse(cart).map((product) => (
        <p>{product.model}</p>
      ))}
    </motion.div>
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
