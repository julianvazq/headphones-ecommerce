import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { headphones, earbuds } from '../public/products';
import ProductGrid from '../components/home/ProductGrid';

const Products = () => {
  const router = useRouter();
  const [productType, setProductType] = useState(router.query.type);
  console.log(router.query);

  const visibleProducts = productType === 'headphones' ? headphones : earbuds;

  const changeVisibleProducts = (type) => {
    setProductType(type);
  };

  return (
    <div>
      <button onClick={() => changeVisibleProducts('headphones')}>
        Headphones
      </button>
      <button onClick={() => changeVisibleProducts('earbuds')}>Earbuds</button>
      <ProductGrid products={visibleProducts} />
    </div>
  );
};

export default Products;
