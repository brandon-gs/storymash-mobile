import React from 'react';
import useAuthenticationStore from '_hooks/store/useAuthenticationStore';
import NavigationAuthenticated from './navigation-authenticated';
import NavigationWelcome from './navigation-welcome';

export default function NavigationRoot() {
  const {
    state: {hasAuth},
  } = useAuthenticationStore();

  return hasAuth ? <NavigationAuthenticated /> : <NavigationWelcome />;
}
