import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';

const keywordCards = [
  {
    title: 'Brinquedos e Hobbies',
    keywords: [
      { word: 'Caminhão de brinquedo' },
      { word: 'Boneca antiga' },
    ],
  },
  {
    title: 'Roupas Masculinas',
    keywords: [
      { word: 'Camiseta' },
      { word: 'Bermuda' },
    ],
  },
  {
    title: 'Eletrônicos',
    keywords: [
      { word: 'Fone bluetooth' },
      { word: 'Carregador portátil' },
    ],
  },
  {
    title: 'Casa e Decoração',
    keywords: [
      { word: 'Tapete grande' },
      { word: 'Vaso decorativo' },
    ],
  },
];

export default function KeywordCardList() {
  return (
    <Grid container spacing={3}>
      {keywordCards.map((category, index) => (
        <Grid item xs={12} md={3} key={index}>
          <Card sx={{ p: 2, borderRadius: 3, background: '#fafafa' }}>
            <CardContent>
              <Typography variant="h6" mb={2}>
                {category.title}
              </Typography>
              <List sx={{ listStyleType: 'decimal', pl: 2 }}>
                {category.keywords.map((item, i) => (
                  <ListItem
                    key={i}
                    component="li"
                    disablePadding
                    sx={{ display: 'list-item' }}
                  >
                    <ListItemText
                      primary={
                        <Typography variant="body2">
                          {item.word}
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
