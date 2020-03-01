import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
      root: {
            width: "100vw",
            height: "100vh"
      },
      oopsSomethingWentWrongContianer: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: 50,
            backgroundColor: "inherit"
      },
      logo: {
            height: "65vh",
            marginLeft: 40
      },
      errorTextTitleContainer: {
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            textAlign: "center",
            marginBottom: 30,
      },
      title: {
            fontWeight: "bold",
            fontSize: 25,
            color: theme.text[10],
            flex: "0 1 100%",
            marginBottom: 20
      },
      content: {
            flex: "0 1 50%",
            color: theme.text[30],
            fontSize: 16
      },
      btnContainer: {
            textAlign: "center",
            padding: 10,
      },
      btnReload: {
            ...theme.btn.primary,
            color: theme.text[90],
            fontSize: 14,
            padding: "7px 27px",
            margin: 7,
      },
      btnDetails: {
            // ...theme.btn.primaryNoHover,,
            fontSize: 14,
            padding: "7px 27px",
            margin: 7,
      }
}))