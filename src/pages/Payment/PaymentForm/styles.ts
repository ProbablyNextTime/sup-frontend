import { makeStyles } from "@material-ui/core/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

export default makeStyles((theme: Theme) => ({
  kgInputContainer: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    padding: "5px 0 0 0",
  },
  inputHeader: {
    alignSelf: "baseline",
    fontFamily: "Lato",
    fontSize: "16px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#808080",
  },
  inputAmount: {
    color: "#666666",
    fontSize: "15px",
    "& input[type=number]": {
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
        webkitAppearance: "none",
        appearance: "none",
        margin: 0,
      },
      "-moz-appearance": "textfield",
    },
  },
  paymentForm: {
    display: "flex",
    flexDirection: "column",
  },
  summary: {
    alignSelf: "center",
    fontFamily: "Lato",
    fontSize: "20px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#11d900",
  },
  summaryContainer: {
    padding: "10px 0",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  voucherCodeInput: {
    color: "#666666",
    fontSize: "15px",
  },
  voucherCodeInputContainer: {
    padding: 0,
    width: "60%",
    height: "45px",
    display: "flex",
    flexDirection: "column",
  },
  processButton: {
    margin: "5px 0 0 0",
    borderColor: "#30bb49",
    borderRadius: "2px",
    height: "30px",
    width: "25%",
    backgroundImage: `url(${"https://res.cloudinary.com/drkgnohds/image/upload/c_fill,h_45,w_110/v1588516370/SUP/logo512_kpt9pr.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  processButtonText: {
    textTransform: "none",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#ffffff",
  },
  processLockIcon: {
    fontSize: "11px",
    padding: "0 2px 0 0 ",
    color: "#ffffff",
  },
  paymentButtonContainer: {
    padding: "10px 0",
    display: "flex",
    flexDirection: "row",
  },
}))
