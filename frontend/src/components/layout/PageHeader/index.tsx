import { Box, Divider, IconButton, Stack, styled, Toolbar, Typography } from '@mui/material';
import { ReactNode } from 'react';

import ArrowLeftIcon from '../../icons/ArrowLeftIcon';

export interface PageHeaderProps {
  title: string;
  action?: ReactNode;
  backButton?: boolean;
}

const PageHeader = ({ title, action, backButton = false }: PageHeaderProps) => (
  <AppBar>
    <Stack component={Toolbar} direction='row' spacing={1}>
      {backButton && (
        <IconButton sx={{ color: 'white' }}>
          <ArrowLeftIcon fontSize='inherit' />
        </IconButton>
      )}
      <Typography variant='h5' component='h1'>
        {title}
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      {action}
    </Stack>
    <Divider />
  </AppBar>
);

const AppBar = styled(Box)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  background: theme.palette.background.default,
  zIndex: theme.zIndex.appBar,
}));

export default PageHeader;
