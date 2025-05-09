import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="main-container">
      <Navbar />
      <main className="page-transition">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 