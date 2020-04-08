import Box from "@material-ui/core/Box"
import * as React from "react"
import { Formik, Form, Field } from "formik"
import { Button, LinearProgress } from "@material-ui/core"
import { TextField } from "formik-material-ui"
import * as Yup from "yup"
import useStyles from "./Styles/signInStyles"
import history from "../../History"

interface ICredentials {
  email: string
  password: string
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password should contain at least 6 characters")
    .max(20, "Password shouldn`t be longer than 20 characters")
    .required("Required"),
})

export default function SignIn() {
  const handleSubmit = React.useCallback((values: ICredentials, { setSubmitting }) => {
    console.log(values.email, values.password)
    setSubmitting(false)
    history.push("/dashboard")
  }, [])

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
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.signInForm}>
            <Field component={TextField} label="email" name="email" data-cy-email-input variant="outlined" />
            <Field component={TextField} label="password" name="password" data-cy-password-input variant="outlined" />
            {isSubmitting && <LinearProgress />}
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
              data-cy-login-button
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
