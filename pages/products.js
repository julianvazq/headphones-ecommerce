import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { headphones, earbuds } from '../public/products';
import ProductGrid from '../components/products/ProductGrid';
import ContainerMaxWidth from '../components/utils/ContainerMaxWidth';
import Filter from '../components/products/Filter';

const SectionContainer = styled.section`
  background: var(--light);
  color: var(--dark);
  padding: 2rem 0;
`;

const Products = () => {
  const router = useRouter();
  const [productType, setProductType] = useState(router.query.type);
  const [priceSort, setPriceSort] = useState(null);
  const [ratingSort, setRatingSort] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProductType(router.query.type);
  }, []);

  useEffect(() => {
    router.push(`/products?type=${productType}`, undefined, { shallow: true });
  }, [productType]);

  //Use multiple useEffects to call function when priceSort or ratingSort change
  useEffect(() => {});

  //   const getSortedProducts = () => {
  //     let products = [];

  //     if (productType === 'headphones') {
  //       products = headphones;
  //     } else {
  //       products = earbuds;
  //     }

  //     if (priceSort === 'high to low') {
  //       sortProducts(products, 'price', 'desc');
  //     } else if (priceSort === 'low to high') {
  //       sortProducts(products, 'price');
  //     }

  //     if (ratingSort === 'high to low') {
  //       sortProducts(products, 'rating', 'desc');
  //     } else if (ratingSort === 'low to high') {
  //       sortProducts(products, 'rating');
  //     }

  //     setProducts(products);
  //   };

  // Sorts in ascending value by default
  const sortProducts = (products, key, sorting = 'asc') => {
    products.sort((a, b) => {
      if (sorting === 'desc') {
        return parseFloat(b[key]) - parseFloat(a[key]);
      }

      return parseFloat(a[key]) - parseFloat(b[key]);
    });
  };

  return (
    <SectionContainer>
      <ContainerMaxWidth>
        <Filter productType={productType} setProductType={setProductType} />
        <ProductGrid products={[]} />
      </ContainerMaxWidth>
    </SectionContainer>
  );
};

export default Products;
