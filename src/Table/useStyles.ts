import makeStyles from "@material-ui/core/styles/makeStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default makeStyles(
  ({ spacing, palette: { primary, grey, text } }: Theme) => ({
    container: {
      maxHeight: "64vh",
    },
    cell: {
      color: text.secondary,
      backgroundColor: grey[200],
    },
    paper: {
      margin: spacing(1, 4, 1, 4),
    },
    accountCell: {
      display: "flex",
      maxWidth: "100px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
    icons: {
      paddingTop: spacing(0.5),
    },
    statusCell: {
      color: text.secondary,
    },
    tableRow: {
      "&$hover:hover": {
        backgroundColor: primary.main,
      },
    },
    tableCell: {
      borderBottom: "none",
      "$hover:hover &": {
        color: primary.contrastText,
      },
    },
    hover: {},
  }),
);
