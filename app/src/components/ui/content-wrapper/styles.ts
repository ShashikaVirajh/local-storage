import { Grid, styled } from '@mui/material';

export const Wrapper = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.colors.main}`,
  borderRadius: 8,
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  paddingLeft: theme.spacing(2),
}));
