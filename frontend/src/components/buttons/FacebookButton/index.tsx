import { Button } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import { LOGIN_BUTTON_WIDTH } from '../../../utils/constants';
import FacebookIcon from '../../icons/FacebookIcon';

const FacebookButton = () => {
  const appContext = useAuth();
  return (
    <Button
      variant='contained'
      sx={{width: LOGIN_BUTTON_WIDTH}}
      onClick={appContext.signInWithFacebook}
      startIcon={<FacebookIcon />}
    >
      Login with Facebook
    </Button>
  );
};
export default FacebookButton;
