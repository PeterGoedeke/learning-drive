import { Container, Divider, Stack } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../../components/layout/Navbar';
import { Sidebar } from '../../components/layout/Sidebar';
import { Loading } from '../../components/Loading';

import { useIsDesktop } from '../../hooks/useIsDesktop';

const Layout = () => {
  const isDesktop = useIsDesktop();
  return (
    <Container disableGutters maxWidth='md'>
      <Stack direction={'row'} sx={{ minHeight: '100vh' }}>
        {isDesktop && <Sidebar />}
        {isDesktop && <Divider orientation='vertical' flexItem />}
        <Stack flexGrow={1}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
          {!isDesktop && <Navbar />}
        </Stack>
        {isDesktop && <Divider orientation='vertical' flexItem />}
      </Stack>
    </Container>
  );
};

export default Layout;
