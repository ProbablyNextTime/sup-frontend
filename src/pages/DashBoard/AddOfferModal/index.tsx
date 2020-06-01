import * as React from "react"
import useStyles from "./styles"
import {
  Box,
  Modal,
  Fade,
  Backdrop,
  Typography,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextareaAutosize,
} from "@material-ui/core"
import { TextField } from "formik-material-ui"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { Close } from "@material-ui/icons"
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateMomentUtils from "@date-io/moment"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import useWindowDimensions from "hooks/useWindowDimensions"
import { isPositiveInteger } from "utils/formatField"

interface IAddOfferProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function getSteps() {
  return ["Departure & Arrival", "Additional Details ", "Tags"]
}

const offerSchema = Yup.object().shape({
  departurePoint: Yup.string().required("Required"),
  destinationPoint: Yup.string().required("Required"),
  pickUpPlace: Yup.string().required("Required"),
  deliveryPlace: Yup.string().required("Required"),
})

const validateStep = (values: object, from: number, to: number) => {
  for (let i = from; i < to; i++) if (!Object.values(values)[i]) return false
  return true
}

const AddOfferModal = ({ isOpen, setIsOpen }: IAddOfferProps) => {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [arrivalDate, setArrivalDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)
  const [departureDate, setDepartureDate] = React.useState((new Date() as unknown) as MaterialUiPickersDate)
  const [isValuesEmpty, setIsValuesEmpty] = React.useState<boolean>(false)
  const steps = getSteps()

  const { width } = useWindowDimensions()

  const handleNext = (values: object, step: number) => {
    const isFieldsValid =
      step === 0 ? validateStep(values, 0, 2) : step === 1 ? validateStep(values, 2, 4) : validateStep(values, 4, 6)
    return isFieldsValid ? setActiveStep((prevActiveStep) => prevActiveStep + 1) : setIsValuesEmpty(true)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  React.useEffect(() => {
    setActiveStep(0)
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
  }

  const classes = useStyles()
  return (
    <Modal
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableScrollLock={true}
    >
      <Fade in={isOpen}>
        <Box className={classes.wrapper}>
          <Box className={classes.headerContent}>
            <Typography className={classes.supLogo}>SUP!</Typography>
            {width > 600 && <Typography className={classes.contentHeader}>New transfer settings</Typography>}
            <IconButton className={classes.closeIcon} onClick={() => setIsOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <Formik
            initialValues={{
              departurePoint: "",
              destinationPoint: "",
              pickUpPlace: "",
              deliveryPlace: "",
              cargo: "",
              pricePerUnit: "1",
            }}
            validationSchema={offerSchema}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            {({ values, setFieldValue }) => (
              <Form className={classes.createOfferForm}>
                <Box className={classes.inputWrapper}>
                  {activeStep === 0 && (
                    <>
                      <Typography className={classes.inputLabel}>Departure point:</Typography>
                      <Field
                        onFocus={() => setIsValuesEmpty(false)}
                        name="departurePoint"
                        placeholder="The Earth"
                        component={TextField}
                        className={classes.inputField}
                      />
                      <Typography className={classes.inputLabel}>Destination point:</Typography>
                      <Field
                        onFocus={() => setIsValuesEmpty(false)}
                        name="destinationPoint"
                        placeholder="The Moon"
                        component={TextField}
                        className={classes.inputField}
                      />
                      <MuiPickersUtilsProvider utils={DateMomentUtils}>
                        <Typography className={classes.inputLabel}>Departure date:</Typography>
                        <DateTimePicker
                          onFocus={() => setIsValuesEmpty(false)}
                          name="departureDate"
                          className={classes.inputField}
                          disablePast={true}
                          value={departureDate}
                          onChange={setDepartureDate}
                        />
                        <Typography className={classes.inputLabel}>Arrival date:</Typography>
                        <DateTimePicker
                          onFocus={() => setIsValuesEmpty(false)}
                          name="arrivalDate"
                          className={classes.inputField}
                          disablePast={true}
                          value={arrivalDate}
                          onChange={setArrivalDate}
                        />
                      </MuiPickersUtilsProvider>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <Typography className={classes.inputLabel}>Pickup place:</Typography>
                      <Field
                        onFocus={() => setIsValuesEmpty(false)}
                        name="pickUpPlace"
                        placeholder="The Earth"
                        component={TextField}
                        className={classes.inputField}
                      />
                      <Typography className={classes.inputLabel}>Delivery place:</Typography>
                      <Field
                        onFocus={() => setIsValuesEmpty(false)}
                        name="deliveryPlace"
                        placeholder="The Moon"
                        component={TextField}
                        className={classes.inputField}
                      />
                      <Typography className={classes.inputLabel}>Cargo:</Typography>
                      <Field
                        onFocus={() => setIsValuesEmpty(false)}
                        name="cargo"
                        placeholder="I am a cargo"
                        rowsMin={4}
                        rowsMax={4}
                        component={TextareaAutosize}
                        className={classes.inputTextAreaField}
                      />
                      <Typography className={classes.inputLabel}>Price per unit:</Typography>
                      <Box className={classes.inputPriceWrapper}>
                        <Field
                          InputProps={{
                            inputProps: { min: 1, max: 10000 },
                            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                              if (parseInt(e.target.value) <= 10000 || e.target.value === "")
                                setFieldValue("pricePerUnit", e.target.value)
                            },
                          }}
                          placeholder="0"
                          type={"number"}
                          onKeyDown={(e: KeyboardEvent) => isPositiveInteger(e)}
                          onFocus={() => setIsValuesEmpty(false)}
                          name="pricePerUnit"
                          component={TextField}
                          className={classes.inputFieldNumber}
                        />
                        <Typography className={classes.dollar}>$</Typography>
                      </Box>
                    </>
                  )}
                </Box>
                <Box className={classes.stepperWrapper}>
                  <Stepper alternativeLabel={width < 800} activeStep={activeStep} className={classes.stepper}>
                    {steps.map((label, index) => {
                      const stepProps: { completed?: boolean } = {}
                      const labelProps: { optional?: React.ReactNode } = {}

                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      )
                    })}
                  </Stepper>
                  <Box className={classes.stepperControls}>
                    {isValuesEmpty && (
                      <Typography className={classes.fieldsEmpty}>Please, provide all the values</Typography>
                    )}
                    <Box className={classes.buttonsWrapper}>
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.prevButton}>
                        <Typography className={classes.prevButtonText}>Back</Typography>
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleNext(values, activeStep)}
                        className={classes.nextButton}
                      >
                        <Typography className={classes.nextButtonText}>
                          {activeStep === steps.length - 1 ? "Finish" : "Next"}
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Fade>
    </Modal>
  )
}

export default AddOfferModal
