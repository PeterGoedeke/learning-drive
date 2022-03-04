import { FirebaseApp } from 'firebase/app';
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { useSnackbar } from 'notistack';
import { PropsWithChildren, useMemo } from 'react';

import { AuthContext, AuthContextState } from '../../../context/AuthContext';

interface AuthProviderProps {
  firebaseApp: FirebaseApp;
}

export const AuthProvider = ({ firebaseApp, children }: PropsWithChildren<AuthProviderProps>) => {
  const auth = getAuth(firebaseApp);
  const { enqueueSnackbar } = useSnackbar();

  const ctx: AuthContextState = useMemo(() => {
    const providerSignInFactory = (provider: any) => async () => {
      try {
        signInWithPopup(auth, provider);
      } catch (error: any) {
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    };

    const signInWithGithub = providerSignInFactory(new GithubAuthProvider());

    const signInWithGoogle = providerSignInFactory(new GoogleAuthProvider());

    const signInWithFacebook = providerSignInFactory(new FacebookAuthProvider());

    const signOut = async () => {
      await auth.signOut();
    };

    return {
      user: auth.currentUser || undefined,
      signInWithGithub,
      signInWithGoogle,
      signInWithFacebook,
      signOut,
    };
  }, [auth, enqueueSnackbar]);

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
