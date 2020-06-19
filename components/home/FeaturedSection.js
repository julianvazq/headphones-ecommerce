import React from 'react';
import styled from 'styled-components';
import Stars from '../products/Stars';
import Link from 'next/link';

const FeaturedSectionContainer = styled.section`
  /* background: var(--primary); */
  background-image: linear-gradient(to top, var(--primary) 0%, #00aaa0 100%);
  color: var(--dark);
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    flex-direction: row;
    background: linear-gradient(
      to right,
      var(--primary) 0%,
      var(--primary) 50%,
      #fff 50%,
      #fff 100%
    );
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-family: 'Oswald', sans-serif;
  color: var(--dark);
  padding: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;

  &:last-of-type {
    display: none;
  }

  @media (min-width: 1000px) {
    width: 50%;

    &:last-of-type {
      display: flex;
    }
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;

  & > * {
    margin-bottom: 1rem;
  }

  & *:last-child {
    margin-bottom: 0;
  }

  img {
    display: block;
    width: 100%;
    cursor: pointer;
  }

  h3 {
    font-size: 1.5rem;
    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;
  }

  p {
    font-weight: 600;
    font-size: 1.25rem;

    @media (min-width: 700px) {
      font-size: 1.5rem;
    }
  }
`;

const CTAContainer = styled.div`
  margin: 2rem 0;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 1px;
`;

const LimitedEdition = styled.div`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;

  color: var(--dark);
  text-align: center;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 600px) {
    padding: 1.5rem 2rem;
  }
`;

const ActionButton = styled.a`
  font-size: 1.25rem;
  display: block;
  text-align: center;
  padding: 1rem 2rem;
  background: var(--dark);
  color: var(--light);

  &:visited {
    color: var(--light);
  }
`;

const FeaturedSection = ({ first, second }) => {
  return (
    <>
      <Heading>Featured</Heading>
      <FeaturedSectionContainer>
        <FlexContainer>
          <ProductContainer>
            <Link href={`/products/${first.model}`} passHref>
              <img src={first.image} alt={first.model} />
            </Link>
            <Link href={`/products/${first.model}`} passHref>
              <h3>{first.model}</h3>
            </Link>
            <Stars rating={first.rating} featured={1} white={1} />
            <p>${first.price}</p>
          </ProductContainer>
          <CTAContainer>
            <LimitedEdition reverse>Limited Edition</LimitedEdition>
            <Link href={`/products/${first.model}`} passHref>
              <ActionButton>See details</ActionButton>
            </Link>
          </CTAContainer>
        </FlexContainer>
        <FlexContainer>
          <ProductContainer>
            <Link href={`/products/${second.model}`} passHref>
              <img src={second.image} alt={second.model} />
            </Link>
            <Link href={`/products/${second.model}`} passHref>
              <h3>{second.model}</h3>
            </Link>
            <Stars rating={second.rating} featured={1} />
            <p>${second.price}</p>
          </ProductContainer>
          <CTAContainer>
            <LimitedEdition>Limited Edition</LimitedEdition>
            <Link href={`/products/${second.model}`} passHref>
              <ActionButton>See details</ActionButton>
            </Link>
          </CTAContainer>
        </FlexContainer>
      </FeaturedSectionContainer>
    </>
  );
};

export default FeaturedSection;
