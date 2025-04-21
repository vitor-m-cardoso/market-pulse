'use client';

import {
  Box,
  Typography,
  Grid,
  Button,
  MenuItem,
  FormControl,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import ReplayIcon from '@mui/icons-material/Replay';

const reports = [
  {
    name: 'Relatório de Vendas',
    description: 'Desempenho de vendas ao longo do mês e principais produtos vendidos.',
    format: 'csv',
  },
  {
    name: 'Desempenho por produto',
    description: 'Vendas por produto, margem de lucro e análise de tendências de cada produto.',
    format: 'csv',
  },
  {
    name: 'Projeções e Tendências',
    description: 'Previsões de vendas futuras, análise de tendência de mercado e recomendações estratégicas.',
    format: 'csv',
  },
  {
    name: 'Vendas por região',
    description: 'Desempenho de vendas em diferentes regiões, análise de mercado regional e oportunidades de crescimento.',
    format: 'csv',
  },
];

export default function ReportsPage() {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Relatórios
      </Typography>

      {/* Filtros */}
      <Grid container spacing={2} mb={3} alignItems="center">
        <Grid item>
          <Button
            variant="outlined"
            startIcon={<FilterAltOutlinedIcon />}
            sx={{ height: '100%' }}
          >
            Filtrar por
          </Button>
        </Grid>

        <Grid item>
          <FormControl size="small">
            <Select displayEmpty defaultValue="">
              <MenuItem value="">Data</MenuItem>
              <MenuItem value="30">Últimos 30 dias</MenuItem>
              <MenuItem value="90">Últimos 90 dias</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl size="small">
            <Select displayEmpty defaultValue="">
              <MenuItem value="">Região</MenuItem>
              <MenuItem value="sudeste">Sudeste</MenuItem>
              <MenuItem value="sul">Sul</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <FormControl size="small">
            <Select displayEmpty defaultValue="">
              <MenuItem value="">Categoria</MenuItem>
              <MenuItem value="moda">Moda</MenuItem>
              <MenuItem value="eletronicos">Eletrônicos</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item>
          <Button
            variant="outlined"
            color="error"
            startIcon={<ReplayIcon />}
          >
            Resetar Filtro
          </Button>
        </Grid>
      </Grid>

      {/* Tabela de Relatórios */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: '#fafafa' }}>
              <TableCell><strong>NOME</strong></TableCell>
              <TableCell><strong>DESCRIÇÃO</strong></TableCell>
              <TableCell><strong>FORMATO</strong></TableCell>
              <TableCell><strong>DOWNLOAD</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report, index) => (
              <TableRow key={index}>
                <TableCell>{report.name}</TableCell>
                <TableCell>{report.description}</TableCell>
                <TableCell>{report.format}</TableCell>
                <TableCell>
                  <Button variant="contained" sx={{ backgroundColor: '#00B69B', color: '#000' }}>
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
