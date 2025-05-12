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
        <strong>Buscas que mais cresceram:</strong>
      </Typography>
      <Grid container spacing={3} mb={4}>
        {chartBox('1º MAIOR CRESCIMENTO', 'Mini Compressor Digital', 'sells-icon')}
        {chartBox('2º MAIOR CRESCIMENTO', 'Creme Multirreparador', 'sells-icon')}
        {chartBox('3º MAIOR CRESCIMENTO', 'Moletom Liso Algodão', 'sells-icon')}
      </Grid>

      <Typography mb={3}>
      <strong>As buscas mais desejadas:</strong>
      </Typography>
      <Grid container spacing={3} mb={4}>
        {chartBox('1º MAIS DESEJADA', 'Fritadeira sem óleo', 'stock-icon')}
        {chartBox('2º MAIS DESEJADA', 'Creatina Monohidratada', 'stock-icon')}
        {chartBox('3º MAIS DESEJADA', 'Cadeira de Escritório', 'stock-icon')}
      </Grid>

      <Card sx={{ p: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" mb={2}><strong>Top 5 Produtos por Categoria</strong></Typography>
            <List component="ol" sx={{ listStyleType: 'decimal', pl: 2, display: 'flex' }}>
             <KeywordCardList topProducts={topProducts}/>
            </List>
        </CardContent>
      </Card>
    </Box>
  );
}
