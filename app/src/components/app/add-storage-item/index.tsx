import { FC, useMemo, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

import { Messages } from '../../../constants';
import { LocalStorageItem } from '../../../types';

import ContentWrapper from '../../ui/content-wrapper';
import CustomTextInput from '../../ui/custom-text-input';
import CustomIconButton from '../../ui/custom-icon-button';

type Props = {
  localStorageItems: LocalStorageItem[];
  SaveLocalStorageItem: (key: string, value: string) => void;
};

const AddStorageItem: FC<Props> = ({ localStorageItems, SaveLocalStorageItem }) => {
  const theme = useTheme();

  const [keyToAdd, setKeyToAdd] = useState<string>('');
  const [valueToAdd, setValueToAdd] = useState<string>('');
  const [hasAddItemClicked, setHasAddItemClicked] = useState(false);

  const isDuplicateKey = useMemo(() => {
    const hasLocalStorageItems = localStorageItems?.length > 0;

    if (keyToAdd === '' || !hasLocalStorageItems) return false;

    const itemKey = localStorageItems.filter(
      (item) => item.key.toLocaleLowerCase() === keyToAdd.toLocaleLowerCase(),
    );

    return itemKey.length > 0;
  }, [keyToAdd, localStorageItems]);

  const handleOnKeyChange = (key: string): void => {
    setHasAddItemClicked(false);
    setKeyToAdd(key);
  };

  const handleOnValueChange = (value: string): void => {
    setHasAddItemClicked(false);
    setValueToAdd(value);
  };

  const handleOnAddNewItem = (): void => {
    setHasAddItemClicked(true);

    if (isDuplicateKey) return;

    SaveLocalStorageItem(keyToAdd, valueToAdd);
    handleOnResetForm();
  };

  const handleOnResetForm = (): void => {
    setKeyToAdd('');
    setValueToAdd('');
    setHasAddItemClicked(false);
  };

  const disabledAddButton = keyToAdd === '' || valueToAdd === '';
  const showDuplicateKeyError = hasAddItemClicked && isDuplicateKey;

  return (
    <ContentWrapper>
      <Grid container alignItems='center' gap={1}>
        <Grid item display='flex' flexDirection='row' flexGrow={1} gap={1}>
          <Grid item xs={4}>
            <CustomTextInput
              fullWidth
              placeholder='key'
              value={keyToAdd}
              onChange={handleOnKeyChange}
            />
          </Grid>

          <Grid item xs={8}>
            <CustomTextInput
              fullWidth
              placeholder='value'
              value={valueToAdd}
              onChange={handleOnValueChange}
            />
          </Grid>
        </Grid>

        <Grid item>
          <CustomIconButton
            icon={<AddIcon />}
            disabled={disabledAddButton}
            onClick={handleOnAddNewItem}
          />
        </Grid>
      </Grid>

      {showDuplicateKeyError && (
        <Typography
          variant='body2'
          fontSize={14}
          marginTop={1}
          letterSpacing={0.8}
          color={theme.palette.error.dark}
        >
          {Messages.DuplicateStorageKey}
        </Typography>
      )}
    </ContentWrapper>
  );
};

export default AddStorageItem;
