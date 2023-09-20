import { useEffect, FC } from 'react';
import { Grid } from '@mui/material';

import { useLocalStorage } from './hooks/useLocalStorage';
import AddStorageItem from './components/app/add-storage-item';
import AppHeader from './components/app/header-content';
import StorageItemsList from './components/app/storage-items-list';

const App: FC = () => {
  const {
    currentTab,
    fetchCurrentTab,
    localStorageItems,
    SaveLocalStorageItem,
    fetchLocalStorageItems,
    DeleteLocalStorageItem,
    clearAllItems,
  } = useLocalStorage();

  useEffect(() => {
    fetchCurrentTab();
  }, [fetchCurrentTab]);

  useEffect(() => {
    fetchLocalStorageItems();
  }, [fetchLocalStorageItems]);

  return (
    <>
      <Grid item container justifyContent='center' mb={1.5}>
        <AppHeader tab={currentTab} />
      </Grid>

      <Grid container gap={2.5}>
        <Grid item xs={12}>
          <AddStorageItem
            localStorageItems={localStorageItems}
            SaveLocalStorageItem={SaveLocalStorageItem}
          />
        </Grid>

        <Grid item xs={12} mb={2}>
          <StorageItemsList
            localStorageItems={localStorageItems}
            SaveLocalStorageItem={SaveLocalStorageItem}
            DeleteLocalStorageItem={DeleteLocalStorageItem}
            clearAllItems={clearAllItems}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
