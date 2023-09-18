import { ChangeEvent, FC, useState } from 'react';
import { Avatar, Box, Chip, Grid, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { LocalStorageItem } from '../../../types';
import { Messages } from '../../../constants';

import StorageItemsTable from '../storage-items-table';
import DeleteConfirmationModal from '../../ui/delete-confirmation-modal';
import ContentWrapper from '../../ui/content-wrapper';
import CustomSearchInput from '../../ui/custom-search-input';
import CustomButton from '../../ui/custom-button';

type Props = {
  localStorageItems: LocalStorageItem[];
  SaveLocalStorageItem: (key: string, value: string) => void;
  DeleteLocalStorageItem: (key: string) => void;
  clearAllItems: () => void;
};

const StorageItemsList: FC<Props> = ({
  localStorageItems,
  SaveLocalStorageItem,
  DeleteLocalStorageItem,
  clearAllItems,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isClearStorageModalOpen, setIsClearStorageModalOpen] = useState(false);

  const filteredItems = localStorageItems.filter((item) =>
    item.key.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const hasLocalStorageItems = localStorageItems?.length > 0;
  const itemsMessage = filteredItems.length === 1 ? 'item' : 'items';

  if (!hasLocalStorageItems) {
    return (
      <Box display='flex' flexDirection='column' alignItems='center' mt={4}>
        <Typography variant='h1' color='textSecondary'>
          📦
        </Typography>
        <Typography variant='subtitle1' color='textSecondary'>
          {Messages.EmptyLocalStorage}
        </Typography>
      </Box>
    );
  }

  const handleOnChangeSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const openClearStorageModal = (): void => setIsClearStorageModalOpen(true);

  const closeClearStorageModal = (): void => setIsClearStorageModalOpen(false);

  const handleClearStorage = (): void => {
    clearAllItems();
    setSearchQuery('');
  };

  const handleEditItem = (item: LocalStorageItem): void => {
    SaveLocalStorageItem(item?.key, item?.value);
  };

  const handleDeleteItem = (item: string): void => {
    DeleteLocalStorageItem(item);
    setSearchQuery('');
  };

  const deleteAllItemsTitle = 'Delete All Local Storage Items?';
  const deleteAllItemsMessage =
    'Permanently delete all the local storage items. Are you absolutely certain you want to proceed?';

  return (
    <ContentWrapper>
      <Grid container flexDirection='column' gap={2}>
        <Grid
          item
          container
          flexDirection='row'
          flexGrow={1}
          justifyContent='space-between'
          alignItems='center'
          gap={2}
        >
          <Grid item display='flex' flexGrow={1}>
            <CustomSearchInput
              placeholder='Search Storage Items'
              value={searchQuery}
              onChange={handleOnChangeSearch}
            />
          </Grid>

          <Grid item>
            <Chip
              avatar={<Avatar>{filteredItems?.length}</Avatar>}
              sx={{ fontSize: 12, color: '#FFFFFF', backgroundColor: '#594D9E' }}
              label={itemsMessage}
            />
          </Grid>

          <Grid item>
            <CustomButton
              text='Clear Storage'
              onClick={openClearStorageModal}
              variant='contained'
              backgroundColor='#b71812'
              startIcon={<DeleteForeverIcon />}
            />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <StorageItemsTable
            localStorageItems={filteredItems}
            onDeleteStorageItem={(item: string): void => handleDeleteItem(item)}
            onEditStorageItem={(item: LocalStorageItem): void => handleEditItem(item)}
          />
        </Grid>
      </Grid>

      <DeleteConfirmationModal
        open={isClearStorageModalOpen}
        onClose={closeClearStorageModal}
        onConfirm={handleClearStorage}
        title={deleteAllItemsTitle}
        message={deleteAllItemsMessage}
      />
    </ContentWrapper>
  );
};

export default StorageItemsList;
