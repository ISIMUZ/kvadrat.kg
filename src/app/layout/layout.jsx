import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Сopywrite from './copywrite/Сopywrite';

const Layout = ({ children, isAdmin, onLogout }) => {
  return (
    <div>
      <Header isAdmin={isAdmin} onLogout={onLogout} />
      {children}
      <Footer />
      <Сopywrite />
    </div>
  );
};

export default Layout;
