import { TextareaAutosize, styled } from '@mui/material';

export const StyledTextarea = styled(TextareaAutosize)({
  width: '100%',
  padding: '10px',
  boxSizing: 'border-box',
  wordBreak: 'break-all',
  whiteSpace: 'normal',
  color: '#FFFFFF',
  fontSize: 14,
  backgroundColor: '#201E2B',
  border: '1px solid #594D9E',
  borderRadius: '4px',
  '&:hover': {
    borderColor: '#594D9E',
  },
  '&:focus': {
    borderColor: '#594D9E',
    outline: 'none',
  },
});
