import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

const translateVertically = {
  initial: {
    translateY: '-150%',
  },
  final: {
    translateY: 0,
    transition: {
      delayChildren: 0.5,
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const translateHorizontally = {
  initial: {
    translateX: '100%',
  },
  final: {
    translateX: 0,
    transition: {
      delayChildren: 0.5,
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const headphoneVariant = {
  initial: {
    translateY: -100,
    opacity: 0,
  },
  final: {
    translateY: 0,
    opacity: 1,
    transition: {
      delay: 1.25,
      type: 'spring',
    },
  },
};

const opacityVariant = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
  },
};

const Header = styled(motion.header)`
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

const HeroTextContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 1rem 4rem;
  padding: 1rem;
  mix-blend-mode: luminosity;
  color: #565656;
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
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadphoneImage = styled(motion.img)`
  display: block;
  width: 100%;
  max-width: 500px;
  mix-blend-mode: multiply;
  will-change: opacity;
  filter: contrast(90%);
`;

const HeadphonesButton = styled(motion.a)`
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

const EarbudsButton = styled(motion.a)`
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
    <Header variants={translateVertically} initial='initial' animate='final'>
      <ImageContainer>
        <HeadphoneImage
          variants={headphoneVariant}
          src='/images/headphones/headphone-1.png'
          alt='White headphones.'
        />
      </ImageContainer>
      <HeroTextContainer variants={opacityVariant}>
        <h1>
          The future of
          <br /> <span>sound</span>
        </h1>
      </HeroTextContainer>
      <Link href='/products?type=headphones'>
        <HeadphonesButton variants={opacityVariant}>
          Headphones
        </HeadphonesButton>
      </Link>
      <Link href='/products?type=earbuds'>
        <EarbudsButton variants={opacityVariant}>Earbuds</EarbudsButton>
      </Link>
    </Header>
  );
};

export default Hero;
