import * as React from "react"
import { AppBar, List, ListItem, ListItemText } from "@material-ui/core"
import useStyles from "./Styles/navStyles"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import IconButton from "@material-ui/core/IconButton"

const userEx = {
  name: "flain1",
  avatarSrc: "https://hackspirit.com/wp-content/uploads/2018/06/evil-people.jpg",
}

interface INavigationBar {}
const NavigationBar = (props: INavigationBar) => {
  const classes = useStyles()
  return (
    <AppBar className={classes.navigationBar} position="static">
      <List className={classes.navList} component="nav" aria-label="contacts">
        <ListItem button className={classes.navItem}>
          <ListItemText primary="Item1" />
        </ListItem>
        <ListItem className={classes.navItem} button>
          <ListItemText primary="Item2" />
        </ListItem>
        <ListItem className={classes.navItem} button>
          <ListItemText primary="Item3" />
        </ListItem>
      </List>

      <p className={classes.sup}>SUP!</p>
      <div className={classes.profileCard}>
        <Typography className={classes.userName}>{userEx.name}</Typography>
        <Avatar alt="user name" src={userEx.avatarSrc} />
        <IconButton aria-label="Profile dropdown">
          <KeyboardArrowDownIcon fontSize={"small"} />
        </IconButton>
      </div>
    </AppBar>
  )
}
export default NavigationBar
