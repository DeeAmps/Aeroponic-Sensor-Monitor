/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Navbar from './Navbar';

const App: () => React$Node = () => {
  return (
    <PaperProvider>
      <Navbar />
    </PaperProvider>
  );
};

export default App;
