import React from 'react';
import {Box, Button, Center, Heading, HStack, Text, VStack} from 'native-base';
import FormRegister from '_components/organisms/Forms/form-register';
import StyledScrollView from '_components/atoms/styled-scrollview';
import useNavigationScreens from '_hooks/useNavigationScreens';

export default function RegisterScreen() {
  const {goToLoginScreen} = useNavigationScreens();

  return (
    <StyledScrollView
      keyboardShouldPersistTaps="always"
      keyboardDismissMode="on-drag">
      <Center flex={1}>
        <Box safeArea py="8" w="90%" maxW="296">
          <Heading
            mt="1"
            fontWeight="medium"
            size="lg"
            textAlign={'center'}
            mb={'3'}
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            Crea una cuenta para continuar
          </Heading>
          <VStack space={3} mt="5">
            <FormRegister />
            <HStack mt="6" justifyContent="center" alignItems={'center'}>
              <Text
                fontSize="md"
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}>
                Ya tengo una cuenta.{' '}
              </Text>
              <Button variant="link" onPress={goToLoginScreen}>
                Iniciar sesión
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </StyledScrollView>
  );
}
