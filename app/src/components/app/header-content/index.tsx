import { FC } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';

import { useTheme } from '@mui/material/styles';
import { Messages } from '../../../constants';
import { Tab } from '../../../types';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  tab: Tab | null;
};

const HeaderContent: FC<Props> = ({ tab }) => {
  const theme = useTheme();

  const handleClose = (): void => {
    window.close();
  };

  const extractMainUrl = (url?: string): string | null => {
    if (!url) return null;

    const match = url.match(/\/\/(.*?)(\/|$)/);

    if (match && match[1]) {
      return match[1];
    } else {
      console.error(`Could not extract main URL from: ${url}`);
      return null;
    }
  };

  const isValidImage = (imageUrl?: string) => {
    if (!imageUrl) return false;
    if (imageUrl.includes('localhost')) return false;

    return true;
  };

  return (
    <Grid container flexDirection='row' justifyContent='space-between' alignItems='center'>
      <Grid item display='flex' alignItems='center' justifyContent='center'>
        <img
          src='/icons/icon128.png'
          width={28}
          height={28}
          alt='Tab Icon'
          style={{ marginRight: '16px' }}
        />

        <Typography
          variant='h1'
          fontSize={20}
          fontWeight={400}
          letterSpacing={0.4}
          color={theme.colors.text?.default}
        >
          {Messages.Title}
        </Typography>
      </Grid>

      <Grid
        item
        display='flex'
        flexDirection='row'
        justifyContent='flex-end'
        alignItems='center'
        gap={2}
      >
        <Grid display='flex' flexDirection='row' justifyContent='flex-end' alignItems='center'>
          {isValidImage(tab?.imageUrl) && (
            <img
              src={tab?.imageUrl}
              width={20}
              height={20}
              alt='Tab Icon'
              style={{ marginRight: '8px' }}
            />
          )}

          <Typography
            variant='h1'
            fontSize={12}
            fontWeight={400}
            lineHeight='normal'
            color={theme.colors.text?.default}
          >
            {extractMainUrl(tab?.url.toUpperCase())}
          </Typography>
        </Grid>

        <Grid>
          <IconButton size='small' color='inherit' onClick={handleClose}>
            <CloseIcon style={{ fontSize: 16 }} />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeaderContent;
