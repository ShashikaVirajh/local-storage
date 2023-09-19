import { IconButton, lighten, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)<{ backgroundColor?: string }>(
  ({ theme, backgroundColor = theme.colors.main }) => ({
    backgroundColor: backgroundColor,
    color: theme.colors.text.default,
    '&:hover': {
      backgroundColor: lighten(backgroundColor, 0.1),
      color: lighten(theme.colors.text.default, 0.1),
    },
    '&.Mui-disabled': {
      backgroundColor: lighten(backgroundColor, 0.2),
    },
    borderRadius: theme.shape.borderRadius,
  }),
);
