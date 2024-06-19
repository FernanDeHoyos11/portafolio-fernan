import { createTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

export const theme = createTheme({
  palette: {
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
  },
});

const globalStyles = (
  <GlobalStyles
    styles={{
      body: {
        background: theme.palette.background.gradient,
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        width: '100%',
      },
    }}
  />
);

export { globalStyles };
