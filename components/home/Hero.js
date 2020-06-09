import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: 700px) {
    padding-bottom: 57px;
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    /* Nav height: 114px */
    top: -114px;
    right: 0;
    width: 50%;
    /* 114px top + 57px bottom = 171px extra space needed */
    height: calc(100% + 171px);
    background: var(--primary);
    z-index: -1;
  }
`;

const HeroTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 1rem 2rem;
  padding: 1rem;
  mix-blend-mode: luminosity;
  /* color: var(--dark); */
  color: #565656;
  /* background-color: rgba(0, 0, 0, 0.1); */
  text-align: center;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;

  h1 {
    font-size: 2.75rem;
  }

  span {
    color: var(--dark);
    font-size: 4rem;
  }

  @media (min-width: 700px) {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 2rem;
    border-radius: 100px;
  }

  @media (min-width: 1200px) {
    /* top: 30%; */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadphoneImage = styled.img`
  display: block;
  width: 100%;
  max-width: 700px;
  mix-blend-mode: multiply;
`;

const HeadphonesButton = styled.a`
  background: rgba(0, 0, 0, 0.8);
  color: var(--body);
  margin: 0 2rem 2rem;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.25rem;
  width: 300px;
  text-align: center;
  cursor: pointer;

  @media (min-width: 700px) {
    margin-top: 5rem;
  }
`;

const EarbudsButton = styled.a`
  background: rgba(0, 0, 0, 0.8);
  color: var(--body);
  margin: 0 2rem;
  padding: 1rem;
  font-weight: 700;
  font-size: 1.25rem;
  width: 300px;
  text-align: center;
  cursor: pointer;
`;

const Hero = () => {
  return (
    <Header>
      <ImageContainer>
        <HeadphoneImage
          src='/images/headphone-white-cover-no-space.png'
          alt='White headphones.'
        />
      </ImageContainer>
      <HeroTextContainer>
        <h1>
          The future of
          <br /> <span>sound</span>
        </h1>
      </HeroTextContainer>
      <Link href='/headphones'>
        <HeadphonesButton>Headphones</HeadphonesButton>
      </Link>
      <Link href='/earbuds'>
        <EarbudsButton>Earbuds</EarbudsButton>
      </Link>
    </Header>
  );
};

export default Hero;
