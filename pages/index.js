import styled from 'styled-components';
import { motion } from 'framer-motion';

const Title = styled.h1`
  font-size: 50px;
  color: var(--primary);
`;

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title>My page</Title>;
    </motion.div>
  );
}
