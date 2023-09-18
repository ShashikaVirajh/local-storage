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
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='sm'
      fullWidth={true}
      PaperProps={{
        style: {
          backgroundColor: '#1E2235',
          maxWidth: '300px',
          margin: 'auto',
        },
      }}
    >
      <DialogTitle variant='h6' fontWeight='600' color='#FFFFFF'>
        {title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText fontSize={14} lineHeight={1.4} color='#FFFFFF'>
          {message}
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <CustomButton
          text='Cancel'
          startIcon={<CancelIcon />}
          onClick={onClose}
          variant='contained'
          backgroundColor='#594D9E'
        />

        <CustomButton
          text='Delete'
          startIcon={<CheckCircleIcon />}
          onClick={handleOnConfirm}
          variant='contained'
          backgroundColor='#b71812'
        />
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
