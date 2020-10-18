import React, { useState,useContext, useCallback } from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {MainStackNavigator} from './src/navigation';
import {store, persistor} from './src/store';
import { ThemeContext } from './src/core/theme/themeContext';
import { darkTheme } from './src/core/theme/darkTheme';

 const App = () => {
  const [theme, setTheme] = useState(darkTheme);
  const themeHandler={
    theme:theme,
    setTheme: (theme)=>{
      setTheme(theme);
    }
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContext.Provider value={themeHandler}>
        <View style={{flex: 1}}>
          <MainStackNavigator />
        </View>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default (App);

