import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
import {AuthState} from './types/auth.types';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig: PersistConfig<unknown, any, any, any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['authentication'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
// Jest store
// export const jestStore = createStore(persistedReducer, applyMiddleware(thunk));
// export const jestPersistor = persistStore(store);

export interface RootState {
  auth: AuthState;
}

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

declare module 'redux-persist/es/persistReducer' {
  interface PersistPartial extends RootState {}
}
