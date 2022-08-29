import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { headerData } from "../../data/headerData";
import { socialsData } from "../../data/socialsData";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import {
  Container,
  ContainerLeft,
  LandingMain,
  ContentLeft,
  ContentRight,
  ContainerRight,
  ButtonContainer,
  Image,
  Social,
} from "./Landing.styled";

function Landing() {
  const { t } = useTranslation();
  const { theme, drawerOpen } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "160px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "160px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  return (
    <LandingMain id="home">
      <Container>
        <ContainerLeft style={{ backgroundColor: theme.primary }}>
          <ContentLeft>
            {socialsData.github && (
              <a href={socialsData.github} target="_blank" rel="noreferrer">
                <Social>
                  <FaGithub
                    style={{ color: theme.secondary }}
                    aria-label="GitHub"
                  />
                </Social>
              </a>
            )}
            {socialsData.linkedIn && (
              <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                <Social>
                  <FaLinkedin
                    style={{ color: theme.secondary }}
                    aria-label="LinkedIn"
                  />
                </Social>
              </a>
            )}
          </ContentLeft>
        </ContainerLeft>
        <Image
          src={headerData.image}
          alt=""
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />

        <ContainerRight style={{ backgroundColor: theme.secondary }}>
          <ContentRight style={{ color: theme.tertiary }}>
            <h6>{t("header.title")}</h6>
            <h1>{t("header.name")}</h1>
            <p>{t("header.desciption")}</p>

            <ButtonContainer>
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes.resumeBtn}>
                    {t("header.download")}
                  </Button>
                </a>
              )}
              <Link to="/#contacts" smooth={true} spy={true} duration={1000}>
                <Button className={classes.contactBtn}>
                  {t("header.contact")}
                </Button>
              </Link>
            </ButtonContainer>
          </ContentRight>
        </ContainerRight>
      </Container>
    </LandingMain>
  );
}

export default Landing;
