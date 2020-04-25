import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  boardNoticeInfoWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "30%",
    backgroundColor: "#fff",
  },
}))

export default useStyles
