import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
      root: {
            width: theme.isMobile ? "100vw" : "82vw",
            height: "92vh",
            padding: "12px 15px",
            boxSizing: "border-box",
            marginTop: 50,
            overflowY: "auto",
      },
}))