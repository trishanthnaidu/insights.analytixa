import { fade, makeStyles } from '@material-ui/core/styles';

const drawerWidth = "12%";
const drawerWidthMobile = "50%";

export const Styles = makeStyles(theme => ({
      root: {
            display: 'flex',
      },
      toolbar: theme.mixins.toolbar,
      divider: {
            flexShrink: 0,
            backgroundImage: `linear-gradient(to right, ${theme.background[10]}, ${fade(theme.text[20], 0.12)}, ${theme.background[10]})`
      },
      dividerMain: {
            flexShrink: 0,
            backgroundColor: theme.text[70]
      },
      drawerPaper: {
            width: drawerWidth,
            backgroundColor: theme.background[10],
            color: theme.text[10],
            border: "none",
      },
      drawerPaperMobile: {
            width: drawerWidthMobile,
            backgroundColor: theme.background[10],
            color: theme.text[10],
            border: "none",
      },
      icons: {
            color: theme.text[30],
            minWidth: 32
      },
      iconSvg: {
            fontSize: 20
      },
      iconRemove: {
            fontSize: 11
      },
      listItem: {
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            paddingLeft: 20,
            "&:hover": {

            }
      },
      activeSection: {
            backgroundColor: fade(theme.palette.primary.main, 0.075),
            color: theme.text[10],
            "&:hover": {
                  backgroundColor: fade(theme.palette.primary.main, 0.075)
            },
            "& svg": {
                  fill: theme.palette.primary.main
            }
      },
      sectionText: {
            color: theme.text[20],
      },
      listItemLabelButton: {
            cursor: "pointer",
            color: theme.palette.primary.main,
            paddingLeft: 11
      },
      listSubHeader: {
            color: theme.text[50],
            fontSize: theme.typography.body1.fontSize
      },
      addIconButton: {
            textTransform: "Capitalize",
            color: theme.palette.primary.main,
            padding: 7
      },
      addDynamicName: {
            fontSize: 14,
            color: theme.text[10]
      },
      buttonRemove: {
            padding: 5,
            minWidth: "auto"
      },
      logoContainer: {
            display: "inline-flex",
            alignItems: "center"
      },
      closeContainer: {
            display: "inline-flex",
            alignItems: "center"
      },
      iconContainer: {
            padding: "10px 0 10px 0"
      },
      title: {
            display: "inline-flex",
            fontSize: 17,
            color: theme.palette.secondary.main,
            marginLeft: 10,
            fontWeight: 400,
            alignItems: "center"
      },
      titleMobileExtraCss:{
            flex: 1
      },
      logo: {
            height: 20,
            display: 'inline-flex',

            "& svg": {
                  color: theme.text[50],
            }
      },
      logoSectionDrawer: {
            display: "flex",
            padding: "5px 15px"
      },
      rotateIcon90deg:{
            transform: "rotate(135deg)"
      }
}));