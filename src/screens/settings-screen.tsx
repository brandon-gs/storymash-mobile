import {VStack} from 'native-base';
import React from 'react';
import SettingsItem from '_components/atoms/settings-item';
import StyledScrollView from '_components/atoms/styled-scrollview';
import ThemeToggle from '_components/atoms/theme-toggle';
import useAuthenticationStore from '_hooks/store/useAuthenticationStore';

export default function SettingsScreen() {
  const {
    actions: {logOut},
  } = useAuthenticationStore();

  return (
    <StyledScrollView>
      <ThemeToggle />
      <SettingsItem
        title="Preguntas frecuentes"
        iconName="help-circle-outline"
        onPress={() => console.log('faq')}
      />
      <SettingsItem
        title="Cerrar sesión"
        iconName="log-out-outline"
        onPress={logOut}
      />
    </StyledScrollView>
  );
}
