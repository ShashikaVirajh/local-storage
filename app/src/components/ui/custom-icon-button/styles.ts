import { IconButton, lighten, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)<{ backgroundColor?: string }>(
  ({ theme, backgroundColor = '#594D9E' }) => ({
    backgroundColor: backgroundColor,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: lighten(backgroundColor, 0.1),
      color: lighten('#FFFFFF', 0.1),
    },
    '&.Mui-disabled': {
      backgroundColor: lighten(backgroundColor, 0.2),
    },
    borderRadius: theme.shape.borderRadius,
  }),
);
