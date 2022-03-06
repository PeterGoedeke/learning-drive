import { Stack, Typography } from '@mui/material';

import SadBoxIcon from '../../icons/SadBoxIcon';

export const EndOfFeed = () => (
  <Stack alignItems='center' sx={{ my: 8 }}>
    <SadBoxIcon sx={{ mb: 2, color: 'text.secondary', fontSize: 48 }} />
    <Typography color='text.secondary' component='p'>
      <b>Well this is awkward...</b>
    </Typography>
    <br />
    <Typography color='text.secondary' component='p'>
      {"You've reached the end. There's nothing more to see here"}
    </Typography>
  </Stack>
);
