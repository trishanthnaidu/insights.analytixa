import { 
      PRIMARY_COLOR,
      STUDIO_COLOR,
      DARK_THEME_PROPS
} from './Master';

export const darkThemeStyles = {
      theme: DARK_THEME_PROPS.TYPE,
      palette: {
            primary: {
                  main: PRIMARY_COLOR,
            },
            secondary: {
                  main: STUDIO_COLOR
            }
      },
      text: DARK_THEME_PROPS.TEXT,
      background: DARK_THEME_PROPS.BACKGROUND,
      reverse: {
            background: DARK_THEME_PROPS.REVERSE.BACKGROUND
      },
      shadow: DARK_THEME_PROPS.SHADOW
}