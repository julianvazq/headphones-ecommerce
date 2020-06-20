import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { headphones, earbuds } from '../public/products';
import ProductGrid from '../components/products/ProductGrid';
import ContainerMaxWidth from '../components/utils/ContainerMaxWidth';
import Filter from '../components/products/Filter';
import { evaluateProperties } from '../components/context/cookieUtils';

const SectionContainer = styled.section`
  background: var(--light);
  color: var(--dark);
  padding: 2rem 0;
`;

const Products = ({ initialProducts, headphones, earbuds }) => {
  const router = useRouter();
  const [productType, setProductType] = useState(router.query.type);
  const [priceSort, setPriceSort] = useState(null);
  const [ratingSort, setRatingSort] = useState(null);
  const [products, setProducts] = useState(initialProducts);

  useEffect(() => {
    router.push(`/products?type=${productType}`, undefined, { shallow: true });

    if (productType === 'headphones') {
      setProducts(headphones);
    } else {
      setProducts(earbuds);
    }

    setPriceSort(null);
    setRatingSort(null);
  }, [productType]);

  useEffect(() => {
    if (priceSort === null) return;

    if (priceSort === 'low to high') {
      sortProducts(products, 'price', 'desc');
    } else {
      sortProducts(products, 'price');
    }
  }, [priceSort]);

  useEffect(() => {
    if (ratingSort === null) return;

    if (ratingSort === 'low to high') {
      sortProducts(products, 'rating', 'desc');
    } else {
      sortProducts(products, 'rating');
    }
  }, [ratingSort]);

  const sortProducts = (products, key, sorting = 'asc') => {
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (sorting === 'asc') {
        return parseFloat(b[key]) - parseFloat(a[key]);
      }

      return parseFloat(a[key]) - parseFloat(b[key]);
    });

    setProducts(sortedProducts);
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <>
      <Head>
        <title>Products | {capitalize(productType)}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <SectionContainer>
        <ContainerMaxWidth>
          <Filter
            productType={productType}
            setProductType={setProductType}
            priceSort={priceSort}
            setPriceSort={setPriceSort}
            ratingSort={ratingSort}
            setRatingSort={setRatingSort}
            count={products.length}
          />
          <ProductGrid products={products} />
        </ContainerMaxWidth>
      </SectionContainer>
    </>
  );
};

export async function getServerSideProps({ req, query }) {
  /* Check if product is in cart (stored in cookies)
   and set inCart key value.
   This will allow to server-side render the CSS
   displaying whether a product is in the cart
   */

  /* Gets headphones and earbuds (updated products based on cookies) */
  const headphonesArray = headphones.map((product) =>
    evaluateProperties(req, product)
  );
  const earbudsArray = earbuds.map((product) =>
    evaluateProperties(req, product)
  );

  const initialProducts =
    query.type === 'headphones' ? headphonesArray : earbudsArray;

  return {
    props: {
      initialProducts,
      headphones: headphonesArray,
      earbuds: earbudsArray,
    },
  };
}

export default Products;
