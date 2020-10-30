import React from 'react';
import { toLocaleString } from '../../utils/NumberUtils';
import './PercentageView.css';

function PercentageView(props: { percentage?: number }) {
  const { percentage } = props;
  if (percentage) {
    if (percentage > 0) {
      return (
        <div className="PercentageView-positive">
          {toLocaleString(percentage)}%
        </div>
      );
    } else {
      return (
        <div className="PercentageView-negative">
          {toLocaleString(percentage)}%
        </div>
      );
    }
  } else {
    return <span>{percentage}%</span>;
  }
}

export default PercentageView;
