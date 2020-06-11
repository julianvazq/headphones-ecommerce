import React from 'react';
import { headphones, earbuds } from '../../public/products';
import styled from 'styled-components';
import ContainerMaxWidth from '../../components/utils/ContainerMaxWidth';
import Breadcrumbs from '../../components/products/Breadcrumbs';
import ProductInformation from '../../components/products/ProductInformation';

const SectionContainer = styled.section`
  background: var(--light);
  color: var(--dark);
  padding: 2rem 0;
`;

const ProductPage = ({
  product: { model, type, price, image, rating, description, colors, stock },
}) => {
  return (
    <SectionContainer>
      <ContainerMaxWidth>
        <Breadcrumbs model={model} />
        <ProductInformation
          model={model}
          type={type}
          price={price}
          image={image}
          rating={rating}
          description={description}
          colors={colors}
          stock={stock}
        />
      </ContainerMaxWidth>
    </SectionContainer>
  );
};

export async function getStaticPaths() {
  // Return a list of possible values for [model]
  const allProducts = [...headphones, ...earbuds];
  const listOfModels = allProducts.map((product) => {
    return {
      params: {
        model: product.model,
      },
    };
  });

  return {
    paths: listOfModels,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allProducts = [...headphones, ...earbuds];
  const product = allProducts.find((p) => params.model === p.model);

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
