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
import BottomNav from './BottomNav';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App: () => React$Node = () => {
  return (
    <PaperProvider theme={theme}>
      <Navbar />
      <BottomNav />
    </PaperProvider>
  );
};

export default App;
