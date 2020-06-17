import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import styled from 'styled-components';
import TableHeadings from './TableHeadings';
import ProductOrder from './ProductOrder';

const OrdersTable = styled.div``;

const OrderSummary = () => {
  const { cart, handleCartChange, updateProperty } = useContext(CartContext);
  return (
    <OrdersTable>
      <TableHeadings />
      {cart.map((product) => (
        <ProductOrder key={product.model} product={product} />
      ))}
    </OrdersTable>
  );
};

export default OrderSummary;
