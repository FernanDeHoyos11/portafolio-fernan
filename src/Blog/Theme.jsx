import { createTheme } from '@mui/material/styles';

// Tema oscuro
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#010101',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: '30px',
      color: '#ffffff'
  },
  color: '#ffffff'
});

// Tema claro
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    fontSize: '30px',
    color: '#000000'
  },
  color: '#ffffff'
});


