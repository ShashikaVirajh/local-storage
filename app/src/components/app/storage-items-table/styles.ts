import { TableCell, TableContainer, TableRow, styled, tableCellClasses } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

export const StyledTableCell = styled(TableCell)({
  paddingTop: '12px',
  paddingBottom: '12px',
  borderTop: 'none',
  borderBottom: 'none',
  color: '#FFFFFF',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
});

export const StyledTableRow = styled(TableRow)({
  borderBottom: 'none',
  [`&:nth-of-type(odd)`]: {
    backgroundColor: 'rgba(50, 50, 50, 0.9)',
  },
  [`&:nth-of-type(even)`]: {
    backgroundColor: 'rgba(70, 70, 70, 0.9)',
  },
});
