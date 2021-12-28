import {useNavigation} from '@react-navigation/core';

/**
 * Hook that returns an object with functions to going to another screen
 */
export default function useNavigationScreens() {
  const navigation = useNavigation();

  // ---- Public screens

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  const goToRegisterScreen = () => {
    navigation.navigate('Register');
  };

  // ---- Private screens

  const goToProfileScreen = (username: string) => {
    navigation.navigate('Profile', {
      profileUsername: username,
    });
  };

  const goToSettingsScreen = () => {
    navigation.navigate('Settings');
  };

  return {
    goToLoginScreen,
    goToRegisterScreen,
    goToProfileScreen,
    goToSettingsScreen,
  };
}
