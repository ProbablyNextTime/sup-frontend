import * as React from "react"
import SignInForm from "./SignInForm"
import useStyles from "./styles"
import { Box, Typography } from "@material-ui/core"
import SignUpForm from "./SignUpForm"
interface IHomeProps {}

const SignIn = (props: IHomeProps) => {
  const [isSignIn, setIsSignIn] = React.useState<boolean>(true)
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <Box className={classes.signInContainer}>
        <Box className={classes.signInFormContainer}>
          <Typography className={classes.supLogo}>SUP!</Typography>S
          <Typography className={classes.catchPhrase}>
            Welcome! Join thousands of users shipping their goods with us.
          </Typography>
          {isSignIn ? <SignInForm setIsSignIn={setIsSignIn} /> : <SignUpForm setIsSignIn={setIsSignIn} />}
        </Box>
        <Box className={classes.flainImage} />
      </Box>
    </div>
  )
}

export default SignIn
