import * as React from "react"
import Box from "@material-ui/core/Box"
import useStyles from "./Styles/navStyles"

interface INavigationBar {}
const NavigationBar = (props: INavigationBar) => {
  const classes = useStyles()
  return (
    <nav className={classes.navigationBar}>
      <ul className={classes.navList}>
        <li className={classes.navItem}>
          <a href="#" className={classes.mavItemLink}>
            Item
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="#" className={classes.mavItemLink}>
            Item
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="#" className={classes.mavItemLink}>
            Item
          </a>
        </li>
        <li className={classes.navItem}>
          <a href="#" className={classes.mavItemLink}>
            Item
          </a>
        </li>
      </ul>
      <p className={classes.sup}>SUP!</p>
      <div className={classes.profileCard}>
        <p className={classes.tempFill}>User Card here</p>
      </div>
    </nav>
  )
}

export default NavigationBar
