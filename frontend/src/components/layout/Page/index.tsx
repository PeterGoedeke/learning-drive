import { Container, Stack, styled } from '@mui/material';
import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import PageHeader, { PageHeaderProps } from '../PageHeader';

import { PAGE_MARGIN, SIDEBAR_WIDTH } from '../../../utils/constants';

interface PageProps extends PageHeaderProps {
  bottomActions?: React.ReactNode;
}

export const Page: FC<PageProps> = ({ bottomActions, children, title, ...other }) => (
  <Stack sx={{ flexGrow: 1, px: PAGE_MARGIN, position: 'relative' }}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <PageHeader title={title} {...other} />
    {children}
    {bottomActions && (
      <ActionContainer>
        <Container maxWidth='md' disableGutters sx={{ p: PAGE_MARGIN }}>
          <Stack direction='row' sx={{ ml: `${SIDEBAR_WIDTH}px` }}>
            {bottomActions}
          </Stack>
        </Container>
      </ActionContainer>
    )}
  </Stack>
);

const ActionContainer = styled(Container)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
}));
