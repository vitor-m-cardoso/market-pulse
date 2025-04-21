'use client';

import KeywordCardList from '@/components/KeywordCardList';
import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  Typography,
} from '@mui/material';
import Image from 'next/image';

const chartBox = (
  title: string,
  value: string,
  iconName: 'sells-icon' | 'stock-icon',
) => {
  const iconPath = `/images/icons/${iconName}.svg`;

  return (
  <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa' }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={{ marginRight: 2 }}>{title}</Typography>
        <Image src={iconPath} alt={iconName} width={52} height={52} />
      </Box>
      <Typography variant="h6" mt={2}>{value}</Typography>
    </CardContent>
  </Card>
)};

export default function ProductTrendsPage() {
  return (
    <Box>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Tendências
      </Typography>
      <Typography mb={3}>
        Buscas que mais cresceram:
      </Typography>
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={3}>{chartBox('1º MAIOR CRESCIMENTO', 'Teclado', 'sells-icon')}</Grid>
        <Grid item xs={12} md={3}>{chartBox('2º MAIOR CRESCIMENTO', 'Cooler', 'sells-icon')}</Grid>
        <Grid item xs={12} md={3}>{chartBox('3º MAIOR CRESCIMENTO', 'Moto elétrica', 'sells-icon')}</Grid>
      </Grid>

      <Typography mb={3}>
        As buscas mais desejadas:
      </Typography>
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={3}>{chartBox('1º MAIS DESEJADA', 'Internet Starlink', 'stock-icon')}</Grid>
        <Grid item xs={12} md={3}>{chartBox('2º MAIS DESEJADA', 'Creatina Growth', 'stock-icon')}</Grid>
        <Grid item xs={12} md={3}>{chartBox('3º MAIS DESEJADA', 'Playstation 5', 'stock-icon')}</Grid>
      </Grid>

      <Card sx={{ p: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" mb={2}>Top 5 produtos por categoria</Typography>
            <List component="ol" sx={{ listStyleType: 'decimal', pl: 2, display: 'flex' }}>
             <KeywordCardList />
            </List>
        </CardContent>
      </Card>
    </Box>
  );
}
