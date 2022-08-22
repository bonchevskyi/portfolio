import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaPlay, FaCode } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import {
  Content,
  Description,
  Showcase,
  SingleProjectMain,
  Technologies,
} from "./SingleProject.styled";

function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <SingleProjectMain key={id} style={{ backgroundColor: theme.primary400 }}>
        <Content>
          <h2
            id={name.replace(" ", "-").toLowerCase()}
            style={{ color: theme.tertiary }}
          >
            {name}
          </h2>
          <img src={image} alt={name} />
          <Showcase>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-demo`}
            >
              <FaPlay
                id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                className={classes.icon}
                aria-label="Demo"
              />
            </a>
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(" ", "-").toLowerCase()}-code`}
                className={classes.icon}
                aria-label="Code"
              />
            </a>
          </Showcase>
        </Content>
        <Description
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
        >
          {desc}
        </Description>
        <Technologies
          style={{
            background: theme.secondary,
            color: theme.tertiary80,
          }}
        >
          {tags.map((tag, id) => (
            <span key={id}>{tag}</span>
          ))}
        </Technologies>
      </SingleProjectMain>
    </Fade>
  );
}

export default SingleProject;
