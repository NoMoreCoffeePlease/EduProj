import React from 'react';
import { darkTheme } from './darkTheme';

export const ThemeContext = React.createContext({theme: darkTheme, setTheme: () => {}});
