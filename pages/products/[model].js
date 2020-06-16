import React, { useState, useContext } from 'react';
import { headphones, earbuds } from '../../public/products';
import styled from 'styled-components';
import ContainerMaxWidth from '../../components/utils/ContainerMaxWidth';
import Breadcrumbs from '../../components/products/Breadcrumbs';
import ProductInformation from '../../components/products/ProductInformation';
import SimilarProducts from '../../components/products/SimilarProducts';
import { CartContext } from '../../components/context/CartContext';
import {
  parseCookies,
  addInCartProperty,
} from '../../components/context/cookieUtils';

const SectionContainer = styled.section`
  background: var(--light);
  color: var(--dark);
  padding: 2rem 0;
`;

const ProductPage = ({ product }) => {
  const { handleCartChange, checkIfInCart } = useContext(CartContext);
  const [inCart, setInCart] = useState(product.inCart);

  const handleCart = () => {
    handleCartChange(product);
    setInCart(!inCart);
  };

  return (
    <SectionContainer>
      <ContainerMaxWidth>
        <Breadcrumbs model={product.model} type={product.type} />
        <ProductInformation
          model={product.model}
          type={product.type}
          price={product.price}
          image={product.image}
          rating={product.rating}
          description={product.description}
          colors={product.colors}
          stock={product.stock}
          handleCartChange={handleCart}
          inCart={inCart}
        />
        <SimilarProducts model={product.model} type={product.type} />
      </ContainerMaxWidth>
    </SectionContainer>
  );
};

// export async function getStaticPaths() {
//   // Return a list of possible values for [model]
//   const allProducts = [...headphones, ...earbuds];
//   const listOfModels = allProducts.map((product) => {
//     return {
//       params: {
//         model: product.model,
//       },
//     };
//   });

//   return {
//     paths: listOfModels,
//     fallback: false,
//   };
// }

export async function getServerSideProps({ params, req }) {
  const allProducts = [...headphones, ...earbuds];
  const product = allProducts.find((p) => params.model === p.model);

  /* Check if product is in cart (stored in cookies)
   and set inCart key value.
   This will allow to server-side render the CSS 
   displaying whether a product is in the cart
   */

  /* Modifies product object by reference */
  addInCartProperty(req, product);

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
