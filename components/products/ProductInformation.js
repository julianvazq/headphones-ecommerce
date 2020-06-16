import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Stars from './Stars';
import Colors from './Colors';
import { MdShoppingCart, MdCheckCircle } from 'react-icons/md';
import { CartContext } from '../../components/context/CartContext';

const imageVariant = {
  initial: {
    x: 100,
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
};

const ProductContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled(motion.div)`
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
  align-self: center;
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
  width: max-content;
  white-space: nowrap;
  color: ${(props) => props.outOfStock && '#bc0000'};

  span {
    color: var(--primary);
    font-weight: 700;
  }
`;

const Type = styled.p`
  font-weight: 500;
`;

const Description = styled.p`
  font-weight: 400;
  text-transform: none;
  margin: 1rem 0 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const ColorInfo = styled.p`
  margin-bottom: 0.5rem;

  span {
    text-transform: capitalize;
    font-weight: 600;
  }
`;

const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2.75rem;

  p {
    font-size: 1.5rem;
    font-weight: 600;
  }

  span {
    font-size: 0.9rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 800px) {
    flex-direction: column;
  }
`;

const CartButton = styled.button`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  background: ${(props) =>
    props.inCart ? 'var(--confirmed)' : 'var(--primary)'};
  margin-bottom: 1rem;

  @media (min-width: 600px) {
    width: 48%;
    margin-bottom: 0;
  }

  @media (min-width: 800px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const CheckoutButton = styled(CartButton)`
  margin-bottom: 0;
`;

const CartIcon = styled(MdShoppingCart)`
  font-size: 1.25rem;
  margin-right: 0.5rem;
`;

const CheckmarkIcon = styled(MdCheckCircle)`
  font-size: 1.25rem;
  margin-right: 0.5rem;
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
  // handleClick,
  initialInCart,
  product,
}) => {
  const [selectedColor, setSelectedColor] = useState('Default');
  const { cart, handleCartChange, checkIfInCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(initialInCart);

  const handleClick = () => {
    handleCartChange(product);
  };

  useEffect(() => {
    setInCart(checkIfInCart(product));
  }, [cart, initialInCart]);

  return (
    <ProductContainer>
      <ImageContainer variants={imageVariant} initial='initial' animate='final'>
        <img src={image} alt={model} />
      </ImageContainer>
      <InformationContainer>
        <HeadingContainer>
          <h1>{model}</h1>
          <Stars rating={rating} />
        </HeadingContainer>
        <Type>{type}</Type>
        <Description>{description}</Description>

        <ColorInfo>
          Color: <span>{selectedColor}</span>
        </ColorInfo>
        <ColorsContainer>
          {colors.map((color) => (
            <Colors
              key={color}
              color={color}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          ))}
        </ColorsContainer>
        <PriceContainer>
          <Price>
            <p>${price}</p>
            <span>Free Shipping</span>
          </Price>
          {stock ? (
            <Stock>
              In stock: <span>{stock}</span>
            </Stock>
          ) : (
            <Stock outOfStock>Out of stock</Stock>
          )}
        </PriceContainer>
        <ButtonContainer>
          <CartButton onClick={handleClick} inCart={inCart}>
            <CartIcon />
            {inCart ? 'Added to cart' : 'Add to cart'}
          </CartButton>
          <CheckoutButton>
            <CheckmarkIcon />
            Buy now
          </CheckoutButton>
        </ButtonContainer>
      </InformationContainer>
    </ProductContainer>
  );
};

export default ProductInformation;
