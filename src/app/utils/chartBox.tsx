import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from 'next/image';

export const chartBox = (
  title: string,
  value: string,
  iconName: 'sells-icon' | 'stock-icon',
) => {
  const iconPath = `/images/icons/${iconName}.svg`;

  return (
  <Card sx={{ borderRadius: 3, background: '#fafafa' }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={{ marginRight: 2 }}>{title}</Typography>
        <Image src={iconPath} alt={iconName} width={52} height={52} />
      </Box>
      <Typography variant="h6" mt={2}>{value}</Typography>
    </CardContent>
  </Card>
)};