import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: "relative",
    minHeight: "100px",
    width: "100%",
    marginTop: "30px",
    alignSelf: "center",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    marginLeft: "10%",
    width: "80%",
    height: "51px",
    borderRadius: "65px",
    backgroundColor: "#f5f5f5",
  },
  searchIcon: {
    position: "absolute",
    top: "7px",
    left: "16px",
  },
  inputFieldFrom: {
    width: "20%",
    height: "36px",
    marginLeft: "80px",
    marginTop: "6px",
    border: "0",
    outline: "0",
    borderBottom: "1px solid #bbb",
    backgroundImage: "none",
    backgroundColor: "transparent",
    boxShadow: "none",
    opacity: "0.5",
    fontFamily: "Roboto",
    fontSize: "15px",
    fontHeight: 400,
    fontStyle: "italic",
    lineHeight: "normal",
    color: "#777777",
  },
  vLine: {
    width: "30px",
    height: "30px",
    marginTop: "12px",
    borderRight: "1px solid #bbb",
    opacity: "0.5",
  },
  contentDivider: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "35%",
    height: "2px",
    borderBottom: "1px solid #bbb",
    opacity: "0.4",
  },
}))

export default useStyles
