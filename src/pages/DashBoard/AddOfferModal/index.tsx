import * as React from "react"
import useStyles from "./styles"
import { TextField } from "formik-material-ui"
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
  Chip,
  Select,
  TextField as TextFieldMaterial,
} from "@material-ui/core"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { Close } from "@material-ui/icons"
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateMomentUtils from "@date-io/moment"
import useWindowDimensions from "hooks/useWindowDimensions"
import { isPositiveInteger } from "utils/formatField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { ITransportationOfferTag } from "model/transportationOfferTag"
import { useAPICallback } from "hooks/useApiCallback"
import { getTransportationTags, postTransportationOffer } from "service/api/transportationOffer"
import moment from "moment"
import { useHistory } from "react-router"

interface IAddOfferProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// Array of steps for Stepper component
function getSteps() {
  return ["Departure & Arrival", "Additional Details ", "Tags"]
}

// validation schema for creating new offer
const offerSchema = Yup.object().shape({
  departurePoint: Yup.string().required("Required"),
  destinationPoint: Yup.string().required("Required"),
  pickUpPlace: Yup.string().required("Required"),
  deliveryPlace: Yup.string().required("Required"),
  arrivalDate: Yup.string().required("Required"),
  departureDate: Yup.string().required("Required"),
  cargo: Yup.string().required("Required"),
  pricePerUnit: Yup.string().required("Required"),
  transferPeople: Yup.string().required("Required"),
})

// return true if all object`s fields are not empty
const validateStep = (values: object, from: number, to: number) => {
  for (let i = from; i < to; i++) if (!Object.values(values)[i]) return false
  return true
}

const AddOfferModal = ({ isOpen, setIsOpen }: IAddOfferProps) => {
  const history = useHistory()
  // state with current step of Stepper component
  const [activeStep, setActiveStep] = React.useState<number>(0)
  // Empty field error handle state
  const [isValuesEmpty, setIsValuesEmpty] = React.useState<boolean>(false)
  // Holds selected tags for offer
  const [selectedTags, setSelectedTags] = React.useState<ITransportationOfferTag[]>([])
  // Holds available tags (all tags that we get from backend)
  const [availableTags, setAvailableTags] = React.useState<ITransportationOfferTag[]>([])
  // array with all Stepper steps
  const steps = getSteps()

  // current width of the page
  const { width } = useWindowDimensions()

  // API call to get all available tags for the moment
  const getAvailableTransportationTags = useAPICallback(async () => {
    const tags = await getTransportationTags()
    setAvailableTags(tags)
  }, [selectedTags])

  // API POST (adding new offer to the DB)
  const handleSubmit = useAPICallback(async (values) => {
    const valuesToSend = values
    valuesToSend.tags = valuesToSend.tags.map((tag: ITransportationOfferTag) => {
      return { name: tag.name }
    })
    valuesToSend.arrivalDate = moment(valuesToSend.arrivalDate).toISOString()
    valuesToSend.departureDate = moment(valuesToSend.departureDate).toISOString()
    const newOffer = await postTransportationOffer(valuesToSend)
    setIsOpen(false)
    history.push(`/offer/${newOffer.id}`)
  }, [])

  // move stepper to the next step if all fields of current step are filled
  const handleNext = async (values: object, step: number) => {
    const isFieldsValid =
      step === 0 ? validateStep(values, 0, 3) : step === 1 ? validateStep(values, 4, 7) : validateStep(values, 8, 9)
    if (step === 2 && isFieldsValid) handleSubmit(values)
    else return isFieldsValid ? setActiveStep((prevActiveStep) => prevActiveStep + 1) : setIsValuesEmpty(true)
  }

  // move stepper to the previous step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  // onChange handler for tags autoselect
  const handleChange = React.useCallback((_, values, setFieldValue) => {
    if (values) {
      setFieldValue("tags", values)
      setSelectedTags(values)
    }
  }, [])

  // set def step to 0 after closing (opening) modal window
  React.useEffect(() => {
    setActiveStep(0)
    setSelectedTags([])
  }, [isOpen])

  // update available tags before opening modal
  React.useEffect(() => {
    getAvailableTransportationTags()
  }, [getAvailableTransportationTags])

  // handle modal window close
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
              arrivalDate: moment(moment.now()).add(2, "days"),
              departureDate: moment(moment.now()),
              pickupPlace: "",
              deliveryPlace: "",
              cargo: "",
              pricePerUnitInUsd: 1,
              transportationTarget: "cargo",
              tags: [],
            }}
            validationSchema={offerSchema}
            onSubmit={(values) => console.log(values)}
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
                          value={values.departureDate}
                          onChange={(date) => setFieldValue("departureDate", date)}
                        />
                        <Typography className={classes.inputLabel}>Arrival date:</Typography>
                        <DateTimePicker
                          onFocus={() => setIsValuesEmpty(false)}
                          name="arrivalDate"
                          className={classes.inputField}
                          disablePast={true}
                          value={values.arrivalDate}
                          onChange={(date) => setFieldValue("arrivalDate", date)}
                        />
                      </MuiPickersUtilsProvider>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <Typography className={classes.inputLabel}>Pickup place:</Typography>
                      <Field
                        onFocus={() => setIsValuesEmpty(false)}
                        name="pickupPlace"
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
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("cargo", event.target.value)
                        }
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
                                setFieldValue("pricePerUnitInUsd", parseInt(e.target.value) || 0)
                            },
                          }}
                          placeholder="0"
                          type={"number"}
                          onKeyDown={(e: KeyboardEvent) => isPositiveInteger(e)}
                          onFocus={() => setIsValuesEmpty(false)}
                          name="pricePerUnitInUsd"
                          component={TextField}
                          className={classes.inputFieldNumber}
                        />
                        <Typography className={classes.dollar}>$</Typography>
                      </Box>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <Typography className={classes.inputLabel}>User tags:</Typography>
                      <Autocomplete
                        className={classes.autocomplete}
                        classes={{ endAdornment: classes.clearIndicator }}
                        multiple={true}
                        value={selectedTags}
                        onChange={(_, values) => handleChange(_, values, setFieldValue)}
                        // set only options that are not already selected
                        options={
                          availableTags
                            .filter((option: ITransportationOfferTag) => {
                              const tagToOmit: ITransportationOfferTag | undefined = selectedTags.find(
                                ({ name }) => name === option.name
                              )
                              return tagToOmit ? option.name !== tagToOmit.name : option
                            })
                            .map(({ name, id }) => {
                              return { name, id }
                            }) || []
                        }
                        getOptionLabel={(option) => option.name}
                        renderTags={(tagValue, getTagProps) =>
                          tagValue.map((option, index) => (
                            <Chip
                              className={classes.chip}
                              variant={"outlined"}
                              color={"secondary"}
                              label={option.name}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextFieldMaterial {...params} variant={"outlined"} placeholder="Favorites" />
                        )}
                      />
                      <Typography className={classes.inputLabel}>People transfer:</Typography>
                      <Field
                        onFocus={() => setIsValuesEmpty(false)}
                        name="transferPeople"
                        placeholder="Dead weight"
                        component={Select}
                        className={classes.inputField}
                        style={{ margin: "7px 0 0 0", width: "170px" }}
                        value={values.transportationTarget}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue("transportationTarget", event.target.value)
                        }
                      >
                        <option value={"people"}>Dead weight</option>
                        <option value={"cargo"}>People transfer</option>
                      </Field>
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
