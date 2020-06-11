import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { headphones, earbuds } from '../../public/products';

const ProductPage = (props) => {
  const router = useRouter();
  console.log('props: ', props);
  console.log(router.query);
  return (
    <div>
      <h1>product</h1>
    </div>
  );
};

export async function getStaticPaths() {
  // Return a list of possible value for id
  const allProducts = [...headphones, ...earbuds];
  const listOfUrls = allProducts.map((product) => {
    return {
      params: {
        model: product.url,
      },
    };
  });

  console.log(listOfUrls);
  return {
    paths: listOfUrls,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const allProducts = [...headphones, ...earbuds];
  const product = allProducts.find((p) => params.model === p.url);

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
