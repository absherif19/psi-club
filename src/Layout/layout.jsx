import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow px-18 p-6 space-y-6">
        {children}
      </main>

      {/* Bottom footer */}
      <Footer />
    </div>
  );
};

export default Layout;
