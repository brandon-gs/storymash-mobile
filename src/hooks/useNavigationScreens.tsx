import {useNavigation} from '@react-navigation/core';

/**
 * Hook that returns an object with functions to going to another screen
 */
export default function useNavigationScreens() {
  const navigation = useNavigation();

  const goToLoginScreen = () => {
    navigation.navigate('Login');
  };

  const goToRegisterScreen = () => {
    navigation.navigate('Register');
  };

  return {goToLoginScreen, goToRegisterScreen};
}
