import {useCallback} from 'react';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import * as authService from '_services/auth';
import actions from '_store/actions';
import selectors from '_store/selectors';
import useThunkDispatch from '../useThunkDispatch';

export interface RegisterValues {
  firstName: string;
  lastName: string;
  username: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginValues {
  username: string;
  password: string;
}

export default function useAuthentication() {
  const dispatch = useThunkDispatch();

  // Redux state
  const user = useSelector(selectors.auth.selectUser);
  const hasAuth = useSelector(selectors.auth.selectHasAuth);
  const token = useSelector(selectors.auth.selectToken);
  const loading = useSelector(selectors.auth.selectLoading);

  // Dispatch actions
  const handleLogin = useCallback(async (values: LoginValues) => {
    await dispatch(actions.auth.authenticate(values, 'login'));
  }, []);

  const handleRegister = useCallback(
    async (
      values: RegisterValues,
      setErrors: (errors: RegisterValues) => void,
    ) => {
      dispatch(actions.auth.enableLoading());
      try {
        const {data} = await authService.verifyRegisterValues(values);
        if (!data.hasErrors) {
          await dispatch(actions.auth.authenticate(values, 'register'));
        } else {
          setErrors(data.errors);
        }
      } catch (error) {
        Alert.alert('Error', 'Error en el servicio, inténtalo más tarde');
      } finally {
        dispatch(actions.auth.disableLoading());
      }
    },
    [],
  );

  return {
    state: {user, hasAuth, token, loading},
    actions: {handleLogin, handleRegister},
  };
}
