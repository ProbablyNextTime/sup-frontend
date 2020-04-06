import { makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import Box from "@material-ui/core/Box"
import * as React from "react"
import { Formik, Form, Field } from "formik"
import { Button, LinearProgress } from "@material-ui/core"
import { TextField } from "formik-material-ui"
import * as Yup from "yup"

interface Values {
  email: string
  password: string
}

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

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password should contain at least 6 characters")
    .max(20, "Password shouldn`t be longer than 20 characters")
    .required("Required"),
})

export default function SignIn() {
  const classes = useStyles()
  return (
    <Box className={classes.wrapper}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            alert(JSON.stringify(values, null, 2))
          }, 500)
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <Form className={classes.signInForm}>
            <Field component={TextField} label="email" name="email" variant="outlined" />
            <Field component={TextField} label="password" name="password" variant="outlined" />
            {isSubmitting && <LinearProgress />}
            <Button
              className={classes.submitButton}
              variant="contained"
              color="primary"
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
