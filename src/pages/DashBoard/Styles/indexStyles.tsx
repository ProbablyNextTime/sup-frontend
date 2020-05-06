import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  globalWrapper: {
    height: "80vh",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "1px",
    backgroundColor: "#fff",
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
  },
  boardWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "33%",
    borderRight: "1px solid #eee",
  },
  boardNoticeInfo: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "30%",
    backgroundColor: "#fff",
  },
  mapWrapper: {
    height: "100%",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "37%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
}))

export default useStyles
