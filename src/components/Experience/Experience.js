import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { experienceData } from "../../data/experienceData";
import ExperienceCard from "./ExperienceCard";
import { Body, Description, ExperienceMain, Image } from "./Experience.styled";

function Experience() {
  const { theme } = useContext(ThemeContext);
  return (
    <ExperienceMain
      id="experience"
      style={{ backgroundColor: theme.secondary }}
    >
      <Body>
        <Image>
          <img src={theme.expimg} alt="" />
        </Image>
        <Description>
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {experienceData.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.jobtitle}
              company={exp.company}
              startYear={exp.startYear}
              endYear={exp.endYear}
            />
          ))}
        </Description>
      </Body>
    </ExperienceMain>
  );
}

export default Experience;
