import React from 'react';
import Header from './features/Header'
import IconLayout from './features/IconLayout';
import SiteBd from './features/SiteBd';
import Footer from './features/Footer';

const App: React.FC = () => {
  return (
    <div className="site">
      <IconLayout />
      <Header />
      <SiteBd />
      <Footer />
    </div>
  );
}

export default App;
