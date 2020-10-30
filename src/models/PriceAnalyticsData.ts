interface PriceAnalyticsData {
  currency: string;

  price?: number;

  changeDifferenceIn24Hours?: number;

  changeDifferenceIn7Days?: number;

  changeDifferenceIn1Month?: number;

  volumeIn24Hours?: number;

  marketCap?: number;
}

export default PriceAnalyticsData;
