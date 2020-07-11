import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

const backdropVariant = {
  initial: { opacity: 0 },
  final: { opacity: 1 },
};

const sidebarVariant = {
  initial: { translateX: '100%' },
  final: {
    translateX: 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      damping: '20',
    },
  },
};

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
`;

const Sidebar = styled(motion.div)`
  font-family: 'Oswald', sans-serif;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: ${(props) => (props.cart ? 'var(--body)' : 'var(--primary)')};
  position: fixed;
  right: 0;
  padding: 2rem;
  z-index: 2;
  overscroll-behavior-y: none;
  overflow-y: ${(props) => props.cart && 'scroll'};

  &:before {
    content: '';
    position: absolute;
    top: 106px;
    left: 0;
    height: 100%;
    width: 100%;
    max-width: 285px;
    z-index: -1;
    background-image: url('/images/headphones/headphone-white-half.png');
    filter: contrast(90%);
    opacity: ${(props) => (props.cart ? '0.2' : '0.4')};
    mix-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: 240px;
  }

  @media (min-width: 700px) {
    width: 50%;
  }
`;

const CloseButton = styled.button`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.cart ? 'var(--dark)' : 'var(--light)')};
  margin-left: auto;
  margin-bottom: 2rem;
  z-index: 5;
  position: relative;
  overflow: visible;

  svg {
    font-size: 3rem;
    overflow: visible;
    flex: 1;
  }
`;

const AnimatedSidebar = ({ handleShowSidebar, cart = false, children }) => {
  const navRef = useRef();

  const closeSidebar = () => {
    handleShowSidebar(null);
  };

  useEffect(() => {
    navRef.current.focus();
  }, []);

  return (
    <motion.div>
      <Backdrop
        onClick={closeSidebar}
        variants={backdropVariant}
        initial='initial'
        animate='final'
        exit='initial'
      />
      <Sidebar
        cart={cart}
        variants={sidebarVariant}
        initial='initial'
        animate='final'
        exit='initial'
      >
        <CloseButton ref={navRef} onClick={closeSidebar} cart={cart}>
          <MdClose />
        </CloseButton>
        {children}
      </Sidebar>
    </motion.div>
  );
};

export default AnimatedSidebar;
