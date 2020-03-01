import { makeStyles, fade } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
      root: {
            
      },
      states: {
            outline: "none",
            zIndex: 1,
            cursor: "pointer",
            transition: "fill 0.3s ease",
            strokeWidth: 1,
            strokeLinecap: "round",
            stroke: fade(theme.background[10], 0.25)
      },
      grayStates: {
            outline: "none",
            zIndex: 1,
            cursor: "pointer",
            transition: "fill 0.3s ease",
            strokeWidth: 1,
            strokeLinecap: "round",
            fill: fade(theme.background[30], 0.3)
      },
      toggleContainer: {

      },
      paperWorldMap: {
            height: "55vh",
            backgroundColor: theme.background["00"],
            borderRadius: 10,

            "& svg": {
                  marginTop: 25,
                  transform: "scale(1.4)",
            },

            "& .__react_component_tooltip": {
                  color: "#FFF",
                  padding: "4px 8px",
                  fontSize: "11px",
                  lineHeight: "1.4em",
                  borderRadius: 5,
                  backgroundColor: theme.palette.secondary.main
            },
            "& .__react_component_tooltip.type-dark.place-top:after": {
                  borderTopColor: theme.palette.secondary.main
            }
      }
}))