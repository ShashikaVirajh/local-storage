import { TextField, styled } from '@mui/material';

export const StyledTextField = styled(TextField)({
  '& .MuiInputLabel-root': {
    color: '#FFFFFF',
  },
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
    fontSize: 14,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#594D9E',
    },
    '&:hover fieldset': {
      borderColor: '#594D9E',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#594D9E',
    },
  },
});
