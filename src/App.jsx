import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import CoinDetailPage from './pages/CoinDetailPage';
import CoinSummaryPage from './pages/CoinSummaryPage';
import { WatchListContextProvider } from './context/watchListContext';

const App = () => {
  return (
    <>
      <WatchListContextProvider>
        <Router>
          <Header />
          <Route component={CoinSummaryPage} exact path="/" />
        </Router>
      </WatchListContextProvider>
    </>
  );
};

export default App;
