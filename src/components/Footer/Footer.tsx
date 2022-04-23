import { useEffect, useState } from 'react';
import { useAppThemeContext } from '../../shared/contexts';
import { StyledFooter } from './style';

import { DarkTheme, LightTheme } from '../../shared/themes/index';


export const Footer: React.FC = () => {
  const { themeName } = useAppThemeContext();

  const [theme, setTheme] = useState(LightTheme);

  useEffect(() => {
    if (themeName == 'dark') {
      setTheme(DarkTheme);
    } else {
      setTheme(LightTheme);
    }
  }, [themeName]);

  return (
    <StyledFooter colorText={theme.palette.primary.contrastText}>
      Copyright - Neto Vilela
    </StyledFooter>
  );

};