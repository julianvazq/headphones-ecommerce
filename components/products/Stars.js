import React from 'react';
import styled, { css } from 'styled-components';
import { MdStar, MdStarHalf } from 'react-icons/md';

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.white ? 'var(--light)' : 'var(--primary)')};

  span {
    font-weight: 600;
    margin-left: 0.25rem;
    color: var(--dark);

    @media (min-width: 440px) {
      font-size: ${(props) => props.featured && '1.25rem'};
    }
  }
`;

const starStyling = css`
  filter: ${(props) =>
    props.featured && 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2))'};
  font-size: 1.5rem;

  @media (min-width: 440px) {
    font-size: ${(props) => props.featured && '1.75rem'};
  }

  @media (min-width: 500px) {
    font-size: ${(props) => !props.featured && '1.25rem'};
  }

  @media (min-width: 1000px) {
    font-size: ${(props) => (props.featured ? '2rem' : '1.5rem')};
  }
`;

const StarIcon = styled(MdStar)`
  ${starStyling}
`;

const HalfStarIcon = styled(MdStarHalf)`
  ${starStyling}
`;

const Stars = ({ rating, featured, white }) => {
  const getStars = (rating) => {
    const integer = Math.floor(rating);

    const stars = [];

    for (let i = 0; i < integer; i++) {
      stars.push(<StarIcon key={i} featured={featured} />);
    }

    if (rating % integer !== 0) {
      stars.push(<HalfStarIcon key={stars.length} featured={featured} />);
    }

    return stars;
  };

  return (
    <StarContainer featured={featured} white={white}>
      {getStars(rating)}
      <span>({rating})</span>
    </StarContainer>
  );
};

export default Stars;
