import React from 'react';
import Router from './src/routes';
import {NativeBaseProvider} from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  );
};

export default App;
