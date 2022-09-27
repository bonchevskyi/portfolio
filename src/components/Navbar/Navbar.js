import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { Link } from "react-scroll";

//nav mui items
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

import { useTranslation } from "react-i18next";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { ThemeContext } from "../../contexts/ThemeContext";
import { MdMenu } from "react-icons/md";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import {
  Container,
  NavbarMain,
  NavButton,
  NavIcon,
  NavButtonsDiv,
  AppBarStyled,
  SettingsDiv,
  ThemeIcon,
  DrawerListItem,
  DrawerSettingsDiv,
  DrawerTypography,
} from "./Navbar.styled";

import { themeData } from "src/data/themeData";
import { makeStyles } from "@material-ui/core/styles";

function Navbar() {
  const { t } = useTranslation();
  const drawerWidth = 220;

  const navItems = t("navbar.data", {
    returnObjects: true,
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
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

  const { theme, setTheme } = useContext(ThemeContext);

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
      borderRadius: "75px",
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

  const drawer = (
    <Box sx={{ textAlign: "center" }} position="absolute">
      <DrawerTypography variant="h6">RB</DrawerTypography>
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
        <AppBarStyled component="nav" elevation={0}>
          <Toolbar className={classes.toolBar}>
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
    </NavbarMain>
  );
}

export default Navbar;
