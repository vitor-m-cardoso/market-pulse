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

import { BarChart } from '@mui/x-charts/BarChart';
import ChartBox from '@/components/ChartBox';

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
        <ChartBox title="Vendedores" value="1.253" variation="8,5%" iconName="seller-icon" />
        <ChartBox title="Estoque Full" value="3.457" variation="4,2%" iconName="stock-icon" />
        <ChartBox title="Vendas" value="1.208" variation="6,3%" iconName="sells-icon" />
        <ChartBox title="Pendentes" value="245" variation="2,1%" iconName="pending-icon" />
      </Grid>

      <Grid container spacing={3} mb={4}>
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
