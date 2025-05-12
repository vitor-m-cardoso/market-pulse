'use client';

import { Box, Grid } from '@mui/material';

import { ProductDataType } from '@/app/types/ProductDataType';
import TopAdsTable from '@/components/market-analysis/TopAdsTable';
import Loading from '@/components/market-analysis/Loading';
import { CategoryStatsType } from '@/app/types/CategoryStatsType';
import CategoryStatsCharts from '@/components/market-analysis/CategoryStatsCharts';
import CategoryVolumeComparison from '@/components/market-analysis/CategoryVolumeComparison';

type Props = {
  data: ProductDataType[],
  categoryStats: CategoryStatsType[];
};

export default function MarketAnalysisClient({ data, categoryStats }: Props) {
  if (!data) return <Loading />

  return (
    <Box>
      <Grid container spacing={3} mb={4}>
        <CategoryStatsCharts categoryStats={categoryStats} />
        <CategoryVolumeComparison categoryStats={categoryStats} />
      </Grid>

      <TopAdsTable data={data}/>
    </Box>
  );
}
