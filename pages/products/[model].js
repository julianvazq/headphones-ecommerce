import React from 'react';
import { headphones, earbuds } from '../../public/products';
import styled from 'styled-components';
import ContainerMaxWidth from '../../components/utils/ContainerMaxWidth';
import Breadcrumbs from '../../components/products/Breadcrumbs';
import ProductInformation from '../../components/products/ProductInformation';
import SimilarProducts from '../../components/products/SimilarProducts';
import { addInCartProperty } from '../../components/context/cookieUtils';

const SectionContainer = styled.section`
  background: var(--light);
  color: var(--dark);
  padding: 2rem 0;
`;

const ProductPage = ({ product, similarProducts }) => {
  return (
    <SectionContainer>
      <ContainerMaxWidth>
        <Breadcrumbs model={product.model} type={product.type} />
        <ProductInformation initialInCart={product.inCart} product={product} />
        <SimilarProducts products={similarProducts} model={product.model} />
      </ContainerMaxWidth>
    </SectionContainer>
  );
};

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

  /* Gets headphones and earbuds (updated products based on cookies)
     to pass to SimilarProducts  */
  const headphonesArray = headphones.map((product) =>
    addInCartProperty(req, product)
  );
  const earbudsArray = earbuds.map((product) =>
    addInCartProperty(req, product)
  );

  const similarProducts =
    product.type === 'headphones' ? headphonesArray : earbudsArray;

  console.log(product);

  return {
    props: {
      product,
      similarProducts,
    },
  };
}

export default ProductPage;
