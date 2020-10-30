import React from 'react';
import { toLocaleString } from '../../utils/NumberUtils';

function CurrencyView(props: { amount?: number }) {
  const { amount } = props;
  return <div>${toLocaleString(amount)}</div>;
}

export default CurrencyView;
