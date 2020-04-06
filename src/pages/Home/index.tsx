import * as React from "react"
import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import SignIn from "./signIn"

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    fontSize: "2.0rem",
    color: theme.palette.primary.main,
  },
}))

interface IHomeProps {}

const HomePage = (props: IHomeProps) => {
  const classes = useStyles()

  return (
    <div>
      <SignIn></SignIn>
    </div>
  )
}

export default HomePage
