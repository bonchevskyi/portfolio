import React, { useContext } from "react";
import Marquee from "react-fast-marquee";
import SkillBar from "react-skillbars";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { skillsData } from "../../data/skillsData";
import { skillsImage } from "../../utils/skillsImage";
import {
  Container,
  Header,
  SkillsMain,
  Scroll,
  Box,
  SkillBox,
  SkillsTech,
  ScrollDiv,
  SkillsPersonal,
} from "./Skills.styled";

function Skills() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const skillsDataPersonal = t("skills.personal", {
    returnObjects: true,
  });

  const half = Math.ceil(skillsDataPersonal.length / 2);
  const leftSide = skillsDataPersonal.slice(0, half);
  const rightSide = skillsDataPersonal.slice(half);

  return (
    <SkillsMain id="skills" style={{ backgroundColor: theme.secondary }}>
      <Header>
        <h2 style={{ color: theme.primary }}>{t("skills.title")}</h2>
      </Header>

      <Container>
        <Fade bottom>
          <ScrollDiv>
            <h2 style={{ color: theme.primary }}>{t("skills.titleT")}</h2>
            <SkillsTech>
              {skillsData.map((skill, id) => (
                <SkillBox
                  key={id}
                  style={{
                    backgroundColor: theme.secondary,
                    boxShadow: `0px 0px 30px ${theme.primary30}`,
                  }}
                >
                  <img src={skillsImage(skill)} alt={skill} />
                  <h3 style={{ color: theme.tertiary }}>{skill}</h3>
                </SkillBox>
              ))}
            </SkillsTech>
          </ScrollDiv>

          <ScrollDiv>
            <h2 style={{ color: theme.primary }}>{t("skills.titleP")}</h2>
            <SkillsPersonal>
              <ul>
                {leftSide.map((skill, id) => (
                  <h3
                    style={{
                      color: theme.tertiary,
                      boxShadow: `0px 0px 30px ${theme.primary30}`,
                    }}
                    key={id}
                  >
                    {skill}
                  </h3>
                ))}
              </ul>
              <ul>
                {rightSide.map((skill, id) => (
                  <h3
                    style={{
                      color: theme.tertiary,
                      boxShadow: `0px 0px 30px ${theme.primary30}`,
                    }}
                    key={id}
                  >
                    {skill}
                  </h3>
                ))}
              </ul>
            </SkillsPersonal>
          </ScrollDiv>
        </Fade>
      </Container>
    </SkillsMain>
  );
}

export default Skills;
