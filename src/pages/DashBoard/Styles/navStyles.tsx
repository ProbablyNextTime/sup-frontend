import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  navigationBar: {
    height: "105px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0px 1px #ddd;",
  },
  navList: {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    overflow: "hidden",
    backgroundColor: "#fff",
    maxWidth: "400px",
  },

  navItem: {
    color: "black",
    float: "left",
    minWidth: "100px",
  },

  mavItemLink: {
    display: "block",
    color: "black",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration: "None",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },

  sup: {
    position: "absolute",
    left: "50%",
    marginLeft: "-50px",
    marginBottom: "42px",
    width: "66px",
    height: "39px",
    fontSize: "36px",
    fontWeight: 1000,
    fontStretch: "normal",
    fontStyle: "italic",
    lineHeight: "normal",
    letterSpacing: "-3.4px",
    alignSelf: "center",
    color: "#78f464",
  },
  profileCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "55px",
    position: "absolute",
    top: "25px",
    right: "50px",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginRight: "20px",
    fontFamily: "FuturaBT",
    fontSize: "12px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000000",
    borderBottom: "1px solid black",
  },
}))

export default useStyles
