import { Button, lighten, styled } from '@mui/material';

export const StyledButton = styled(Button)<{ backgroundColor?: string }>(
  ({ theme, backgroundColor = theme.colors.main }) => ({
    textTransform: 'none',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: backgroundColor,
    color: theme.colors.text.default,
    '&:hover': {
      backgroundColor: lighten(backgroundColor, 0.4),
      color: lighten(theme.colors.text.default, 0.4),
    },
    '&.Mui-disabled': {
      backgroundColor: lighten(backgroundColor, 0.2),
    },
  }),
);
