import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }

  & *:last-child {
    /* margin-bottom: 0rem; */
  }

  @media (min-width: 600px) {
    & > * {
      margin-right: 2rem;
    }
  }
`;

const InnerContainer = styled.div``;

const Subheading = styled.p`
  text-transform: none;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;

  & button:last-child {
    border-left: none;
  }
`;

const Button = styled.button`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  text-align: center;
  border: 1px solid var(--dark);
  background: ${(props) => props.selected && 'var(--dark)'};
  color: ${(props) => props.selected && 'var(--light)'};
`;

const Showing = styled.p`
  text-transform: none;
  color: var(--added);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0.5rem 0 1rem;
`;

const Filter = ({
  productType,
  setProductType,
  priceSort,
  setPriceSort,
  ratingSort,
  setRatingSort,
  count,
}) => {
  return (
    <>
      <FilterContainer>
        <InnerContainer>
          <Subheading>Product</Subheading>
          <ButtonContainer>
            <Button
              selected={productType === 'headphones'}
              onClick={() => setProductType('headphones')}
            >
              Headphones
            </Button>
            <Button
              selected={productType === 'earbuds'}
              onClick={() => setProductType('earbuds')}
            >
              Earbuds
            </Button>
          </ButtonContainer>
        </InnerContainer>
        <InnerContainer>
          <Subheading>Price</Subheading>
          <ButtonContainer>
            <Button
              selected={priceSort === 'low to high'}
              onClick={() => setPriceSort('low to high')}
            >
              Low to High
            </Button>
            <Button
              selected={priceSort === 'high to low'}
              onClick={() => setPriceSort('high to low')}
            >
              High to Low
            </Button>
          </ButtonContainer>
        </InnerContainer>
        <InnerContainer>
          <Subheading>Rating</Subheading>
          <ButtonContainer>
            <Button
              selected={ratingSort === 'low to high'}
              onClick={() => setRatingSort('low to high')}
            >
              Low to High
            </Button>
            <Button
              selected={ratingSort === 'high to low'}
              onClick={() => setRatingSort('high to low')}
            >
              High to Low
            </Button>
          </ButtonContainer>
        </InnerContainer>
      </FilterContainer>
      <Showing>
        Showing {count} of {count}
      </Showing>
    </>
  );
};

export default Filter;
