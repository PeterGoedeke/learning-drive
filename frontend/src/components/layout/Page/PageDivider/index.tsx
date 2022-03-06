import { Box, Divider, DividerProps } from '@mui/material';

import { PAGE_MARGIN } from '../../../../utils/constants';

export const PageDivider = ({ sx, ...rest }: DividerProps) => (
  <Box>
    <Divider {...rest} sx={{ mx: -PAGE_MARGIN, ...sx }} />
  </Box>
);
