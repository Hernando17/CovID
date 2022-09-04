import React from 'react';
import Router from './src/routes';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/app/store';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <Router />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
