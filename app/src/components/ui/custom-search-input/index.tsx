import { ChangeEvent, FC } from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { StyledTextField } from './styles';

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
};

const CustomSearchInput: FC<Props> = ({
  placeholder,
  value,
  onChange,
  fullWidth = true,
  ...rest
}) => {
  return (
    <StyledTextField
      fullWidth
      type='search'
      placeholder={placeholder}
      variant='outlined'
      value={value}
      size='small'
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

export default CustomSearchInput;
