import React from 'react';
import Nav from './Nav';

const Layout = ({ showMenu, handleShowMenu, children }) => {
  return (
    <>
      <Nav showMenu={showMenu} handleShowMenu={handleShowMenu} />
      {children}
    </>
  );
};

export default Layout;
