import React from 'react';
import {ThemeContext} from '../../core/theme/themeContext';

export const withTheme = (
  styleProvider,Comp) => {
    
    const Component = props => {
      const theme = React.useContext(ThemeContext);
      return <Comp {...props} styles={styleProvider(theme.theme)} changeTheme={theme.setTheme} theme={theme.theme}/>;
    };

    return Component;
}
  
