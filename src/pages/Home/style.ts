import styled from 'styled-components';
import { Container } from '@mui/material';
import { LightTheme } from '../../shared/themes';

export const StyledContainer = styled(Container)`
  margin-top: 10px;
  padding: 20px;
  background-color: ${LightTheme.palette.background.paper};
  height: 50%;
`;
