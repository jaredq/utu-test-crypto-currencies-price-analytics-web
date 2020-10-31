import axios from 'axios';

import { apiConfig } from '../configs/EnvVars';
// eslint-disable-next-line
import PriceAnalyticsData from '../models/PriceAnalyticsData';

export function getOne(currency: string): Promise<PriceAnalyticsData> {
  return axios
    .get<PriceAnalyticsData>(
      `${apiConfig.bashUrl}/price-analytics-data/${currency}`,
    )
    .then(response => {
      const { data } = response;
      return data;
    });
}

export function getAll(): Promise<PriceAnalyticsData[]> {
  return axios
    .get<PriceAnalyticsData[]>(`${apiConfig.bashUrl}/price-analytics-data`)
    .then(response => {
      const { data } = response;
      return data;
    });
}

export default {};
