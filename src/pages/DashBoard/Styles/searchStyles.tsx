import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: "relative",
    height: "80px",
    width: "100%",
    marginTop: "30px",
    alignSelf: "center",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    marginLeft: "10%",
    paddingLeft: "60px",
    paddingRight: "20px",
    width: "80%",
    height: "51px",
    borderRadius: "65px",
    backgroundColor: "#f5f5f5",
  },
  searchIcon: {
    width: "34px",
    height: "34px",
    position: "absolute",
    top: "9px",
    left: "16px",
    opacity: "0.3",
  },
  inputSearch: {
    width: "25%",
    marginLeft: "1%",
    alignSelf: "center",
  },
  vLine: {
    width: "10px",
    height: "30px",
    marginTop: "12px",
    borderRight: "1px solid #bbb",
    opacity: "0.5",
  },
}))

export default useStyles
