import Switch from '@mui/material/Switch';
import { useAppThemeContext } from '../../shared/contexts';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

export const SwitchButton: React.FC = () => {
  const { toggleTheme } = useAppThemeContext();

  return (

    <div>
      <Switch {...label} defaultChecked color="default" onClick={toggleTheme} />
    </div>

  );

};