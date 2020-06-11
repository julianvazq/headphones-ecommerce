import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { headphones, earbuds } from '../../public/products';
import ProductGrid from './ProductGrid';

const SectionContainer = styled.section`
  background: var(--light);
  margin-top: 57px;
  padding: 4rem 2rem;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1.125rem;
  border-bottom: 2px solid var(--primary);

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: 'Oswald', sans-serif;
  color: var(--dark);
  margin-bottom: 0.5rem;

  @media (min-width: 700px) {
    margin-right: 2rem;
  }
`;

const ViewMoreButton = styled.a`
  text-align: center;
  display: inline-block;
  padding: 0.5rem 1rem;
  color: var(--light);
  background: var(--primary);
`;

const ProductsSection = () => {
  return (
    <SectionContainer>
      <HeadingContainer>
        <SectionTitle>Headphones</SectionTitle>
        <Link href='/products?type=headphones'>
          <ViewMoreButton>View more</ViewMoreButton>
        </Link>
      </HeadingContainer>
      <ProductGrid products={headphones} />
      <HeadingContainer>
        <SectionTitle>Earbuds</SectionTitle>
        <Link href='/products?type=earbuds'>
          <ViewMoreButton>View more</ViewMoreButton>
        </Link>
      </HeadingContainer>
      <ProductGrid products={earbuds} />
    </SectionContainer>
  );
};

export default ProductsSection;
