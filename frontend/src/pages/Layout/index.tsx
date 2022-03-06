import { Stack, useMediaQuery, Theme, Container, Divider } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../../components/layout/Navbar';
import { Sidebar } from '../../components/layout/Sidebar';
import { Loading } from '../../components/Loading';

const Layout = () => {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));
  return (
    <Container disableGutters maxWidth='md'>
      <Stack direction={'row'} sx={{ minHeight: '100vh' }}>
        {isDesktop && <Sidebar />}
        <Divider orientation='vertical' flexItem />
        <Stack flexGrow={1}>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
          {!isDesktop && <Navbar />}
        </Stack>

        <Divider orientation='vertical' flexItem />
      </Stack>
    </Container>
  );
};

export default Layout;
