import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './src/shared/feature/store.js';
import YoutubeHomePage from './src/pages/Youtube/YoutubeHomePage.jsx';
import Home from './src/pages/Restaurant/Home/TopNav.jsx';
import Home1 from './src/pages/Home.jsx';
import Template from './src/pages/shoping/ShopTemplate';
import Products from './src/pages/shoping/Products';
import Account from './src/pages/shoping/Account';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Template />} />
        <Route path="/products" element={<Products />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
