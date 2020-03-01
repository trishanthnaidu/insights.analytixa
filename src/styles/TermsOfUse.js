import { createStyles } from "@material-ui/core/styles";

const desktop = theme => ({
      "root": {
            width: "100%",
            height: "100%",
            position: "fixed",
            background: theme.background.default,
            zIndex: 9999
      },
      "panel": {
            position: "fixed",
            width: "80%",
            height: "80%",
            boxSizing: "border-box",
            left: "10%",
            top: "10%",
            borderRadius: 10,
            boxShadow: "0px 0px 25px #aaa",
            padding: "40px 65px",
            animation: theme.animation.bounce,

            [theme.breakpoints.down('sm')]: {
                  padding: "30px 35px",
            }
      },
      "titleContainer": {
            fontFamily: "cadiz-bold",
            textAlign: "center",
            color: theme.palette.primary.main,
            marginBottom: 15,

            [theme.breakpoints.down('sm')]: {
                  marginBottom: 10,
            }
      },
      "title": {
            fontSize: 22,
      },
      "close": {
            float: "right",
            cursor: "pointer"
      },
      "bodyContainer": {
            fontSize: 14,
            color: theme.title.sub,
            height: "80%",
            overflow: "auto",

            [theme.breakpoints.down('sm')]: {
                  height: "70%",
                  fontSize: 12
            }
      },
      "sectionHead": {
            color: theme.title.sub2,
            margin: "30px 0 0",
            fontFamily: "cadiz-bold"
      },
      "btnContainer": {
            marginTop: 15,
            textAlign: "center",

            [theme.breakpoints.down('sm')]: {
                  marginTop: 10,
            }
      },
      "acceptBtn": theme.star.btn.primary
});

const mobile = theme => ({
      ...desktop(theme),
      "bodyContainer": {
            fontSize: 14,
            color: theme.title.sub,
            height: "80%",
            overflow: "auto",

            [theme.breakpoints.down('md')]: {
                  height: "85%"
            },

            [theme.breakpoints.down('sm')]: {
                  height: "80%"
            }
      },
      "btnContainer": {
            marginTop: 22,
            textAlign: "center"
      },
      "titleContainer": {
            fontFamily: "cadiz-bold",
            textAlign: "center",
            color: theme.palette.primary.main,
            marginBottom: 15,

            [theme.breakpoints.down('ms')]: {
                  marginBottom: 10,
            }
      },
});

export const Styles = theme => {
      if (window.innerHeight < window.innerWidth) {
            return createStyles(desktop(theme))
      }
      else {
            return createStyles(mobile(theme))
      }
};