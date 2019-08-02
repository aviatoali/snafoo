import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store'
import LogoIconLayout from './features/LogoIconLayout';
import Header from './features/Header'
import MainLayout from './features/MainLayout';
import Footer from './features/Footer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="site">
        <LogoIconLayout />
        <Header />
        <MainLayout />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
