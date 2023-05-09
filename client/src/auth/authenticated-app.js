import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MainPage from '../main-page/main-page';
import LoginButton from '../login-page/login-button';

const AuthenticatedApp = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <MainPage /> : <LoginButton />;
};

export default AuthenticatedApp;
