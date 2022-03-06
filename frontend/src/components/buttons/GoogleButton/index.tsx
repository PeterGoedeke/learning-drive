import { Button } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import GoogleIcon from '../../icons/GoogleIcon';

const GoogleButton = () => {
  const appContext = useAuth();
  return (
    <Button
      variant='contained'
      fullWidth
      onClick={appContext.signInWithGoogle}
      startIcon={<GoogleIcon />}
    >
      Login with Google
    </Button>
  );
};

export default GoogleButton;
