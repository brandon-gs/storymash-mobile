import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// Components
import HeaderAuth from '_components/organisms/NavigationsHeader/header-auth';
import NavigationTab from '_components/molecules/navigation-tab';
// Screens
import HomeScreen from '_screens/home-screen';
import PlankScreen from '_screens/plank-screen';
import CreateStoryScreen from '_screens/create-story-screen';
import FavoritesScreen from '_screens/favorites-screen';
import RankScreen from '_screens/rank-screen';
// Hooks
import useAuthenticationStore from '_hooks/store/useAuthenticationStore';
import useNavigationScreens from '_hooks/useNavigationScreens';

const Tab = createBottomTabNavigator();

export default function NavigationTabsAuthenticated() {
  const {
    state: {user},
  } = useAuthenticationStore();

  const {goToProfileScreen} = useNavigationScreens();

  return (
    <Tab.Navigator
      tabBar={props => <NavigationTab {...props} />}
      screenOptions={{
        header: () => (
          <HeaderAuth user={user} goToProfileScreen={goToProfileScreen} />
        ),
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Plank'} component={PlankScreen} />
      <Tab.Screen
        name={'CreateStory'}
        component={CreateStoryScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen name={'Favorites'} component={FavoritesScreen} />
      <Tab.Screen name={'Rank'} component={RankScreen} />
    </Tab.Navigator>
  );
}

// Screens params
export type NavigationTabsParamList = {
  Home: undefined;
};

// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc
declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationTabsParamList {}
  }
}
