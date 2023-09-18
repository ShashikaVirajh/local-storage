import { FC, ReactNode } from 'react';
import { Wrapper } from './styles';

type Props = {
  children: ReactNode;
};

const ContentWrapper: FC<Props> = ({ children }) => <Wrapper xs={12}>{children}</Wrapper>;

export default ContentWrapper;
