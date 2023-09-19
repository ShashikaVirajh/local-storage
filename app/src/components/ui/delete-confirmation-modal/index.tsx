import { FC } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';

import CustomButton from '../custom-button';

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};

const DeleteConfirmationModal: FC<Props> = ({ open, onClose, onConfirm, title, message }) => {
  const theme = useTheme();

  const handleOnConfirm = (): void => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='sm'
      fullWidth={true}
      PaperProps={{
        style: {
          backgroundColor: theme.colors.background.paper,
          maxWidth: '300px',
          margin: 'auto',
        },
      }}
    >
      <DialogTitle variant='h6' fontWeight='600' color={theme.colors.text.default}>
        {title}
      </DialogTitle>

      <DialogContent sx={{ padding: '16px' }}>
        <DialogContentText fontSize={14} lineHeight={1.4} color={theme.colors.text.default}>
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions sx={{ padding: '16px' }}>
        <CustomButton
          text='Cancel'
          startIcon={<CancelIcon />}
          onClick={onClose}
          variant='contained'
          backgroundColor={theme.colors.main}
        />

        <CustomButton
          text='Delete'
          startIcon={<DeleteIcon />}
          onClick={handleOnConfirm}
          variant='contained'
          backgroundColor={theme.colors.danger}
        />
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
