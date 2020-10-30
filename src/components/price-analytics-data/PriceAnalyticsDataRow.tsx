import React from 'react';

// eslint-disable-next-line
import PriceAnalyticsData from '../../models/PriceAnalyticsData';
import CurrencyView from './CurrencyView';
import PercentageView from './PercentageView';

function PriceDataRow(props: { idx: number; priceData: PriceAnalyticsData }) {
  const { idx, priceData } = props;
  if (priceData) {
    return (
      <tr>
        <td>{idx + 1}</td>
        <td>{priceData.currency}</td>
        <td>
          <CurrencyView amount={priceData.price} />
        </td>
        <td>
          <PercentageView percentage={priceData.changeDifferenceIn24Hours} />
        </td>
        <td>
          <PercentageView percentage={priceData.changeDifferenceIn7Days} />
        </td>
        <td>
          <PercentageView percentage={priceData.changeDifferenceIn1Month} />
        </td>
        <td>
          <CurrencyView amount={priceData.volumeIn24Hours} />
        </td>
        <td>
          <CurrencyView amount={priceData.marketCap} />
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{idx}</td>
        <td colSpan={7}>Invalid data!</td>
      </tr>
    );
  }
}

export default PriceDataRow;
