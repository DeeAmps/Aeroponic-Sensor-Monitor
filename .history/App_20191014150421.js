/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Navbar from './Navbar';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App: () => React$Node = () => {
  return (
    <PaperProvider theme={theme}>
      <Navbar />
    </PaperProvider>
  );
};

export default App;
