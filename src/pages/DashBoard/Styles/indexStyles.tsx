import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import BackgroundImage from "assets/Background.png"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    width: "100%",
    maxHeight: "1200px",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    marginTop: "1px",
    backgroundColor: "#fff",
    "@media (min-width: 2800px)": {
      width: "2800px",
    },
    overflowY: "hidden",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
  content: {
    width: "100%",
    height: "calc(100% - 85px)",
    display: "flex",
    flexDirection: "row",
    maxHeight: "1200px",
  },
  boardWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "27%",
    borderRight: "1px solid #eee",
    "@media (max-width: 1300px)": {
      width: "45%",
    },
    "@media (max-width: 850px)": {
      width: "100%",
    },
  },
  boardNoticeInfoWrapper: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    width: "36%",
    backgroundColor: "#fff",
    overflowY: "scroll",
    scrollbarWidth: "none" /* Firefox */,
    msOverflowStyle: "none" /* IE 10+ */,
    "&::-webkit-scrollbar": {
      width: "0px",
      background: "transparent" /* Chrome/Safari/Webkit */,
    },
    "@media (max-width: 1300px)": {
      width: "55%",
    },
    "@media (max-width: 850px)": {
      width: "100%",
    },
  },
  mapWrapper: {
    position: "relative",
    height: "100%",
    minHeight: "700px",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "37%",
    "@media (max-width: 1300px)": {
      width: "55%",
    },
    "@media (max-width: 850px)": {
      width: "100%",
    },
  },
  map: {
    width: "100%",
    height: "100%",
  },
  backArrow: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "#ffffff",
  },
}))

export default useStyles
