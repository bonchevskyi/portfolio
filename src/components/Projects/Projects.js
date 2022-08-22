import React, { useContext } from "react";
import SingleProject from "./SingleProject/SingleProject";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { HiArrowRight } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import {
  Body,
  BodyContainer,
  Header,
  ProjectsMain,
  ViewAll,
} from "./Projects.styled";

function Projects() {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  const projectsData = t("projects.data", {
    returnObjects: true,
  });

  return (
    <>
      {projectsData.length > 0 && (
        <ProjectsMain
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <Header>
            <h1 style={{ color: theme.primary }}>{t("projects.title")}</h1>
          </Header>
          <Body>
            <BodyContainer>
              {projectsData.slice(0, 4).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.id}
                  name={project.projectName}
                  desc={project.projectDesc}
                  tags={project.tags}
                  code={project.code}
                  demo={project.demo}
                  image={project.image}
                />
              ))}
            </BodyContainer>

            {projectsData.length > 3 && (
              <ViewAll>
                <Link to="/projects">
                  <button className={classes.viewAllBtn}>
                    {t("projects.viewAll")}
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </ViewAll>
            )}
          </Body>
        </ProjectsMain>
      )}
    </>
  );
}

export default Projects;
