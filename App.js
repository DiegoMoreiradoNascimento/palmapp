import * as React from 'react';
import { StatusBar } from 'react-native';
import { Router } from './src/routes/Router';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
      <StatusBar barStyle={'default'} />
    </>
  );
}

export default App;