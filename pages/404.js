import React from 'react';
import styled from 'styled-components';
import EmptyCart from '../components/products/EmptyCart';

const ErrorPageContainer = styled.section`
  height: 75vh;
  background: var(--light);
  position: relative;
`;

const PageNotFound = () => {
  return (
    <ErrorPageContainer>
      <EmptyCart message="Weird, I don't see any headphones here..." />
    </ErrorPageContainer>
  );
};

export default PageNotFound;
