import { Stack, useMediaQuery, Theme } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../../components/layout/Navbar';
import PageHeader from '../../components/layout/PageHeader';
import { Sidebar } from '../../components/layout/Sidebar';

const Layout = () => {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));
  return (
    <Stack direction={'row'} sx={{ minHeight: '100vh' }}>
      {isDesktop && (
        <><Sidebar /><Stack flexGrow={1}>
          <PageHeader title={'I Dunno man do some logic for which page here'} />
          <Outlet />
        </Stack></>
      )}
      {!isDesktop && (
        <Stack flexGrow={1}>
          <PageHeader title={'I Dunno man do some logic for which page here'} />
          <Outlet />
          <Navbar />
        </Stack>
      )}
    </Stack>
  );
};

export default Layout;
