import * as React from "react"
import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import { theme } from "./theme"
import { Router } from "react-router-dom"
import Routes from "./route"
import useGlobalCSS from "./theme/GlobalCSS"
import history from "./History"

const App: React.FC = () => {
  useGlobalCSS()

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={history}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  )
}

export default App
