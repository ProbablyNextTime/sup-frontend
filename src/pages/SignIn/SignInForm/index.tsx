import Box from "@material-ui/core/Box"
import * as React from "react"
import { Formik, Form, Field } from "formik"
import { Button, LinearProgress } from "@material-ui/core"
import { TextField } from "formik-material-ui"
import * as Yup from "yup"
import useStyles from "./styles"
import { useHistory } from "react-router-dom"
import { useAPICallback } from "hooks/useApiCallback"
import { authService, IAuthResponse } from "@jetkit/react"

interface ICredentials {
  email: string
  password: string
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Password should contain at least 5 characters")
    .max(20, "Password shouldn`t be longer than 20 characters")
    .required("Required"),
})

interface ISignInFormProps {
  setIsSignIn: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SignInForm({ setIsSignIn }: ISignInFormProps) {
  const history = useHistory()
  const [isAuthFailed, setIsAuthFailed] = React.useState<boolean>(false)

  const handleSubmit = useAPICallback(
    async (values: ICredentials, actions: any) => {
      const user = await authService.login<IAuthResponse>(values.email, values.password)
      actions.setSubmitting(false)
      history.push("/dashboard")
    },
    [history],
    { onError: () => setIsAuthFailed(true) }
  )

  const classes = useStyles()
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isSubmitting, errors, touched }) => (
          <Form className={classes.logInForm}>
            <Field
              className={classes.inputField}
              component={TextField}
              label={"Email"}
              name={"email"}
              data-cy={"email-input"}
            />
            <Field
              className={classes.inputField}
              component={TextField}
              label={"Password"}
              name={"password"}
              type={"password"}
              data-cy={"password-input"}
            />
            {isSubmitting && <LinearProgress />}
            {isAuthFailed && (
              <Box data-cy={"failed-auth"} className={classes.errorMessage}>
                Invalid email or password
              </Box>
            )}
            <Box className={classes.formControls}>
              <Button
                className={classes.mainButton}
                variant="contained"
                color="primary"
                data-cy={"login-button"}
                disabled={isSubmitting}
                onClick={submitForm}
              >
                Login
              </Button>
              <Button
                type={"button"}
                classes={{
                  root: classes.secondaryButton,
                }}
                variant="contained"
                disabled={isSubmitting}
                onClick={() => setIsSignIn(false)}
              >
                Sign Up
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  )
}
