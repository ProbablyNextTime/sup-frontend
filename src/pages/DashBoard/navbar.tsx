import * as React from "react"
import { AppBar, List, ListItem } from "@material-ui/core"
import useStyles from "./Styles/navStyles"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import IconButton from "@material-ui/core/IconButton"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Language from "@material-ui/icons/Language"
import Link from "@material-ui/core/Link"

const userEx = {
  name: "flain1",
  avatarSrc: "https://hackspirit.com/wp-content/uploads/2018/06/evil-people.jpg",
}

interface INavigationBar {}

const NavigationBar = (props: INavigationBar) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currency, setCurrency] = React.useState("USD")
  const classes = useStyles()
  return (
    <AppBar className={classes.navigationBar} position="static">
      <Button variant="outlined" className={classes.addTransferButton}>
        + New Transfer
      </Button>
      <Box className={classes.logo}>
        <Typography className={classes.sup}>SUP!</Typography>
        <Typography className={classes.catchPhrase}>Transfers made easy!</Typography>
      </Box>
      <Box className={classes.rightToolBox}>
        <List className={classes.toolList} component="ul" aria-label="contacts">
          <ListItem className={classes.toolListItem}>
            <Link component="button" variant="body2" underline={"none"} className={classes.helpLink}>
              {currency}
            </Link>
            <IconButton className={classes.downArrowToolBar}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </ListItem>
          <ListItem className={classes.toolListItem}>
            <Language></Language>
            <IconButton className={classes.downArrowToolBar}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </ListItem>
          <ListItem className={classes.toolListItem}>
            <Link component="button" variant="body2" underline={"none"} className={classes.helpLink}>
              Help
            </Link>
          </ListItem>
          <ListItem>
            <Typography className={classes.userName}>{userEx.name}</Typography>
            <Avatar alt="user name" />
            <IconButton aria-label="Profile dropdown" className={classes.downArrowToolBar}>
              <KeyboardArrowDownIcon />
            </IconButton>
          </ListItem>
        </List>
      </Box>
    </AppBar>
  )
}
export default NavigationBar
