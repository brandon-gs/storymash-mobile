import React from 'react';
import {Box, Button, IButtonProps, Center, Heading, VStack} from 'native-base';
import WelcomeIcon from '_assets/svgs/Welcome.svg';
import {Dimensions} from 'react-native';
import useNavigationScreens from '_hooks/useNavigationScreens';
import StyledScrollView from '_components/atoms/styled-scrollview';

const {width} = Dimensions.get('window');

const StyledButton = (props: IButtonProps) => (
  <Button h={16} w="full" maxW={400} _text={{fontSize: 'lg'}} {...props} />
);

export default function WelcomeScreen() {
  const {goToLoginScreen, goToRegisterScreen} = useNavigationScreens();

  return (
    <StyledScrollView>
      <Center flex={1} px="3">
        <Box safeArea p="1" py="8" w="100%" maxW="400">
          <VStack>
            <Heading size="3xl" color="blue.500">
              Storymash
            </Heading>
            <Heading
              mt="1"
              fontWeight="medium"
              size="md"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Un lugar mágico donde las historias son las protagonistas.
            </Heading>
          </VStack>
          <Box justifyContent="center" alignItems="center">
            <WelcomeIcon width={width * 0.75} height={width * 0.75} />
          </Box>
          <StyledButton onPress={goToRegisterScreen}>Registrarse</StyledButton>
          <StyledButton mt="5" onPress={goToLoginScreen}>
            Iniciar sesión
          </StyledButton>
        </Box>
      </Center>
    </StyledScrollView>
  );
}
