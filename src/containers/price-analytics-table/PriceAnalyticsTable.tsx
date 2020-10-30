import React from 'react';
import { Table } from 'react-bootstrap';
import './PriceAnalyticsTable.css';
import PriceAnalyticsData from '../../models/PriceAnalyticsData';
import PriceDataRow from '../../components/price-analytics-data/PriceAnalyticsDataRow';

function PriceAnalyticsTable(props: {priceDataList: PriceAnalyticsData[]}) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h</th>
            <th>7d</th>
            <th>1m</th>
            <th>24h Volume</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {props.priceDataList.map((priceData: PriceAnalyticsData, idx: number) => {
            return <PriceDataRow idx={idx} priceData={priceData} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default PriceAnalyticsTable;
