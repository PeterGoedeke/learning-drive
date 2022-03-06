import { Stack, Typography } from '@mui/material';

import { PAGE_MARGIN } from '../../../utils/constants';
import SadBoxIcon from '../../icons/SadBoxIcon';

export interface EndOfFeedProps {
  message?: string;
}

export const EndOfFeed = ({
  message = "You've reached the end. There's nothing more to see here",
}: EndOfFeedProps) => (
  <Stack alignItems='center' sx={{ py: 8, px: PAGE_MARGIN }}>
    <SadBoxIcon sx={{ mb: 2, color: 'text.secondary', fontSize: 48 }} />
    <Typography color='text.secondary' component='p' textAlign='center'>
      <b>Well this is awkward...</b>
    </Typography>
    <br />
    <Typography color='text.secondary' component='p' textAlign='center'>
      {message}
    </Typography>
  </Stack>
);
