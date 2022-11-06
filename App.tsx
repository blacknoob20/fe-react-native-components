
import 'react-native-gesture-handler';
import React from 'react';
// import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//   }
// }

const App = () => {
  return (
    <AppState>
      {/* <NavigationContainer
      // theme={customTheme}
      > */}
        <Navigator />
      {/* </NavigationContainer> */}
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default App;