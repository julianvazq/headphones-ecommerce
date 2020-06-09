import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  background: var(--light);
  margin-top: 57px;
  padding: 2rem;
`;

const ProductsSection = () => {
  return (
    <SectionContainer>
      <h2>Products</h2>
    </SectionContainer>
  );
};

export default ProductsSection;
