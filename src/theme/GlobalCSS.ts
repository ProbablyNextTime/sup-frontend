import { makeStyles } from "@material-ui/styles"
import { primaryFont } from "."

/**
 * A hook that installs global CSS overrides.
 */
const useGlobalCSS = makeStyles({
  "@global": {
    "body, html": {
      height: "100%",
      fontFamily: primaryFont,
    },
    "#root": {
      display: "flex",
      flexFlow: "column",
      height: "100%",
    },
  },
})

export default useGlobalCSS
