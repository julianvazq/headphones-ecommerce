import styled from 'styled-components';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MdClose } from 'react-icons/md';

const backdropVariant = {
  initial: { opacity: 0 },
  final: { opacity: 1 },
  exit: { opacity: 0 },
};

const menuVariant = {
  initial: { x: '100%', opacity: 0 },
  final: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: { x: '100%', opacity: 0 },
};

const MenuBackground = styled(motion.div)`
  height: 100vh;
  width: 100%;
  background: var(--primary);
  position: absolute;
  right: 0;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;

  a {
    display: block;
    font-size: 2rem;
    color: var(--light);
    margin: 0.5rem 0;
  }

  a:last-child {
    position: absolute;
    bottom: 2rem;
    left: 0;
    right: 0;
  }

  @media (min-width: 700px) {
    width: 40%;
  }
`;

const MenuHeading = styled.h2`
  color: var(--dark);
  font-size: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 0.75rem;
  border-bottom: 2px solid var(--dark);
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
`;

const CloseButton = styled(MdClose)`
  display: block;
  color: var(--light);
  font-size: 3rem;
  align-self: flex-end;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const MenuOpen = ({ showMenu, handleShowMenu }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showMenu && (
        <>
          <Backdrop
            onClick={handleShowMenu}
            variants={backdropVariant}
            initial='initial'
            animate='final'
            exit='initial'
          ></Backdrop>
          <MenuBackground
            variants={menuVariant}
            initial='initial'
            animate='final'
            exit='initial'
          >
            <CloseButton onClick={handleShowMenu} />
            <MenuHeading>Menu</MenuHeading>
            <a>Cart</a>
            <Link href='/products/headphones'>
              <a>Headphones</a>
            </Link>
            <Link href='/products/earbuds'>
              <a>Earbuds</a>
            </Link>
            <Link href='/products/accessories'>
              <a>Accessories</a>
            </Link>
            <a>Contact Us</a>
          </MenuBackground>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuOpen;
