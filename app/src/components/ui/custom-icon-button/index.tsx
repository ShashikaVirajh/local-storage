import { FC, ReactElement } from 'react';

import { StyledIconButton } from './styles';

type Props = {
  icon: ReactElement;
  disabled?: boolean;
  backgroundColor?: string;
  onClick: () => void;
};

const CustomIconButton: FC<Props> = ({ icon, disabled, backgroundColor, onClick }) => {
  return (
    <StyledIconButton
      size='small'
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {icon}
    </StyledIconButton>
  );
};

export default CustomIconButton;
