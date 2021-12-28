import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Allow persist redux store, you need to add the key in the whitelist to persit store data in that reducer
const persistConfig: PersistConfig<unknown, any, any, any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
// Jest store
// export const jestStore = createStore(persistedReducer, applyMiddleware(thunk));
// export const jestPersistor = persistStore(store);
