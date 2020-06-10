import React from 'react';
import styled from 'styled-components';
import { MdStar, MdStarHalf } from 'react-icons/md';

const ProductCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--dark);

  & > * {
    margin-bottom: 1rem;
  }

  img {
    display: block;
    width: 100%;
  }
`;

const Title = styled.h2`
  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.125rem;
  }
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0;

  @media (min-width: 500px) {
    font-size: 1rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.125rem;
  }
`;

const StarContainer = styled.div``;

const StarIcon = styled(MdStar)`
  font-size: 1.5rem;
  color: var(--primary);

  @media (min-width: 500px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

const HalfStarIcon = styled(MdStarHalf)`
  font-size: 1.5rem;
  color: var(--primary);

  @media (min-width: 500px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;
MdStarHalf;

const ProductDisplay = ({ model, price, image, rating }) => {
  const getStars = (rating) => {
    const integer = Math.floor(rating);

    const stars = [];

    for (let i = 0; i < integer; i++) {
      stars.push(<StarIcon />);
    }

    if (rating % integer !== 0) {
      stars.push(<HalfStarIcon />);
    }

    return stars;
  };

  return (
    <ProductCard>
      <img src={image} alt={model} />
      <Title>{model}</Title>
      <StarContainer>{getStars(rating)}</StarContainer>
      <Price>{price}</Price>
    </ProductCard>
  );
};

export default ProductDisplay;
