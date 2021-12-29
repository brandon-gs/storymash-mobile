import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '_screens/profile-screen';
import SettingsScreen from '_screens/settings-screen';
import HeaderProfile from '_components/organisms/NavigationsHeader/header-profile';
import NavigationTabsAuthenticated from './navigation-tabs-authenticated';

const Stack = createNativeStackNavigator();

export default function NavigationAuthenticated() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Tabs" component={NavigationTabsAuthenticated} />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: props => (
            <HeaderProfile {...props} title="Perfil" showEditProfile />
          ),
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: props => <HeaderProfile {...props} title="Configuración" />,
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

// Screens params
export type AppRootAuthParamList = {
  Tabs: undefined;
  Profile: {profileUsername: string};
  Settings: undefined;
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootAuthParamList {}
  }
}
