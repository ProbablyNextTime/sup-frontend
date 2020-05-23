import Box from "@material-ui/core/Box"
import * as React from "react"
import { Formik, Form, Field } from "formik"
import { Button, LinearProgress } from "@material-ui/core"
import { TextField } from "formik-material-ui"
import * as Yup from "yup"
import useStyles from "./Styles/signInStyles"
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

export default function SignIn() {
  /* Main Auth component
   */
  const history = useHistory()

  const handleSubmit = useAPICallback(
    async (values: ICredentials, actions: any) => {
      await authService.login<IAuthResponse>(values.email, values.password)
      actions.setSubmitting(false)
      history.push("/dashboard")
    },
    [history]
  )

  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        {({ submitForm, isSubmitting, errors, touched }) => (
          <Form className={classes.signInForm}>
            <Field component={TextField} label="email" name="email" data-cy={"email-input"} variant="outlined" />
            <Field
              component={TextField}
              label="password"
              name="password"
              type="password"
              data-cy={"password-input"}
              variant="outlined"
            />
            {isSubmitting && <LinearProgress />}
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              data-cy={"login-button"}
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
