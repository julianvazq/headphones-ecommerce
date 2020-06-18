import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import TableHeadings from './TableHeadings';
import CheckoutProduct from './CheckoutProduct';
import { AnimatePresence } from 'framer-motion';

const OrdersTable = styled.div`
  margin: 2rem 0;
`;

const OrderSummary = () => {
  const { cart, handleCartChange, updateProperty } = useContext(CartContext);

  return (
    <OrdersTable>
      <TableHeadings />
      <AnimatePresence>
        {cart.map((product) => (
          <CheckoutProduct key={product.model} product={product} />
        ))}
      </AnimatePresence>
    </OrdersTable>
  );
};

export default OrderSummary;
