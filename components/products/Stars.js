import React from 'react';
import styled from 'styled-components';
import { MdStar, MdStarHalf } from 'react-icons/md';

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);

  span {
    font-weight: 600;
    margin-left: 0.25rem;
    color: var(--dark);
  }
`;

const StarIcon = styled(MdStar)`
  font-size: 1.5rem;

  @media (min-width: 500px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

const HalfStarIcon = styled(MdStarHalf)`
  font-size: 1.5rem;

  @media (min-width: 500px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1000px) {
    font-size: 1.5rem;
  }
`;

const Stars = ({ rating }) => {
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
    <StarContainer>
      {getStars(rating)}
      <span>({rating})</span>
    </StarContainer>
  );
};

export default Stars;
