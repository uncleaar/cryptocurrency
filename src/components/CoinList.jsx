import React, { useState, useEffect, useContext } from 'react';

import coinGecko from '../apis/coinGecko';
import { WatchListContext } from '../context/watchListContext';
import Coin from './Coin';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { watchList } = useContext(WatchListContext);

  console.log(watchList);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinGecko.get('/coins/markets', {
        params: {
          vs_currency: 'usd',
          ids: watchList.join(','),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      <div>Loading</div>;
    }

    return (
      <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
