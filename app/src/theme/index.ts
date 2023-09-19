import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {},
  colors: {
    main: '#594D9E',
    danger: '#B71812',
    text: {
      default: '#FFFFFF',
      danger: '#B71812',
    },
    background: {
      default: '#201E2B',
      paper: '#1E2235',
      danger: '#B71812',
    },
  },
});

export default theme;
