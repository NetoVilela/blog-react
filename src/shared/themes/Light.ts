import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#4183D9',
      dark: '#5068F2',
      contrastText: '#000',
    },
    secondary: {
      main: '#30D9D9',
      dark: '#32D0D0',
      contrastText: '#F2F2F2',
    },
    background:{
      default: '#F7F6F3',// OU #F2F2F2
      paper: '#FFFFFF',
    }

  }
});
