import { FirebaseApp } from 'firebase/app';
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { useSnackbar } from 'notistack';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { AuthContext, AuthContextState } from '../../../context/AuthContext';

interface AuthProviderProps {
  firebaseApp: FirebaseApp;
}

export const AuthProvider = ({ firebaseApp, children }: PropsWithChildren<AuthProviderProps>) => {
  const auth = getAuth(firebaseApp);
  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user || undefined);
    });
  }, [auth]);

  const ctx: AuthContextState = useMemo(() => {
    const providerSignInFactory = (provider: any) => async () => {
      try {
        await signInWithPopup(auth, provider);
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
      user: user,
      signInWithGithub,
      signInWithGoogle,
      signInWithFacebook,
      signOut,
    };
  }, [auth, enqueueSnackbar, user]);

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
