import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { MdPlayArrow } from 'react-icons/md';

const Breadcrumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--dark);

  a {
    font-weight: 600;
  }

  svg {
    color: var(--primary);
    margin: 0 0.5rem;
  }
`;

const Breadcrumbs = ({ model }) => {
  return (
    <Breadcrumb>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <MdPlayArrow />
      </div>
      <div>
        <Link href='/products'>
          <a>Products</a>
        </Link>
        <MdPlayArrow />
      </div>
      {model}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
