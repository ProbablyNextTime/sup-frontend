import { makeStyles } from "@material-ui/core/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

export default makeStyles((theme: Theme) => ({
  kgInputContainer: {
    width: "40%",
    height: "45px",
    display: "flex",
    flexDirection: "row",
    padding: "10px 0",
  },
  inputHeader: {
    alignSelf: "center",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#808080",
    padding: "0 10px 3px 0",
  },
  inputAmount: {
    height: "6px",
    color: "#666666",
  },
  paymentForm: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  summary: {
    position: "absolute",
    top: "13px",
    right: "10px",
    fontFamily: "Lato",
    fontSize: "14px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#11d900",
  },
}))
