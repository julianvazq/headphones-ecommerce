import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

const backdropVariant = {
  initial: { opacity: 0 },
  final: { opacity: 1 },
};

const sidebarVariant = {
  initial: { x: '100%' },
  final: {
    x: 0,
    transition: { delay: 0.5 },
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
  height: 100vh;
  width: 100%;
  background: var(--primary);
  position: absolute;
  right: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media (min-width: 700px) {
    width: 40%;
  }
`;

const CloseButton = styled(MdClose)`
  display: block;
  color: var(--light);
  font-size: 3rem;
  align-self: flex-end;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const AnimatedSidebar = ({ showSidebar, handleShowSidebar, children }) => {
  const closeSidebar = () => {
    handleShowSidebar(null);
  };

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
        variants={sidebarVariant}
        initial='initial'
        animate='final'
        exit='initial'
      >
        <CloseButton onClick={closeSidebar} />
        {children}
      </Sidebar>
    </motion.div>
  );
};

export default AnimatedSidebar;
