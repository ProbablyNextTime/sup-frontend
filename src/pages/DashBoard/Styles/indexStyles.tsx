import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    marginTop: "1px",
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  boardWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    borderRight: "1px solid #eee",
  },
  mapWrapper: {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "55%",
    height: "auto",
  },
  map: {
    width: "90%",
  },
}))

export default useStyles
