import { Card, CardContent, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';

export default function FirstPageTimeChart() {
  return (
    <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa', mb: 3 }}>
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
  );
}
