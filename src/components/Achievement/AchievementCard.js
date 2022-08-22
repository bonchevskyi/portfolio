import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AiOutlineFolder } from "react-icons/ai";

import {
  Card,
  CardContent,
  CardDetails1,
  CardDetails2,
  CardField,
  CardImg,
} from "./Achievement.styled";

function AchievementCard({ id, title, details, date, field, image }) {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles((t) => ({
    achievementCard: {
      backgroundColor: theme.primary30,
      "&:hover": {
        backgroundColor: theme.primary50,
      },
    },
  }));

  const classes = useStyles();
  return (
    <Fade bottom>
      <Card key={id} className={classes.achievementCard}>
        <CardContent>
          <CardDetails1>
            <h2 style={{ color: theme.tertiary }}>{title}</h2>
            <p style={{ color: theme.tertiary80 }}>{details}</p>
          </CardDetails1>
          <CardDetails2 style={{ color: theme.primary }}>
            <h5>{date}</h5>
            <CardField>
              <AiOutlineFolder />
              <h5>{field}</h5>
            </CardField>
          </CardDetails2>
        </CardContent>
        <CardImg>
          <img src={image} alt="" />
        </CardImg>
      </Card>
    </Fade>
  );
}

export default AchievementCard;
