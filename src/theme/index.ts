import { createMuiTheme } from "@material-ui/core/styles"
import green from "@material-ui/core/colors/lightGreen"
// main google font to apply to all elements by default
export const primaryFont = process.env.REACT_APP_DEFAULT_FONT

// our theme
export const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: {
    fontFamily: primaryFont,
  },
})

// extend theme type
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {}

  // we can extend theme with custom keys here
  interface ThemeOptions {}
}
