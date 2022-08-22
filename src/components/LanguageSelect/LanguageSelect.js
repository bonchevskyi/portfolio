import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import {
  SelectButton,
  SelectList,
  SelectPopover,
  SelectListItem,
} from "./LanguageSelect.styled";

import { MdKeyboardArrowDown } from "react-icons/md";
//import Button from "@mui/material/Button";
//import Popover from "@mui/material/Popover";
import { Popover } from "@material-ui/core";

import { ThemeContext } from "../../contexts/ThemeContext";

import { makeStyles } from "@material-ui/core/styles";

const languageMap = {
  en: { label: "English", short: "EN", flag: "gb", active: true },
  pl: { label: "Polski", short: "PL", flag: "pl", active: false },
  ua: { label: "Українська", short: "UA", flag: "ua", active: false },
};

const LanguageSelect = () => {
  //const selected =  localStorage.getItem("i18nextLng") ||  "en" || i18next.language;
  const selected = i18next.resolvedLanguage;
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const [menuAnchor, setMenuAnchor] = useState(null);

  const useStyles = makeStyles((t) => ({
    list: {
      backgroundColor: "red",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <SelectButton
        onClick={({ currentTarget }) => setMenuAnchor(currentTarget)}
        style={{
          background: theme.secondary,
          color: theme.tertiary,
          border: `3px solid ${theme.primary}`,
          "&:hover": {
            //color: theme.tertiary,
          },
        }}
      >
        {/* {languageMap[selected].label} */}
        {languageMap[selected].short}
        <span className={`fi fi-${languageMap[selected].flag}`}></span>
        {/* <MdKeyboardArrowDown fontSize="large" /> */}
      </SelectButton>
      <Popover
        open={!!menuAnchor}
        anchorEl={menuAnchor}
        onClose={() => setMenuAnchor(null)}
        disableScrollLock={true}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <>
          <SelectList
            disablePadding
            style={{
              backgroundColor: theme.primary,
            }}
          >
            {/* <ListSubheader>{t("select_language")}</ListSubheader> */}
            {Object.keys(languageMap)?.map((item) => (
              <SelectListItem
                button
                key={item}
                style={{
                  background: theme.secondary,
                  color: theme.tertiary,
                  border: `3px solid ${theme.primary}`,
                }}
                onClick={() => {
                  i18next.changeLanguage(item);
                  setMenuAnchor(null);
                }}
              >
                {languageMap[item].short}
                <span className={`fi fi-${languageMap[item].flag}`}></span>
              </SelectListItem>
            ))}
          </SelectList>
        </>
      </Popover>
    </>
  );
};

export default LanguageSelect;
