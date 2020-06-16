import React, { useState, useEffect, useContext } from 'react';
import { headphones, earbuds } from '../../public/products';
import styled from 'styled-components';
import ContainerMaxWidth from '../../components/utils/ContainerMaxWidth';
import Breadcrumbs from '../../components/products/Breadcrumbs';
import ProductInformation from '../../components/products/ProductInformation';
import SimilarProducts from '../../components/products/SimilarProducts';
// import { CartContext } from '../../components/context/CartContext';
import { addInCartProperty } from '../../components/context/cookieUtils';

const SectionContainer = styled.section`
  background: var(--light);
  color: var(--dark);
  padding: 2rem 0;
`;

const ProductPage = ({ product, similarProducts }) => {
  // const { cart, handleCartChange, checkIfInCart } = useContext(CartContext);
  // const [inCart, setInCart] = useState(product.inCart);

  // const handleClick = () => {
  //   handleCartChange(product);
  // };

  // console.log(
  //   'new page: ',
  //   product.model,
  //   'product.inCart: ',
  //   product.inCart,
  //   'inCart: ',
  //   inCart
  // );

  // console.log(inCart);

  // useEffect(() => {
  //   setInCart(checkIfInCart(product));
  // }, [cart]);

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
          // handleClick={handleClick}
          initialInCart={product.inCart}
          product={product}
        />
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
