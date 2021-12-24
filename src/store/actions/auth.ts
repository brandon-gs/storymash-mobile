import axios, {AxiosError} from '_utils/axios';
import {User} from '_interfaces/user';
import {DispatchAction} from '_store/types';
import {Alert} from 'react-native';
import {RootState} from '_store/store';
import * as authService from '_services/auth';

// Update the user without request
export const updateUser = (user: User) => {
  return (dispatch: DispatchAction) => {
    dispatch({type: '@AUTH/UPDATE_USER', payload: {user}});
  };
};

// Update the user with request to backend
export const asyncUpdateUser = (body: any) => {
  return async (dispatch: DispatchAction) => {
    dispatch({type: '@AUTH/ENABLE_LOADER'});
    try {
      const {
        data: {user},
      } = await authService.putUser(body);
      if (user) {
        dispatch({type: '@AUTH/UPDATE_USER', payload: {user}});
      }
    } catch (e) {
      Alert.alert(
        'Error',
        'Error al realizar esta acción, inténtalo más tarde',
      );
    }
    dispatch({type: '@AUTH/DISABLE_LOADER'});
  };
};

export const removeUser = () => {
  return (dispatch: DispatchAction) => {
    dispatch({type: '@AUTH/REMOVE_USER'});
  };
};

// gets token from the api and stores it in the redux store and in a cookie
export const authenticate = (
  formData: object,
  type: 'login' | 'register',
): any => {
  // throw error if type is invalid
  if (type !== 'login' && type !== 'register') {
    throw new Error('Wront API call!');
  }

  return async (dispatch: DispatchAction) => {
    dispatch({type: '@AUTH/ENABLE_LOADER'});

    try {
      // Get user info
      const response = await authService.authenticateUser(type, formData);
      const {
        data: {token, user},
      } = response;
      // Add token to axios headers
      axios.defaults.headers.common.authorization = token;
      // Save auth data in axios
      dispatch({type: '@AUTH/AUTHENTICATE', payload: {token, user}});
      dispatch({type: '@AUTH/DISABLE_LOADER'});
    } catch (error) {
      const e = error as AxiosError;
      const {response} = e;

      setTimeout(() => {
        if (response && response.status === 401) {
          const message = 'Datos incorrectos, intente nuevamente.';
          Alert.alert('Error', message);
          return;
        }
        const message =
          'Error al conectar con el servidor, intentelo más tarde';
        Alert.alert('Error', message);
      }, 200);
    } finally {
      setTimeout(() => {
        dispatch({type: '@AUTH/DISABLE_LOADER'});
      }, 200);
    }
  };
};

// gets the token from the cookie and saves it in the store
export const reauthenticate = (token: string, user: User): any => {
  return (dispatch: DispatchAction) => {
    // Add token to axios headers
    axios.defaults.headers.common.authorization = token;
    // Save authenticated data in redux
    dispatch({type: '@AUTH/AUTHENTICATE', payload: {token, user}});
  };
};

// remove token
export const deauthenticate = () => {
  return (dispatch: DispatchAction) => {
    dispatch({type: '@AUTH/ENABLE_LOADER'});
    dispatch({type: '@AUTH/DEAUTHENTICATE'});
    // Remove token from axios headers
    axios.defaults.headers.common.authorization = '';
    dispatch({type: '@AUTH/DISABLE_LOADER'});
  };
};

export const enableLoading = () => {
  return (dispatch: DispatchAction) => {
    dispatch({type: '@AUTH/ENABLE_LOADER'});
  };
};

export const disableLoading = () => {
  return (dispatch: DispatchAction) => {
    dispatch({type: '@AUTH/DISABLE_LOADER'});
  };
};
