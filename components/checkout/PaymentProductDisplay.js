import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #cbcbcb;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--dark);

  &:first-of-type {
    margin-top: 0;
  }
`;

const ImgContainer = styled.div`
  width: 100px;
  background: var(--light);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 10px;
  border: 0.5px solid #cbcbcb;
  position: relative;
  margin-right: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    right: -12.5px;
    top: -12.5px;
    background: #acacac;
    color: var(--light);
    font-size: 0.9rem;
  }

  img {
    display: block;
    width: 60px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Model = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  margin-right: 1rem;
`;

const RowTotal = styled.p``;

const PaymentProductDisplay = ({ model, quantity, price, image }) => {
  return (
    <Container>
      <ImgContainer>
        <img src={image} alt={model} />
        <div>{quantity}</div>
      </ImgContainer>
      <InfoContainer>
        <Model>{model}</Model>
        <RowTotal>${price * quantity}</RowTotal>
      </InfoContainer>
    </Container>
  );
};

export default PaymentProductDisplay;
