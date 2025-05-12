'use client';

import { useMemo } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

type CategoryStats = {
  categoria: string;
  volumeFinanceiro: number;
};

interface Props {
  categoryStats: CategoryStats[];
}

export default function CategoryVolumeComparison({ categoryStats }: Props) {
  const sortedStats = useMemo(
    () =>
      [...categoryStats]
        .sort((a, b) => a.volumeFinanceiro - b.volumeFinanceiro)
        .slice(0, 10),
    [categoryStats]
  );

  const categorias = sortedStats.map((item) => item.categoria);
  const volumes = sortedStats.map((item) => item.volumeFinanceiro);

  return (
    <Box>
      <Typography variant="h5" mb={3} fontWeight="bold">
        Receita Total Gerada em Cada Categoria
      </Typography>

      <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa', overflowX: 'auto' }}>
        <CardContent>
          <Box minWidth={600}>
            <BarChart
              xAxis={[{
                data: categorias,
                scaleType: 'band',
                tickLabelStyle: { fontSize: 12, angle: -45, textAnchor: 'end' },
              }]}
              yAxis={[{
                scaleType: 'linear',
                tickLabelStyle: { fontSize: 12 },
              }]}
              series={[{
                data: volumes,
                label: 'Receita R$',
              }]}
              width={700}
              height={356}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
