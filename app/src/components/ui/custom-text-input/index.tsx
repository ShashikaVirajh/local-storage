import { FC } from 'react';
import { StyledTextField } from './styles';

type Props = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
};

const CustomTextInput: FC<Props> = ({
  placeholder,
  value,
  onChange,
  fullWidth = true,
  ...rest
}) => {
  return (
    <StyledTextField
      placeholder={placeholder}
      variant='outlined'
      value={value}
      size='small'
      sx={{ fontSize: 0.2 }}
      fullWidth
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  );
};

export default CustomTextInput;
