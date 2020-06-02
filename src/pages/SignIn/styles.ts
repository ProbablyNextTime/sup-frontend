import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import BackgroundFlain from "assets/flain_img.jpg"
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import BackgroundImage from "assets/Background.png"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100%",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    display: "flex",
    flex: "1 1 auto",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-height: 800px)": {
      justifyContent: "none",
      padding: "100px 0 100px 0",
    },
  },
  signInContainer: {
    width: "1100px",
    "@media (max-width: 1300px)": {
      width: "80%",
    },
    height: "700px",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifySelf: "center",
  },
  flainImage: {
    height: "100%",
    width: "50%",
    backgroundImage: `url(${BackgroundFlain})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    "@media (max-width: 1000px)": {
      display: "none",
    },
  },
  signInFormContainer: {
    width: "50%",
    height: "100%",
    border: "1px solid #e4e4e4",
    padding: "60px 80px 0 80px",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1000px)": {
      width: "100%",
      border: "none",
    },
    "@media (max-width: 500px)": {
      padding: "60px 30px 0 30px",
      border: "none",
    },
  },
  supLogo: {
    color: "#78f464",
    fontSize: "44px",
    fontWeight: 900,
    fontStretch: "normal",
    fontStyle: "italic",
    lineHeight: "normal",
    letterSpacing: "-3.4px",
  },
  catchPhrase: {
    color: " #7d807d",
    fontSize: "18px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0.36px",
    padding: "15px 0 50px 0",
  },
}))

export default useStyles
