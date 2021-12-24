import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '_screens/login-screen';
import WelcomeScreen from '_screens/welcome-screen';
import RegisterScreen from '_screens/register-screen';

const Stack = createNativeStackNavigator();

export default function NavigationWelcome() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

// Screens params
export type AppRootParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootParamList {}
  }
}
