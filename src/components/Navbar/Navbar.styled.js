import styled from "styled-components";
import { device } from "src/devices";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

export const NavbarMain = styled.div`
  position: absolute;
  background-color: transparent;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 3rem;
  margin: 0;
  /* position: fixed; */

  @media (max-width: 1100px) {
    padding: 0;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
    padding: 0;
    margin-top: 0rem;
  }

  h1 {
    font-family: "Kaushan Script";
    font-weight: bold;
    margin-top: 50px;
    padding: 5px;
    margin: 0;
    margin-left: 3rem;
    border-bottom-width: 5px;
    border-bottom-style: solid;
    font-size: 2.5rem;
    user-select: none;
    text-align: center;
    align-items: center;
    border-radius: 20%;

    @media (max-width: 1100px) {
      font-size: 2.2rem;
      margin-left: 1rem;
    }

    @media (max-width: 600px) {
      font-size: 2rem;
      margin-left: 1rem;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {
      font-size: 1.5rem;
      margin-left: 1rem;
    }
  }
`;

export const LinkContainer = styled.div`
  margin-top: 5rem;

  @media (max-width: 800px) {
    margin-top: 3rem;
  }
`;

export const NavToolbar = styled.div`
  font-size: 2.5rem;
  display: flex;
  flex-grow: 1;
`;

export const AppBarStyled = styled(AppBar)`
  && {
    background-color: transparent;

    @media (max-width: 1920px) {
      position: absolute;
    }
    @media (max-width: 1912px) {
      position: fixed;
    }
  }
`;

export const NavButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: 4rem;

  @media (max-width: 1920px) {
    display: flex;
  }
  @media (max-width: 1912px) {
    display: none;
  }
`;

export const DrawerTypography = styled(Typography)`
  && {
    font-family: "Kaushan Script";
    font-weight: bold;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    user-select: none;
    text-align: center;
    align-items: center;
    border-radius: 20%;

    border-bottom-width: 2px;
    border-bottom-style: solid;
  }
`;

export const DrawerListItem = styled(ListItem)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 1rem 0;
    padding: 0.2rem;
    font-size: 0.8rem;
    cursor: pointer;

    @media (max-width: 800px) {
      margin: 1rem 0;
      padding: 0.2rem;
    }

    @media (max-width: 600px) {
      margin: 0 0 1rem 0;
      padding: 0;
    }
  }
`;

export const DrawerSettingsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  background: transparent;
  margin: 0 0.3rem;
  width: 100%;
`;

export const NavButton = styled(Button)`
  && {
    padding: 5px;
    font-size: 0.8rem;
    cursor: pointer;
    margin: 0.6rem;
    width: 120px;
  }
`;

export const ThemeButton = styled.button`
  font-size: 2rem;
  cursor: pointer;
  text-align: right;
  background: transparent;
  top: 0px;
  right: 0px;
`;

export const ThemeIcon = styled.button`
  display: flex;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  background: transparent;
  top: 0px;
  right: 0px;
  border: none;
`;

export const SettingsDiv = styled.div`
  height: 100vh;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 5px;
  background: transparent;
  top: 0;
  right: 0;
  margin-top: auto;
  border: none;

  @media (max-width: 1920px) {
    display: flex;
  }
  @media (max-width: 1912px) {
    display: none;
  }
`;

export const NavIcon = styled(IconButton)`
  && {
    font-size: 2rem;
    cursor: pointer;
    text-align: right;
    margin-left: auto;

    @media (max-width: 1920px) {
      display: none;
    }
    @media (max-width: 1912px) {
      display: block;
    }
  }
`;

export const Menu = styled.div`
  font-size: 2.2rem;
  margin-top: -1.5rem;

  @media (max-width: 600px) {
    color: var(--primary-2);

    &:hover {
      color: var(--primary-2);
    }
  }
`;

export const DrawerDiv = styled.div`
  &.MuiBackdrop-root {
    background: rgba(33, 33, 33, 0.15) !important;
    backdrop-filter: blur(20px) !important;
  }

  @media (max-width: 600px) {
    &.MuiDrawer-paper {
      border-radius: 0 !important;
    }
  }
`;
