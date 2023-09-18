import { FC } from 'react';
import { StyledTextarea } from './styles';

type Props = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

const CustomTextAreaInput: FC<Props> = ({ placeholder, value, onChange, ...rest }) => {
  return (
    <StyledTextarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...rest}
    />
  );
};

export default CustomTextAreaInput;
