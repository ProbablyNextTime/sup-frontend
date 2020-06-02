import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    flex: "1 1 auto",
  },
  mainInfo: {
    width: "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "5% 10% 0 8%",
    backgroundColor: "#f7f7f7",
    overflowY: "scroll",
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE 10+ */,
    "&::-webkit-scrollbar": {
      width: "0px",
      background: "transparent" /* Chrome/Safari/Webkit */,
    },
    "@media (max-width: 1100px)": {
      width: "100%",
      padding: "5% 4% 0 12%",
    },
  },
  sidePicture: {
    width: "50%",
    height: "100%",
    backgroundImage: `url(${"https://res.cloudinary.com/drkgnohds/image/upload/v1588516013/SUP/bg_vuwqjo.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    "@media (max-width: 1100px)": {
      display: "none",
    },
  },
  thankYouSign: {
    color: "#78f464",
    fontSize: "44px",
    fontWeight: 900,
    fontStretch: "normal",
    fontStyle: "italic",
    lineHeight: "normal",
    letterSpacing: "-3.4px",
  },
  subText: {
    margin: "30px 0 0 0",
    padding: "0 30% 0 0",
    color: "#7d807d",
    fontSize: "18px",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "0.36px",
  },
  mainButton: {
    borderColor: "#30bb49",
    borderRadius: "2px",
    height: "40px",
    width: "20%",
    margin: "25px 0 0 0",
    backgroundImage: `url(${"https://res.cloudinary.com/drkgnohds/image/upload/c_fill,h_45,w_110/v1588516370/SUP/logo512_kpt9pr.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    textTransform: "none",
    fontSize: "12px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    color: "#ffffff",
  },
  interestingOffers: {
    margin: "30px 0 0 0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 1100px)": {
      width: "80%",
    },
  },
}))

export default useStyles
