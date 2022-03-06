import { Button } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import FacebookIcon from '../../icons/FacebookIcon';

const FacebookButton = () => {
  const appContext = useAuth();
  return (
    <Button
      variant='contained'
      fullWidth
      onClick={appContext.signInWithFacebook}
      startIcon={<FacebookIcon />}
    >
      Login with Facebook
    </Button>
  );
};
export default FacebookButton;
