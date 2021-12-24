import axios from '_utils/axios';
import {RegisterValues} from '_hooks/store/useAuthentication';

export const authenticateUser = async (
  type: 'login' | 'register',
  data: object,
) => {
  return await axios.post(`/auth/${type}`, data);
};

export const putUser = async (body: object) => {
  return await axios.put('/user', body);
};

export const verifyRegisterValues = async (values: RegisterValues) => {
  return await axios.post<{errors: RegisterValues; hasErrors: boolean}>(
    '/auth/verify/register',
    values,
  );
};
