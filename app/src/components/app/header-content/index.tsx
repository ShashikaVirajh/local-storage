import { FC } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useTheme } from '@mui/material/styles';
import { Messages } from '../../../constants';
import { Tab } from '../../../types';
import { extractMainUrl, isValidImage } from '../../../utils';

type Props = {
  tab: Tab | null;
};

const HeaderContent: FC<Props> = ({ tab }) => {
  const theme = useTheme();

  const handleClose = (): void => {
    window.close();
  };

  return (
    <Grid container flexDirection='row' justifyContent='space-between' alignItems='center'>
      <Grid item display='flex' alignItems='center' justifyContent='center'>
        <img
          src='/icons/icon128.png'
          width={28}
          height={28}
          alt='Current Page Icon'
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
