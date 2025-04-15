'use client';

import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { desktopOS } from './webUsageStats';

export default function PieArcLabel() {
  const valueFormatter = (item: { value: number }) => `${item.value}%`;

  const data = {
    data: desktopOS,
    valueFormatter,
  };

  return (
    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.value}%`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -10, color: 'gray' },
          ...data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
          fill: 'rgb(255, 255, 255)',
        },
      }}
      width={400}
      height={200}
    />
  );
}
