import * as React from "react"
import useStyles from "./styles"
import { Box, Modal, Fade, Backdrop, Typography, IconButton } from "@material-ui/core"
import { Close } from "@material-ui/icons"

interface IAddOfferProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AddOfferModal = ({ isOpen, setIsOpen }: IAddOfferProps) => {
  const classes = useStyles()
  return (
    <Modal
      className={classes.modal}
      open={isOpen}
      onClose={() => setIsOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box className={classes.wrapper}>
          <Box className={classes.headerContent}>
            <Typography className={classes.supLogo}>SUP!</Typography>
            <Typography className={classes.contentHeader}>New transfer settings</Typography>
            <IconButton className={classes.closeIcon} onClick={() => setIsOpen(false)}>
              <Close />
            </IconButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  )
}

export default AddOfferModal
