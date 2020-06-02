import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import Background from "assets/btn_background.jpeg"

const useStyles = makeStyles((theme: Theme) => ({
  socialLogin: {
    margin: "0 0 15px 0",
    display: "flex",
    justifySelf: "center",
    width: "100%",
    height: "40px",
    backgroundImage: `url(${Background})`,
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
}))

export default useStyles
