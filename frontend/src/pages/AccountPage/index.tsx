import { Button } from '@mui/material';

import { Page } from '../../components/layout/Page';

import { useAuth } from '../../hooks/useAuth';

const AccountPage = () => {
  const { signOut } = useAuth();
  return (
    <Page title='Account'>
      <Button onClick={() => signOut()} variant='contained' color='secondary' sx={{ m: 2 }}>
        Sign Out
      </Button>
    </Page>
  );
};

export default AccountPage;
