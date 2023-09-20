import { TableCell, TableContainer, TableRow, styled, tableCellClasses } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  paddingTop: '12px',
  paddingBottom: '12px',
  borderTop: 'none',
  borderBottom: 'none',
  color: theme.colors.text.default,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#1D1B27',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

export const StyledTableRow = styled(TableRow)({
  borderBottom: 'none',
  [`&:nth-of-type(odd)`]: {
    backgroundColor: '#16151E',
  },
  [`&:nth-of-type(even)`]: {
    backgroundColor: '#1A1822',
  },
});
