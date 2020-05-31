import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "700px",
    height: "655px",
    padding: "40px 40px",
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${"https://res.cloudinary.com/drkgnohds/image/upload/v1589877880/SUP/Background_q9pg1z.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "120% 100%",
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    outline: "none",
  },
  headerContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  supLogo: {
    fontSize: "32px",
    fontWeight: 900,
    fontStretch: "normal",
    fontStyle: "italic",
    lineHeight: "normal",
    letterSpacing: "-3px",
    color: "#78f464",
  },
  contentHeader: {
    padding: "0 0 6px 0",
    alignSelf: "end",
    fontSize: "14px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "notmal",
    color: "#3e3e3e",
  },
  closeIcon: {
    alignSelf: "end",
    width: "40px",
    height: "40px",
  },
}))

export default useStyles
