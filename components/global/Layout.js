import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useRouter } from 'next/router';

const Layout = ({ showingCartOrMenu, handleShowSidebar, children }) => {
  const router = useRouter();
  return (
    <>
      <Nav
        showingCartOrMenu={showingCartOrMenu}
        handleShowSidebar={handleShowSidebar}
        hide={router.pathname === '/checkout/payment'}
      />
      {children}
      <Footer hide={router.pathname === '/checkout/payment'} />
    </>
  );
};

export default Layout;
