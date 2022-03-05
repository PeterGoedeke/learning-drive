import { Button } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import { LOGIN_BUTTON_WIDTH } from '../../../utils/constants';
import GoogleIcon from '../../icons/GoogleIcon';

const GoogleButton = () => {
  const appContext = useAuth();
  return (
    <Button
      variant='contained'
      sx={{ width: LOGIN_BUTTON_WIDTH }}
      onClick={appContext.signInWithGoogle}
      startIcon={<GoogleIcon />}
    >
      Login with Google
    </Button>
  );
};

export default GoogleButton;
