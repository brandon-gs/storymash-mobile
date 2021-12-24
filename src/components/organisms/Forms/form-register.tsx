import React, {useRef, useState} from 'react';
import {FormControl, Input, Button, Select, CheckIcon} from 'native-base';
import Loader from 'react-native-multi-loader';
import InputPassword from '_components/molecules/input-password';
import useAuthentication, {
  RegisterValues,
} from '_hooks/store/useAuthentication';
import {Keyboard} from 'react-native';

const defaultFields: RegisterValues = {
  firstName: '',
  lastName: '',
  email: '',
  gender: '',
  username: '',
  password: '',
  confirmPassword: '',
};

export default function FormRegister() {
  const lastNameRef: any = useRef(null);
  const usernameRef: any = useRef(null);
  const emailRef: any = useRef(null);
  const passwordRef: any = useRef(null);
  const confirmPasswordRef: any = useRef(null);

  const [values, setValues] = useState<RegisterValues>(defaultFields);
  const [errors, setErrors] = useState<RegisterValues>(defaultFields);
  const [hidePwd, setHidePwd] = useState<boolean>(true);
  const [hideConfirmPwd, setHideConfirmPwd] = useState<boolean>(true);

  const handleChange = (name: keyof RegisterValues) => (newValue: string) => {
    setValues({...values, [name]: newValue});
    // Remove error on input change?
    setErrors({...errors, [name]: ''});
  };

  const {
    state: {loading},
    actions: {handleRegister},
  } = useAuthentication();

  return (
    <>
      <Loader visible={loading} sizeText={0} />

      <FormControl mb={3} isInvalid={Boolean(errors.firstName)}>
        <FormControl.Label>Nombre</FormControl.Label>
        <Input
          onChangeText={handleChange('firstName')}
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() =>
            lastNameRef.current && lastNameRef.current.focus()
          }
        />
        <FormControl.ErrorMessage>{errors.firstName}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={Boolean(errors.lastName)}>
        <FormControl.Label>Apellido</FormControl.Label>
        <Input
          onChangeText={handleChange('lastName')}
          returnKeyType="next"
          ref={lastNameRef}
          blurOnSubmit={false}
          onSubmitEditing={() =>
            usernameRef.current && usernameRef.current.focus()
          }
        />
        <FormControl.ErrorMessage>{errors.lastName}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={Boolean(errors.username)}>
        <FormControl.Label>Nombre de usuario</FormControl.Label>
        <Input
          autoCapitalize="none"
          onChangeText={handleChange('username')}
          returnKeyType="next"
          ref={usernameRef}
          blurOnSubmit={false}
          onSubmitEditing={() => Keyboard.dismiss()}
        />
        <FormControl.ErrorMessage>{errors.username}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={Boolean(errors.gender)}>
        <FormControl.Label>Género</FormControl.Label>
        <Select
          minWidth="200"
          accessibilityLabel="Género"
          onValueChange={() => {
            handleChange('gender');
            setTimeout(() => {
              emailRef.current && emailRef.current.focus();
            }, 1000);
          }}
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1">
          <Select.Item label="Masculino" value="masculino" />
          <Select.Item label="Femenino" value="femenino" />
          <Select.Item label="Otro" value="other" />
        </Select>
        <FormControl.ErrorMessage>{errors.gender}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={Boolean(errors.email)}>
        <FormControl.Label>Correo electrónico</FormControl.Label>
        <Input
          autoCapitalize="none"
          onChangeText={handleChange('email')}
          returnKeyType="next"
          ref={emailRef}
          blurOnSubmit={false}
          onSubmitEditing={() =>
            passwordRef.current && passwordRef.current.focus()
          }
        />
        <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={Boolean(errors.password)}>
        <FormControl.Label>Contraseña</FormControl.Label>
        <InputPassword
          autoCapitalize="none"
          hide={hidePwd}
          onPressIcon={() => setHidePwd(prev => !prev)}
          onChangeText={handleChange('password')}
          returnKeyType="next"
          ref={passwordRef}
          blurOnSubmit={false}
          onSubmitEditing={() =>
            confirmPasswordRef.current && confirmPasswordRef.current.focus()
          }
        />
        <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
      </FormControl>

      <FormControl mb={3} isInvalid={Boolean(errors.confirmPassword)}>
        <FormControl.Label>Confirmar Contraseña</FormControl.Label>
        <InputPassword
          autoCapitalize="none"
          hide={hideConfirmPwd}
          onPressIcon={() => setHideConfirmPwd(prev => !prev)}
          onSubmitEditing={() => handleRegister(values, setErrors)}
          onChangeText={handleChange('confirmPassword')}
          returnKeyType="done"
          ref={confirmPasswordRef}
        />
        <FormControl.ErrorMessage>
          {errors.confirmPassword}
        </FormControl.ErrorMessage>
      </FormControl>

      <Button
        mt="3"
        colorScheme="blue"
        variant="rounded"
        onPress={() => handleRegister(values, setErrors)}>
        Crear cuenta
      </Button>
    </>
  );
}
