import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ProductsSection from '../components/home/ProductsSection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <ProductsSection />
    </motion.div>
  );
}
