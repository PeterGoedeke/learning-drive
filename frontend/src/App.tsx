import { Button, Container, Divider, Typography } from '@mui/material';

import { useAuth } from './hooks/useAuth';

const App = () => {
  const { user, signInWithGoogle, signOut } = useAuth();

  return (
    <Container>
      <Typography variant='h5' gutterBottom>
        Learning Drive
      </Typography>
      <Divider />
      <Typography>{user ? `Hello, ${user.displayName}` : 'Hello, stranger'}</Typography>
      {!user ? (
        <Button variant='outlined' onClick={() => signInWithGoogle()}>
          Sign in with Google
        </Button>
      ) : (
        <Button variant='outlined' onClick={() => signOut()}>
          Sign Out
        </Button>
      )}
    </Container>
  );
};

export default App;
