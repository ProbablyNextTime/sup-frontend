import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    fontSize: "2.0rem",
    color: theme.palette.primary.main,
  },

  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "400px",
  },
  signInForm: {
    width: "40%",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  submitButton: {
    height: "22%",
    width: "5%",
  },
}))

export default useStyles
