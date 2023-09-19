import { TextField, styled } from '@mui/material';

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputLabel-root': {
    color: theme.colors.text.default,
  },
  '& .MuiInputBase-input': {
    color: theme.colors.text.default,
    fontSize: 14,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.colors.main,
    },
    '&:hover fieldset': {
      borderColor: theme.colors.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.colors.main,
    },
  },
  '& .MuiInputAdornment-root .MuiSvgIcon-root': {
    color: theme.colors.text.default,
  },
}));
