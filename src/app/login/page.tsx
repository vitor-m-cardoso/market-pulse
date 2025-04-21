'use client';

import Image from 'next/image';
import image from './images/image.svg';
import logoMarketpulse from './images/logo-marketpulse.svg';
import '../../styles/colors.css';

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';

// import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function Login() {
  // const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    // login();
    router.push('/dashboard/market-analysis');
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Image
        src={image}
        alt="fundo"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 5,
            width: '100%',
            maxWidth: 650,
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(4px)',
            borderRadius: 2,
            marginRight: 20,
            marginBottom: 3,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Image
            src={logoMarketpulse}
            alt='logo marketpulse'
            style={{ width: '60%', marginBottom: '10px' }}
          >
          </Image>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            Sign up
          </Typography>

          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="E-mail"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#DB7412',
                  },
                },
                '& label.Mui-focused': {
                  color: '#DB7412',
                },
              }}
            />

            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#DB7412', // roxo-600 do Tailwind
                  },
                },
                '& label.Mui-focused': {
                  color: '#DB7412',
                },
              }}
            />

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                color="inherit"
                sx={{ mt: 2, mr: 2 }}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                className='background-color-primary'
                sx={{ mt: 2 }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Paper>

        <Paper
          elevation={6}
          sx={{
            p: 3,
            width: '100%',
            maxWidth: 650,
            backgroundColor: 'rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(4px)',
            borderRadius: 2,
            marginRight: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography component="h2">
            Don&apos;t have one account?
          </Typography>
          <Button style={{ textTransform: 'none', color: '#DB7412' }}>Create one</Button>
        </Paper>

      </Box>
    </Box>
  );
}
