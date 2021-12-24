import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '_screens/profile-screen';

const Stack = createNativeStackNavigator();

export default function NavigationAuthenticated() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{username: ''}}
      />
    </Stack.Navigator>
  );
}

// Screens params
export type AppRootAuthParamList = {
  ProfileScreen: {username: string};
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootAuthParamList {}
  }
}
