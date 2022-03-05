import { User } from 'firebase/auth';
import { createContext } from 'react';

export interface AuthContextState {
  user?: User;
  signInWithGithub: () => void;
  signInWithGoogle: () => void;
  signInWithFacebook: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextState>({
  signInWithGithub: () => {},
  signInWithGoogle: () => {},
  signInWithFacebook: () => {},
  signOut: () => {},
});
