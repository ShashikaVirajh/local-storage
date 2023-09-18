import { Button, lighten, styled } from '@mui/material';

export const StyledButton = styled(Button)<{ backgroundColor?: string }>(
  ({ theme, backgroundColor = '#594D9E' }) => ({
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: backgroundColor,
    color: '#FFFFFF',
    '&:hover': {
      backgroundColor: lighten(backgroundColor, 0.4),
      color: lighten('#FFFFFF', 0.4),
    },
    '&.Mui-disabled': {
      backgroundColor: lighten(backgroundColor, 0.2),
    },
  }),
);
