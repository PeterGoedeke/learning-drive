import { Stack, useMediaQuery, Theme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import PageHeader from '../../components/layout/PageHeader';
import { Sidebar } from '../../components/layout/Sidebar';

const Layout = () => {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));
  return (
    <Stack direction={'row'} sx={{ minHeight: '100vh' }}>
      <Sidebar/>
      <Stack flexGrow={1}>
        <PageHeader title={'I Dunno man do some logic for which page here'} />
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default Layout;
