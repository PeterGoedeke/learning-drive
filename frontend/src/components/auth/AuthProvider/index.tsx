import axios from 'axios';
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

import { Loading } from '../../Loading';

import { AuthContext, AuthContextState } from '../../../context/AuthContext';

interface AuthProviderProps {
  firebaseApp: FirebaseApp;
}

export const AuthProvider = ({ firebaseApp, children }: PropsWithChildren<AuthProviderProps>) => {
  const auth = getAuth(firebaseApp);

  const [hydrated, setHydrated] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    // Add the id token to any axios requests made
    axios.interceptors.request.use(async (config) => {
      const token = await auth.currentUser?.getIdToken();
      if (token) {
        (config.headers as any).Authorization = `Bearer ${token}`;
      }
      return config;
    });
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user || undefined);
      setHydrated(true);
    });
  }, [auth]);

  const ctx: AuthContextState = useMemo(() => {
    const providerSignInFactory = (provider: any) => async () => {
      try {
        setHydrated(false);
        await signInWithPopup(auth, provider);
      } catch (error: any) {
        enqueueSnackbar(error.message, { variant: 'error' });
        setHydrated(true);
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

  if (!hydrated) {
    return <Loading />;
  }
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
