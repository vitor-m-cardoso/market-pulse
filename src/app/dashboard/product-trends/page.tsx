import { fetchTopProductsPerCategory } from '@/app/api/data/fetchTopProductsPerCategory';
import ProductTrendsClient from './ProductTrendsClient';
import { TopProductsDataType } from '@/app/types/TopProductsDataType';

export default async function ProductTrendsPage() {
  const topProducts = await fetchTopProductsPerCategory();

  const groupedData = (topProducts ?? []).reduce(
    (acc: Record<string, TopProductsDataType[]>, item: TopProductsDataType) => {
      if (!acc[item.categoria]) acc[item.categoria] = [];
      acc[item.categoria].push(item);
      return acc;
    },
    {}
  );
  
  return <ProductTrendsClient topProducts={groupedData}/>
}
