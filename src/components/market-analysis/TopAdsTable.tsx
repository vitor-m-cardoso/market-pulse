'use client';

import React, { useState } from 'react';
import {
  Avatar, Card, CardContent, Table, TableBody,
  TableCell, TableHead, TableRow, Typography, Pagination,
} from '@mui/material';
import Link from 'next/link';
import { ProductDataType } from '@/app/types/ProductDataType';

type Props = {
  data: ProductDataType[];
};

export default function TopAdsTable({ data }: Props) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  const firstOfEachCategoryMap = new Map<string, ProductDataType>();

  for (const item of data) {
    if (!firstOfEachCategoryMap.has(item.categoria)) {
      firstOfEachCategoryMap.set(item.categoria, item);
    }
  }

  const uniqueByCategory = Array.from(firstOfEachCategoryMap.values());

  const paginated = uniqueByCategory.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const totalPages = Math.ceil(uniqueByCategory.length / itemsPerPage);

  const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Card sx={{ p: 2, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6" mb={2}>Top Anúncios por Categoria</Typography>

        <Table>
          <TableHead>
            <TableRow sx={{ background: '#F1F4F9' }}>
              <TableCell><strong>Imagem</strong></TableCell>
              <TableCell><strong>Título do Anúncio</strong></TableCell>
              <TableCell><strong>Categoria</strong></TableCell>
              <TableCell><strong>Preço</strong></TableCell>
              <TableCell><strong>Data</strong></TableCell>
              <TableCell><strong>Ranking</strong></TableCell>
              <TableCell><strong>Link</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginated.map((item, index) => (
              <TableRow key={`${item.categoria}-${index}`}>
                <TableCell>
                  <Avatar
                    variant="rounded"
                    src={item.link_imagem_produto || ''}
                    alt="produto"
                  />
                </TableCell>
                <TableCell>{item.titulo}</TableCell>
                <TableCell>{item.categoria}</TableCell>
                <TableCell>R${item.preco?.toFixed(2)}</TableCell>
                <TableCell>
                  {item.data_extracao?.value
                    ? new Date(item.data_extracao.value).toLocaleDateString('pt-BR')
                    : '-'}
                </TableCell>
                <TableCell>{item.ranking_venda}</TableCell>
                <TableCell>
                  {item.link_produto ? (
                    <Link href={item.link_produto} target="_blank" rel="noopener">
                      Ver Produto
                    </Link>
                  ) : (
                    '-'
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {totalPages > 1 && (
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            sx={{ mt: 2 }}
          />
        )}
      </CardContent>
    </Card>
  );
}
