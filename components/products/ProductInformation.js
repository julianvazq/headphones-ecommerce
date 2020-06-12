import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MdStar, MdStarHalf } from 'react-icons/md';

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  margin-bottom: 4rem;

  img {
    display: block;
    width: 100%;
  }

  @media (min-width: 800px) {
    width: 50%;
    margin-bottom: 0;
    margin-right: 4rem;
  }
`;

const InformationContainer = styled.div`
  background: var(--body);
  padding: 2rem;
  flex: 1;
`;

// H1 + Stock
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 1.75rem;
    margin-right: 0.5rem;
  }
`;

const Stock = styled.p`
  /* flex: 1; */
  width: max-content;
  white-space: nowrap;
  align-self: flex-start;
  font-weight: 600;
  color: ${(props) => props.outOfStock && '#bc0000'};

  span {
    color: var(--primary);
    font-weight: 700;
  }
`;

const Type = styled.p`
  font-weight: 500;
`;

const Shipping = styled.p`
  font-weight: 500;
`;

const Description = styled.p`
  font-weight: 400;
  text-transform: none;
  margin: 1rem 0;
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: 600;
    margin-left: 0.25rem;
  }
`;

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

const ProductInformation = ({
  model,
  type,
  price,
  rating,
  image,
  description,
  colors,
  stock,
}) => {
  const getStars = (rating) => {
    const integer = Math.floor(rating);

    const stars = [];

    for (let i = 0; i < integer; i++) {
      stars.push(<StarIcon key={i} />);
    }

    if (rating % integer !== 0) {
      stars.push(<HalfStarIcon key={stars.length} />);
    }

    return stars;
  };

  return (
    <ProductContainer>
      <ImageContainer>
        <img src={image} alt={model} />
      </ImageContainer>
      <InformationContainer>
        <HeadingContainer>
          <h1>{model}</h1>
          <StarContainer>
            {getStars(rating)}
            <span>({rating})</span>
          </StarContainer>
        </HeadingContainer>
        <Type>{type}</Type>
        <Description>{description}</Description>
        {stock ? (
          <Stock>
            In stock: <span>{stock}</span>
          </Stock>
        ) : (
          <Stock outOfStock>Out of stock</Stock>
        )}
      </InformationContainer>
    </ProductContainer>
  );
};

export default ProductInformation;
