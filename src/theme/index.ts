import { createMuiTheme } from "@material-ui/core/styles"
export const primaryFont = process.env.REACT_APP_DEFAULT_FONT
// our theme
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5cff89",
    },
    secondary: {
      main: "#a3a3a3",
    },
  },
  typography: {
    fontFamily: primaryFont,
    subtitle1: {
      fontFamily: "Lato",
      fontSize: 15,
      fontWeight: 500,
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      color: "#afafaf",
      padding: "0 0 2px 0",
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "1px solid transparent",
          borderImage: `${"linear-gradient(to right, #24ff00, #ff9900, #ffe600, #00d1ff, #ff00f5)"}`,
          "border-image-slice": "1",
        },
      },
    },
  },
})

// extend theme type
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {}

  // we can extend theme with custom keys here
  interface ThemeOptions {}
}
