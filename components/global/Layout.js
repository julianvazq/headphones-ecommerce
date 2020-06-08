import React from 'react';
import Nav from './Nav';

const Layout = ({ showingCartOrMenu, handleShowSidebar, children }) => {
  return (
    <>
      <Nav
        showingCartOrMenu={showingCartOrMenu}
        handleShowSidebar={handleShowSidebar}
      />
      {children}
    </>
  );
};

export default Layout;
