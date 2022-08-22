import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import EducationCard from "./EducationCard";
import { EducationMain, Body, Description, Image } from "./Education.styled";

import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const educationData = t("education.data", {
    returnObjects: true,
  });

  return (
    <EducationMain id="education" style={{ backgroundColor: theme.secondary }}>
      <Body>
        <Description>
          <h1 style={{ color: theme.primary }}>{t("education.title")}</h1>
          {educationData.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.institution}
              course={edu.course}
              startYear={edu.startYear}
              endYear={edu.endYear}
            />
          ))}
        </Description>
        <Image>
          <img src={theme.eduimg} alt="" />
        </Image>
      </Body>
    </EducationMain>
  );
}

export default Education;
