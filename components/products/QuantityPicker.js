import React from 'react';
import styled from 'styled-components';
import { FiMinus, FiPlus } from 'react-icons/fi';

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  border: 1px solid #cbcbcb;
  border-radius: 0.2rem;
  font-size: 1.125rem;
  margin-top: 1rem;

  @media (min-width: 368px) {
    margin-top: 0;
  }
  /* padding: 0.5rem; */
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
`;

const MinusIcon = styled(FiMinus)``;

const PlusIcon = styled(FiPlus)``;

const Quantity = styled.p`
  width: 30px;
  text-align: center;
  font-weight: 600;
`;

const QuantityPicker = ({ quantity, setQuantity }) => {
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <Container>
      <Button onClick={decrementQuantity} disabled={quantity < 2}>
        <MinusIcon />
      </Button>
      <Quantity>{quantity}</Quantity>
      <Button onClick={incrementQuantity}>
        <PlusIcon />
      </Button>
    </Container>
  );
};

export default QuantityPicker;
