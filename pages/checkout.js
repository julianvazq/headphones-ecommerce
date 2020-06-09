import React from 'react';
import { motion } from 'framer-motion';

const Checkout = () => {
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
