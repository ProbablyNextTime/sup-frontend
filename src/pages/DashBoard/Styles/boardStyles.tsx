import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  sugBoardsBox: {
    marginTop: "30px",
    marginLeft: "6%",
    marginBottom: "30px",
    height: "47px",
    borderBottom: "1px solid #e7e7e7",
    fontFamily: "Lato",
    fontSize: "24px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "italic",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#999999",
  },
  noticeCard: {
    minHeight: "190px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  noticeMedia: {
    marginTop: "30px",
    marginLeft: "33px",
    width: "183px",
    height: "128px",
    borderRadius: "11px",
  },
  cardBody: {
    height: "190px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  vehicleType: {
    height: "14px",
    width: "27px",
    marginTop: "3px",
    textAlign: "center",
    border: "1px solid green",
    borderRadius: "5px",
    opacity: "0.4",
    fontSize: "9px",
    color: "green",
  },
  generalData: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  vehicleInfo: {
    marginLeft: "17px",
    fontFamily: "Lato",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "normal",
    color: "#464746",
  },
  maxWeight: {
    marginTop: "2px",
    fontFamily: "Roboto",
    fontSize: "15px",
    lineHeight: "normal",
    fontWeight: 300,
    color: "#959595",
  },
  highlightMaxWeight: {
    margin: 0,
    width: "32px",
    height: "1px",
    backgroundColor: "#e7e7e7",
    opacity: "0.4",
  },
}))

export default useStyles
