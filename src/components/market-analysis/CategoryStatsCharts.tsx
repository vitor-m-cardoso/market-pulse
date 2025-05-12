'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Autocomplete,
  TextField,
  Box,
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

type CategoryStats = {
  categoria: string;
  minimo: number;
  maximo: number;
  media: number;
  mediana: number;
  volumeFinanceiro: number;
};

interface Props {
  categoryStats: CategoryStats[];
}

export default function CategoryStatsCharts({ categoryStats }: Props) {
  const allCategories = categoryStats.map((item) => item.categoria);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (categoryStats.length > 0 && !selectedCategory) {
      setSelectedCategory(categoryStats[0].categoria);
    }
  }, [categoryStats, selectedCategory]);

  const currentData = categoryStats.find((item) => item.categoria === selectedCategory);

  return (
    <Box>
      <Typography variant="h5" mb={3} fontWeight="bold">
        Análise de Variação por Categoria
      </Typography>

      <Autocomplete
        options={allCategories}
        value={selectedCategory}
        onChange={(_event, newValue) => setSelectedCategory(newValue)}
        renderInput={(params) => (
          <TextField {...params} label="Selecionar Categoria" placeholder="Escolha uma categoria" />
        )}
        sx={{ mb: 4 }}
      />

      {currentData && (
        <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa', marginBottom: 4 }}>
          <CardContent>
            <Typography variant="h6" mb={2}>
              {currentData.categoria}
            </Typography>

            <BarChart
              xAxis={[{ scaleType: 'band', data: ['Mínimo', 'Máximo', 'Média', 'Mediana', 'Volume'] }]}
              series={[
                {
                  label: 'Valores (R$)',
                  data: [
                    currentData.minimo,
                    currentData.maximo,
                    currentData.media,
                    currentData.mediana,
                    currentData.volumeFinanceiro,
                  ],
                },
              ]}
              width={550}
              height={220}
            />
          </CardContent>
        </Card>
      )}
    </Box>
  );
}
