import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: "relative",
    width: "80%",
    height: "51px",
    borderRadius: "65px",
    backgroundColor: "#f5f5f5",
    marginTop: "5%",
  },
  searchIcon: {
    position: "absolute",
    top: "7px",
    left: "16px",
  },
  inputField: {
    width: "85%",
    height: "36px",
    marginLeft: "10%",
    marginTop: "2px",
    border: "0",
    outline: "0",
    borderBottom: "1px solid #bbb",
    backgroundImage: "none",
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}))

export default useStyles
