import React from 'react';
import Router from './src/routes';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
