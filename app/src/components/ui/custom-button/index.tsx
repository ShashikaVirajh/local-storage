import { FC } from 'react';
import { ButtonProps } from '@mui/material';

import { StyledButton } from './styles';

interface Props extends ButtonProps {
  text: string;
  backgroundColor?: string;
}

const CustomButton: FC<Props> = ({ text, backgroundColor, ...rest }) => {
  return (
    <StyledButton size='small' backgroundColor={backgroundColor} {...rest}>
      {text}
    </StyledButton>
  );
};

export default CustomButton;
