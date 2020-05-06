import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "15px 10px",
    backgroundImage: "linear-gradient(to right, #ecffec, rgba(245, 245, 245, 0))",
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
  },
  detail: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
  },
  detailText: {
    fontFamily: "Roboto",
    fontSize: "10px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#808080",
  },
  checkSign: {
    marginTop: "2px",
    marginRight: "8px",
    fontSize: "9px",
    color: "#30c80a",
  },
  highlightedText: {
    color: "#30c80a",
  },
}))

export default useStyles
