import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "15px 15% 15px 10px",
  },
  headerBlock: {
    display: "flex",
    flexDirection: "row",
    padding: "0 0 10px 0",
    borderBottom: "1px solid #dadada",
  },
  topHeader: {
    fontFamily: "Roboto",
    fontSize: "18px",
    fontWeight: 300,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#00f418",
  },
  cartIcon: {
    margin: "0 0 0 4px",
    alignSelf: "center",
    fontSize: "16px",
    color: "#00f418",
  },
  destinationInfo: {
    padding: "5px 0",
    fontFamily: "Lato",
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#808080",
    borderBottom: "1px solid #dadada",
  },
  placeSummaryInfo: {
    display: "flex",
    flexDirection: "column",
    padding: "5px 0",
    borderBottom: "1px solid #dadada",
  },
  contentHeader: {
    fontFamily: "Lato",
    fontSize: "15px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#808080",
  },
  contentSubHeader: {
    padding: "5px 0 0 0",
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#808080",
  },
  highlightedContent: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#46d243",
  },
}))

export default useStyles
