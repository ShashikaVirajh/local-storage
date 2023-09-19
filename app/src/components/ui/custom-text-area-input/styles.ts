import { TextareaAutosize, styled } from '@mui/material';

export const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box',
  wordBreak: 'break-all',
  whiteSpace: 'normal',
  color: theme.colors.text.default,
  fontSize: 14,
  backgroundColor: theme.colors.background.default,
  border: `1px solid ${theme.colors.main}`,
  borderRadius: '4px',
  '&:hover': {
    borderColor: theme.colors.main,
  },
  '&:focus': {
    borderColor: theme.colors.main,
    outline: 'none',
  },
}));
