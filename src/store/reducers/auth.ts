import {User} from '_interfaces/user';
import {AuthState, AuthActions} from '_store/types/auth.types';

export const emptyUser: User = {
  _id: '',
  about: '',
  age: 0,
  email: '',
  firstName: '',
  lastName: '',
  image: '',
  gender: '',
  comments: 0,
  level: 0,
  likes: 0,
  points: 0,
  stories: [],
  type: '',
  username: '',
  followers: [],
  following: [],
  favorites: [],
  createdAt: new Date(),
  updatedAt: new Date(),
};

const initialState: AuthState = {
  loading: false,
  token: '',
  user: emptyUser,
  auth: false,
};

const authReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case '@AUTH/AUTHENTICATE': {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        auth: true,
      };
    }
    case '@AUTH/DEAUTHENTICATE': {
      return {
        ...state,
        token: '',
        user: emptyUser,
        auth: false,
      };
    }
    case '@AUTH/UPDATE_USER': {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case '@AUTH/REMOVE_USER': {
      return {
        ...state,
        user: emptyUser,
      };
    }
    case '@AUTH/ENABLE_LOADER': {
      return {...state, loading: true};
    }
    case '@AUTH/DISABLE_LOADER': {
      return {...state, loading: false};
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
