import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store'
import Header from './features/Header'
import IconLayout from './features/IconLayout';
import SiteBd from './features/SiteBd';
import Footer from './features/Footer';
import Snacks from './features/Snacks';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="site">
        <IconLayout />
        <Header />
        <Snacks />
        <SiteBd />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
