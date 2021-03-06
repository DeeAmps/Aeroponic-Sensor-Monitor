/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {name as appName} from './app.json';

const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'tomato',
      accent: 'yellow',
    },
  };

AppRegistry.registerComponent(appName, () => 
    <PaperProvider theme={theme}>
        <App/>
    </PaperProvider>
);
