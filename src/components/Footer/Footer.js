import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import { FooterMain } from "./Footer.styled";

function Footer() {
  const shortname = (name) => {
    if (name.length > 10) {
      return name.split(" ")[0];
    } else {
      return name;
    }
  };

  const { theme } = useContext(ThemeContext);

  return (
    <FooterMain style={{ backgroundColor: theme.secondary }}>
      <p style={{ color: theme.tertiary }}>
        Made with
        <span style={{ color: theme.primary, margin: "0 0.5rem -1rem 0.5rem" }}>
          ❤
        </span>
        by {shortname(headerData.name)}
      </p>
    </FooterMain>
  );
}

export default Footer;
