import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  logInForm: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyItems: "space-between",
  },
  inputField: {
    margin: "0 0 20px 0",
  },
  formControls: {
    margin: "15px 0 0 0",
    padding: "0 10px 0 10px",
    minWidth: "30%",
    height: "115px",
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  mainButton: {
    borderColor: "#30bb49",
    borderRadius: "2px",
    height: "40px",
    width: "100%",
    backgroundImage: `url(${"https://res.cloudinary.com/drkgnohds/image/upload/c_fill,h_45,w_110/v1588516370/SUP/logo512_kpt9pr.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    textTransform: "none",
    fontSize: "12px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#ffffff",
  },
  secondaryButton: {
    backgroundColor: "#ffffff",
    textTransform: "none",
    fontSize: "12px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#222222",
    border: "solid 2px #d8eadd",
    height: "40px",
    width: "100%",
    "$:hover": {
      backgroundColor: "#ffffff",
    },
  },
  errorMessage: {
    color: "#FF0000",
    margin: "0 0 10px 0",
  },
  orSign: {
    display: "flex",
    alignSelf: "center",
  },
}))

export default useStyles
