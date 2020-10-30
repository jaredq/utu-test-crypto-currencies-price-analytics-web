import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

// eslint-disable-next-line
import PriceAnalyticsData from './models/PriceAnalyticsData';
import PriceAnalyticsTable from './containers/price-analytics-table/PriceAnalyticsTable';

import loadingIcon from './loading.svg';
import './App.css';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [loading, setLoading] = useState(false);

  const dummyPriceDataList: PriceAnalyticsData[] = [
    {
      currency: 'tezos',
      price: 1.9,
      changeDifferenceIn24Hours: -7.3,
      changeDifferenceIn7Days: 1.3,
      changeDifferenceIn1Month: 0.3,
      volumeIn24Hours: 236764423,
      marketCap: 1734823649,
    },
    {
      currency: 'bnb',
      price: 42.3,
      changeDifferenceIn24Hours: -2.3,
      changeDifferenceIn7Days: 12.3,
      changeDifferenceIn1Month: 4.3,
      volumeIn24Hours: 474423423,
      marketCap: 232236423,
    },
    {
      currency: 'eos',
      price: 82.1,
      changeDifferenceIn24Hours: -8.1,
      changeDifferenceIn7Days: 1.3,
      changeDifferenceIn1Month: 0.23,
      volumeIn24Hours: 8623423,
      marketCap: 477236423,
    },
    {
      currency: 'bitcoin',
      price: 12212.32,
      changeDifferenceIn24Hours: -17.3,
      changeDifferenceIn7Days: 1.3,
      changeDifferenceIn1Month: -10.3,
      volumeIn24Hours: 4353423423,
      marketCap: 34663436423,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">Crypto Currency Price Analytics</header>
      <Button className="App-refresh-button" onClick={() => setLoading(true)}>
        Refresh
      </Button>
      <PriceAnalyticsTable priceDataList={dummyPriceDataList} />
      {loading && (
        <img src={loadingIcon} className="App-loading" alt="loading" />
      )}
    </div>
  );
}

export default App;
