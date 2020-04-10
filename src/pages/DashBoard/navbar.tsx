import * as React from "react"
import { AppBar, List, ListItem, ListItemText } from "@material-ui/core"
import useStyles from "./Styles/navStyles"

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
        <p className={classes.tempFill}>User Card here</p>
      </div>
    </AppBar>
  )
}
export default NavigationBar
