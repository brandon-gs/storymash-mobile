import {Box, Button, Center, Heading, HStack, Text, VStack} from 'native-base';
import React from 'react';
import StyledScrollView from '_components/atoms/styled-scrollview';
import ThemeToggle from '_components/atoms/theme-toggle';
import FormLogin from '_components/organisms/Forms/form-login';
import useNavigationScreens from '_hooks/useNavigationScreens';

export default function LoginScreen() {
  const {goToRegisterScreen} = useNavigationScreens();

  return (
    <StyledScrollView>
      <Center flex={1} px="3">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading
            size="2xl"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: 'warmGray.50',
            }}>
            Bienvenido
          </Heading>
          <Heading
            mt="1"
            fontWeight="medium"
            size="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            Inicia sesión para continuar
          </Heading>
          <VStack space={3} mt="5">
            <FormLogin />
            <HStack mt="6" justifyContent="center" alignItems={'center'}>
              <Text
                fontSize="md"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                Soy usuario nuevo.{' '}
              </Text>
              <Button variant="link" onPress={goToRegisterScreen}>
                Registrarse
              </Button>
            </HStack>
          </VStack>
        </Box>
        <ThemeToggle />
      </Center>
    </StyledScrollView>
  );
}
