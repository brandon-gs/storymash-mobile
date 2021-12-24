import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import {colorModeManager} from '_theme/colorModeManager';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import NavigationRoot from '_navigations/navigation-root';
import {store, persistor} from '_store/store';
import theme from '_theme/theme';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
            <NavigationContainer>
              <NavigationRoot />
            </NavigationContainer>
          </NativeBaseProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
