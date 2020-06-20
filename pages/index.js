import { motion } from 'framer-motion';
import Head from 'next/head';
import Hero from '../components/home/Hero';
import ProductsSection from '../components/products/ProductsSection';
import { headphones, earbuds } from '../public/products';
import { evaluateProperties } from '../components/context/cookieUtils';
import FeaturedSection from '../components/home/FeaturedSection';

export default function Home({ headphones, earbuds }) {
  return (
    <motion.div>
      <Head>
        <title>Headphones | E-Commerce</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Hero />
      <ProductsSection headphones={headphones} earbuds={earbuds} />
      <FeaturedSection first={headphones[2]} second={headphones[7]} />
    </motion.div>
  );
}

export async function getServerSideProps({ req }) {
  /* If product is in cart (cookies), add inCart = true 
     and set quantity accordingly */
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
