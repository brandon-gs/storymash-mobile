import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '_screens/profile-screen';
import SettingsScreen from '_screens/settings-screen';

const Stack = createNativeStackNavigator();

export default function NavigationAuthenticated() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

// Screens params
export type AppRootAuthParamList = {
  Profile: {profileUsername: string};
  Settings: undefined;
};

/**
 * Types to pass when use useRoute hook
 * example: const router = useRoute<ProfileScreenProp, 'Profile'>();
 */
// export type ProfileScreenProp = NativeStackNavigationProp<
//   AppRootAuthParamList,
//   'Profile'
// >;

// export type ReadStoryScreenProp = NativeStackNavigationProp<
//   AppRootAuthParamList,
//   AuthStackRoutes.ReadStory
// >;

// export type SettingsScreenProp = NativeStackNavigationProp<
//   AuthStackParams,
//   AuthStackRoutes.Settings
// >;

// export type SearchScreenProp = NativeStackNavigationProp<
//   AuthStackParams,
//   AuthStackRoutes.Settings
// >;

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppRootAuthParamList {}
  }
}
