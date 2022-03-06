import { Button } from '@mui/material';

import { useAuth } from '../../../hooks/useAuth';
import GithubIcon from '../../icons/GithubIcon';

const GithubButton = () => {
  const appContext = useAuth();
  return (
    <Button
      variant='contained'
      fullWidth
      onClick={appContext.signInWithGithub}
      startIcon={<GithubIcon />}
    >
      Login with Github
    </Button>
  );
};

export default GithubButton;
