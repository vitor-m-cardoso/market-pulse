'use client';

import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Image from 'next/image';

import { BarChart } from '@mui/x-charts/BarChart';

const chartBox = (
  title: string,
  value: string,
  variation: string,
  iconName: 'seller-icon' | 'stock-icon' | 'sells-icon' | 'pending-icon',
) => {
  const iconPath = `/images/icons/${iconName}.svg`;

  return (
  <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa' }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={{ marginRight: 2 }}>{title}</Typography>
        <Image src={iconPath} alt={iconName} width={52} height={52} />
      </Box>
      <Typography variant="h4" mt={2}>{value}</Typography>
      <Typography variant="body2" color="text.secondary">
        <strong style={{ color: 'green' }}>{variation}</strong> vs ontem
      </Typography>
    </CardContent>
  </Card>
)};

export default function MarketAnalysisPage() {
  const keywordData = [
    { keyword: 'Camiseta Usada', count: 38 },
    { keyword: 'Masculina', count: 21 },
    { keyword: 'Nike Original', count: 17 },
    { keyword: 'Tamanho M', count: 14 },
    { keyword: 'Preta', count: 12 },
  ];

  return (
    <Box>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Análise de mercado
      </Typography>

      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={3}>{chartBox('Vendedores', '1.253', '8,5%', 'seller-icon')}</Grid>
        <Grid item xs={12} md={3}>{chartBox('Estoque Full', '3.457', '4,2%', 'stock-icon')}</Grid>
        <Grid item xs={12} md={3}>{chartBox('Vendas', '1.208', '6,3%', 'sells-icon')}</Grid>
        <Grid item xs={12} md={3}>{chartBox('Pendentes', '245', '2,1%', 'pending-icon')}</Grid>
      </Grid>

      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa' }}>
            <CardContent>
              <Typography variant="h6" mb={2}>Análises por Estado</Typography>
              <BarChart
                xAxis={[{ scaleType: 'band', data: ['SP', 'MG', 'PR', 'BH', 'SC'] }]}
                series={[{ data: [200, 150, 180, 120, 90] }]}
                width={350}
                height={220}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa' }}>
            <CardContent>
              <Typography variant="h6" mb={2}>Tempo na primeira página</Typography>
              <BarChart
                xAxis={[{ scaleType: 'band', data: ['Até 30 dias', 'Até 90 dias', 'Mais de 165'] }]}
                series={[{ data: [200, 150, 80] }]}
                width={350}
                height={220}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa' }}>
            <CardContent>
              <Typography variant="h6" mb={2}>Palavras-chave</Typography>

              <List component="ol" sx={{ listStyleType: 'decimal', pl: 2 }}>
                {keywordData.map((item, index) => (
                <ListItem
                  key={index}
                  component="li"
                  disablePadding
                  sx={{ display: 'list-item' }} // importante para exibir os números!
                >
                  <ListItemText
                  primary={
                    <Typography variant="body2">
                      <strong>{item.keyword}</strong> - usada {item.count} vezes.
                    </Typography>
                  }
                  />
                </ListItem>
                  ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card sx={{ p: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h6" mb={2}>Top Anúncios</Typography>
          <Table>
            <TableHead>
              <TableRow sx={{ background: '#F1F4F9' }}>
                <TableCell><strong>Título do Anúncio</strong></TableCell>
                <TableCell><strong>Estoque</strong></TableCell>
                <TableCell><strong>Envio</strong></TableCell>
                <TableCell><strong>Medalha</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Kit 5 Camisetas Básicas Masculina Dry Fit Lisa Tradicional</TableCell>
                <TableCell>123</TableCell>
                <TableCell>Rápido</TableCell>
                <TableCell>Ouro</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Camiseta Térmica Segunda Pele Proteção Uv Extreme </TableCell>
                <TableCell>98</TableCell>
                <TableCell>Normal</TableCell>
                <TableCell>Prata</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
}
