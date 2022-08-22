import React, { useContext, useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Fade from "react-reveal/Fade";
import { IoMenuSharp, IoHomeSharp } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { BsFillGearFill } from "react-icons/bs";
import { MdPhone, MdMenu } from "react-icons/md";
import { FaUser, FaFolderOpen } from "react-icons/fa";

//import Drawer from "@material-ui/core/Drawer";
import { MdClose } from "react-icons/md";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Switch from "react-switch";

//NEW NAV
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//translation
import { useTranslation } from "react-i18next";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { ThemeContext } from "../../contexts/ThemeContext";
import {
  Container,
  DrawerDiv,
  LinkContainer,
  NavbarMain,
  NavButton,
  NavIcon,
  NavToolbar,
  NavButtonsDiv,
  AppBarStyled,
  ThemeButton,
  SettingsDiv,
  ThemeIcon,
  DrawerListItem,
  DrawerSettingsDiv,
  DrawerTypography,
} from "./Navbar.styled";
//import { Link } from "react-router-dom";
import { Link } from "react-scroll";

import { themeData } from "src/data/themeData";
import { makeStyles } from "@material-ui/core/styles";

function Navbar() {
  const { t } = useTranslation();
  const drawerWidth = 220;

  const navItems = t("navbar.data", {
    returnObjects: true,
  });

  //const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    //console.log("OPENING DRAWER!", mobileOpen);
    setMobileOpen(!mobileOpen);
  };

  const toggleTheme = () => {
    if (theme.type === "dark") {
      setTheme(themeData.theme[1]);
      localStorage.setItem("themeRB", JSON.stringify("light"));
    } else if (theme.type === "light") {
      setTheme(themeData.theme[0]);
      localStorage.setItem("themeRB", JSON.stringify("dark"));
    }
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const { theme, setTheme, setHandleDrawer } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const useStyles = makeStyles((t) => ({
    boxApp: {
      display: "flex",
      flexGrow: 1,
      color: theme.secondary,
    },
    appBar: {
      fontSize: "3rem",
      background: "none",
      flexDirection: "row",
    },
    toolBar: {
      background: "none",
    },
    drawerIcon: {
      background: "red",
      color: "red",
      position: "fixed",
      [t.breakpoints.down("lg")]: {
        display: "none",
      },
    },
    navMenu: {
      fontSize: "2.5rem",
      color: theme.tertiary,
      cursor: "pointer",
      transform: "translateY(-10px)",
      transition: "color 0.3s",
      position: "fixed",
      top: "30px",
      right: "30px",
      "&:hover": {
        color: theme.primary,
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
      [t.breakpoints.down("xs")]: {
        fontSize: "2rem",
      },
    },
    MuiDrawer: {
      padding: "0em 1.8em",
      width: "14em",
      fontFamily: "var(--primaryFont)",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      overflow: "hidden",
      borderTopLeftRadius: "40px",
      borderBottomLeftRadius: "40px",

      [t.breakpoints.down("sm")]: {
        width: "12em",
      },
    },
    closebtnIcon: {
      fontSize: "2rem",
      fontWeight: "bold",
      cursor: "pointer",
      color: theme.primary,
      position: "absolute",
      right: 40,
      top: 40,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.tertiary,
      },
      [t.breakpoints.down("sm")]: {
        right: 20,
        top: 20,
      },
    },
    drawerItem: {
      margin: "2rem auto",
      borderRadius: "78.8418px",
      background: theme.secondary,
      color: theme.primary,
      width: "85%",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      padding: "0 30px",
      boxSizing: "border-box",
      border: "2px solid",
      borderColor: theme.primary,
      transition: "background-color 0.2s, color 0.2s",
      "&:hover": {
        background: theme.primary,
        color: theme.secondary,
      },
      [t.breakpoints.down("sm")]: {
        width: "100%",
        padding: "0 25px",
        height: "55px",
      },
    },
    drawerLinks: {
      fontFamily: "var(--primaryFont)",
      width: "50%",
      fontSize: "1.3rem",
      fontWeight: 600,
      [t.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
      },
    },
  }));

  const classes = useStyles();

  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  const drawer = (
    <Box
      //onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      position="absolute"
    >
      <DrawerTypography variant="h6">RB</DrawerTypography>

      {/* <Divider /> */}
      <List>
        {navItems.map((item) => (
          <Link
            to={item.link}
            key={item.name}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <DrawerListItem
              //onClick={handleDrawerToggle}
              key={item.name}
              sx={{
                background: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.primary}`,
                "&:hover": {
                  color: theme.secondary,
                  background: theme.tertiary,
                  border: `3px solid ${theme.tertiary}`,
                },
              }}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </DrawerListItem>
          </Link>
        ))}
      </List>
      <DrawerSettingsDiv>
        <LanguageSelect />
        <Switch
          onChange={toggleTheme}
          checked={theme.type === "dark"}
          onColor={theme.primary}
          onHandleColor={theme.secondary}
          offColor={theme.tertiary}
          offHandleColor={theme.secondary}
          boxShadow="0"
          activeBoxShadow="0"
          height={20}
          width={60}
          uncheckedIcon={
            <ThemeIcon>
              <MdLightMode color="white" />
            </ThemeIcon>
          }
          checkedIcon={
            <ThemeIcon>
              <MdDarkMode color="white" />
            </ThemeIcon>
          }
        />
      </DrawerSettingsDiv>
    </Box>
  );

  return (
    <NavbarMain>
      <Container>
        <h1 style={{ color: theme.secondary }}>RB</h1>
      </Container>

      <Box>
        <AppBarStyled
          //style={{ background: "transparent" }}
          component="nav"
          elevation={0}
        >
          <Toolbar className={classes.toolBar}>
            {/* <NavToolbar className={classes.boxApp}></NavToolbar> */}

            <NavButtonsDiv>
              {navItems.map((item) => (
                <Link
                  to={item.link}
                  key={item.name}
                  spy={true}
                  smooth={true}
                  duration={1000}
                >
                  <NavButton
                    sx={{
                      background: theme.secondary,
                      color: theme.tertiary,
                      border: `3px solid ${theme.primary}`,
                      "&:hover": {
                        color: theme.secondary,
                        background: theme.tertiary,
                        border: `3px solid ${theme.tertiary}`,
                      },
                    }}
                    key={item.name}
                  >
                    {item.name}
                  </NavButton>
                </Link>
              ))}
            </NavButtonsDiv>
            <NavIcon
              style={{ color: theme.tertiary }}
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MdMenu />
            </NavIcon>
            <SettingsDiv>
              <LanguageSelect />
              <Switch
                onChange={toggleTheme}
                checked={theme.type === "dark"}
                onColor={theme.primary}
                onHandleColor={theme.secondary}
                offColor={theme.tertiary}
                offHandleColor={theme.secondary}
                boxShadow="0"
                activeBoxShadow="0"
                height={20}
                width={60}
                uncheckedIcon={
                  <ThemeIcon>
                    <MdLightMode color="white" />
                  </ThemeIcon>
                }
                checkedIcon={
                  <ThemeIcon>
                    <MdDarkMode color="white" />
                  </ThemeIcon>
                }
              />
            </SettingsDiv>
          </Toolbar>
        </AppBarStyled>

        <Box component="nav">
          <Drawer
            variant="temporary"
            anchor="right"
            classes={{ paper: classes.MuiDrawer }}
            className="drawer"
            disableScrollLock={true}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              "& .MuiDrawer-paper": {
                background: theme.secondary,
                color: theme.tertiary,
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>

      {/* <DrawerDiv></DrawerDiv> */}
    </NavbarMain>
  );
}

export default Navbar;
