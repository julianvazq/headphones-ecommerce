import { motion } from 'framer-motion';
import Hero from '../components/hero/Hero';
import ProductsSection from '../components/products/ProductsSection';
import { headphones, earbuds } from '../public/products';
import { evaluateProperties } from '../components/context/cookieUtils';

export default function Home({ headphones, earbuds }) {
  return (
    <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <Hero />
      <ProductsSection headphones={headphones} earbuds={earbuds} />
    </motion.div>
  );
}

export async function getServerSideProps({ req }) {
  /* Check if products in JSON file are in cart 
     (passed by cookies).
    If so, add isCart = true
  */

  const headphonesArray = headphones.map((product) =>
    evaluateProperties(req, product)
  );
  const earbudsArray = earbuds.map((product) =>
    evaluateProperties(req, product)
  );

  return {
    props: {
      headphones: headphonesArray,
      earbuds: earbudsArray,
    },
  };
}
