import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    marginTop: "1px",
  },
  boardWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    height: "100%",
  },
  mapWrapper: {
    width: "50%",
  },
}))

export default useStyles
