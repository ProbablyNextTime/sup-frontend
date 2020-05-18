import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  navigationBar: {
    height: "90px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    boxShadow: "0px 1px #ddd;",
  },
  logo: {
    position: "absolute",
    left: "50%",
    top: "10px",
    marginLeft: "-50px",
    marginBottom: "42px",
  },
  sup: {
    color: "#78f464",
    fontSize: "44px",
    fontWeight: 900,
    fontStretch: "normal",
    fontStyle: "italic",
    lineHeight: "normal",
    letterSpacing: "-3.4px",
  },
  catchPhrase: {
    color: "#b7b7b7",
    fontSize: "9px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "italic",
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  addTransferButton: {
    height: "45px",
    marginLeft: "40px",
    color: "#53eb50",
    borderColor: "#53eb50",
    borderWidth: "1px",
    alignSelf: "center",
  },
  rightToolBox: {
    marginRight: "20px",
    fontFamily: "FuturaBT",
    fontSize: "18px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000000",
    alignSelf: "center",
  },
  toolList: {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    overflow: "hidden",
    backgroundColor: "#fff",
    maxWidth: "400px",
    maxHeight: "40px",
  },
  downArrowToolBar: {
    marginLeft: "5px",
    height: "12px",
    width: "12px",
  },
  toolListItem: {
    borderRight: "1px solid black",
    maxWidth: "90px",
  },
  helpLink: {
    fontSize: "18px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#000000",
  },
  profileCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: "55px",
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
    fontFamily: "Montserrat",
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
