import { FC, useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import CancelIcon from '@mui/icons-material/Cancel';
import SaveIcon from '@mui/icons-material/Save';
import CustomButton from '../custom-button';

import { LocalStorageItem } from '../../../types';
import CustomTextAreaInput from '../custom-text-area-input';

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: (item: LocalStorageItem) => void;
  item?: LocalStorageItem;
};

const EditItemModal: FC<Props> = ({ open, onClose, onConfirm, item }) => {
  const theme = useTheme();

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

  const handleUpdateValue = (value: string) => {
    setUpdatedValue(value);
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
          maxWidth: '500px',
          margin: 'auto',
        },
      }}
    >
      <DialogContent
        sx={{
          overflowX: 'hidden',
          overflowY: 'auto',
          padding: '16px',
        }}
      >
        <Typography variant='h5' color='GrayText' mb={1}>
          {item?.key.toUpperCase()}
        </Typography>

        <CustomTextAreaInput value={updateValue} onChange={handleUpdateValue} />
      </DialogContent>

      <DialogActions sx={{ padding: '8px 16px' }}>
        <CustomButton
          text='Cancel'
          onClick={handleOnClose}
          variant='outlined'
          startIcon={<CancelIcon />}
          backgroundColor='#594D9E'
        />

        <CustomButton
          text='Update'
          onClick={handleOnSave}
          variant='contained'
          disabled={!updateValue}
          startIcon={<SaveIcon />}
          backgroundColor='#b71812'
        />
      </DialogActions>
    </Dialog>
  );
};

export default EditItemModal;
