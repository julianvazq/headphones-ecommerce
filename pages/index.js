import { motion } from 'framer-motion';
import Hero from '../components/hero/Hero';
import ProductsSection from '../components/products/ProductsSection';
import { headphones, earbuds } from '../public/products';

export default function Home() {
  return (
    <motion.div
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    >
      <Hero />
      <ProductsSection />
    </motion.div>
  );
}

// export async function getServerSideProps({ req }) {
//   const headphones = headphones;
//   const earbuds = earbuds;

//   const product = allProducts.find((p) => params.model === p.model);

//   /* Check if product is in cart (stored in cookies)
//    and set inCart key value.
//    This will allow to server-side render the CSS
//    displaying whether a product is in the cart
//    */
//   const cookies = parseCookies(req);
//   if (checkIfInCart(cookies.cart, product)) {
//     product.inCart = true;
//   } else {
//     product.inCart = false;
//   }

//   return {
//     props: {
//       product,
//     },
//   };
// }
