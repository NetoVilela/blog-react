import { StyledCard, StyledAuthorCreated, StyledLine } from './style';

import { Typography, CardMedia } from '@mui/material';

type Props = {
  title: string;
  urlImage: string;
  lastItem?: boolean;
  children?: React.ReactNode;
}

// eslint-disable-next-line react/prop-types
export const Card: React.FC<Props> = ({ title, urlImage, lastItem, children }) => {
  // console.log(lastItem)
  return (
    <StyledCard>
      <Typography variant='h4' align='center'>{title}</Typography>

      <CardMedia
        component="img"
        height="auto"
        image={`${urlImage}`}
        alt="Paella dish"
      />

      <Typography variant='body2' align='justify'>
        {children}
      </Typography>

      <StyledAuthorCreated>
        Neto Vilela - 22/04/2022 às 20:45h
      </StyledAuthorCreated>

      {lastItem ?? <StyledLine />}


    </StyledCard>
  );

};