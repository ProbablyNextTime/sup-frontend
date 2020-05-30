import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  dashboard: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    padding: "5px",
    overflowY: "scroll",
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE 10+ */,
    "&::-webkit-scrollbar": {
      width: "0px",
      background: "transparent" /* Chrome/Safari/Webkit */,
    },
  },
  boardNoticeWrapper: {
    padding: "5px",
    width: "100%",
    minHeight: "200px",
    backgroundColor: "#FFFFFF",
    marginBottom: "5px",
  },
  placeAndTime: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  premiumStar: {
    margin: "1px 0 0 0",
    color: "#f5f92a",
  },
  premiumFont: {
    color: "#fed133",
  },
  premiumBackground: {
    backgroundColor: "#fffff2",
    border: "solid 1px #fcff6c",
  },
  premiumCheckSign: {
    color: "#fed133",
    border: "solid 1px #fcff6c",
  },
  premiumRoute: {
    maxWidth: "77%",
    display: "flex",
    flexDirection: "row",
  },
  cardContent: {
    margin: 0,
    padding: "6px 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  mainInfo: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "100%",
  },
  routeText: {
    fontFamily: "Lato",
    fontSize: "20px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#464746",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  transferNumber: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  transferNumberText: {
    fontFamily: "Lato",
    fontSize: "11px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: "#6e6e6e",
  },
  tags: {
    margin: "5px 0 0 0",
    display: "flex",
    flexDirection: "row",
    justifySelf: "flex-start",
  },
  tag: {
    height: "25px",
    fontSize: "11px",
    margin: "0 10px 0 0",
    padding: "3px",
    borderRadius: "4px",
    border: `1px solid #fed133`,
    color: "#6e6e6e",
  },
  reviews: {
    minWidth: "55px",
    justifySelf: "end",
    fontFamily: "Lato",
    fontSize: "13px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#9773ff",
  },
  route: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "0 0 3px 0",
  },
  contentDivider: {
    height: "1px",
    width: "90px",
    backgroundImage: "linear-gradient(to top, #b8b8b8, rgba(255, 255, 255, 0))",
  },
  pickUpPlace: {
    padding: "0 5px 10px 0",
    display: "flex",
    flexDirection: "column",
    alignContent: "end",
    width: "50%",
    justifyContent: "space-between",
  },
  cardBottomContentHeader: {
    fontFamily: "Lato",
    fontSize: "11px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#afafaf",
  },
  cardBottomContent: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "Lato",
    fontSize: "15px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#2dd75c",
  },
  cardBottomDate: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontFamily: "Lato",
    fontSize: "11px",
    fontWeight: 500,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#838383",
  },
  isPeopleTransfer: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
  },
  cargoInfo: {
    width: "50%",
    padding: "0 5px 0 0",
    display: "flex",
    flexDirection: "column",
  },
  pricePerValue: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: 900,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#6f6f6f",
  },
  carrier: {
    display: "flex",
    padding: "0 5px",
    flexDirection: "column",
    width: "50%",
  },
  secondaryInfo: {
    display: "flex",
    flexDirection: "row",
  },
  isTrusted: {
    marginTop: "3px",
    marginLeft: "3px",
    color: "#2dd75c",
    fontSize: "11px",
    border: "1px solid #2dd75c",
    borderRadius: "5.5px",
  },
  carrierInfo: {
    display: "flex",
    marginTop: "2px",
  },
}))

export default useStyles
