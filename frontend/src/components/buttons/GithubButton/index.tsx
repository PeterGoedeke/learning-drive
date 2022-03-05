import { Button } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import { LOGIN_BUTTON_WIDTH } from '../../../utils/constants';
import GithubIcon from '../../icons/GithubIcon';

const GithubButton = () => {
  const appContext = useAuth();
  return (
    <Button
      variant='contained'
      sx={{ width: LOGIN_BUTTON_WIDTH}}
      onClick={appContext.signInWithGithub}
      startIcon={<GithubIcon />}
    >
      Login with Github
    </Button>
  );
};

export default GithubButton;
