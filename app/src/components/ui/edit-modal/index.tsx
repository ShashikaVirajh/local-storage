import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, TextareaAutosize, Typography } from '@mui/material';

import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import CustomButton from '../custom-button';

import { LocalStorageItem } from '../../../types';

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: (item: LocalStorageItem) => void;
  item?: LocalStorageItem;
};

const EditItemModal: FC<Props> = ({ open, onClose, onConfirm, item }) => {
  const [updateValue, setUpdatedValue] = useState(item?.value || '');

  useEffect(() => {
    if (item) {
      setUpdatedValue(item.value);
    }
  }, [item]);

  const handleOnClose = (): void => {
    onClose();
    setUpdatedValue(item?.value || '');
  };

  const handleOnSave = (): void => {
    if (item) {
      onConfirm({ ...item, value: updateValue });
    }

    handleOnClose();
  };

  const handleUpdateValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setUpdatedValue(e.target.value);
  };

  return (
    <Dialog open={open} sx={{ maxWidth: 720 }} onClose={onClose}>
      <DialogContent
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: '400px',
          minWidth: '400px',
          padding: '8px 16px',
        }}
      >
        <Typography variant='h5' color='GrayText' mb={2}>
          {item?.key.toUpperCase()}
        </Typography>

        <TextareaAutosize
          style={{
            width: '100%',
            padding: '10px',
            boxSizing: 'border-box',
            wordBreak: 'break-all',
            whiteSpace: 'normal',
            border: '1px solid #ccc',
            borderRadius: 1,
          }}
          value={updateValue}
          onChange={handleUpdateValue}
        />
      </DialogContent>

      <DialogActions sx={{ padding: '8px 16px' }}>
        <CustomButton
          text='Cancel'
          onClick={handleOnClose}
          variant='outlined'
          startIcon={<CancelIcon />}
        />

        <CustomButton
          text='Update'
          onClick={handleOnSave}
          variant='contained'
          disabled={!updateValue}
          startIcon={<SaveIcon />}
        />
      </DialogActions>
    </Dialog>
  );
};

export default EditItemModal;
