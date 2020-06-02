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
  guestNavBar: {
    justifyContent: "flex-end",
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
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
  addTransferMobileButton: {
    height: "40px",
    maxWidth: "40px",
    marginLeft: "20px",
    fontSize: "30px",
    color: "#53eb50",
    borderColor: "#53eb50",
    borderWidth: "1px",
    alignSelf: "center",
    "@media (min-width: 500px)": {
      display: "none",
    },
  },
  rightToolBox: {
    padding: "0 20px 0 0",
    fontFamily: "FuturaBT",
    fontSize: "16px",
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
    maxHeight: "40px",
    "@media (max-width: 1300px)": {
      display: "none",
    },
  },
  downArrowToolBar: {
    marginLeft: "5px",
    height: "12px",
    width: "12px",
  },
  toolListItem: {
    borderRight: "1px solid black",
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
    margin: "0 5px 0 0",
  },
  title: {
    flexGrow: 1,
  },
  userName: {
    marginRight: "20px",
  },
  menuIcon: {
    display: "none",
    "@media (max-width: 1300px)": {
      display: "flex",
    },
  },
  mobileMenu: {
    width: "160px",
    display: "flex",
    flexDirection: "column",
  },
  nested: {
    padding: "0 0 0 40px",
    height: "25px",
  },
  nestedText: {
    fontSize: "8px",
  },
  displayRight: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  menuListItem: {
    display: "flex",
    flexDirection: "row",
  },
  semanticIcons: {
    margin: "0 10px 0 0",
  },
  avatar: {
    height: "22px",
    width: "22px",
    margin: "0 10px 0 0",
  },
  topMenuAvatar: {
    margin: "0 15px 0 0",
  },
  topMenuSemanticIcon: {
    margin: "0 8px 0 0",
  },
}))

export default useStyles
