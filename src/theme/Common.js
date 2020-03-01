import { darkThemeStyles } from './Dark';
import { lightThemeStyles } from './Light';
import { PRIMARY_FONT_SIZE } from './Master';
import { BUTTONS_PROPS } from './Buttons';

const themeCollections = {
      light: lightThemeStyles,
      dark: darkThemeStyles
}

export const commonThemeStyles = selectedTheme => ({
      divider: {
            backgroundColor: themeCollections[selectedTheme].text[80],
            margin: "1px 12px 1px"
      },
      verticalDivider: {
            backgroundColor: themeCollections[selectedTheme].text[80],
      },
      animation: {
            bounce: "bounce 400ms linear both",
            bounceFast: "bounce 150ms ease-out both",
            swayRTL: "swayLeftToRight 1000ms linear both",
            swayLTR: "swayRightToLeft 1000ms linear both",
            eyeBlink: "eyeBlink 4800ms linear infinite both",
            appearBTT: "appearBTT 0.7s ease-in both;",
      },
      ellipsis: {
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
      },
      checkbox: {
            "& .MuiButtonBase-root": {
                  color: themeCollections[selectedTheme].text[50]
            },
            "& .Mui-checked": {
                  color: themeCollections[selectedTheme].palette.primary.main
            }
      },
      typography: {
            fontFamily: [
                  'Roboto',
                  '"Helvetica Neue"',
                  'Arial',
                  'sans-serif',
                  '"Apple Color Emoji"',
                  '"Segoe UI Emoji"',
                  '"Segoe UI Symbol"'
            ],
            body1: {
                  fontSize: PRIMARY_FONT_SIZE,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            },
            h6: {
                  fontSize: 15,
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
            }
      },
      btn: {
            primary: BUTTONS_PROPS.PRIMARY,
            secondary: BUTTONS_PROPS.SECONDARY
      },
      icons: {
            size: {
                  primary: {
                        fontSize: 18
                  }
            }
      },
      isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
});