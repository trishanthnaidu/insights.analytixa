import {
      PRIMARY_COLOR,
      STUDIO_COLOR,
      LIGHT_THEME_PROPS,
} from './Master';

export const lightThemeStyles = {
      theme: LIGHT_THEME_PROPS.TYPE,
      palette: {
            primary: {
                  main: PRIMARY_COLOR
            },
            secondary: {
                  main: STUDIO_COLOR
            }
      },
      text: LIGHT_THEME_PROPS.TEXT,
      background: LIGHT_THEME_PROPS.BACKGROUND,
      reverse: {
            background: LIGHT_THEME_PROPS.REVERSE.BACKGROUND,
      },
      shadow: LIGHT_THEME_PROPS.SHADOW
}