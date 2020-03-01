import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { darkThemeStyles } from './Dark';
import { lightThemeStyles } from './Light';
import { commonThemeStyles } from './Common';
import { chartThemeStyles } from './Charts';
const appTheme = (theme, forComponent) => {
      if (theme === "light") {
            return createMuiTheme({
                  ...lightThemeStyles,
                  ...commonThemeStyles(theme),
                  ...chartThemeStyles(theme)
            });
      } else if (theme === "dark") {
            return createMuiTheme({
                  ...darkThemeStyles,
                  ...commonThemeStyles(theme),
                  ...chartThemeStyles(theme)
            });
      }
      else {
            return createMuiTheme({
                  ...lightThemeStyles,
                  ...commonThemeStyles(theme),
                  ...chartThemeStyles(theme)
            });
      }
}

export const AppTheme = ({ children, theme, forComponent }) => <ThemeProvider theme={appTheme(theme, forComponent)}>{children}</ThemeProvider>