import React from 'react';
import Head from 'next/head';
import { headphones, earbuds } from '../../public/products';
import ContainerMaxWidth from '../../components/utils/ContainerMaxWidth';
import Breadcrumbs from '../../components/products/Breadcrumbs';
import ProductInformation from '../../components/products/ProductInformation';
import SimilarProducts from '../../components/products/SimilarProducts';
import { evaluateProperties } from '../../components/context/cookieUtils';
import { SectionContainer } from '../../styles/shared-styles';

const ProductPage = ({ product, similarProducts }) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Head>
        <title>
          {product.model} | {capitalize(product.type)}
        </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <SectionContainer>
        <ContainerMaxWidth>
          <Breadcrumbs model={product.model} type={product.type} />
          <ProductInformation
            initialInCart={product.inCart}
            initialQuantity={product.quantity}
            initialColor={product.color}
            product={product}
          />
          <SimilarProducts products={similarProducts} model={product.model} />
        </ContainerMaxWidth>
      </SectionContainer>
    </>
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
  evaluateProperties(req, product);

  /* Gets headphones and earbuds (updated products based on cookies)
     to pass to SimilarProducts  */
  const headphonesArray = headphones.map((product) =>
    evaluateProperties(req, product)
  );
  const earbudsArray = earbuds.map((product) =>
    evaluateProperties(req, product)
  );

  const similarProducts =
    product.type === 'headphones' ? headphonesArray : earbudsArray;

  return {
    props: {
      product,
      similarProducts,
    },
  };
}

export default ProductPage;
