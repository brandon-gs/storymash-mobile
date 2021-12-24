import React, {useState} from 'react';
import {FormControl, Input, Button} from 'native-base';
import InputPassword from '_components/molecules/input-password';
import useAuthentication, {LoginValues} from '_hooks/store/useAuthentication';

export default function FormLogin() {
  const {actions, state} = useAuthentication();
  const [values, setValues] = useState<LoginValues>({
    username: '',
    password: '',
  });
  const [hidePwd, setHidePwd] = useState<boolean>(true);

  const handleChange = (key: keyof LoginValues) => (newValue: string) => {
    setValues({...values, [key]: newValue});
  };

  return (
    <>
      <FormControl mb={3}>
        <FormControl.Label>Correo electrónico</FormControl.Label>
        <Input onChangeText={handleChange('username')} />
      </FormControl>
      <FormControl mb={3}>
        <FormControl.Label>Contraseña</FormControl.Label>
        <InputPassword
          hide={hidePwd}
          onChangeText={handleChange('password')}
          onPressIcon={() => setHidePwd(prev => !prev)}
          onSubmitEditing={() => actions.handleLogin(values)}
        />
      </FormControl>
      <Button
        mt="3"
        colorScheme="blue"
        size="lg"
        isLoading={state.loading}
        disabled={state.loading}
        isDisabled={state.loading}
        onPress={() => actions.handleLogin(values)}>
        Iniciar sesión
      </Button>
    </>
  );
}
