'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
} from '@mui/material';

import { usePathname } from 'next/navigation';
import NextLinkComposed from '@/components/NextLinkComposed';

const drawerWidth = 240;

const navItems = [
  { label: 'Análise de Mercado', path: '/dashboard/market-analysis', icon: '/images/icons/market-analysis-icon.svg' },
  { label: 'Tendências', path: '/dashboard/product-trends', icon: '/images/icons/trends-icon.svg' },
  { label: 'Relatórios', path: '/dashboard/reports', icon: '/images/icons/reports-icon.svg' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar superior */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Toolbar>
          <Image
            src='/images/MARKETPULSE.svg'
            alt='marketpulse logo'
            width={200}
            height={200}
          />
        </Toolbar>
      </AppBar>

      {/* Drawer lateral */}
      <Drawer
        variant="permanent"
        sx={{
          width: 20,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#f5f5f5',
          },
        }}
      >
        <Toolbar />
        <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ width: '90%' }}>
              <ListItemButton
                component={NextLinkComposed}
                to={item.path}
                selected={pathname === item.path}
                sx={{
                  color: pathname === item.path ? '#eee' : 'inherit',
                  borderRadius: '5px',
                  padding: '5px 16px',
                  '&.Mui-selected': {
                    backgroundColor: '#DB7412',
                    '&:hover': {
                      backgroundColor: '#DB8412',
                    },
                  },
                  '&:hover': {
                    backgroundColor: '#eee',
                  },
                }}
              >
                <Image
                  src={item.icon}
                  alt={`${item.label} icon`}
                  width={14}
                  height={14}
                  style={{ marginRight: '8px', filter: pathname === item.path ? 'invert(1)' : 'invert(0)' }}
                />
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Conteúdo da rota */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: `${drawerWidth}px`,
          mt: 8,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
