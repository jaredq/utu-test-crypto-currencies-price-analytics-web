// eslint-disable-next-line
import PriceAnalyticsData from '../models/PriceAnalyticsData';

/**
 * Sorts the PriceAnalyticsData[] in place and return the sorted array
 * @param priceAnalyticsDataList
 */
export function sortByMarketCapDesc(
  priceAnalyticsDataList: PriceAnalyticsData[],
) {
  return priceAnalyticsDataList.sort((a, b) => {
    const aMarketCap = a.marketCap || 0;
    const bMarketCap = b.marketCap || 0;
    return bMarketCap > aMarketCap ? 1 : -1;
  });
}
