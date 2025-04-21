import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

export default function ChartBox({
  title,
  value,
  variation,
  iconName,
}: {
  title: string;
  value: string;
  variation: string;
  iconName: 'seller-icon' | 'stock-icon' | 'sells-icon' | 'pending-icon';
}) {
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
  );
};
