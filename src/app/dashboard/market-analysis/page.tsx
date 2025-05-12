import { fetchCategoryStats } from '@/app/api/data/fetchCategoryStats';
import MarketAnalysisClient from './MarketAnalysisClient';
import { fetchBigQueryData } from '@/app/api/data/fetchApiData';

export default async function MarketAnalysisPage() {
  const data = await fetchBigQueryData();
  const categoryStats = await fetchCategoryStats();

  return <MarketAnalysisClient data={data} categoryStats={categoryStats} />
}
