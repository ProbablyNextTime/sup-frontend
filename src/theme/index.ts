import { createMuiTheme } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"
export const primaryFont = process.env.REACT_APP_DEFAULT_FONT
// our theme
export const theme = createMuiTheme({
  palette: {
    primary: green,
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
  //define spacing constants to use inside components
  spacing: [0, 2, 4, 8, 16],
  overrides: {
    MuiIconButton: {
      label: {
        width: "0px",
        position: "absolute",
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
