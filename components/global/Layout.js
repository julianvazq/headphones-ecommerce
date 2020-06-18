import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ showingCartOrMenu, handleShowSidebar, children }) => {
  return (
    <>
      <Nav
        showingCartOrMenu={showingCartOrMenu}
        handleShowSidebar={handleShowSidebar}
      />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
