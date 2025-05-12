'use client';

import { TopProductsDataType } from '@/app/types/TopProductsDataType';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';

type Props = {
  topProducts: Record<string, TopProductsDataType[]>;
};

export default function KeywordCardList({ topProducts }: Props) {
  return (
    <Grid container spacing={3}>
      {Object.entries(topProducts).map(([categoria, produtos], index) => (
        <Grid key={index}>
          <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa' }}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                <strong>{categoria}</strong>
              </Typography>
              <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                {produtos.slice(0, 5).map((produto, i) => (
                  <ListItem
                    key={i}
                    component="li"
                    disablePadding
                    sx={{ display: 'list-item' }}
                  >
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            maxWidth: '250px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {produto.titulo}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
