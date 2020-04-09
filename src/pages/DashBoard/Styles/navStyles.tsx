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
    listStyleType: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    backgroundColor: "#fff",
    maxWidth: "400px",
  },

  navItem: {
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
    marginBottom: "42px",
    marginLeft: "26%",
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
    width: "20%",
    height: "55px",
    position: "absolute",
    top: "25px",
    right: "40px",
    backgroundColor: "#777",
  },
  tempFill: {
    marginLeft: "40%",
    padding: 0,
    alignSelf: "center",
    color: "#ddd",
  },
}))

export default useStyles

// .SUP {
//
//   width: 66px;
//
//   height: 39px;
//
//   font-family: FuturaBT-ExtraCond;
//
//   font-size: 36px;
//
//   font-weight: 900;
//
//   font-stretch: normal;
//
//   font-style: italic;
//
//   line-height: normal;
//
//   letter-spacing: normal;
//
//   color: #78f464;
//
// }
