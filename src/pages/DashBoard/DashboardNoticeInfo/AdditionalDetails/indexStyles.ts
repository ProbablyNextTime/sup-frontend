import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "15px 10px",
    backgroundColor: "#fafafa",
    borderBottom: "1px solid #eeeeee",
  },
  contentHeader: {
    fontFamily: "Lato",
    fontSize: "11px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#afafaf",
    marginBottom: "15px",
  },
  detail: {
    fontFamily: "Roboto",
    fontSize: "10px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#a3a3a3",
    marginBottom: "10px",
  },
}))

export default useStyles
