'use client';

import { TopProductsDataType } from '@/app/types/TopProductsDataType';
import { chartBox } from '@/app/utils/chartBox';
import Loading from '@/components/market-analysis/Loading';
import KeywordCardList from '@/components/product-trends/KeywordCardList';
import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  Typography,
} from '@mui/material';

type Props = {
  topProducts: Record<string, TopProductsDataType[]>;
};

export default function ProductTrendsClient({ topProducts }: Props) {
  if (!topProducts) return <Loading />

  return (
    <Box>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Tendências
      </Typography>
      <Typography mb={3}>
        Buscas que mais cresceram:
      </Typography>
      <Grid container spacing={3} mb={4}>
        {chartBox('1º MAIOR CRESCIMENTO', 'Teclado', 'sells-icon')}
        {chartBox('2º MAIOR CRESCIMENTO', 'Cooler', 'sells-icon')}
        {chartBox('3º MAIOR CRESCIMENTO', 'Moto elétrica', 'sells-icon')}
      </Grid>

      <Typography mb={3}>
        As buscas mais desejadas:
      </Typography>
      <Grid container spacing={3} mb={4}>
        {chartBox('1º MAIS DESEJADA', 'Internet Starlink', 'stock-icon')}
        {chartBox('2º MAIS DESEJADA', 'Creatina Growth', 'stock-icon')}
        {chartBox('3º MAIS DESEJADA', 'Playstation 5', 'stock-icon')}
      </Grid>

      <Card sx={{ p: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" mb={2}><strong>Top 5 produtos por categoria</strong></Typography>
            <List component="ol" sx={{ listStyleType: 'decimal', pl: 2, display: 'flex' }}>
             <KeywordCardList topProducts={topProducts}/>
            </List>
        </CardContent>
      </Card>
    </Box>
  );
}
