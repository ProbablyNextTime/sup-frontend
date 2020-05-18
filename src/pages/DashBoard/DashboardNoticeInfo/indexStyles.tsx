import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  boardNoticeInfoWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "30%",
    backgroundColor: "#fff",
    overflowY: "scroll",
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE 10+ */,
    "&::-webkit-scrollbar": {
      width: "0px",
      background: "transparent" /* Chrome/Safari/Webkit */,
    },
  },
}))

export default useStyles
