import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

// eslint-disable-next-line
import PriceAnalyticsData from './models/PriceAnalyticsData';
import PriceAnalyticsTable from './containers/price-analytics-table/PriceAnalyticsTable';

import { sortByMarketCapDesc } from './utils/PriceAnalyticsDataUtils';
import { getAll as getAllPriceAnalyticsData } from './api/PriceAnalyticsDataAPI';

import loadingIcon from './loading.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [priceDataList, setPriceDataList] = useState<PriceAnalyticsData[]>([]);

  const refresh = async () => {
    setLoading(true);

    const priceDataList = await getAllPriceAnalyticsData();
    sortByMarketCapDesc(priceDataList);
    setPriceDataList(priceDataList);

    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="App">
      <header className="App-header">Crypto Currency Price Analytics</header>
      <Button className="App-refresh-button" onClick={() => refresh()}>
        Refresh
      </Button>
      <PriceAnalyticsTable priceDataList={priceDataList} />
      {loading && (
        <img src={loadingIcon} className="App-loading" alt="loading" />
      )}
    </div>
  );
}

export default App;
