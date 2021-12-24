import {useNavigation} from '@react-navigation/core';

/**
 * Hook that returns functions to going to other screen
 * @returns { ...goToNameScreen }
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
