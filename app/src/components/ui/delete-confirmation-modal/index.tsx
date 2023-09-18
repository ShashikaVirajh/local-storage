import { FC } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import CustomButton from '../custom-button';

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
};

const DeleteConfirmationModal: FC<Props> = ({ open, onClose, onConfirm, title, message }) => {
  const handleOnConfirm = (): void => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle variant='h6' fontWeight='600' color='primary'>
        {title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <CustomButton
          text='Cancel'
          startIcon={<CancelIcon />}
          onClick={onClose}
          variant='contained'
          color='primary'
        />

        <CustomButton
          text='Delete'
          startIcon={<CheckCircleIcon />}
          onClick={handleOnConfirm}
          variant='contained'
          color='error'
        />
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
