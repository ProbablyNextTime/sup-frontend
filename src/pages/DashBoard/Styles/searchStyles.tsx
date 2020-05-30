import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    position: "relative",
    height: "80px",
    width: "100%",
    display: "flex",
    marginTop: "20px",
    justifyContent: "center",
    "@media (max-width: 850px)": {
      height: "135px",
    },
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: "60%",
    height: "40px",
    borderRadius: "30px",
    padding: "0 7px 0 0",
    backgroundColor: "#f5f5f5",
    "@media (max-width: 850px)": {
      width: "45%",
    },
    "@media (max-width: 500px)": {
      width: "70%",
    },
  },
  searchIcon: {
    width: "30px",
    height: "30px",
    padding: "6px 0 0 0",
    opacity: "0.3",
    alignSelf: "center",
  },
  inputSearchText: {
    width: "100%",
  },
  inputSearchDate: {
    width: "100%",
    margin: "0 0 0 6px",
  },
  vLine: {
    width: "10px",
    height: "24px",
    margin: "12px 0 6px 0",
    borderRight: "1px solid #bbb",
    opacity: "0.5",
  },
  calendarIcon: {
    marginTop: "4px",
    alignSelf: "center",
    opacity: "0.3",
    height: "25px",
    width: "25px",
  },
  searchForm: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  searchControls: {
    position: "absolute",
    width: "30px",
    height: "30px",
    top: "8px",
    right: "10px",
  },
  expandedContainer: {
    position: "relative",
    display: "flex",
    height: "128px",
    flexDirection: "column",
    width: "45%",
    borderRadius: "30px",
    backgroundColor: "#f5f5f5",
    "@media (max-width: 500px)": {
      width: "70%",
    },
  },
  inputWrapper: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    padding: "0 5px 6px 5px",
    "@media (max-width: 850px)": {
      padding: "0 45px 10px 7px",
    },
  },
}))

export default useStyles
