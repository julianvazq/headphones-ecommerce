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
  const [products, setProducts] = useState(
    productType === 'headphones' ? headphones : earbuds
  );

  // const products = productType === 'headphones' ? headphones : earbuds;

  useEffect(() => {
    setProductType(router.query.type);
  }, []);

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
    const sortedProducts = [...products];
    sortedProducts.sort((a, b) => {
      if (sorting === 'asc') {
        return parseFloat(b[key]) - parseFloat(a[key]);
      }

      return parseFloat(a[key]) - parseFloat(b[key]);
    });

    setProducts(sortedProducts);
  };

  return (
    <SectionContainer>
      <ContainerMaxWidth>
        <Filter
          productType={productType}
          setProductType={setProductType}
          priceSort={priceSort}
          setPriceSort={setPriceSort}
          ratingSort={ratingSort}
          setRatingSort={setRatingSort}
        />
        <ProductGrid products={products} />
      </ContainerMaxWidth>
    </SectionContainer>
  );
};

export default Products;
