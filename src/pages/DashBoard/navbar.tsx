import * as React from "react"
import { AppBar, List, ListItem, Collapse, ListItemText, Menu, MenuItem } from "@material-ui/core"
import useStyles from "./Styles/navStyles"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import IconButton from "@material-ui/core/IconButton"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Language from "@material-ui/icons/Language"
import Link from "@material-ui/core/Link"
import { UserContext } from "service/userContext/userContext"
import classNames from "classnames"
import { Menu as MenuIcon, ExitToApp } from "@material-ui/icons"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import { AttachMoney, HelpOutline } from "@material-ui/icons"
import { ExpandLess, ExpandMore } from "@material-ui/icons"
import AddOfferModal from "./AddOfferModal"

const createNameFromEmail = (email?: string) => {
  return email ? email.split("@")[0] : "guest"
}

const NavigationBar = () => {
  const userContext = React.useContext(UserContext)
  const [isMenuOpened, setIsMenuOpened] = React.useState<boolean>(false)
  const [isChooseCurrencyOpen, setIsChooseCurrencyOpen] = React.useState<boolean>(false)
  const [currency, setCurrency] = React.useState<string>("EURO")
  const [isChooseLanguageOpen, setIsChooseLanguageOpen] = React.useState<boolean>(false)
  const [language, setLanguage] = React.useState<string>("ENG")
  const [currencyAnchorEl, setCurrencyAnchorEl] = React.useState<null | HTMLElement>(null)
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState<null | HTMLElement>(null)
  const [logoutAnchorEl, setLogoutAnchorEl] = React.useState<null | HTMLElement>(null)
  const [isLogoutOpen, setIsLogoutOpen] = React.useState<boolean>(false)
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  const handleCurrencyMenuClose = (newCurrency: string) => {
    setCurrency(newCurrency)
    setCurrencyAnchorEl(null)
  }

  const handleLanguageMenuClose = (newLanguage: string) => {
    setLanguage(newLanguage)
    setLanguageAnchorEl(null)
  }

  const handleLogout = () => {
    setLogoutAnchorEl(null)
    // Your logic here
  }

  const classes = useStyles()
  return (
    <AppBar
      className={classNames.default([classes.navigationBar, userContext.user.id === "none" && classes.guestNavBar])}
      position="static"
    >
      {userContext.user.id !== "none" && (
        <>
          <Button variant="outlined" className={classes.addTransferButton} onClick={() => setIsModalOpen(true)}>
            + New Transfer
          </Button>
          <Button variant="outlined" className={classes.addTransferMobileButton} onClick={() => setIsModalOpen(true)}>
            +
          </Button>
          <AddOfferModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </>
      )}
      <Box className={classes.logo}>
        <Typography className={classes.sup}>SUP!</Typography>
        <Typography className={classes.catchPhrase}>Transfers made easy!</Typography>
      </Box>
      <Box className={classes.rightToolBox}>
        <List className={classes.toolList} component="ul" aria-label="contacts">
          <ListItem className={classes.toolListItem}>
            <AttachMoney className={classes.topMenuSemanticIcon} />
            <Link component="button" variant="body2" underline={"none"} className={classes.helpLink}>
              {currency}
            </Link>
            <IconButton
              className={classes.downArrowToolBar}
              onClick={(event) => setCurrencyAnchorEl(event.currentTarget)}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
              anchorEl={currencyAnchorEl}
              keepMounted
              open={Boolean(currencyAnchorEl)}
              onClose={() => handleCurrencyMenuClose(currency)}
            >
              <MenuItem onClick={() => handleCurrencyMenuClose("USD")}>USD</MenuItem>
              <MenuItem onClick={() => handleCurrencyMenuClose("EURO")}>EURO</MenuItem>
              <MenuItem onClick={() => handleCurrencyMenuClose("UAH")}>UAH</MenuItem>
            </Menu>
          </ListItem>
          <ListItem className={classes.toolListItem}>
            <Language className={classes.topMenuSemanticIcon} />
            <Link component="button" variant="body2" underline={"none"} className={classes.helpLink}>
              {language}
            </Link>
            <IconButton
              className={classes.downArrowToolBar}
              onClick={(event) => setLanguageAnchorEl(event.currentTarget)}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
              anchorEl={languageAnchorEl}
              keepMounted
              open={Boolean(languageAnchorEl)}
              onClose={() => handleLanguageMenuClose(language)}
            >
              <MenuItem onClick={() => handleLanguageMenuClose("ENG")}>English</MenuItem>
              <MenuItem onClick={() => handleLanguageMenuClose("RUS")}>Russian</MenuItem>
              <MenuItem onClick={() => handleLanguageMenuClose("UKR")}>Ukrainian</MenuItem>
            </Menu>
          </ListItem>
          <ListItem className={classes.toolListItem}>
            <Link component="button" variant="body2" underline={"none"} className={classes.helpLink}>
              Help
            </Link>
          </ListItem>
          <ListItem>
            <Avatar alt="user name" className={classes.topMenuAvatar} />
            <Link component="button" variant="body2" underline={"none"} className={classes.helpLink}>
              {createNameFromEmail(userContext.user.email)}
            </Link>
            {userContext.user.id !== "none" && (
              <>
                <IconButton
                  aria-label="Profile dropdown"
                  className={classes.downArrowToolBar}
                  onClick={(event) => setLogoutAnchorEl(event.currentTarget)}
                >
                  <KeyboardArrowDownIcon />
                </IconButton>
                <Menu anchorEl={logoutAnchorEl} keepMounted open={Boolean(logoutAnchorEl)}>
                  <MenuItem onClick={() => handleLogout()}>Log out</MenuItem>
                </Menu>
              </>
            )}
          </ListItem>
        </List>
        <IconButton className={classes.menuIcon} onClick={() => setIsMenuOpened(true)}>
          <MenuIcon fontSize={"large"} />
        </IconButton>
        <SwipeableDrawer
          disableSwipeToOpen={true}
          anchor={"right"}
          open={isMenuOpened}
          onClose={() => setIsMenuOpened(false)}
          onOpen={() => setIsMenuOpened(true)}
        >
          <List component="nav" className={classes.mobileMenu}>
            <ListItem
              className={classes.menuListItem}
              button
              onClick={() => setIsChooseCurrencyOpen(!isChooseCurrencyOpen)}
            >
              <AttachMoney className={classes.semanticIcons} />
              {currency}
              <Box className={classes.displayRight}>{isChooseCurrencyOpen ? <ExpandLess /> : <ExpandMore />}</Box>
            </ListItem>
            <Collapse in={isChooseCurrencyOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={() => setCurrency("USD")}>
                  <ListItemText classes={{ primary: classes.nestedText }} primary="USD" />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => setCurrency("EURO")}>
                  <ListItemText classes={{ primary: classes.nestedText }} primary="EURO" />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => setCurrency("UAH")}>
                  <ListItemText classes={{ primary: classes.nestedText }} primary="UAH" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem
              className={classes.menuListItem}
              button
              onClick={() => setIsChooseLanguageOpen(!isChooseLanguageOpen)}
            >
              <Language className={classes.semanticIcons} />
              {language}
              <Box className={classes.displayRight}>{isChooseLanguageOpen ? <ExpandLess /> : <ExpandMore />}</Box>
            </ListItem>
            <Collapse in={isChooseLanguageOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={() => setLanguage("ENG")}>
                  <ListItemText classes={{ primary: classes.nestedText }} primary="English" />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => setLanguage("RUS")}>
                  <ListItemText classes={{ primary: classes.nestedText }} primary="Russian" />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => setLanguage("UKR")}>
                  <ListItemText classes={{ primary: classes.nestedText }} primary="Ukrainian" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button>
              <HelpOutline className={classes.semanticIcons} />
              Help
            </ListItem>
            <ListItem button onClick={() => setIsLogoutOpen(!isLogoutOpen)}>
              <Avatar alt="user name" className={classes.avatar} />
              {createNameFromEmail(userContext.user.email)}
              <Box className={classes.displayRight}>{isLogoutOpen ? <ExpandLess /> : <ExpandMore />}</Box>
            </ListItem>
            <Collapse in={isLogoutOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={() => setLanguage("ENG")}>
                  <ExitToApp fontSize={"small"} className={classes.exitIcon} />
                  <ListItemText classes={{ primary: classes.nestedTextLogout }} primary="Logout" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </SwipeableDrawer>
      </Box>
    </AppBar>
  )
}
export default NavigationBar
