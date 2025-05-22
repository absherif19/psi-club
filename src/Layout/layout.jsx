import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow px-12">
        {children}
      </main>

      {/* Bottom footer */}
      <Footer />
    </div>
  );
};

export default Layout;
