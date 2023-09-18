import { FC, useState } from 'react';
import { Grid, IconButton, Table, TableBody, TableHead, Typography } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { LocalStorageItem } from '../../../types';
import { StyledTableCell, StyledTableContainer, StyledTableRow } from './styles';

import DeleteConfirmationModal from '../../ui/delete-confirmation-modal';
import EditItemModal from '../../ui/edit-modal';

type Props = {
  localStorageItems: LocalStorageItem[];
  onEditStorageItem: (item: LocalStorageItem) => void;
  onDeleteStorageItem: (key: string) => void;
};

const StorageItemsTable: FC<Props> = ({
  localStorageItems,
  onEditStorageItem,
  onDeleteStorageItem,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isDeleteItemModalOpen, setIsDeleteItemModalOpen] = useState(false);
  const [isEditItemModalOpen, setIsEditItemModalOpen] = useState(false);
  const [itemKeyToDelete, setItemKeyToDelete] = useState<string>();
  const [itemToUpdate, setItemToUpdate] = useState<LocalStorageItem>();

  const openEditItemModal = (item: LocalStorageItem): void => {
    setIsEditItemModalOpen(true);
    setItemToUpdate(item);
  };

  const closeEditItemModal = (): void => {
    setIsEditItemModalOpen(false);
  };

  const handleEditItem = (updatedItem: LocalStorageItem): void => {
    onEditStorageItem(updatedItem);
    setIsEditItemModalOpen(false);
  };

  const openDeleteItemModal = (key: string): void => {
    setIsDeleteItemModalOpen(true);
    setItemKeyToDelete(key);
  };

  const closeDeleteItemModal = (): void => {
    setIsDeleteItemModalOpen(false);
  };

  const handleDeleteItem = (): void => {
    if (itemKeyToDelete) {
      onDeleteStorageItem(itemKeyToDelete);
      setIsDeleteItemModalOpen(false);
    }
  };

  const handleCopyItem = async (item: LocalStorageItem): Promise<void> => {
    if (item) {
      try {
        await navigator.clipboard.writeText(item.value);
        setCopiedKey(item.key);
      } catch (error) {
        console.error('Failed to copy text:', error);
      }
    }
  };

  const deleteItemTitle = 'Delete Local Storage Item';
  const deleteItemMessage = `Do you want to delete '${itemKeyToDelete}' from the local storage?`;

  return (
    <>
      <StyledTableContainer>
        <Table sx={{ tableLayout: 'fixed' }}>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell sx={{ width: 120 }}>Key</StyledTableCell>
              <StyledTableCell sx={{ width: 280 }}>Value</StyledTableCell>
              <StyledTableCell align='center' sx={{ width: 60 }}>
                Actions
              </StyledTableCell>
            </StyledTableRow>
          </TableHead>

          <TableBody>
            {localStorageItems.map((item) => (
              <StyledTableRow key={item.key}>
                <StyledTableCell>
                  <Typography
                    variant='body2'
                    fontSize={12}
                    whiteSpace='nowrap'
                    overflow='hidden'
                    textOverflow='ellipsis'
                  >
                    {item.key}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell>
                  <Typography
                    variant='body2'
                    fontSize={12}
                    whiteSpace='nowrap'
                    overflow='hidden'
                    textOverflow='ellipsis'
                  >
                    {item.value}
                  </Typography>
                </StyledTableCell>

                <StyledTableCell align='right'>
                  <Grid display='flex' flexDirection='row' justifyContent='flex-end'>
                    <IconButton
                      size='small'
                      sx={{ py: 0, px: 0.3 }}
                      onClick={async (): Promise<void> => handleCopyItem(item)}
                    >
                      {item.key === copiedKey ? (
                        <CheckCircleIcon fontSize='inherit' color='success' />
                      ) : (
                        <CopyIcon fontSize='inherit' color='success' />
                      )}
                    </IconButton>

                    <IconButton
                      size='small'
                      sx={{ py: 0, px: 0.3 }}
                      onClick={(): void => openEditItemModal(item)}
                    >
                      <EditIcon fontSize='inherit' color='primary' />
                    </IconButton>

                    <IconButton
                      size='small'
                      sx={{ py: 0, px: 0.3 }}
                      onClick={(): void => openDeleteItemModal(item.key)}
                    >
                      <DeleteIcon fontSize='inherit' sx={{ color: '#b71812' }} />
                    </IconButton>
                  </Grid>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      <EditItemModal
        open={isEditItemModalOpen}
        onClose={closeEditItemModal}
        onConfirm={handleEditItem}
        item={itemToUpdate}
      />

      <DeleteConfirmationModal
        open={isDeleteItemModalOpen}
        onClose={closeDeleteItemModal}
        onConfirm={handleDeleteItem}
        title={deleteItemTitle}
        message={deleteItemMessage}
      />
    </>
  );
};

export default StorageItemsTable;
