import React from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../../components/context/CartContext';

const Checkout = () => {
  const { cart, handleCartChange } = useContext(CartContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      cHECKOUT
    </motion.div>
  );
};

export default Checkout;
