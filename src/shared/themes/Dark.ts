import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#4183D9',
      dark: '#5068F2',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#30D9D9',
      dark: '#32D0D0',
      contrastText: '#F2F2F2',
    },
    background:{
      default: '#202124',// OU #F2F2F2
      paper: '#303134',
    }

  }
});
