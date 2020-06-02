import * as React from "react"
import { GoogleLoginButton } from "ts-react-google-login-component"
import { Button } from "@material-ui/core"
import { authService, IAuthResponse } from "@jetkit/react"
import { ILoginResponse } from "model/loginResponse"
import { useHistory } from "react-router"
import { UserContext } from "service/userContext/userContext"
import { useAPICallback } from "hooks/useApiCallback"
import useStyles from "./styles"
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import googleIcon from "assets/googleIcon.png"

interface ClientConfig {
  client_id: string
}

const GoogleLogin = () => {
  // Authorize the user via his Google account
  const clientConfig: ClientConfig = { client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID || "" } // Client ID required for social login
  const history = useHistory()
  const userContext = React.useContext(UserContext)

  const classes = useStyles()

  const errorHandler = React.useCallback((error: string): void => {
    // In case something goes wrong with social login
    console.error(error)
  }, [])

  const responseGoogle = useAPICallback(
    async (googleUser: gapi.auth2.GoogleUser): Promise<void> => {
      // Get user's email and Google ID and try logging in
      const googleId: string = googleUser.getId()
      const user: gapi.auth2.BasicProfile = googleUser.getBasicProfile()
      const email: string = user.getEmail()

      const data: ILoginResponse = await authService.login<IAuthResponse>(email, googleId)

      data.user && userContext.handleSettingUser({ user: { email: data.user.email, id: data.user.id } })
      history.push("/dashboard")
    },
    [history],
    {
      onError: async (error: Error, googleUser: gapi.auth2.GoogleUser): Promise<void> => {
        // In case the user hasn't logged in to our website with Google before sign him up using Google ID as the password
        if (error.message === "Request failed with status code 401") {
          const user: gapi.auth2.BasicProfile = googleUser.getBasicProfile()
          const googleId: string = googleUser.getId()
          const email: string = user.getEmail()

          await authService.signUp(email, googleId)

          const data: ILoginResponse = await authService.login<IAuthResponse>(email, googleId)

          data.user && userContext.handleSettingUser({ user: { email: data.user.email, id: data.user.id } })
          history.push("/dashboard")
        }
      },
    }
  )

  return (
    <GoogleLoginButton responseHandler={responseGoogle} clientConfig={clientConfig} failureHandler={errorHandler}>
      <Button className={classes.socialLogin}>
        <img src={googleIcon} alt={"google Icon"} style={{ margin: "0 10px 0 0", width: 20, height: 20 }} />
        Google login
      </Button>
    </GoogleLoginButton>
  )
}

export default GoogleLogin
