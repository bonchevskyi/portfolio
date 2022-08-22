import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";
import {
  AboutMain,
  Body,
  Description,
  Line,
  LineCircle,
  LineLine,
  Image,
} from "./About.styled";

import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  return (
    <AboutMain id="about" style={{ backgroundColor: theme.secondary }}>
      <Line>
        <LineCircle style={{ backgroundColor: theme.primary }}></LineCircle>
        <LineCircle style={{ backgroundColor: theme.primary }}></LineCircle>
        <LineLine style={{ backgroundColor: theme.primary }}></LineLine>
      </Line>
      <Body>
        <Description>
          <h2 style={{ color: theme.primary }}>{t("about.title")}</h2>
          <p style={{ color: theme.tertiary80 }}>
            {t("about.description1")}
            <br />
            <br />
            {t("about.description2")}
          </p>
        </Description>
        <Image>
          <img
            src={aboutData.image === 2 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
          />
        </Image>
      </Body>
    </AboutMain>
  );
}

export default About;
