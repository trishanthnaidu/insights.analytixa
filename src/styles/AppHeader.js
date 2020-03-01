import { fade, makeStyles } from '@material-ui/core/styles';

export const Styles = makeStyles(theme => ({
      root: {
            display: "flex",
            flex: theme.isMobile ? 0 : 1
      },
      appBar: {
            zIndex: theme.zIndex.drawer + 1,
            boxShadow: "none",
            backgroundColor: theme.background["00"],
            borderBottom: `solid 1px ${theme.text[70]}`,
      },
      menuButton: {
            marginRight: theme.spacing(0.5),
      },
      title: {
            fontSize: 17,
            color: theme.palette.secondary.main,
            marginRight: 10,
            marginLeft: 10,
            fontWeight: 400,
      },
      routeTitle: {
            color: theme.text[30],
            flexGrow: 1,
            fontWeight: 400,
            marginLeft: 10,
            fontSize: 17,
      },
      logoContainer: {
      },
      iconContainer: {
            padding: "10px 0 10px 0"
      },
      logo: {
            height: 22,
            display: 'inline-flex',

            "& svg": {
                  color: theme.text[50],
            }
      },
      search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.background[10],
            marginRight: 10,
            width: 'auto',
            '&:hover': {
                  backgroundColor: theme.background[20],
            },
      },
      searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.text[30],
            "& svg": {
                  fontSize: 18
            },
      },
      inputRoot: {
            color: theme.text["00"],
      },
      inputInput: {
            fontSize: 13,
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                  width: 120,
                  '&:focus': {
                        width: 200,
                  },
            },
      },
      themeTogglerFab: {
            width: 25,
            height: 25,
            minHeight: 25,
            opacity: 0.1,
      },
      themeTogglerDay: {
            ...theme.btn.primary,
            padding: 2,
            color: theme.background["00"],
            backgroundColor: theme.reverse.background["00"],
            borderRadius: 15,
            fontSize: 16,
            transform: "rotate(120deg)"
      },
      themeTogglerNight: {
            ...theme.btn.primary,
            padding: 2,
            color: theme.reverse.background["00"],
            backgroundColor: theme.palette.primary.main,
            borderRadius: 15,
            fontSize: 16,
            transform: "rotate(120deg)"
      },
      divider: {
            alignSelf: 'stretch',
            height: 'auto',
            margin: theme.spacing(1, 0.5),
            backgroundColor: theme.text[70]
      },
      moreApps: {
            color: theme.reverse.background[20],
            padding: 7,
            margin: 5
      },
      hamburger: {
            color: theme.reverse.background[20],
            padding: 7,
      }
}));