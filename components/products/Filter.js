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
  margin: 1rem 0;
`;

const Filter = ({ productType, setProductType }) => {
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
            <Button>Low to High</Button>
            <Button>High to Low</Button>
          </ButtonContainer>
        </InnerContainer>
        <InnerContainer>
          <Subheading>Rating</Subheading>
          <ButtonContainer>
            <Button>Low to High</Button>
            <Button>High to Low</Button>
          </ButtonContainer>
        </InnerContainer>
      </FilterContainer>
      <Showing>Showing 4 of 4</Showing>
    </>
  );
};

export default Filter;
